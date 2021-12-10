// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.






const post = [
    {
      name: 'Phil Mangione',
      date: '4 mesi fa',
      text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      imageProfil:'image=15',
      image:'image=171',
      counter: 80
    },
    {
        name: 'Sofia Perlari',
        date: '2 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imageProfil:'image=16',
        image:'image=174',
        counter: 30
    },
    {
        name: 'Luca Guarnera',
        date: '12 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imageProfil:'image=17',
        image:'image=175',
        counter: 10
    },
    {
        name: 'Damiano Masci',
        date: '7 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imageProfil:'image=18',
        image:'image=176',
        counter: 20
    },
    {
        name: 'Davide Forte',
        date: '5 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imageProfil:'image=19',
        image:'image=177',
        counter: 50
    },
    {
        name: 'Miriam Antinori',
        date: '6 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        imageProfil:'image=14',
        image:'image=178',
        counter: 90
    },
];




const container = document.getElementById('container');


function printCards(array, containerpost) {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
  
      const templateDiv = `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?${obj.imageProfil}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.name}</div>
                        <div class="post-meta__time">${obj.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.text}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?${obj.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.counter}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
  
      containerpost.innerHTML += templateDiv;
      //console.log(templateDiv);
    }
}








