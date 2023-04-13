// preguntar si el usuario quiere agregar un producto al carrito
let accion
const inicializar = () =>{
    accion = prompt("¿Querés agregar una prenda al carrito? \n\n- Si \n- No \n\n1 - para ver tu carrito \n2 - para editar tu carrito \n3 - para finalizar el pedido").toLowerCase()
}

// productos que el usuario ha agregado al carrito
const carrito = []
console.log(carrito)

// categorías a elegir con los productos correspondientes dentro
const prendasSuperiores = () => {
    let elegirProductos = prompt("¿Qué prenda querés comprar? Escribi el número correspondiente. \n¡Luego podrás agregar otras prendas más! \n\n1- Top rosado: $390 \n2- Remera de la rosa: $300 \n3- Remera con frase: $300 \n4- Campera amarilla: $390 \n5- Remera Daniel Cassin: $100 \n6- Camisa a lunares: $300 \n7- Musculosa rosada: $100 \n8- Campera con flores: $150 \n9- Campera con número: $90 \n10- Buzo clarito: $250 \n11- Canguro violeta: $150 \n12- Campera beige: $490 \n13- Campera cierre dorado: $750 \n14- Campera Zara: $350 \n15- Buzo de lanilla: $200 \n16- Campera Piece of Cake: $400 \n17- Campera con peludito: $590 \n18- Buzo de lana: $300 \n19- Buzo mangas 3/4: $100 \n20- Buzo gris abrigado: $450 \n21- Campera deportiva: $250 \n22- Camisa colores neutros: $400 \n23- Camisa de colores: $400 \n24- Manga corta estampada: $290 \n25- Remera H&G azul: $250 \n26- Top ancho azul: $300 \n27- Remera con roturas: $200 \n28- Remera polo salmón: $250 \n29- Vestido H&M floreado: $450")

    switch(elegirProductos){
        case "1":
            carrito.push({
                nombre: "Top rosado",
                precio: 390,
                categoria: "Prendas superiores"
            })
            alert("Top rosado: $390 agregado al carrito.")
            break
        case "2":
            carrito.push({
                nombre: "Remera de la rosa",
                precio: 300,
                categoria: "Prendas superiores"
            })
            alert("Remera de la rosa: $300 agregado al carrito.")
            break
        case "3":
            carrito.push({
                nombre: "Remera con frase",
                precio: 300,
                categoria: "Prendas superiores"
            })
            alert("Remera con frase: $300 agregado al carrito.")
            break
        case "4":
            carrito.push({
                nombre: "Campera amarilla",
                precio: 390,
                categoria: "Prendas superiores"
            })
            alert("Campera amarilla: $390 agregado al carrito.")
            break 
        case "5":
            carrito.push({
                nombre: "Remera Daniel Cassin",
                precio: 100,
                categoria: "Prendas superiores"
            })
            alert("Remera Daniel Cassin: $100 agregado al carrito.")
            break 
        case "6":
            carrito.push({
                nombre: "Camisa a lunares",
                precio: 300,
                categoria: "Prendas superiores"
            })
            alert("Camisa a lunares: $300 agregado al carrito.")
            break 
        case "7":
            carrito.push({
                nombre: "Musculosa rosada",
                precio: 100,
                categoria: "Prendas superiores"
            })
            alert("Musculosa rosada: $100 agregado al carrito.")
            break
        case "8":
            carrito.push({
                nombre: "Campera con flores",
                precio: 150,
                categoria: "Prendas superiores"
            })
            alert("Campera con flores: $150 agregado al carrito.")
            break
        case "9":
            carrito.push({
                nombre: "Campera con número",
                precio: 90,
                categoria: "Prendas superiores"
            })
            alert("Campera con número: $90 agregado al carrito.")
            break
        case "10":
            carrito.push({
                nombre: "Buzo clarito",
                precio: 250,
                categoria: "Prendas superiores"
            })
            alert("Buzo clarito: $250 agregado al carrito.")
            break
        case "11":
            carrito.push({
                nombre: "Canguro violeta",
                precio: 150,
                categoria: "Prendas superiores"
            })
            alert("Canguro violeta: $150 agregado al carrito.")
            break
        case "12":
            carrito.push({
                nombre: "Campera beige",
                precio: 490,
                categoria: "Prendas superiores"
            })
            alert("Campera beige: $490 agregado al carrito.")
            break
        case "13":
            carrito.push({
                nombre: "Campera cierre dorado",
                precio: 750,
                categoria: "Prendas superiores"
            })
            alert("Campera cierre dorado: $750 agregado al carrito.")
            break
        case "14":
            carrito.push({
                nombre: "Campera Zara",
                precio: 350,
                categoria: "Prendas superiores"
            })
            alert("Campera Zara: $350 agregado al carrito.")
            break
        case "15":
            carrito.push({
                nombre: "Buzo de lanilla",
                precio: 200,
                categoria: "Prendas superiores"
            })
            alert("Buzo de lanilla: $200 agregado al carrito.")
            break
        case "16":
            carrito.push({
                nombre: "Campera Piece of Cake",
                precio: 400,
                categoria: "Prendas superiores"
            })
            alert("Campera Piece of Cake: $400 agregado al carrito.")
            break
        case "17":
            carrito.push({
                nombre: "Campera con peludito",
                precio: 590,
                categoria: "Prendas superiores"
            })
            alert("Campera con peludito: $590 agregado al carrito.")
            break
        case "18":
            carrito.push({
                nombre: "Buzo de lana",
                precio: 300,
                categoria: "Prendas superiores"
            })
            alert("Buzo de lana: $300 agregado al carrito.")
            break
        case "19":
            carrito.push({
                nombre: "Buzo mangas 3/4",
                precio: 100,
                categoria: "Prendas superiores"
            })
            alert("Buzo mangas 3/4: $100 agregado al carrito.")
            break
        case "20":
            carrito.push({
                nombre: "Buzo gris abrigado",
                precio: 450,
                categoria: "Prendas superiores"
            })
            alert("Buzo gris abrigado: $450 agregado al carrito.")
            break
        case "21":
            carrito.push({
                nombre: "Campera deportiva",
                precio: 250,
                categoria: "Prendas superiores"
            })
            alert("Campera deportiva: $250 agregado al carrito.")
            break
        case "22":
            carrito.push({
                nombre: "Camisa colores neutros",
                precio: 400,
                categoria: "Prendas superiores"
            })
            alert("Camisa colores neutros: $400 agregado al carrito.")
            break
        case "23":
            carrito.push({
                nombre: "Camisa de colores",
                precio: 400,
                categoria: "Prendas superiores"
            })
            alert("Camisa de colores: $400 agregado al carrito.")
            break
        case "24":
            carrito.push({
                nombre: "Manga corta estampada",
                precio: 290,
                categoria: "Prendas superiores"
            })
            alert("Manga corta estampada: $290 agregado al carrito.")
            break
        case "25":
            carrito.push({
                nombre: "Remera H&G azul",
                precio: 250,
                categoria: "Prendas superiores"
            })
            alert("Remera H&G azul: $250 agregado al carrito.")
            break
        case "26":
            carrito.push({
                nombre: "Top ancho azul",
                precio: 300,
                categoria: "Prendas superiores"
            })
            alert("Top ancho azul: $300 agregado al carrito.")
            break
        case "27":
            carrito.push({
                nombre: "Remera con roturas",
                precio: 200,
                categoria: "Prendas superiores"
            })
            alert("Remera con roturas: $200 agregado al carrito.")
            break
        case "28":
            carrito.push({
                nombre: "Remera polo salmón",
                precio: 250,
                categoria: "Prendas superiores"
            })
            alert("Remera polo salmón: $250 agregado al carrito.")
            break
        case "29":
            carrito.push({
                nombre: "Vestido H&M floreado",
                precio: 450,
                categoria: "Prendas superiores"
            })
            alert("Vestido H&M floreado: $450 agregado al carrito.")
            break
        default:
            alert("¡Lo sentimos! ''" + elegirProductos + "'' no es válido. Escribi un número de la lista.")
            prendasSuperiores()
            break
    }
}

