document.addEventListener("DOMContentLoaded", event => {
    
    let firstColor = document.querySelector(".main__container-color1")
    let secondColor = document.querySelector(".main__container-color2")

    function updateColor

    firstColor.addEventListener('change', target => {
        document.body.style.background = `linear-gradient(to right, ${firstColor.value} , ${secondColor.value})`
    })

    secondColor.addEventListener('change', target => {
        document.body.style.background = `linear-gradient(to right, ${firstColor.value} , ${secondColor.value})`
    })
})