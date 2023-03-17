
// Obtener las imágenes miniatura y la imagen grande
const smallImgs = document.querySelectorAll(".small-img");
const mainImg = document.getElementById("MainImg");

// Añadir un controlador de eventos a cada imagen miniatura
smallImgs.forEach((img) => {
  img.addEventListener("click", () => {
    // Cambiar la imagen grande a la imagen seleccionada
    mainImg.setAttribute("src", img.getAttribute("src"));
    mainImg.setAttribute("alt", img.getAttribute("alt"));
  });
});


// Animacion del zooom------------------------------------------
const container = document.getElementById("container_image_big");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.log(x,y);

  img.style.transformOrigin=`${x}px ${y}px`;
  img.style.transform="scale(2)"
})

container.addEventListener("mouseleave",()=>{
  img.style.transformOrigin="center";
  img.style.transform="scale(1)"
})

