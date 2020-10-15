document.addEventListener("DOMContentLoaded", event => {
    
    let firstColor = document.querySelector(".main__container-color1")
    let secondColor = document.querySelector(".main__container-color2")
    let colorReader = document.querySelector(".main__container-color-reader")

    function updateColor() {
        document.body.style.background = `linear-gradient(to right, ${firstColor.value} , ${secondColor.value})`
        colorReader.innerHTML = `gradient(to right,${firstColor.value }, ${secondColor.value})`
    }

    firstColor.addEventListener('change', target => {
        updateColor()
    })

    secondColor.addEventListener('change', target => {
        updateColor()
    })
})