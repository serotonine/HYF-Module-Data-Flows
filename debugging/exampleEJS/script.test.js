import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ejs from "ejs";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uri = resolve(__dirname, "./script.ejs");

describe("Template script.ejs", () => {
  test("Display titles by author", async () => {
    const data = {
      books: [
        {
          author: "Albert Camus",
          books: ["L'Étranger", "La Peste", "Le Mythe de Sisyphe", "La Chute"],
        },
        {
          author: "Boualem Sansal",
          books: [
            "2084 : La Fin du monde",
            "Le Village de l'Allemand ou le Journal des frères Schiller",
            "Gouverner au nom d'Allah",
          ],
        },
        {
          author: "Yasmina Khadra",
          books: [
            "L'Attentat",
            "Les Hirondelles de Kaboul",
            "Les Sirènes de Bagdad",
          ],
        },
        { author: "Kateb Yacine", books: ["Nedjma", "Le Polygone étoilé"] },
      ],
      title: "Algerians writers",
    };

    const html = await ejs.renderFile(uri, data);

    const dom = new JSDOM(html);
    const document = dom.window.document;

    expect(html).toContain("h3");
    expect(document.querySelector("h3").textContent).toBe(data.title);
    expect(document.querySelectorAll("dt").length).toBe(4);

    expect(html).toMatchSnapshot();
  });
});
