// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

function drawBubble(str, lg){
  if(!str){return}
  let bubble = "";
  bubble += ` ${"–".repeat(lg + 2)} \n`;
  bubble += `< ${str} >\n`;
  bubble += ` ${"-".repeat(lg + 2)}`;
  console.log(bubble);

}

function drawCow(talk, lg){
  const prefix = (" ").repeat(lg + 2 - Math.round(lg / 2));
  const stucks = [
    `${talk?"\\  ^——^":"   ^——^"}\n`,
    `${talk?" \\ (oo)\________":"   (oo)\________"}\n`,
    `   (__)\\       )\\/\\\n`,
    `       ||----w |\n`,
    `       ||     ||`
  ].map((row)=> prefix + row);
console.log(stucks.join(""));

}

function cowsay() {
  // Get console argument.
  const talk = process.argv.at(2);
  // If no argument.
  if(!talk){
    console.log("No talk");
    return;
  }
  const lg = talk.length;
  drawCow(false, lg);
  setTimeout(()=>{
    drawBubble(talk,lg);
    drawCow(true, lg);
  }, 1000);
}

cowsay();
