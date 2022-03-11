
var elList = document.querySelector("#list");

for (const item of pokemons) {
    var pokemonItem = document.createElement("LI");
    pokemonItem.setAttribute("class", "d-flex flex-column align-items-center col-3 mb-4")

    var pokemonDiv = document.createElement("DIV");
    pokemonDiv.setAttribute("class", "bg-white align-content-center py-0 px-5 rounded-3 shadow shadov")

    var pokemonImg = document.createElement("IMG");
    pokemonImg.setAttribute("class", "d-block");
    pokemonImg.setAttribute("src", item.img);
    pokemonImg.setAttribute("alt", "image");
    pokemonImg.setAttribute("width", "200");
    pokemonImg.setAttribute("height", "200");

    var pokemonH3 = document.createElement("H3");
    pokemonH3.setAttribute("class", "mb-3");
    pokemonH3.textContent = item.name;

    var pokemonH4 = document.createElement("H4");
    pokemonH4.setAttribute("class", "h6");
    pokemonH4.textContent = item.type;

    var pokemonP1 = document.createElement("P");
    pokemonP1.classList.add("h6");
    pokemonP1.textContent = item.weight;

    var pokemonP2 = document.createElement("P");
    pokemonP2.classList.add("h6");
    pokemonP2.textContent = item.height;

    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonH3);
    pokemonDiv.appendChild(pokemonH4);
    pokemonDiv.appendChild(pokemonP1);
    pokemonDiv.appendChild(pokemonP2);

    pokemonItem.appendChild(pokemonDiv)
    elList.appendChild(pokemonItem)


}