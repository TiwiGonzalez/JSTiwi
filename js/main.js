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
        return"Personaje: " + this.personaje + " | Nombre del skin: " + this.nombre + " | Bundle: " + this.bundle + " | Precio: " + this.precio;
    }

    /*
    getName(){
        return this.personaje;
    }

    getSkin(){  
        return this.nombre;
    }*/
}

//Bundle Valquirias de acero
const valquirias = [];
valquirias.push(new skin ("Titan Acorazado", "Nasus", "1350 RP", "Valquirias de acero"))
valquirias.push(new skin ("Halo Cibernético", "Janna", "1350 RP", "Valquirias de acero"))
valquirias.push(new skin ("Comandante de ataque", "Camille", "1350 RP", "Valquirias de acero"))
valquirias.push(new skin ("Paladin de ataque", "Lucian", "1350 RP", "Valquirias de acero"))


//Bundle Guardianes estelares
const guardianesEstelares = [];
guardianesEstelares.push(new skin ("Guardian Estelar", "Kai'sa", "1820 RP", "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Ahri", "1820 RP", "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Miss Fortune", "1820 RP", "Guardianes Estelares"))
guardianesEstelares.push(new skin ("Guardian Estelar", "Ekko", "1820 RP", "Guardianes Estelares"))

//Bundle Campeonato 2019
const campeonato2019 = [];
campeonato2019.push(new skin ("Campeonato", "Riven", "975 RP", "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Zed", "975 RP", "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Shyvanna", "975 RP", "Campeonato 2019"))
campeonato2019.push(new skin ("Campeonato", "Tresh", "975 RP", "Campeonato 2019"))


//Selector de grupos o bundles de cada skins

function bundleSelecter() {
    let bundles = parseInt(prompt(
        "Elegí un bundle \n 1-Valquirias de acero \n 2-Guardianes Estelares \n 3-Campeonato 2019"
    ))

    if (bundles == "1") {
        //Foreach con el array.
        for (let champion of valquirias) {
            console.log(champion.toString());
        }
        let skins = alert("1-Nasus Titan Acorazado \n2-Janna Halo Cibernético \n3-Camille Comandante de ataque \n4-Lucian Paladin de ataque")
    }

    else if (bundles == "2") {
        for (let champion1 of guardianesEstelares) {
            console.log(champion1.toString());
        }
        let skins = alert("1-Kai'sa Guardian Estelar \n2-Ahri Guardian Estelar \n3-Miss Fortune Guardian Estelar \n4-Ekko Guardian Estelar")
    }

    else if (bundles == "3") {
        for (let champion2 of campeonato2019){
            console.log(champion2.toString());
        }
        let skins = alert("1-Riven Campeonato \n2-Zed Campeonato \n3-Shyvanna Campeonato \n4-Tresh Campeonato")
    }
    
    else{
        bundleSelecter();
    }
}

bundleSelecter();