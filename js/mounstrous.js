//Clase 70

const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById("boton-reiniciar")
const botonAtrasMensajeSeleccionarMascota = document.getElementById("escoger-otra-mascota")
const botonSeguirMensajeSeleccionarMasota = document.getElementById("boton-seguir-mascota-enemigo")
const botonSeguirAtaques = document.getElementById("boton-seguir-ataque")

let mascotaSeleccionadaJugador = ""

const spanMascotaJugador = document.getElementById("mascotaJugador")

const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")
let mascotaEmenigo = ""
let imagenMascotaEnemigo = ""

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const seccionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-enemigo")
const resultadoDelJugador = document.getElementById("resultado-del-jugador")
const resultadoDelEnemigo = document.getElementById("resultado-del-enemigo")

const mensajeMascotaEnemigoMostrar = document.getElementById("mensaje-mascota-enemigo")
const nombreTarjetaEnemigo = document.getElementById("nombre-tarjeta-enemigo")

const imagenMascotaEnemigoAtaque = document.getElementById("tarjeta-ataque-imagen-mascota-enemigo")

const mensajeErrorMostrar = document.getElementById("mensaje-error-mostrar")
const nombreMascotaSeleccionada = document.getElementById("nombre-tarjeta")
const botonCerrarMensaje = document.getElementById("boton-cerrar-mensaje")
const imagenMascotaSeleccionada = document.getElementById("img-tarjeta")

const imagenMacotaJugadorAtaque = document.getElementById("tarjeta-ataque-imagen-mascota-jugador")

const tarjeteroMascotas = document.getElementById("tarjetoro-mascotas")

const botoneraAtaques = document.getElementById("botonera-ataque")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let botonFuego
let botonAgua
let botonTierra

let enableTecla = true

let mounstros = []
let opcionDeMounstro
let inputMajomon
let inputDavidmon
let inputAlimon
let inputManumon
let inputSantimon
let inputTeomon
let ataqueJugador
let ataqeuJugadorBoton
let ataqueEnemigo
let arrayAtaquesEnemigos = []
let ataqueMounstroEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let mascotasJugadorGlobal = "NINGUNA" 
let imgMascotaJugadorGlobal = ""
let botonesA = []
let ataqueJugadroArreglo = []
let arrayResultadoJugador = []
let arrayResultadoEnemigo = []
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mapaMounstors.png'

class Mounstro {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, 800 - this.ancho)
        this.y = aleatorio(0, 800 - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    static obtenerMonstruo(nombre, monstruos) {
        return monstruos.find((monstruo) => monstruo.nombre === nombre);
      }

    pintarMounstro() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let manumon = new Mounstro('MANUMON', './assets/Manumon.png', 5, './assets/manumonMapa.png')
manumon.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🥌', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let santimon = new Mounstro('SANTIMON', './assets/Santimon.png', 5, './assets/santimonMapa.png')
santimon.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let majomon = new Mounstro('MAJOMON', './assets/Majomon.png', 5, './assets/majomonMapa.png')
majomon.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let davidmon = new Mounstro('DAVIDMON', './assets/Davidmon.png', 5, './assets/davidmonMapa.png')
davidmon.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
)
let alimon = new Mounstro('ALIMON', './assets/Alimon.png', 5, './assets/alimonMapa.png')
alimon.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let teomon = new Mounstro('TEOMON', './assets/Teomon.png', 5, './assets/teomonMapa.png')
teomon.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)

let manumonEnemigo = new Mounstro('MANUMON', './assets/Manumon.png', 5, './assets/manumonMapa.png')
manumonEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🥌', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)

