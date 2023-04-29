const buscador = document.querySelector(".contenedorBusqueda")
const fondoOscuroBusqueda = document.querySelector(".fondoOscuroBusqueda")
const inputBusqueda = document.querySelector(".inputBusqueda")
const cajaBusqueda = document.querySelector(".cajaBusqueda")
const botonBusqueda = document.getElementById("botonBusqueda")
const botonBuscar = document.querySelector(".botonBuscar")

// guardar en el local storage (SE GUARDA MAL)
let busquedasGuardadas = JSON.parse(localStorage.getItem("busquedas")) || []

const busquedasLocalStorage = () => {    
    busquedasGuardadas.push(inputBusqueda.value)
    localStorage.setItem("busquedas", JSON.stringify(busquedasGuardadas))
}

// controlar el estado del buscador y el boton para abrirlo o cerrarlo
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
const busquedasSugeridas = () => {
    const textoBusqueda = inputBusqueda.value.toLowerCase()
  
    // productos que coinciden con el texto de búsqueda
    const productosCoincidentes = productos.filter(producto => {
        const sugerenciasProductos = producto.nombre.toLowerCase()
        return sugerenciasProductos.indexOf(textoBusqueda) !== -1
    })
  
    // lista a partir de los productos coincidentes
    const sugerencias = productosCoincidentes.map(producto => {
        return `<li><a href="#"><i class="fa-solid fa-magnifying-glass"></i>${producto.nombre}</a></li>`
    }).join("")

    cajaBusqueda.innerHTML = sugerencias;
  
    // sugerencias según el texto de búsqueda
    filtrarSugerencias(textoBusqueda)
}

// sugerir búsquedas cuando hay texto
inputBusqueda.addEventListener("input", busquedasSugeridas)

// filtrar sugerencias según el texto de búsqueda
const filtrarSugerencias = (textoBusqueda) => {
    const listaSugerencias = cajaBusqueda.querySelectorAll("li")
    
    // recorrer la lista
    listaSugerencias.forEach(listaSugerencia => {
        const resultadoSugerido = listaSugerencia.getElementsByTagName("a")[0]
        const textoResultado = resultadoSugerido.textContent || resultadoSugerido.innerText
    
        if (textoResultado.toLowerCase().indexOf(textoBusqueda) > -1) {
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
            const sugerenciaTexto = listaSugerencia.getElementsByTagName("a")[0].textContent
            inputBusqueda.value = sugerenciaTexto
            inputBusqueda.focus()
            // cerrar las sugerencias
            cajaBusqueda.style.display = "none"
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
    cerrarBuscador()
    busquedasLocalStorage()
})