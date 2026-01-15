let parentContainer = document.getElementById("buttonGrid")

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"                                      // String containing all uppercase letters

function playSound(soundPath) {                                                 // Function to play sound from the given path
  let audio = new Audio(soundPath)
  audio.play()
}

letters.split("").forEach((letter) => {                                         // Iterates over each letter in the letters string
  let letterButton = document.createElement("button")
  letterButton.textContent = letter

  parentContainer.appendChild(letterButton)

  letterButton.addEventListener("click", () => {
    let soundPath = `./sounds/${letter}.wav`
    playSound(soundPath)
})
})

document.addEventListener("keydown", (event) => {
    let letter = event.key.toUpperCase()
    if (letters.includes(letter)) {                                                // Checks if the pressed key is in the letters string
    let soundPath = `./sounds/${letter}.wav`
    playSound(soundPath)
    }
})
