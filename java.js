let About = document.querySelector("#About");
let AboutText = document.querySelector(".About-text");
let prkashText = document.querySelector(".prkash-img-for-btn");
let AnkitText = document.querySelector(".Ankit-img-for-btn");
let DivyanshText = document.querySelector(".Divyansh-img-for-btn");

AboutText.innerHTML ="Hi, I'm Divyansh! I created this website to showcase innovative 3D robot technology and help developers connect and learn.";
// prkashText = "Hi, I'm Prkash! I am Divyansh coding patner";
// AnkitText = "Hi, I'm Ankit! I am Divyansh Teacher";

prkashText.addEventListener("click", () => {
  AboutText.innerHTML = "Hi, I'm Prkash! I am Divyansh coding patner. I help him with coding and development of this website.";
});

AnkitText.addEventListener("click", () => {
  AboutText.innerHTML = "Hi, I'm Ankit! I am Divyansh's teacher and mentor in robotics. I guide him in his journey to learn and innovate.";
});

DivyanshText.addEventListener("click", () => {
  AboutText.innerHTML = "Hi, I'm Divyansh! I created this website to showcase innovative 3D robot technology and help developers connect and learn.";
});

// AboutText.addEventListener ("click", () =>{
//     console.log(prkashText);
// })


