function sanduiche() {
    const menumobile = document.getElementById("myLinks")
    const categorias = document.getElementById("opcoes")
    if (menumobile.style.display === "block"){
        menumobile.style.display = "none"
        categorias.style.display = "block"
        } else {
            menumobile.style.display = "block"
        categorias.style.display = "none"
        }
    }