let santimonEnemigo = new Mounstro('SANTIMON', './assets/Santimon.png', 5, './assets/santimonMapa.png')
santimonEnemigo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let majomonEnemigo = new Mounstro('MAJOMON', './assets/Majomon.png', 5, './assets/majomonMapa.png')
majomonEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let davidmonEnemigo = new Mounstro('DAVIDMON', './assets/Davidmon.png', 5, './assets/davidmonMapa.png')
davidmonEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
)
let alimonEnemigo = new Mounstro('ALIMON', './assets/Alimon.png', 5, './assets/alimonMapa.png')
alimonEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)
let teomonEnemigo = new Mounstro('TEOMON', './assets/Teomon.png', 5, './assets/teomonMapa.png')
teomonEnemigo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra', tipo: 'TIERRA'},
    {nombre: '🔥', id: 'boton-fuego', tipo: 'FUEGO'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
    {nombre: '💧', id: 'boton-agua', tipo: 'AGUA'},
)

mounstros.push(manumon, santimon, majomon, davidmon, alimon, teomon)

function iniciarJuego() {

    mostrarOcultarSeccion("seleccionar-ataque", "none")
    mostrarOcultarSeccion("mensaje-seleccionar-mascota", "none")
    mostrarOcultarSeccion("reiniciar", "none")
    mostrarOcultarSeccion("mensaje-seleccionar-mascota-enemigo", "none")
    mostrarOcultarSeccion("ver-mapa", "none")
    
    mounstros.forEach((mounstro) => {
        opcionDeMounstro = `
            <input type="radio" name="mascota" id=${mounstro.nombre} value=${mounstro.foto} />
            <label class="tarjeta-de-mokepon" for=${mounstro.nombre}>
                <p class="nombre-personaje">${mounstro.nombre}</p>
                <img src=${mounstro.foto} alt=${mounstro.nombre} />
            </label>
        `
        tarjeteroMascotas.innerHTML += opcionDeMounstro

        inputManumon = document.getElementById("MANUMON")
        inputSantimon = document.getElementById("SANTIMON")
        inputMajomon = document.getElementById("MAJOMON")
        inputDavidmon = document.getElementById("DAVIDMON")
        inputAlimon = document.getElementById("ALIMON")
        inputTeomon = document.getElementById("TEOMON")
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonSeguirAtaques.addEventListener("click", mostrarSeccionAtaques)
    
    botonReiniciar.addEventListener("click", reiniciarjuego)

    botonAtrasMensajeSeleccionarMascota.addEventListener("click", atrasSelecionarMascota)
    
    botonSeguirMensajeSeleccionarMasota.addEventListener("click", mostrarMapa)   
}

function seleccionarMascotaJugador() {

    if (inputMajomon.checked) {
        spanMascotaJugador.innerHTML = inputMajomon.id
        mascotaSeleccionadaJugador = inputMajomon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputMajomon.id, mounstros)
        imgMascotaJugadorGlobal = inputMajomon.value
    } else if (inputDavidmon.checked) {
        spanMascotaJugador.innerHTML = inputDavidmon.id
        mascotaSeleccionadaJugador = inputDavidmon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputDavidmon.id, mounstros)
        imgMascotaJugadorGlobal = inputDavidmon.value
    } else if (inputAlimon.checked) {
        spanMascotaJugador.innerHTML = inputAlimon.id
        mascotaSeleccionadaJugador = inputAlimon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputAlimon.id, mounstros)
        imgMascotaJugadorGlobal = inputAlimon.value
    } else if (inputManumon.checked) {
        spanMascotaJugador.innerHTML = inputManumon.id
        mascotaSeleccionadaJugador = inputManumon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputManumon.id, mounstros)
        imgMascotaJugadorGlobal = inputManumon.value
    } else if (inputSantimon.checked) {
        spanMascotaJugador.innerHTML = inputSantimon.id
        mascotaSeleccionadaJugador = inputSantimon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputSantimon.id, mounstros)
        imgMascotaJugadorGlobal = inputSantimon.value
    } else if (inputTeomon.checked) {
        spanMascotaJugador.innerHTML = inputTeomon.id
        mascotaSeleccionadaJugador = inputTeomon.id
        mascotasJugadorGlobal = Mounstro.obtenerMonstruo(inputTeomon.id, mounstros)
        imgMascotaJugadorGlobal = inputTeomon.value
    } else {
        mascotaSeleccionadaJugador = "NINGUNA"
    }

    if (mascotaSeleccionadaJugador == "NINGUNA") {
        mostrarOcultarSeccion ("mensaje-seleccionar-mascota", "flex")
        mostrarOcultarSeccion ("seleccionar-mascota", "none")
        mostrarOcultarSeccion ("boton-seguir-mascota-enemigo", "none")
        mostrarOcultarSeccion("tarjeta-mascota-sleccionada", "none")
        mensajeError("No seleccionaste NINGUNA MASCOTA, selecciona una para continuar.")
    } else {
        mostrarOcultarSeccion ("mensaje-seleccionar-mascota", "flex")
        mostrarOcultarSeccion ("seleccionar-mascota", "none")
        mostrarOcultarSeccion ("boton-cerrar-mensaje", "none")
        mostrarOcultarSeccion ("boton-seguir-mascota-enemigo", "flex")
        mostrarOcultarSeccion("tarjeta-mascota-sleccionada", "flex")
        mensajeError("Tu mascota Seleccionada es " + mascotaSeleccionadaJugador)
    }

}

