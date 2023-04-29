// productos que el usuario ha agregado al carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// guardar carrito en localStorage
const carritoLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// actualizar el botón de las cards
const actualizarBoton = (btn, textoBtn, alHacerClick) => {
    btn.innerText = textoBtn
    alHacerClick && btn.addEventListener("click", alHacerClick)
}

// agregar al carrito
const botonCards = document.querySelectorAll(".botonCards")

botonCards.forEach(btn => {
    btn.addEventListener("click", () => {
        // identificando cada card con los productos guardados
        const id = btn.dataset.id
        const producto = productos.find(producto => producto.id === id)

        if (producto) {
            const productoEnCarrito = carrito.find(item => item.id === producto.id)
            if (productoEnCarrito) {
                // si el producto está en carrito el botón cambia
                actualizarBoton(btn, "Ver carrito", verCarrito)
            } else if (producto?.id) {
                // se agrega al carrito
                carrito.push ({
                    id: producto?.id,
                    nombre: producto?.nombre,
                    precio: producto?.precio,
                    categoria: producto?.categoria,
                    img: producto?.img
                })
                console.log(carrito)
                // si el producto está en carrito el botón cambia
                actualizarBoton(btn, "Ver carrito", verCarrito)
            } else {
                // si el producto no está en carrito el botón vuelve al original (NO FUNCIONA)
                btn.innerText = "Agregar"
            }    
        } 
        contadorCarrito()
        carritoLocalStorage()
    })

    // evento cuando se presiona y suelta el botón
    btn.addEventListener("mousedown", () => {
        btn.classList.add("btnMousedown")
        btn.classList.remove("btnMouseUp")
    })
    btn.addEventListener("mouseup", () => {
        btn.classList.remove("btnMousedown")
        btn.classList.add("btnMouseUp")
    })
})

// carrito:
const modalFondo = document.querySelector(".modalFondo")
const modalContenedor = document.getElementById("modalContenedor")
const abrirCarrito = document.getElementById("verCarrito")

const verCarrito = () => {
    // volver a abrir el carrito y que no se acumulen los mismos productos
    modalContenedor.innerHTML = ""

    modalContenedor.className = "d-flex"

    // abrir el background oscuro
    modalFondo.className = "d-flex modalFondo"

    // título del carrito
    const modalTitulo = document.createElement("div")
    modalTitulo.className = "modalTitulo row align-items-center d-flex"
    modalTitulo.innerHTML = `
        <h2 class="col-8 offset-2 text-center pt-4 pb-3 mb-0">CARRITO</h2>
    `
    modalContenedor.append(modalTitulo)

    // botón para cerrar el carrito
    const modalBoton = document.createElement("button")
    modalBoton.innerHTML = `
        <i class="fa fa-xmark"></i>
    `
    modalBoton.className = "col-2 modalBoton"
    modalBoton.addEventListener("click", () => {
        modalContenedor.className = "d-none"
        // cerrar el background oscuro
        modalFondo.className = "d-none modalFondo"
    })
    modalTitulo.append(modalBoton)

    // cerrar el modal al hacer click en el background
    modalFondo.addEventListener("click", (e) => {
        if (e.target === modalFondo) {
            modalFondo.className = "d-none modalFondo"
        }
    })

    // infromación de los productos que se agregan al carrito
    carrito.forEach((producto) => {        
        let carritoProductos = document.createElement("div")
        carritoProductos.className = "carritoProductos row"
        carritoProductos.innerHTML = `
            <a class="col-4" href="#">
                <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid mx-auto d-block">
            </a>
            <a class="col-3" href="#">
                <h5 class="text-center align-self-center mb-0">${producto.nombre}</h5>
            </a>
            <h6 class="col-3 text-center align-self-center mb-0">$${producto.precio}</h6>
            <button class="eliminarProducto col-sm-1 offset-sm-1 col-2"><i class="fa-regular fa-trash-can"></i></button>
        `
        modalContenedor.append(carritoProductos)

        // eliminar un producto del carrito
        const eliminarProducto = carritoProductos.querySelector(".eliminarProducto")
        eliminarProducto.addEventListener("click", () => {
            eliminarDeCarrito(producto.id)
        })
    })

    // footer del modal: precio total en el carrito y botón para finalizar pedido
    const precioTotal = carrito.reduce((precioAcumulado, producto) => precioAcumulado + producto.precio, 0)
    const footerModal = document.createElement("div")
    footerModal.className = "footerModal d-flex col-12"
    footerModal.innerHTML = `
        <h2>TOTAL: $${precioTotal}</h2>
        <button class="botonFinalizarPedido">FINALIZAR PEDIDO</button>
    `
    modalContenedor.append(footerModal)

    // evento cuando se presiona y suelta el botón
    const botonFinalizarPedido = document.querySelector(".botonFinalizarPedido")
    botonFinalizarPedido.addEventListener("mousedown", () => {
        botonFinalizarPedido.classList.add("btnMousedown")
        botonFinalizarPedido.classList.remove("btnMouseUp")
    })
    botonFinalizarPedido.addEventListener("mouseup", () => {
        botonFinalizarPedido.classList.remove("btnMousedown")
        botonFinalizarPedido.classList.add("btnMouseUp")
    })
}

// eliminar producto del carrito
const eliminarDeCarrito = (id) => {
    // buscar en el carrito el id
    const buscarPorId = carrito.find((producto) => producto.id === id)
    carrito = carrito.filter((carritoProductoId) => {
        return carritoProductoId !== buscarPorId
    })
    console.log(buscarPorId)
    console.log(carrito)
    carritoLocalStorage()
    verCarrito()
    contadorCarrito()
}

const cantidadCarrito = document.getElementById("cantidadCarrito")
// contador de la cantidad de productos en el carrito
const contadorCarrito = () => {
    cantidadCarrito.className = "d-block"

    // guardar contador en localStorage
    const contadorLocalStorage = carrito.length
    localStorage.setItem("contador carrito", JSON.stringify(contadorLocalStorage))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("contador carrito"))
}

// inicializar contador para que se muestre lo guardado en localStorage
window.addEventListener("load", () => {
    carrito.length > 0 && contadorCarrito()
})

// clickear el carrito
abrirCarrito.addEventListener("click", verCarrito)