// información del form
class InformacionForm {
    // recibir los datos y guardarlos en el localStorage
    async datosForm (nombre, email, mensaje) {
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            const datos = await respuesta.json()
            console.log(datos)
            this.guardarFormLocalStorage(datos)
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "¡Lo sentimos!",
                text: "Ocurrió un error con tu mensaje, intentalo de nuevo más tarde.",
                icon: "error",
                confirmButtonText: "ENTENDIDO",
                background: "#f6f6f6",
                color: "#1a1a1a",
                confirmButtonColor: "#1a1a1a",
                timer: 3000
            })
        }
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
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault()

        // valores del formulario
        let nombre = document.getElementById("nombre").value 
        let email = document.getElementById("email").value 
        let mensaje = document.getElementById("mensaje").value 

        // mostrar que se está enviando el formulario
        btnEnviar.innerText = "Enviando..."

        // acceso a la clase para guardar en el localStorage
        await informacionForm.datosForm(nombre, email, mensaje) 

        // mostrar que el fomrulario fue enviado
        btnEnviar.innerText = "Enviado"

        // alert de envío de formulario
        Swal.fire({
            title: "¡Gracias por contactarnos!",
            text: "En breve nos comunicaremos con vos.",
            icon: "success",
            showConfirmButton: false,
            background: "#f6f6f6",
            color: "#1a1a1a",
            timer: 3000
        }) .then (() => {
            btnEnviar.innerText = "Enviar"
        })

        // resetear el formulario
        document.getElementById("formulario").reset()
    })
}
enviarForm()