function seleccionarMascotaEnemigo(enemigoSelecionado) {

    mostrarOcultarSeccion("ver-mapa", "none")

    spanMascotaEnemigo.innerHTML = enemigoSelecionado.nombre
    mascotaEmenigo = enemigoSelecionado.nombre
    imagenMascotaEnemigo = enemigoSelecionado.foto
    ataqueMounstroEnemigo = enemigoSelecionado.ataques
    mensajeMascotaEnemigo("La mascota del ENEMIGO es " + mascotaEmenigo, mascotaEmenigo, imagenMascotaEnemigo)

    mostrarOcultarSeccion("mensaje-seleccionar-mascota-enemigo", "flex")
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueEnemigoAleatorio()
}

function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueEnemigoAleatorio()   
}

function ataqeuTierra() {
    ataqueJugador = "TIERRA"
    ataqueEnemigoAleatorio()
}

function ataqueEnemigoAleatorio() {
    let arrayMascotaSeleccionadaEnemigo = arayAtaquesMascota(mascotaEmenigo)
    
    console.log(arrayMascotaSeleccionadaEnemigo)
    ataqueEnemigo = aleatorio(0, ataqueMounstroEnemigo.length -1)

    let tipoAtaque = arrayMascotaSeleccionadaEnemigo[ataqueEnemigo].tipo

    arrayAtaquesEnemigos.push(tipoAtaque)
    ataqueEnemigo = tipoAtaque
    console.log(arrayAtaquesEnemigos)
    combate()
}

function activarRevisarVidas() {
    if (arrayResultadoEnemigo.length === 5) {
        revisarVidas()
    }
}

function combate() {
    if(ataqueJugador === ataqueEnemigo) {
        arrayResultadoJugador.push("✔️")
        arrayResultadoEnemigo.push("❌")
        crearMensaje("EMPATASTE", "➖", "➖")
    } else if(ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") {
        arrayResultadoJugador.push("✔️")
        arrayResultadoEnemigo.push("❌")
        crearMensaje("GANASTE", "✔️", "❌")
    } else if(ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO") {
        arrayResultadoJugador.push("✔️")
        arrayResultadoEnemigo.push("❌")
        crearMensaje("GANASTE", "✔️", "❌")
    } else if(ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA") {
        arrayResultadoJugador.push("✔️")
        arrayResultadoEnemigo.push("❌")
        crearMensaje("GANASTE", "✔️", "❌")
    } else {
        arrayResultadoJugador.push("❌")
        arrayResultadoEnemigo.push("✔️")
        crearMensaje("PERDISTE", "❌", "✔️")
    }

    console.log(arrayResultadoJugador, arrayResultadoEnemigo)
    activarRevisarVidas()
    
}

function filtrarVictorias(resultados) {
    const filtro = resultados.filter(elemento => elemento === "✔️")
    return filtro
}

