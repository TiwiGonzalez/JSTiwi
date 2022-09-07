//Galería de aspectos de personajes de un videojuego (League of Legends)
//A continuación, bundles y precios de cada uno
class skin{
    constructor(nombre, personaje, precio, bundle){
        this.nombre = nombre;
        this.personaje = personaje;
        this.precio = precio;
        this.bundle = bundle;
    }
    //Uso del "toString" para reciclar lineas de codigo y esté más optimizado
    toString(){
        return"Personaje: " + this.personaje + " | Nombre del skin: " + this.nombre + " | Bundle: " + this.bundle + " | Precio: " + this.precio + " RP";
    }
    /*
    getName(){
        return this.personaje;
    }

    getSkin(){  
        return this.nombre;
    }*/
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

function bundleSelecter() {
    let bundles = parseInt(prompt(
        "Elegí un bundle \n 1-Valquirias de acero \n 2-Guardianes Estelares \n 3-Campeonato 2019 \n 4-TodosLosPersonajes"
    ))

    if (bundles == "1") {
        //Foreach con el array.
        for (let champion of valquirias) {
            console.log(champion.toString());
        }
        console.log(valquirias.sort(menorAMayor));
    }

    else if (bundles == "2") {
        for (let champion1 of guardianesEstelares) {
            console.log(champion1.toString());
        }
        console.log(guardianesEstelares.sort(menorAMayor))
    }

    else if (bundles == "3") {
        for (let champion2 of campeonato2019){
            console.log(champion2.toString());
        }
        console.log(campeonato2019.sort(menorAMayor));
    }
    else if (bundles == "4"){
        console.log("todos ordenados Mayor a menor:");
        console.log(todosPjs.sort(mayorAMenor));
        console.log("todos ordenados Menor a mayor:");
        console.log(todosPjs.sort(menorAMayor));
        let nombre = prompt("Elija nombre de personaje")
        console.log(porNombre(nombre,todosPjs))
        
    }   
    
    else{
        bundleSelecter();
    }
}

bundleSelecter();