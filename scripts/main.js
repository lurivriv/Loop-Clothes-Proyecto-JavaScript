// preguntar si el usuario quiere agregar un producto al carrito
let agregarProductos
function agregarAlCarrito(){
    agregarProductos = prompt("¿Querés agregar una prenda al carrito? \n\n- Si \n- No \n- Finalizar pedido").toLowerCase()
}

// el usuario selecciona los productos que quiere agregar al carrito
let precioTotal = 0
function seleccionarProductos(){
    let elegirProductos = prompt("¿Qué tipo de prenda querés? Escribi el número correspondiente. \n¡Luego podrás agregar otras más! \n\nEscribi ''finalizar pedido'' para ver el precio total de tu pedido. \n\n1- Top rosado: $390 \n2- Remera de la rosa: $300 \n3- Remera con frase: $300 \n4- Remera estampada: $290 \n5- Skinny jean: $550 \n6- Short blanco: $490 \n7- Short con perlas: $350 \n8- Campera amarilla: $390 \n9- Campera cierre dorado: $750 \n10- Camisa de colores: $400").toLowerCase()

    switch(elegirProductos){
        case "1":
            precioTotal += 390
            console.log(precioTotal)
            alert("Top rosado: $390 agregado al carrito.")
            break
        case "2":
            precioTotal += 300
            console.log(precioTotal)
            alert("Remera de la rosa: $300 agregado al carrito.")
            break
        case "3":
            precioTotal += 300
            alert("Remera con frase: $300 agregado al carrito.")
            break
        case "4":
            console.log(precioTotal)
            precioTotal += 290
            alert("Remera estampada: $290 agregado al carrito.")
            break
        case "5":
            console.log(precioTotal)
            precioTotal += 550
            alert("Skinny jean: $550 agregado al carrito.")
            break
        case "6":
            console.log(precioTotal)
            precioTotal += 490
            alert("Short blanco: $490 agregado al carrito.")
            break
        case "7":
            console.log(totalPrice)
            totalPrice += 350
            alert("Short con perlas: $350 agregado al carrito.")
            break
        case "8":
            console.log(precioTotal)
            precioTotal += 390
            alert("Campera amarilla: $390 agregado al carrito.")
            break
        case "9":
            console.log(precioTotal)
            precioTotal += 750
            alert("Campera cierre dorado: $750 agregado al carrito.")
            break
        case "10":
            console.log(precioTotal)
            precioTotal += 400
            alert("Camisa de colores: $400 agregado al carrito.")
            break
        case "finalizar pedido":
            console.log("El total de tu compra es de: $" + precioTotal)
            alert("El total de tu compra es de: $" + precioTotal)
            break
        default:
            alert("¡Lo sentimos! ''" + elegirProductos + "'' no es válido. Escribi un número de la lista o finalizá tu pedido.")
            seleccionarProductos()
            break
    }
}

// el usuario puede agregar las prendas que quiera al carrito hasta decidir que ya no quiere
do{
    agregarAlCarrito()
    if(agregarProductos == "si"){
        console.log(agregarProductos)
        seleccionarProductos()
    }else if(agregarProductos == "finalizar pedido"){
        console.log("El total de tu compra es de: $" + precioTotal)
        alert("El total de tu compra es de: $" + precioTotal)
    }else if(agregarProductos !="si" && agregarProductos !="no" && agregarProductos !="finalizar pedido"){
        alert("¡Lo sentimos!\n''" + agregarProductos + "'' no es válido. Tenés que ingresar SI o NO. También podés finalizar tu pedido.")
    }
}while(agregarProductos != "no"){
    console.log(agregarProductos)
    alert("¡Está bien! Podrás agregar una prenda al carrito en otro momento.")
}