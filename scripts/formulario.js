// información del form
class InformacionForm {
    // recibir los datos y guardarlos en el localStorage
    datosForm (nombre, email, mensaje) {
        const datos = {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
        }
        this.guardarFormLocalStorage(datos)
    }
    
    // guardar los datos en el localStorage
    guardarFormLocalStorage(datos) {
        let form = this.recuperarFormLocalStorage()
        form.push(datos)
        localStorage.setItem("datos formulario", JSON.stringify(form))
    }

    // recuperar los datos desde el localStorage
    recuperarFormLocalStorage() {
        let formLS = localStorage.getItem("datos formulario") === null ? [] : JSON.parse(localStorage.getItem("datos formulario"))        
        return formLS
    }
}
const informacionForm = new InformacionForm()

// al hacer click en el botón enviar
const enviarForm = () => {
    // evento cuando se presiona y suelta el botón
    const btnEnviar = document.getElementById("btnEnviar")
    btnEnviar.addEventListener("mousedown", () => {
        btnEnviar.classList.add("btnMousedown")
        btnEnviar.classList.remove("btnMouseUp")
    })
    btnEnviar.addEventListener("mouseup", () => {
        btnEnviar.classList.remove("btnMousedown")
        btnEnviar.classList.add("btnMouseUp")
    })

    // enviar formulario
    const formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()

        // valores del formulario
        let nombre = document.getElementById("nombre").value 
        let email = document.getElementById("email").value 
        let mensaje = document.getElementById("mensaje").value 

        // acceso a la clase para guardar en el localStorage
        informacionForm.datosForm(nombre, email, mensaje) 

        alert("¡Gracias por comunicarte!")
        console.log(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`)

        // resetear el formulario
        document.getElementById("formulario").reset()
    })
}
enviarForm()