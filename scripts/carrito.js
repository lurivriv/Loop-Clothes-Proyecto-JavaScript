// productos que el usuario ha agregado al carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// guardar carrito en localStorage
const carritoLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// carrito
const productosCarrito = async () => {
    try {
        const respuesta = await fetch("productos.json")
        const productos = await respuesta.json()

        // contador de la cantidad de productos en el carrito
        const cantidadCarrito = document.getElementById("cantidadCarrito")

        const contadorCarrito = () => {
            cantidadCarrito.className = "d-block"

            // guardar contador en localStorage
            const contadorLocalStorage = carrito.length
            localStorage.setItem("contador carrito", JSON.stringify(contadorLocalStorage))

            cantidadCarrito.innerText = JSON.parse(localStorage.getItem("contador carrito"))
        }

        // ver carrito
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

            // infromación de los productos en el carrito
            if (carrito.length === 0) {
                const mensajeCarritoVacio = document.createElement("div")
                mensajeCarritoVacio.className = "mensajeCarritoVacio"
                mensajeCarritoVacio.innerHTML = `
                    <h3>Tu carrito está vacío :(</h3>
                `
                modalContenedor.append(mensajeCarritoVacio)
            } else {
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
            }

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

        // boton en las cards
        const botonCards = document.querySelectorAll(".botonCards")

        // guardar estado de los botones
        let botones = JSON.parse(localStorage.getItem("botones")) || []

        // actualizar el botón de las cards
        const actualizarBoton = (id, textoBtn, alHacerClick) => {
            botonCards.forEach(btn => {
                if (btn.dataset.id == id) {
                    btn.innerText = textoBtn
                    btn.addEventListener("click", alHacerClick)
                }
            })
        }

        // agregar al carrito
        const agregarAlCarrito = (id) => {
            // buscar el producto según el id recibido
            const producto = productos.find(producto => producto.id === id)

            // agregar al carrito si no está en él
            if (!carrito.some(prod => prod.id === producto.id)) {
                carrito.push(producto)

                // actualizar boton
                actualizarBoton(id, "Ver carrito", verCarrito)
                botones.push(id)
                localStorage.setItem("botones", JSON.stringify(botones))

                // mostrar notificación
                Toastify({
                    text: "Agregado al carrito",
                    gravity: "bottom",
                    position: "right",
                    duration: 3000,
                    style: {
                        background: "#1a1a1a",
                        color: "f6f6f6",
                        borderRadius: "8px",
                    }
                }).showToast()
                console.log("Carrito:", carrito)
            }
            contadorCarrito()
            carritoLocalStorage()
        }

        // actualizar los botones de los productos agregados
        if (botones.length) {
            botones.forEach(id => actualizarBoton(id, "Ver carrito", verCarrito))
        }

        // agregar al carrito al clickear el boton
        botonCards.forEach(btn => {
            btn.addEventListener("click", () => agregarAlCarrito(btn.dataset.id))

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

        // eliminar producto del carrito
        const eliminarDeCarrito = (id) => {
            // buscar el producto a eliminar
            const productoEliminado = carrito.find(producto => producto.id === id)

            // filtrar los productos del carrito y eliminar los id que coincidan con el id recibido
            carrito = carrito.filter(producto => producto.id != id)
            botones = botones.filter(btn => btn != id)

            // actualizar los botones en el localStorage
            carritoLocalStorage()

            // actualizar los botones en la página
            botonCards.forEach(btn => {
                if (btn.dataset.id === id) {
                    btn.innerText = "Agregar"
                    btn.addEventListener("click", () => agregarAlCarrito(id))
                }
            })

            //guardar los botones actualizados en el localStorage
            localStorage.setItem("botones", JSON.stringify(botones))

            // actualizar carrito y contador
            verCarrito()
            contadorCarrito()
            console.log("Eliminado:", productoEliminado)
            console.log("Carrito:", carrito)

            // mostrar notificación
            Toastify({
                text: "Eliminado del carrito",
                gravity: "bottom",
                position: "right",
                duration: 3000,
                style: {
                    background: "#1a1a1a",
                    color: "f6f6f6",
                    borderRadius: "8px",
                }
            }).showToast()
        }

        // inicializar contador para que se muestre lo guardado en localStorage
        window.addEventListener("load", () => {
            carrito.length > 0 && contadorCarrito()
        })

        // clickear el carrito
        abrirCarrito.addEventListener("click", verCarrito)
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: "¡Lo sentimos!",
            text: "Ocurrió un error en el carrito, intentalo de nuevo más tarde.",
            icon: "error",
            confirmButtonText: "ENTENDIDO",
            background: "#f6f6f6",
            color: "#1a1a1a",
            confirmButtonColor: "#1a1a1a",
            timer: 3000
        })
    }
}
productosCarrito()