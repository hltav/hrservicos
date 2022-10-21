const btninicio = document.getElementById("btn-inicio")
const btnmanutencao = document.getElementById("btn-manutencao")
const btnweb = document.getElementById("btn-web")
const btnredes = document.getElementById("btn-redes")
const bteletrica= document.getElementById("btn-eletrica")
const btncontato = document.getElementById("btn-contato")
const paginas = document.getElementById("pagina")


esconderPaginaSelecionada= () =>{
    const paginaSelecionada = querySelector("selecionado")

    paginaSelecionada.classList.remove("selecionado")

}

mostrarPagina = (indicePagina) => {
    paginas[indicePagina].classList.add("selecionado")

}

