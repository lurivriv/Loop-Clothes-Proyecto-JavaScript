const buscarProductos = async () => {
    try {
        const respuesta = await fetch("productos.json")
        const productos = await respuesta.json()

        const buscador = document.getElementById("contenedorBusqueda")
        const fondoOscuroBusqueda = document.getElementById("fondoOscuroBusqueda")
        const inputBusqueda = document.getElementById("inputBusqueda")
        const cajaBusqueda = document.getElementById("cajaBusqueda")
        const botonBusqueda = document.getElementById("botonBusqueda")
        const botonBuscar = document.getElementById("botonBuscar")
        
        // guardar en el local storage
        let busquedasGuardadas = JSON.parse(localStorage.getItem("busquedas")) || []
        
        const busquedasLocalStorage = () => {    
            busquedasGuardadas.push(inputBusqueda.value)
            localStorage.setItem("busquedas", JSON.stringify(busquedasGuardadas))
        }
        
        // controlar el estado del buscador y el botón para abrirlo o cerrarlo
        let buscadorAbierto = false
        
        // mostrar buscador
        const mostrarBuscador = () => {
            buscador.style.top = "72px"
            fondoOscuroBusqueda.style.display = "block"
            inputBusqueda.focus()
            if (inputBusqueda.value === "") {
                cajaBusqueda.style.display = "none"
            }
            botonBusqueda.innerHTML = `
                <i class="botonCerrarBuscador fa fa-xmark"></i>
            `
            buscadorAbierto = true
        }
        
        // cerrar buscador
        const cerrarBuscador = () => {
            buscador.style.top = "-10px"
            fondoOscuroBusqueda.style.display = "none"
            inputBusqueda.value = ""
            cajaBusqueda.style.display = "none"
            botonBusqueda.innerHTML = `
                <i class="fa-solid fa-magnifying-glass"></i>
            `
            buscadorAbierto = false
        }
        
        // cerrar cuando se hace click afuera
        fondoOscuroBusqueda.addEventListener("click", cerrarBuscador)
        
        // abrir y cerrar el buscador
        const estadoBuscador = () => {
            buscadorAbierto ? cerrarBuscador() : mostrarBuscador()
        }
        botonBusqueda.addEventListener("click", estadoBuscador)
        
        // busquedas sugeridas
        // no tener en cuenta tildes para la comparación
        const sacarTildes = (texto) => {
            return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        }
        
        const busquedasSugeridas = async () => {
            const textoBusqueda = sacarTildes(inputBusqueda.value.toLowerCase())
          
            // productos que coinciden con el texto de búsqueda
            const productosCoincidentes = productos.filter(producto => {
                const sugerenciasProductos = sacarTildes(producto.nombre.toLowerCase())
                return sugerenciasProductos.indexOf(textoBusqueda) !== -1
            })
          
            // lista a partir de los productos coincidentes
            const sugerencias = productosCoincidentes.map(producto => {
                return `
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <img src="${producto.img}" alt="${producto.nombre}">
                            ${producto.nombre}
                        </a>
                    </li>
                `
            }).join("")

            cajaBusqueda.innerHTML = sugerencias
          
            // esperar a que se carguen todas las imágenes
            const esperarCargaImg = () => {
                const imagenesProductos = Array.from(document.querySelectorAll("#cajaBusqueda img"))
                const promesas = imagenesProductos.map(imagen => {
                    return new Promise((resolve, reject) => {
                    if (imagen.complete) {
                        resolve()
                    } else {
                        imagen.addEventListener("load", resolve)
                        imagen.addEventListener("error", reject)
                    }
                    })
                })
                return Promise.all(promesas)
            }
            await esperarCargaImg()

            // sugerencias según el texto de búsqueda
            await filtrarSugerencias(textoBusqueda)
        }
        
        // sugerir búsquedas cuando hay texto
        inputBusqueda.addEventListener("input", busquedasSugeridas)
        
        // filtrar sugerencias según el texto de búsqueda
        const filtrarSugerencias = async (textoBusqueda) => {
            const listaSugerencias = cajaBusqueda.querySelectorAll("li")
            
            // recorrer la lista
            listaSugerencias.forEach(listaSugerencia => {
                const resultadoSugerido = listaSugerencia.getElementsByTagName("a")[0]
                const textoResultado = resultadoSugerido.textContent || resultadoSugerido.innerText
            
                if (sacarTildes(textoResultado.toLowerCase()).indexOf(textoBusqueda) > -1) {
                    // si hay coincidencia con el texto de búsqueda
                    listaSugerencia.style.display = ""
                    cajaBusqueda.style.display = textoBusqueda ? "block" : "none"
                } else {
                    // si no hay coincidencia con el texto de búsqueda
                    listaSugerencia.style.display = "none"
                }
        
                // click en las sugerencias
                listaSugerencia.addEventListener("click", () => {
                    // obtener el texto
                    const sugerenciaTexto = listaSugerencia.getElementsByTagName("a")[0].textContent.trim()
                    inputBusqueda.value = sugerenciaTexto
                    inputBusqueda.focus()

                    // cerrar las sugerencias
                    cajaBusqueda.style.display = "none"

                    // buscar la sugerencia clickeada
                    setTimeout(() => {
                        busquedasLocalStorage()
                        const nombreBusqueda = encodeURIComponent(inputBusqueda.value.trim())
                        // ir hacia el catálogo filtrado
                        window.location.href = `catalogo.html?nombre=${nombreBusqueda}`
                        cerrarBuscador()
                    }, 300)
                })
            })
        }
          
        // evento cuando se presiona y suelta el botón
        botonBuscar.addEventListener("mousedown", () => {
            botonBuscar.classList.add("btnMousedown")
            botonBuscar.classList.remove("btnMouseUp")
        })
        botonBuscar.addEventListener("mouseup", () => {
            botonBuscar.classList.remove("btnMousedown")
            botonBuscar.classList.add("btnMouseUp")
        })
        
        // al hacer click en el botón
        botonBuscar.addEventListener("click", () => {
            busquedasLocalStorage()
            const nombreBusqueda = encodeURIComponent(inputBusqueda.value.trim())
            // ir hacia el catálogo
            if (nombreBusqueda !== "") {
                window.location.href = `catalogo.html?nombre=${nombreBusqueda}`
                cerrarBuscador()
            } else {
                cerrarBuscador()
            }
        })
  
        // al dar enter
        inputBusqueda.addEventListener("keydown", async (e) => {
            if (e.key === "Enter") {
                busquedasLocalStorage()
                const nombreBusqueda = encodeURIComponent(inputBusqueda.value.trim())
                // ir hacia el catálogo
                if (nombreBusqueda !== "") {
                    await new Promise(resolve => {
                        setTimeout(() => {
                            window.location.href = `catalogo.html?nombre=${nombreBusqueda}`
                            resolve()
                        }, 0)
                    })
                    cerrarBuscador()
                } else {
                    cerrarBuscador()
                }
            }
        })
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
buscarProductos()