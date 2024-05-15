document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("button-no")

    noButton.addEventListener("mouseover", function () {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth))
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight))
        noButton.style.position = "absolute"
        noButton.style.left = `${x}px`
        noButton.style.top = `${y}px`
    })
})

const audio = new Audio()
audio.src = "./src/romantico.mp3"