function revisarVidas(){
    let resultadoFinalJugador = filtrarVictorias(arrayResultadoJugador)
    let resultadoFinalEnemigo = filtrarVictorias(arrayResultadoEnemigo)

    if(resultadoFinalEnemigo.length === resultadoFinalJugador.length) {
        seccionMensajes.innerHTML = "Tuvimos un EMPATE GENERAL"
        desabilitarBotones()
        mostrarOcultarSeccion("reiniciar", "block")
    } else if (resultadoFinalJugador.length > resultadoFinalEnemigo.length) {
        seccionMensajes.innerHTML = "Tu eres el GANADOR de la PELEA - GANASTE TODO"
        desabilitarBotones()
        mostrarOcultarSeccion("reiniciar", "block")
    } else if(resultadoFinalJugador.length < resultadoFinalEnemigo.length) {
        seccionMensajes.innerHTML = "El enemigo es el GANADOR de la PELEA - PERDISTE TODO"
        desabilitarBotones()
        mostrarOcultarSeccion("reiniciar", "block")
    }

}

function desabilitarBotones() {
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function crearMensaje(resultado, resultadoUno, resultadoDos) {
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")
    let nuevoResultadoDelJugador = document.createElement("p")
    let nuevoResultadoDelEnemigo = document.createElement("p")

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    nuevoResultadoDelJugador.innerHTML = resultadoUno
    nuevoResultadoDelEnemigo.innerHTML = resultadoDos

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
    resultadoDelJugador.appendChild(nuevoResultadoDelJugador)
    resultadoDelEnemigo.appendChild(nuevoResultadoDelEnemigo)
}

function reiniciarjuego() {
    location.reload()
}

function mensajeMascotaEnemigo (mensaje, mascota, imagenMascota) {
    imagenMascotaEnemigo = document.getElementById("img-tarjeta-enemigo")
    mensajeMascotaEnemigoMostrar.innerHTML = mensaje
    nombreTarjetaEnemigo.innerHTML = mascota
    imagenMascotaEnemigo.src = imagenMascota
    imagenMascotaEnemigoAtaque.src = imagenMascota
}

function mensajeError(mensaje) {
    mensajeErrorMostrar.innerHTML = mensaje
    nombreMascotaSeleccionada.innerHTML = mascotasJugadorGlobal.nombre
    imagenMascotaSeleccionada.src = imgMascotaJugadorGlobal

    botonCerrarMensaje.addEventListener("click", cerrarMensajeError)
}

function cerrarMensajeError() {
    mostrarOcultarSeccion("mensaje-seleccionar-mascota", "none")
    mostrarOcultarSeccion("seleccionar-mascota", "flex")
}

function arayAtaquesMascota(mascota) {
    let arrayAtaques = mounstros.find((mounstro) => mounstro.nombre === mascota).ataques
    return arrayAtaques
}

function mostrarMapa() {
    mostrarOcultarSeccion("mensaje-seleccionar-mascota", "none")
    mostrarOcultarSeccion("ver-mapa", "flex")
    
    mapa.width = 800
    mapa.height = 800

    function actualizarTamañoCanva() {
        let anchoPantalla = window.innerWidth
        mapa.style.width = (anchoPantalla < 510) ? '300px' : '400px'
        mapa.style.height = (anchoPantalla < 510) ? '300px' : '400px'
    }

    actualizarTamañoCanva()
    window.addEventListener('resize', actualizarTamañoCanva)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePrecionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function mostrarSeccionAtaques() {
    imagenMacotaJugadorAtaque.src = imgMascotaJugadorGlobal

    let ataquesMountroJugador = arayAtaquesMascota(mascotasJugadorGlobal.nombre)
    ataquesMountroJugador.forEach((ataque) => {
        ataqeuJugadorBoton = `
            <button id=${ataque.id} class="boton-ataques BAtaque">${ataque.nombre}</button>
        `
        botoneraAtaques.innerHTML += ataqeuJugadorBoton
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botonesA = document.querySelectorAll(".BAtaque")

    secuenciaAtaques()
    mostrarOcultarSeccion("mensaje-seleccionar-mascota-enemigo", "none")
    mostrarOcultarSeccion("seleccionar-ataque", "flex")
}

function secuenciaAtaques() {
    botonesA.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugadroArreglo.push("FUEGO")
                console.log(ataqueJugadroArreglo)
                boton.style.background = "#f07ba8"
                ataqueFuego()
                boton.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugadroArreglo.push("AGUA")
                console.log(ataqueJugadroArreglo)
                boton.style.background = "#f07ba8"
                ataqueAgua()
                boton.disabled = true
            } else {
                ataqueJugadroArreglo.push("TIERRA")
                console.log(ataqueJugadroArreglo)
                boton.style.background = "#f07ba8"
                ataqeuTierra()
                boton.disabled = true
            }
        })
    })
}

