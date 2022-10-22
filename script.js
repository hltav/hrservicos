const btninicio = document.getElementById("btn-inicio")
const btnmanutencao = document.getElementById("btn-manutencao")
const btnweb = document.getElementById("btn-web")
const btnredes = document.getElementById("btn-redes")
const btneletrica= document.getElementById("btn-eletrica")
const btncontato = document.getElementById("btn-contato")
const paginas = document.querySelectorAll('.pagina')


btninicio.addEventListener("click", () => selectMenu(btninicio.value))
btnmanutencao.addEventListener("click", () => selectMenu(btnmanutencao.value))
btnweb.addEventListener("click", () => selectMenu(btnweb.value))
btnredes.addEventListener("click", () => selectMenu(btnredes.value))
btneletrica.addEventListener("click", () => selectMenu(btneletrica.value))
btncontato.addEventListener("click", () => selectMenu(btncontato.value))

function selectMenu(menu) {
    paginas.forEach((pagina) => {
        if(pagina.classList.value.includes(menu)){
            pagina?.classList?.add('selecionado')
            return
        }
        else{
            pagina?.classList?.remove('selecionado')

        }

        })
    
}








