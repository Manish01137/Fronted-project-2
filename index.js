const cursor = document.getElementById("cursor");
const cursorImg = document.getElementById("cursor-img");
const images = cursorImg.querySelectorAll("img");

let index = 0;

 
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorImg.style.left = e.clientX - 125 + "px"; // center align (250px / 2)
    cursorImg.style.top = e.clientY - 125 + "px";
});

 
setInterval(() => {
    images.forEach((img, i) => {
        img.style.opacity = "0";
    });

    images[index].style.opacity = "1";
    index = (index + 1) % images.length;
}, 1000);
