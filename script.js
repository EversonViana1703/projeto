function toggleMode() {
  const html = document.documentElement
  //A função toogle ja faz isso sozinha
  html.classList.toggle("light")

  //pegar a tag imagem
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, sem barba e fundo azul."
    )
  } else {
    //Se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
