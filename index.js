//Declamando IDs


let card = document.getElementsByClassName("section")
let nome = document.getElementsByClassName("nome")
let imagemBuscaFalhou = document.getElementById("buscaFalhou")

//Declarando os Itens

const arrayVazia = [{
    link: "https://pt.wikipedia.org/wiki/The_Owl_House",
    imagem: "casa-da-coruja.jpg",
    desenho: "A CASA CORUJA",
    temporadas: 3,
    lgbt: true,
    principais: ["Luz", " Eda", " King"]
}, {
    link: "https://pt.wikipedia.org/wiki/Adventure_Time",
    imagem: "hora-de-aventura.png",
    desenho: "HORA DE AVENTURA",
    temporadas: 10,
    lgbt: true,
    principais: ["Finn", " Jake"]


}, {
    link: "https://pt.wikipedia.org/wiki/Sailor_Moon",
    imagem: "sailor-moon.jpg",
    desenho: "SAILOR MOON",
    temporadas: 5,
    lgbt: true,
    principais: ["Usagi", " Mamoru", " Chibiusa", " Hotaru", " Rei Hino"]

}, {
    link: "https://pt.wikipedia.org/wiki/The_Marvelous_Misadventures_of_Flapjack",
    imagem: "flapjack.webp",
    desenho: "FLAPJACK",
    temporadas: 3,
    lgbt: false,
    principais: ["Flapjack", " Capitão Falange", " Bolha"]

}]

const imagemBuscaVazia = {
    nome: "busca",
    imagem: "busca-falhou.png"
}

//Adicionar desenho pelo DOM


const lista = document.querySelector(".sectionContainer")
arrayVazia.filter(desenhos => {
    function listarDesenhos() {
        lista.innerHTML += `  <section class="section">
        <aside class="imagem">
            <img class="img"  src="./img/${desenhos.imagem}" alt="">
        </aside>

        <ul class="list">
            <li class="items">
                <a class="linkwiki" href="${desenhos.link}" target="_blank" class="nome">${desenhos.desenho}</a>

            </li>
            <li class="items">
                temporadas: ${desenhos.temporadas}

            </li>
            <li class="items">
                LGBT: ${desenhos.lgbt}

            </li>
            <li class="items">
                principais: ${desenhos.principais}
            </li>

        </ul>
        
    </section>`
    }
    listarDesenhos()
})

function addBonequinha() {
    lista.innerHTML += `<aside > 
    <img style="display: none;" class="bonequinha" id="buscaFalhou" src="./img/${imagemBuscaVazia.imagem}" alt="Illustration by Fruzka from Ouch!">
</aside>`;
}
addBonequinha()



// Verificiar Array e vê se o input está correto.

function VerificaBusca(array) {

    const someBoneca = document.querySelector(".bonequinha")
    someBoneca.display = "none"
    let acheiVisivel = false;


    for (let i in array) {
        if (card[i].style.display !== "none") {
            acheiVisivel = true;
        }
    }

    if (acheiVisivel) {
        someBoneca.style.display = "none"
    } else {
        someBoneca.style.display = "block"
        alert("Desenho não encontrado :(")
    }

}





let buscar = document.getElementById("buscar");


//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function busca(array, string, event) {
    event.preventDefault()


    for (let j in array) {
        if (card[j].style.display === "none") {
            card[j].style.display = "block"
            card[j].style.display = "flex"


        }
    }


    for (let i in array) {
        if (array[i].desenho !== string.toUpperCase()) {
            card[i].style.display = "none";
        }

    }
    buscar.value = "";

    VerificaBusca(array)

}


// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média.
const mediaNum = (arrayVazia[0].temporadas + arrayVazia[1].temporadas + arrayVazia[2].temporadas + arrayVazia[3].temporadas) / 4;
console.log(`A media é: ${mediaNum}`)

//4. Conferir se todos os booleans são verdadeiros e imprimir
const lgbt = arrayVazia[0].lgbt && arrayVazia[1].lgbt && arrayVazia[2].lgbt && arrayVazia[3].lgbt;
console.log(`Todos os desenhos tem personagens LGBT? ${lgbt}`)


//5. Mostrar tudo no console e tranformar os arrays em string
for (let i in arrayVazia) {
    arrayVazia[i].principais = arrayVazia[i].principais.toString()
    console.log(arrayVazia[i])
}

