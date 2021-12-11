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
      imageProfil:'',
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
        imageProfil:'',
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
        imageProfil:'',
        image:'image=178',
        counter: 90
    },
];




const container = document.getElementById('container');


function printCards(array, containerpost) {
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];

    //invocazione funzione iniziali nome
      let initials = getInitials (obj.name);
    //controllo se la imageProfil ha del contenuto
    if (obj.imageProfil == '') {
        
        const templateDiv = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <div class="profile-pic-default ">
                            <span>${initials}</span> 
                        </div>                
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
                        <a class="like-button  js-like-button"  data-postid="1">
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
        }else{
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
                              <a class="like-button  js-like-button"  data-postid="1">
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

        }
    }
}




// funzione di ricerca iniziali nome
const getInitials = (name) => {
    let init = name.split(' ');

    if (init.length > 1) {
        init = init.shift().charAt(0) + init.pop().charAt(0);
        
    }else {
        init = name.substring(0, 2);
    }

    return init.toUpperCase();
}




// invocazione funzione inserimento post
printCards(post, container);




let Button = document.querySelectorAll('.likes__cta');//tutti i bottoni
let likeButton = document.querySelectorAll('.js-likes-counter');//classe counter  
let colorButton = document.querySelectorAll('.like-button');//classe bottone








// for (let i = 0; i < Button.length; i++) {
//     const element = Button[i];    //tutti i bottoni
//     // console.log(element);
//     let likes = likeButton[i];    //tutte classi like
//     // console.log(likes);
//     let elementLike = post[i].counter;
//     // console.log(elementLike);
//     let green = colorButton[i];   //classe bottone
//     // console.log(green);
   
//     element.addEventListener('click', function(){
        

//         if(green.classList.contains('like-button--liked')){

//             likes.innerHTML = elementLike -= 1;
//             green.classList.remove('like-button--liked');

//         }else{
//             likes.innerHTML = elementLike += 1;
//             green.classList.add('like-button--liked');
//         }
        
//         console.log(elementLike);

//     });
    
// }




for (let i = 0; i < Button.length; i++) {

    Button[i].addEventListener('click', function(){

        Button[i].classList.toggle('like-button--liked');
        console.log(Button);
        if (Button[i].classList.contains('like-button--liked')) {
            likeButton[i].innerHTML = post[i].counter += 1;
            colorButton[i].classList.add('like-button--liked');
        }else{
            likeButton[i].innerHTML = post[i].counter -= 1;
            colorButton[i].classList.remove('like-button--liked');
        }

    });
    console.log(likeButton);
    
    
}


