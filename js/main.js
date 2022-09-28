//Funcion que crea id unicos para cada objeto. (FUNCIONA PARA TODOS LOS OBJETOS.)
//una vez utilizado el atributo.uniqueId se le asignara como atributo un id unico dependiendo del contador id.
//funciona modificadno las propiedads "built in" de cada objeto en su prototype. agregando el atributo uniqueId.
/*
(function() {
    //si el el prototypo de objeto tiene a uniqueId como "undefined" (no lo existe).
    if ( typeof Object.prototype.uniqueId == "undefined" ) {
        //contador de ids
        var id = 0;
        //funcion uniqueId que asigna el id y suma al contador.
        Object.prototype.uniqueId = function() {
            //si el objeto "this" (objeto al que estoy referenciando) tiene el uniqueId en undefined lo crea y lo retorna si ya esta lo retorna simplemente.
            if ( typeof this.__uniqueid == "undefined" ) {
                this.__uniqueid = ++id;
            }
            return this.__uniqueid;
        };
    }
})();*/




    

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

//Bundle Valquirias de acero
const valquirias = [];
valquirias.push(new skin ("Titan Acorazado", "Nasus", 1350, "Valquirias de acero"))
valquirias.push(new skin ("Halo Cibernético", "Janna", 950, "Valquirias de acero"))
valquirias.push(new skin ("Comandante de ataque", "Camille", 1000, "Valquirias de acero"))
valquirias.push(new skin ("Paladin de ataque", "Lucian", 365, "Valquirias de acero"))

//Bundle Guardianes estelares
const guardianesEstelares = [];
guardianesEstelares.push(new skin ("Guardian Estelar", "Kai'sa", 450 , "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Ahri", 920 , "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Miss Fortune", 1420 , "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Ekko", 1230 , "Guardianes Estelares"))

//Bundle Campeonato 2019
const campeonato2019 = [];
campeonato2019.push(new skin ("Campeonato", "Riven", 3575 , "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Zed", 1275 , "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Shyvanna", 675 , "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Tresh",565 , "Campeonato 2019"))

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
    /*
    else if (bundles == "4"){
        let primerTipo = document.createElement('span')
        primerTipo.textContent = "Elejiste todos los personajes"

        todos.appendChild(primerTipo);
        insertAfter(document.createElement('br'),todos.lastElementChild)
        let textoMayorAMenor = document.createElement('span')
        textoMayorAMenor.textContent = "Mayor a menor"

        insertAfter(document.createElement('br'),todos.lastElementChild)
        insertAfter(textoMayorAMenor,todos.lastElementChild)

        todosPjs.sort(mayorAMenor).forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            todos.appendChild(li);
        })

        let textoMenorAMAyor = document.createElement('span')
        textoMenorAMAyor.textContent = "Menor a mayor"

        insertAfter(document.createElement('br'),todos.lastElementChild)
        insertAfter(textoMenorAMAyor,todos.lastElementChild)
        insertAfter(document.createElement('br'),todos.lastElementChild)

        todosPjs.sort(menorAMayor).forEach((champion)=>{
            let li = document.createElement("li");
            li.innerText = champion.toString();
            todos.appendChild(li);
        })

        let formularioNombre = document.createElement('form');
        formularioNombre.setAttribute('id', 'form2');
        formularioNombre.innerHTML = `
            <br>
            <label for="input2">Ingrese nombre:</label>
            <input type="text2" id="input2" >
            <input type="submit" id="botonInput2" value="Submit">
        `;
        insertAfter(formularioNombre,todos.lastElementChild)

        
        
        document.getElementById("form2").addEventListener("submit", function(){
            event.preventDefault()
            let nombreInput = document.getElementById('input2')
            let porNombre = document.createElement('span')
            porNombre.textContent = "por nombre"

            insertAfter(porNombre,todos.lastElementChild)
            let pjsPorNombre = porNombre(nombreInput,todosPjs)
            pjsPorNombre.forEach((champion)=>{
                let li = document.createElement("li");
                li.innerText = champion.toString();
                todos.appendChild(li);
            })
        },);*/


}

championsToJsonStorage(valquirias);
championsToJsonStorage(valquirias);
