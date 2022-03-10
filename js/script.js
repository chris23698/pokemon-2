let API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";
const pokemonContainer = document.querySelector(".pokemon");
const previousBTN = document.querySelector("#btn-previous")
const nextBTN = document.querySelector("#btn-next")
let API_URL_NEXT = "";
let API_URL_PREVIOUS = "";
async function getPokemonNames (){
try {
    const response = await fetch(API_URL);
    const responseJSON = await response.json();
    API_URL_NEXT = responseJSON.next;
    API_URL_PREVIOUS = responseJSON.previous;
    const pokemonData = responseJSON.results;
    pokemonContainer.innerHTML = "";
    for ( let i = 0; i < pokemonData.length; i++) {
        pokemonContainer.innerHTML += `<li class="names">${pokemonData[i].name}</li>`
    }
} catch (error) {
    console.log(error);
}
}
getPokemonNames()
let handleClickNext = function () {
   API_URL = API_URL_NEXT
   getPokemonNames()
}
nextBTN.addEventListener("click", handleClickNext)

let handleClickPrevious = function () {
   API_URL = API_URL_PREVIOUS
   getPokemonNames()
}
previousBTN.addEventListener("click", handleClickPrevious)