const prendasInferiores = () => {
    let elegirProductos = prompt("¿Qué prenda querés comprar? Escribi el número correspondiente. \n¡Luego podrás agregar otras prendas más! \n\n1- Skinny jean: $550 \n2- Short con perlas: $350 \n3- Short 5 botones: $490 \n4- Short blanco: $490 \n5- Short de tela: $50")

    switch(elegirProductos){
        case "1":
            carrito.push({
                nombre: "Skinny jean",
                precio: 550,
                categoria: "Prendas inferiores"
            })
            alert("Skinny jean: $550 agregado al carrito.")
            break
        case "2":
            carrito.push({
                nombre: "Short con perlas",
                precio: 350,
                categoria: "Prendas inferiores"
            })
            alert("Short con perlas: $350 agregado al carrito.")
            break
        case "3":
            carrito.push({
                nombre: "Short 5 botones",
                precio: 490,
                categoria: "Prendas inferiores"
            })
            alert("Short 5 botones: $490 agregado al carrito.")
            break
        case "4":
            carrito.push({
                nombre: "Short blanco",
                precio: 490,
                categoria: "Prendas inferiores"
            })
            alert("Short blanco: $490 agregado al carrito.")
            break 
        case "5":
            carrito.push({
                nombre: "Short de tela",
                precio: 50,
                categoria: "Prendas inferiores"
            })
            alert("Short de tela: $50 agregado al carrito.")
            break 
        default:
            alert("¡Lo sentimos! ''" + elegirProductos + "'' no es válido. Escribi un número de la lista.")
            prendasInferiores()
            break
    }
}

