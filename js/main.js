
//Galería de aspectos de personajes de un videojuego (League of Legends)
//A continuación, bundles y precios de cada uno
class skin{
    constructor(nombre, personaje, precio, bundle){
        this.nombre = nombre;
        this.personaje = personaje;
        this.precio = precio;
        this.bundle = bundle;
        this.id = uuid.v4();
    }
    //Uso del "toString" para reciclar lineas de codigo y esté más optimizado
    toString(){
        return"Personaje: " + this.personaje + " | Nombre del skin: " + this.nombre + " | Bundle: " + this.bundle + " | Precio: " + this.precio + " RP";
    }
 
}
function menorAMayor(a,b) {
    return (a.precio) - (b.precio);
}
function mayorAMenor(a,b) {
    return ((a.precio) - (b.precio)) * -1;
}

function alfabeticamente(a,b) {
    return a.personaje.localeCompare(b.personaje);
}

function porNombre(nombrePj,array){
    const skins = [];
    for(let champion of array){
        if(champion.personaje == nombrePj){
            skins.push(champion);
        }
    }
    return skins;
}

localStorage.clear();

function championsToJsonStorage(champions){
    for(let champion of champions){
        console.log(localStorage.getItem(champion.id))
        if(!localStorage.getItem(champion.id)){
            localStorage.setItem(champion.id, JSON.stringify(champion));
        }else{
            console.log(champion.personaje+" ya existe en el localStorage");
        }
    }
}

const fetchPersonajesArray = async (path, arrayCampeones) => {
    const resp = await fetch(path)
    const data = await resp.json()

    data.forEach((post) => {
        arrayCampeones.push(new skin (post.nombre, post.personaje, post.precio, post.bundle))
    })
}

//Bundle Valquirias de acero
const valquirias = [];
fetchPersonajesArray("/valquirias.json",valquirias);

//Bundle Guardianes estelares
const guardianesEstelares = [];
fetchPersonajesArray("/guardianesestelares.json",guardianesEstelares);

//Bundle Campeonato 2019
const campeonato2019 = [];
fetchPersonajesArray("/campeonato2019.json",campeonato2019);

const todosPjs = [].concat(valquirias).concat(guardianesEstelares).concat(campeonato2019);
//Selector de grupos o bundles de cada skins

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

document.getElementById("form1").addEventListener('submit', functSubmit);



function functSubmit(event) {
    event.preventDefault()
    let bundles = document.getElementById("input").value;
    let contenedor = document.getElementById("contenedorTexto")
    let sorteados = document.getElementById("sorteados")
    let sorteotext = document.querySelectorAll('.sorttxt');
    let tipoElegido = document.getElementById('tipoElegido');
    

    if (bundles == "1") {
        //Foreach con el array.
        sorteotext.forEach(text => {
            text.style.display = "block";
        });

        tipoElegido.textContent += " valquirias"
        valquirias.forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            contenedor.appendChild(li);
        })

        
        valquirias.sort(menorAMayor).forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            sorteados.appendChild(li);
        })

    }

    else if (bundles == "2") {
        sorteotext.forEach(text => {
            text.style.display = "block";
        });

        tipoElegido.textContent += " guardianes estelares"
        guardianesEstelares.forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            contenedor.appendChild(li);
        })

        
        guardianesEstelares.sort(menorAMayor).forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            sorteados.appendChild(li);
        })
    }

    else if (bundles == "3") {
        sorteotext.forEach(text => {
            text.style.display = "block";
        });

        tipoElegido.textContent += " campeonato 2019"
        campeonato2019.forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            contenedor.appendChild(li);
        })

        
        campeonato2019.sort(menorAMayor).forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            sorteados.appendChild(li);
        })
    }

    else {
        Swal.fire(
            'Tenes que ingresar un numero',
            '',
            'warning'
          )
    }
    
}



championsToJsonStorage(valquirias);
championsToJsonStorage(valquirias);
