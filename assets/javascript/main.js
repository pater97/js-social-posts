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
        immagine: `https://unsplash.it/300/300?image=`,
        numeLike: `10`
    },
    {
        id: `vegeta`,
        iconImage: `https://gogomagazine.it/wp-content/uploads/2020/06/Veg-1280x720.jpg`,
        contenuto: `Sono il più forte! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `5 giorni fa`,
        immagine: `https://unsplash.it/300/300?image=`,
        numeLike: `20`
    },
    {
        id: `crilin`,
        iconImage: `https://www.dragonballz.it/wp-content/uploads/2018/06/www-dragon-ball-z-crilin.jpg`,
        contenuto: `Aiuto Gokuuu! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `1 mese fa`,
        immagine: `https://unsplash.it/300/300?image=`,
        numeLike: `15`
    },
    {
        id: `junior`,
        iconImage: `https://4.bp.blogspot.com/-v0d4F7hBRSM/VZr2APQ4kiI/AAAAAAAAHBw/Am0_bVTmo3c/s1600/dbz5.png`,
        contenuto: `Ma io sono fortissimo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error maxime aperiam voluptas dolor officiis voluptatibus quasi, harum, magni vitae obcaecati consectetur corporis quam sequi accusamus! Aspernatur quaerat at explicabo!`,
        data: `2 mesi fa`,
        immagine: `https://unsplash.it/300/300?image=`,
        numeLike: `80`
    }
]