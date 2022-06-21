const btnOnAddActive = document.querySelectorAll(".onAdd");

export const ondAddActive = () => {
    btnOnAddActive.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            if (!btn.classList.contains(".onAdd-active")) {
                console.log('Texto ANTES de agregar clase');
                btn.classList.add(".onAdd-active")
                console.log('Texto DESPUES de agregar clase');
                /* setTimeout(() => {
            btn.classList.remove(".onAdd-Active")
          }, 3000) */
            }
        })
    })
}