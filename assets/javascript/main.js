//CONSEGNA
/*
Descrizione:
Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/

//Creazione dell'array con i dati dei post all'interno
const posts = [
    {
        id: `karot`,
        iconImage: `https://gametimers.it/wp-content/uploads/2015/12/dragon-ball-super.jpg`,
        contenuto: `Ho ancora fame! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `ieri`,
        immagine: `https://images.everyeye.it/img-notizie/dragon-ball-goku-saggio-credete-perche-v3-448975-1280x720.jpg`,
        numeLike: `10`
    },
    {
        id: `vegeta`,
        iconImage: `https://gogomagazine.it/wp-content/uploads/2020/06/Veg-1280x720.jpg`,
        contenuto: `Sono il più forte! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `5 giorni fa`,
        immagine: `https://images.everyeye.it/img-notizie/dragon-ball-super-doppiatore-vegeta-sfida-coronavirus-final-flash-v3-440334.jpg`,
        numeLike: `20`
    },
    {
        id: `crilin`,
        iconImage: `https://www.dragonballz.it/wp-content/uploads/2018/06/www-dragon-ball-z-crilin.jpg`,
        contenuto: `Aiuto Gokuuu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `1 mese fa`,
        immagine: `https://nobleorderbrewing.com/img/lists/98/every-time-krillin-has-died-dragon-ball.jpg`,
        numeLike: `15`
    },
    {
        id: `junior`,
        iconImage: `https://4.bp.blogspot.com/-v0d4F7hBRSM/VZr2APQ4kiI/AAAAAAAAHBw/Am0_bVTmo3c/s1600/dbz5.png`,
        contenuto: `Ma io sono fortissimo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `2 mesi fa`,
        immagine: `https://static.miraheze.org/nonciclopediawiki/thumb/2/2d/Piccolo_partecipa_a_Chi_vuol_esser_milionario.jpeg/350px-Piccolo_partecipa_a_Chi_vuol_esser_milionario.jpeg`,
        numeLike: `80`
    }
]
//selezionare una variabile per l'inserimento html
const stamp = document.querySelector(`.container`)
//ciclare l'arrey per estrapolare i valori
for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const element = `
    <div class="card">
    <div class="icon_container">
        <img class="icon_image" onError="this.onerror=null;this.src='/images/noimage.gif';" src="${post.iconImage}"
            alt="">
        <div class="id_container">
            <h3>${post.id}</h3>
            <h6>${post.data}</h6>
        </div>
    </div>
    <div class="content">
        <p>
        ${post.contenuto}
        </p>
        <img class="post_image" src="${post.immagine}" alt="">
    </div>
    <div class="button_counter">
        <button class="like_button"><i class="fas fa-thumbs-up"></i>mi piace</button>
        <div>piace a <span>${post.numeLike}</span> persone</div>
    </div>
</div>`
    stamp.innerHTML += element
}
const likeButton = document.querySelector(`.like_button`)
likeButton.addEventListener(`click`, function () {
    likeButton.classList.add("click_btn")
})