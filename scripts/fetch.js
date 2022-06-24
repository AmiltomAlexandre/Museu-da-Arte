const showLivros = (Livros) => {
    console.log('cheguei no show Livros');
    console.log(Livros);

    console.log(Livros.length);

    for(let i = 0; i < Livros.length; i++){
        console.log(Livros[i].nomeLivro);

        let tagDivCard = document.createElement('div'); // criar uma div
        tagDivCard.setAttribute('class', ' mx-auto');
        tagDivCard.setAttribute('style' ,'width: 400px; margin-bottom:20px; margin-top:20px;');

        let tagImage = document.createElement('img');
        tagImage.setAttribute('class', 'card-img-top');
        tagImage.setAttribute('style' ,'width: 400px; height:220px; border-radius: 20px;');
        tagImage.setAttribute('src', Livros[i].urlImagem);
        tagImage.setAttribute('alt', Livros[i].nomeLivro);

        tagDivCard.appendChild(tagImage);

        let tagDivCardBody = document.createElement('div');
        tagDivCardBody.setAttribute('class', 'card-body');
        tagDivCard.appendChild(tagDivCardBody);

        let tagH3 = document.createElement('h3');
        tagH3.setAttribute('class', 'card-title text-center');
        let textNode = document.createTextNode(Livros[i].nomeLivro);
        tagH3.appendChild(textNode);
        tagDivCardBody.appendChild(tagH3);

        let tagh5 = document.createElement('h5');
        tagh5.setAttribute('class', 'card-text text-center');
        textNode = document.createTextNode(Livros[i].nomeAutor);
        tagh5.appendChild(textNode);
        tagDivCardBody.appendChild(tagh5);
        
        
        let tagP = document.createElement('p');
        tagP.setAttribute('class', 'card-text text-center');
        textNode = document.createTextNode('Pag: '+ Livros[i].numeroPaginas);
        tagP.appendChild(textNode);
        tagDivCard.appendChild(tagP);


        console.log(tagDivCard);

        div = document.getElementById('livros');
        div.appendChild(tagDivCard);
        

    }
}

const fetchLivros = () => {
    console.log("Cheguei na script para carregar os livros");
    //carregar os produtos do banco de dados
    //Entrega da api http://localhost:8000/GetLivros.php

    fetch('http://localhost:8000/GetLivros.php')
    .then((Response) => {
        if (Response.status >= 200 && Response.status < 300){
            return Response.json()
        }
        throw new Error(Response.statusText);
    })
    .then((Livros) => {
        console.log (Livros)
        showLivros(Livros);

    })
    .catch((error) => {
        console.log(error);
    });
}