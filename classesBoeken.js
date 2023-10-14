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
function makeidT(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeidT(5));

function makeidN(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeidN(5));

class boeken {
    constructor(owner, title, author, pages){
      this.owner = owner
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.booklist = []
    }

booklist(){
  const book = this.booklist.length + 1
  this.booklist.push(book)
}

owners(){
return this.owner + 

}
}

// boekenlijsten aanmaken - na elke aankoop
const boek1 = new boeken("Pascal", "boek-1", makeid(5), makeidN(5 ));
const boek2 = new boeken("Pascal", "boek-2", makeid(5), makeidN(5 ));
const boek3 = new boeken("Pascal", "boek-3", makeid(5), makeidN(5 ));
const boek4 = new boeken("Pascal", "boek-4", makeid(5), makeidN(5 ));
const boek5 = new boeken("Pascal", "boek-5", makeid(5), makeidN(5 ));
const boek6 = new boeken("Pascal", "boek-6", makeid(5), makeidN(5 ));
const boek7 = new boeken("Pascal", "boek-7", makeid(5), makeidN(5 ));
const boek8 = new boeken("Pascal", "boek-8", makeid(5), makeidN(5 ));
const boek9 = new boeken("Pascal", "boek-9", makeid(5), makeidN(5 ));
const boek10 = new boeken("Pascal", "boek-10", makeid(5), makeidN(5 ));
const boek11 = new boeken("Iris", "boek-11", makeid(5), makeidN(5 ));


const Pascal = new boeken("Pascal");
const Iris = new boeken("Iris");


