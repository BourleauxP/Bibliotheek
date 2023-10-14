/* 
maak een class van boeken waar je een titel, auteur en aantal pagina's in kan zetten.
maak een class van bibliotheek die een owner heeft en waar je de totale aantal pagina's kan opvragen, de totale aantal boeken en de gemiddelde aantal pagina's per boek.
je kan ook een boek toevoegen, en een boek verwijderen op basis van de titel.
De title is benoemd zoals hieronder, de author is een random string en de pages is een random nummer tussen 50 en 1000.

Voorbeeld:
Library {
  owner: 'Jorne',
  books: [
    Book { title: 'title-1', author: 'szh7i6vh3fp', pages: 836 },
    Book { title: 'title-2', author: '7yl4xwhk35j', pages: 170 },
    Book { title: 'title-4', author: 'romaywrg3w', pages: 756 },
    Book { title: 'title-5', author: 'wfa463vcheb', pages: 439 },
    Book { title: 'title-6', author: 'nz5ycbi7ifb', pages: 954 },
    Book { title: 'title-7', author: 'v6m7v5fx9k', pages: 417 },
    Book { title: 'title-8', author: 'ibdz3dynf8j', pages: 748 },
    Book { title: 'title-9', author: 'wzcicfyefaq', pages: 618 },
    Book { title: 'title-10', author: '5t4h5j96vda', pages: 655 }
  ]
}
There are 10 books in the library of Jorne
The average pages in the libaray are 577.7 pages
The total of pages are 4861

*/

// toch per deel een class maken

// welke boeken?
class books {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// van wie zijn de boeken?
class bibliotheek {
  constructor(owner) {
    this.owner = owner;
    this.books = [];
  }

  // voor alle vragen die je hebt een onderdeel maken
  bookToevoegen(title) {
    const author = this.randomAuthor();
    const pages = Math.floor(Math.random() * 951) + 50; // rabdom tss 0 en 1 * 951 (minimum 50 pagina's -> verchil met totaal 1000)
    const newBook = new books(title, author, pages); //normaal hiet gewoon autheur en blz invoegen
    this.books.push(newBook); // nieuwe boek toevoegen aan de array in de class Bibliotheek
  }

  //boekVerwijderen(title);

  booksTotal() {
    return this.books.length; // vanuit de bibliotheek de lijst van boeken gaan tellen
  }

  paginasTotal() {
    let total = 0;
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (book.pages) {
        total += book.pages;
      }
    }
    return total;
  }

  pagesGemiddeld() {
    return Math.round(this.paginasTotal() / this.books.length); //het vorige deel delen door het aantal boeken in de lijst
  }

  randomAuthor() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let auteur = "";
    for (let i = 0; i < 10; i++) {
      auteur += letters[Math.floor(Math.random() * letters.length)];
    }
    return auteur;
  }
} // alles wat met 1 class te maken heeft moet binnen die akkolades staan!

// eigenaars boeken aanmaken
const bibliotheekPascal = new bibliotheek("Pascal");
const bibliotheekIris = new bibliotheek("Iris");

// boeken aan een speciefieke bibliotheek toevoegen
bibliotheekPascal.bookToevoegen("javascript");
bibliotheekIris.bookToevoegen("Het Menselijk Lichaam");
bibliotheekPascal.bookToevoegen("css");
bibliotheekPascal.bookToevoegen("git");
bibliotheekPascal.bookToevoegen("codewars");
bibliotheekPascal.bookToevoegen("terminal");
bibliotheekPascal.bookToevoegen("VisualStudioCode");
bibliotheekPascal.bookToevoegen("Node");
bibliotheekPascal.bookToevoegen("database");
bibliotheekPascal.bookToevoegen("HTML");
bibliotheekPascal.bookToevoegen("api");
bibliotheekPascal.bookToevoegen("sync");

//vragen wat je nodig hebt?
console.log(
  "aantal boeken in de bib van Pascal",
  bibliotheekPascal.booksTotal()
);
console.log("aantal boeken in de bib van Iris", bibliotheekIris.booksTotal());

console.log(
  "totaal aantal blz boeken Pascal",
  bibliotheekPascal.paginasTotal()
);

console.log(
  "het gemiddelde aantal blz voor Pascal is:",
  bibliotheekPascal.pagesGemiddeld()
);

console.log("Pascal heeft volgende boeken:", bibliotheekPascal);
console.log("Iris heeft volgende boeken", bibliotheekIris);
