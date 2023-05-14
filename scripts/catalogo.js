// cargar catálogo de productos
const productosCatalogo = async () => {
    try {
        const respuesta = await fetch("productos.json")
        const productos = await respuesta.json()

        // armar las cards
        const contenedorCards = document.getElementById("contenedor-cards")

        const mostrarProductos = (productos, orden) => {
            // ordenar los productos con el select
            if (orden === "menorMayor") {
                productos.sort((a, b) => a.precio - b.precio)
            } else if (orden === "mayorMenor") {
                productos.sort((a, b) => b.precio - a.precio)
            } else { 
                productos.sort((a, b) => b.id - a.id)
            }
        
            // crear la estructura de las cards
            productos.forEach(producto => {
                let cardsProductos = document.createElement("div")
                cardsProductos.className = "card"
                cardsProductos.innerHTML = `
                    <a href="#"><img src="${producto.img}" class="card-img-top" alt="${producto.nombre}"></a>
                    <div class="card-body px-0">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <div class="row align-items-center">
                            <button class="botonCards btn-card col-6 col-xl-7 offset-1" data-id="${producto.id}">Agregar</button>
                            <h6 class="card-subtitle text-muted col-5 col-xl-4">$${producto.precio}</h6>
                        </div>
                    </div>
                `
                contenedorCards.appendChild(cardsProductos)
            })
        }

        // filtrar por categoría
        const filtrarCategorias = document.querySelectorAll(".filtrarCatalogo")
        filtrarCategorias.forEach(categoria => {
            categoria.addEventListener("click", e => {
                const categoriaClickeada = e.target.dataset.value
                // ir hacia el catálogo filtrado
                if (categoriaClickeada) {
                    window.location.href = `catalogo.html?categoria=${categoriaClickeada}`
                }
            })
        })

        // segun en qué página se esté 
        const urlPagina = window.location.pathname

        if (urlPagina.includes("catalogo.html")) {
            // titulo de la pagina
            const tituloCatalogo = document.getElementById("tituloCatalogo")

            // select para reordenar los productos
            const selectOrden = document.getElementById("selectOrden")

            // obtener la categoría seleccionada y la busqueda ingresada
            const url = new URLSearchParams(window.location.search)
            const categoriaSeleccionada = url.get("categoria")
            const nombreBuscado = url.get("nombre")

            if (categoriaSeleccionada) {
                // filtrar productos por categoría
                const catalogoFiltrado = productos.filter(producto => producto.categoria === categoriaSeleccionada)
                tituloCatalogo.innerText = categoriaSeleccionada.toUpperCase()
                mostrarProductos(catalogoFiltrado)
            } else if (nombreBuscado) {
                // filtrar productos por búsqueda
                const catalogoPorBusqueda = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()))
                if (catalogoPorBusqueda.length > 0) {
                    // mostrar los productos buscados
                    tituloCatalogo.innerText = `RESULTADOS DE BÚSQUEDA: \n"${nombreBuscado.toUpperCase()}"`
                    mostrarProductos(catalogoPorBusqueda)
                } else {
                    // sin resultados de búsqueda
                    tituloCatalogo.innerText = `SIN RESULTADOS: \n"${nombreBuscado.toUpperCase()}" no está disponible`
                    selectOrden.style.display = "none"
                }
            } else {
                  // mostrar todos los productos
                  mostrarProductos(productos)
            }

            // reordenar los productos con el select
            selectOrden.addEventListener("change", () => {
                // capturar el valor del select
                const ordenSeleccionado = selectOrden.value
                contenedorCards.innerHTML = ""

                if (categoriaSeleccionada) {
                    // filtrar productos por categoría y mostrarlos según el select
                    const catalogoFiltrado = productos.filter(producto => producto.categoria === categoriaSeleccionada)
                    mostrarProductos(catalogoFiltrado, ordenSeleccionado)
                } else if (nombreBuscado) {
                    // filtrar productos por búsqueda y mostrarlos según el select
                    const catalogoPorBusqueda = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()))
                    mostrarProductos(catalogoPorBusqueda, ordenSeleccionado)
                } else {
                    // mostrar todos los productos según el select
                    mostrarProductos(productos, ordenSeleccionado)
                }

                // llamar al carrito para mantener la funcionalidad de las cards
                productosCarrito()
            })
        } else if (urlPagina.includes("index.html") || urlPagina.endsWith("/")) {
            // cantidad de productos mostrados en el index según el ancho de la ventana
            let cantidadProductos

            const segunAnchoDePantalla = () => {
                if (window.matchMedia("(min-width: 1723px)").matches) {
                    cantidadProductos = 4
                } else if (window.matchMedia("(max-width: 1723px) and (min-width: 993px)").matches) {
                    cantidadProductos = 8
                } else if (window.matchMedia("(max-width: 993px)").matches) {
                    cantidadProductos = 6
                }
                contenedorCards.innerHTML = ""

                // mostrar los últimos productos
                mostrarProductos(productos.sort((a, b) => b.id - a.id).slice(0, cantidadProductos))
            }

            // ajustar la cantidad de productos cuando se redimensiona la ventana
            window.addEventListener("resize", segunAnchoDePantalla)

            segunAnchoDePantalla()
        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: "¡Lo sentimos!",
            text: "Ocurrió un error al cargar los productos, intentalo de nuevo más tarde.",
            icon: "error",
            confirmButtonText: "ENTENDIDO",
            background: "#f6f6f6",
            color: "#1a1a1a",
            confirmButtonColor: "#1a1a1a",
            timer: 3000
        })
    }
}
productosCatalogo()