const calzados = () => {
    let elegirProductos = prompt("¿Qué calzado querés comprar? Escribi el número correspondiente. \n¡Luego podrás agregar otras prendas más! \n\n1- Sandalias Miss Carol: $490 \n2- Sandalias Korium marrón: $350 \n3- Sandalias Korium negro: $350 \n4- Zapatos Korium beige: $490 \n5- Botas Miss Carol marrón: $490 \n6- Botas de cuero beige: $990")

    switch(elegirProductos){
        case "1":
            carrito.push({
                nombre: "Sandalias Miss Carol",
                precio: 490,
                categoria: "Calzados"
            })
            alert("Sandalias Miss Carol: $490 agregado al carrito.")
            break
        case "2":
            carrito.push({
                nombre: "Sandalias Korium marrón",
                precio: 350,
                categoria: "Calzados"
            })
            alert("Sandalias Korium marrón: $350 agregado al carrito.")
            break
        case "3":
            carrito.push({
                nombre: "Sandalias Korium negro",
                precio: 350,
                categoria: "Calzados"
            })
            alert("Sandalias Korium negro: $350 agregado al carrito.")
            break
        case "4":
            carrito.push({
                nombre: "Zapatos Korium beige",
                precio: 490,
                categoria: "Calzados"
            })
            alert("Zapatos Korium beige: $490 agregado al carrito.")
            break 
        case "5":
            carrito.push({
                nombre: "Botas Miss Carol marrón",
                precio: 490,
                categoria: "Calzados"
            })
            alert("Botas Miss Carol marrón: $490 agregado al carrito.")
            break 
        case "6":
            carrito.push({
                nombre: "Botas de cuero beige",
                precio: 990,
                categoria: "Calzados"
            })
            alert("Botas de cuero beige: $990 agregado al carrito.")
            break 
        default:
            alert("¡Lo sentimos! ''" + elegirProductos + "'' no es válido. Escribi un número de la lista.")
            calzados()
            break
    }
}

// el usuario elige la categoría de prendas que quiere
const elegirCategoria = () => {
    let categoriasPorElegir = prompt("¿Qué tipo de prenda querés? Escribi el número correspondiente. \n¡Luego podrás agregar otras más! \n\n1- Prendas superiores \n2- Prendas inferiores \n3- Calzados")

    switch(categoriasPorElegir){
        case "1":
            prendasSuperiores()
            break
        case "2":
            prendasInferiores()
            break
        case "3":
            calzados()
            break
        default:
            alert("¡Lo sentimos! ''" + categoriasPorElegir + "'' no es válido. Escribi un número de la lista para acceder a las prendas.")
            elegirCategoria()
            break
    }
}

// ver carrito
const verCarrito = () => {
    carrito.forEach((producto) => {
        alert("Tu carrito: \n\n" + producto.nombre + "\n$" + producto.precio)
    })
}

// borrar producto del carrito
const borrarCarrito = () => {
    const borrarProducto = prompt("¿Querés eliminar una prenda de tu carrito? Escribi el número del producto a borrar. \nLa primera prenda en tu carrito corresponde al número 0. \n\nv - para ver los productos en tu carrito \nc - para cancelar la edición de tu carrito")
    
    if(borrarProducto >= 0 && borrarProducto < carrito.length && borrarProducto != ""){
        carrito.splice(borrarProducto, 1)
        alert("El producto fue eliminado de tu carrito :(")
        borrarCarrito()
    }else if(borrarProducto == "v" || borrarProducto == "V"){
        verCarrito()
        borrarCarrito()
    }else if(borrarProducto == "c" || borrarProducto == "C"){
        inicializar()
    }else{
        alert("¡Lo sentimos!\n''" + borrarProducto + "'' no es válido. Tenés que ingresar un número correcto. \n\nv - para ver los productos en tu carrito \nc - para cancelar la edición de tu carrito.")
        borrarCarrito()
    }
}

// precio total en el carrito
const precioFinal = () => {
    let precioTotal = carrito.reduce((precioTotal,producto) => precioTotal + producto.precio, 0)
    verCarrito()
    alert("El total de tu compra es de: $" + precioTotal + "\n\n¡Muchas gracias por visitarnos!");
    console.log("El precio total de la compra fue de: $" + precioTotal)
}


// el usuario puede agregar las prendas que quiera al carrito hasta decidir que ya no quiere
do{
    inicializar()
    if(accion == "si" || accion == "sí"){
        console.log(accion)
        elegirCategoria()
    }else if(accion == "1"){
        verCarrito()
    }else if(accion == "2"){
        borrarCarrito()
    }else if(accion == "3"){
        precioFinal()
    }else if(accion !="si" && accion !="no" && accion !="1" && accion !="2" && accion !="3"){
        alert("¡Lo sentimos!\n''" + accion + "'' no es válido. Tenés que ingresar SI o NO. \n\n1 - para ver tu carrito \n2 - para editar tu carrito \n3 - para finalizar el pedido")
    }
}while(accion != "no")

console.log(accion)
alert("¡Está bien! Podrás agregar una prenda al carrito en otro momento.")