function mostrarOcultarSeccion(seccion, accion) {
    document.getElementById(seccion).style.display = accion
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function atrasSelecionarMascota() {
    mostrarOcultarSeccion("mensaje-seleccionar-mascota", "none")
    mostrarOcultarSeccion("seleccionar-mascota", "flex")
}

function pintarCanvas() {

    mascotasJugadorGlobal.x = mascotasJugadorGlobal.x + mascotasJugadorGlobal.velocidadX
    mascotasJugadorGlobal.y = mascotasJugadorGlobal.y + mascotasJugadorGlobal.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotasJugadorGlobal.pintarMounstro()
    manumonEnemigo.pintarMounstro()
    santimonEnemigo.pintarMounstro()
    majomonEnemigo.pintarMounstro()
    davidmonEnemigo.pintarMounstro()
    alimonEnemigo.pintarMounstro()
    teomonEnemigo.pintarMounstro()

    if (mascotasJugadorGlobal.velocidadX !== 0 || mascotasJugadorGlobal.velocidadY !== 0) {
        revisarColision(manumonEnemigo)
        revisarColision(santimonEnemigo)
        revisarColision(majomonEnemigo)
        revisarColision(davidmonEnemigo)
        revisarColision(alimonEnemigo)
        revisarColision(teomonEnemigo)
    }
}

function moverIzquierda() {
    botonActivado("botonIzquierda", true)
    mascotasJugadorGlobal.velocidadX = -5
    pintarCanvas()
}

function moverArriba() {
    botonActivado("botonArriba", true)
    mascotasJugadorGlobal.velocidadY = -5
    pintarCanvas()
}

function moverAbajo() {
    botonActivado("botonAbajo", true)
    mascotasJugadorGlobal.velocidadY = +5
    pintarCanvas()
}

function moverDrecha() {
    botonActivado("botonDerecha", true)
    mascotasJugadorGlobal.velocidadX = +5
    pintarCanvas()
}

function detenerMovimiento() {
    botonActivado("botonIzquierda", false)
    botonActivado("botonArriba", false)
    botonActivado("botonAbajo", false)
    botonActivado("botonDerecha", false)
    mascotasJugadorGlobal.velocidadX = 0
    mascotasJugadorGlobal.velocidadY = 0
}


function sePrecionoUnaTecla(event) {
    if (!enableTecla) return
    switch (event.key) {
        case 'ArrowLeft':
        case 'a':
            moverIzquierda()
            break
        case 'ArrowUp':
        case 'w':
            moverArriba()
            break
        case 'ArrowDown':
        case 's':
            moverAbajo()
            break
        case 'ArrowRight':
        case 'd':
            moverDrecha()
            break
        default:
            break
    }
}

function botonActivado(idBoton, activado) {
    const boton = document.getElementById(idBoton)

    if (activado) {
        boton.classList.add('boton-activado')
    } else {
        boton.classList.remove('boton-activado')
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotasJugadorGlobal.y
    const abajoMascota = mascotasJugadorGlobal.y + enemigo.alto
    const derechaMascota = mascotasJugadorGlobal.x + enemigo.ancho
    const izquierdaMascota = mascotasJugadorGlobal.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    enableTecla = false
    console.log(enemigo)
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load", iniciarJuego)