import express from 'express';
import books from './imports/books.js'; 
const app = express();

// Configurer EJS
app.set('view engine', 'ejs');
app.set('views', './');

const booksByAuthor = books.reduce((acc, current)=>{
    const index = acc.findIndex((el) => el.author === current.author );
    //console.log(index);

  if(index<0){
   return [...acc, {author:current.author, books:[current.title]}]
  }
  acc[index].books = [...acc[index].books, current.title]
  return acc
}, []);
console.log(booksByAuthor);
app.get('/script', (req, res) => {
  res.render('script', {
    title: "Algerians books",
    books: booksByAuthor
  });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000/script');
});