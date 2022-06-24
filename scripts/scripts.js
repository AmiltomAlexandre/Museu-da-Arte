const checkForm = {
    nomeLivro: false,
    nomeAutor:false,
    numeroPaginas: false,
    urlImagem: false,

}
document.getElementById('nomeLivro').addEventListener('input', function (e){
    const nomeLivro = e.target.value;
    console.log(checkForm);
    if (nomeLivro.length >= 255 || nomeLivro.length <= 3 ) {
        console.log('O nome do livro deve ter no máximo 255 caracteres.');
        document.getElementById('nomeLivro-error').style.display = "block";
        checkForm.nomeLivro = false;
    } else {
        document.getElementById('nomeLivro-error').style.display = "none";
        checkForm.nomeLivro = true;
    }
    enableButton()
});
document.getElementById('nomeAutor').addEventListener('input', function (e){
    const nomeAutor = e.target.value;
    console.log(checkForm);
    if (nomeAutor.length >= 255 || nomeAutor.length <= 3 ) {
        console.log('O nome do autor deve ter no máximo 255 caracteres.');
        document.getElementById('nomeAutor-error').style.display = "block";
        checkForm.nomeAutor = false;
    } else {
        document.getElementById('nomeAutor-error').style.display = "none";
        checkForm.nomeAutor = true;
    }
    enableButton()
});
document.getElementById('numeroPaginas').addEventListener('input', function (e){
    const numeroPaginas = e.target.value;
    console.log(checkForm);
    if(validpages(numeroPaginas)){
        console.log('O número de páginas deve ser um número.');
        document.getElementById('paginas-error').style.display = "block";
        checkForm.numeroPaginas = false;
    } else {
        document.getElementById('paginas-error').style.display = "none";
        checkForm.numeroPaginas = true;
    }
    enableButton()
});
document.getElementById('urlImagem').addEventListener('input', function (e) {
    const urlImagem = e.target.value;
    console.log(urlImagem);
    if (validURL(urlImagem)) {
        console.log('A imagem deve ser uma url');
        document.getElementById('urlImagem-error').style.display = 'block';
        checkForm.urlImagem = false;
    } else {
        document.getElementById('urlImagem-error').style.display = 'none';
        checkForm.urlImagem = true;
    }
    enableButton()
});

function validpages(p){
    let pattern = new RegExp('[0-9]');
    return !pattern.test(p);
}

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !pattern.test(str);
}

function enableButton() {
    const butcad = document.getElementById("butcad");
    if (checkForm.nomeLivro &&
        checkForm.nomeAutor &&
        checkForm.numeroPaginas &&
        checkForm.urlImagem) {
        butcad.disabled = false;
    } else {
        butcad.disabled = true;
    }
}
