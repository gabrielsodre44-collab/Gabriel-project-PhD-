const dish = document.getElementById("dish");
const btn = document.getElementById("spawnBtn");

function spawnBacteria() {
    for (let i = 0; i < 40; i++) {  
        const b = document.createElement("div");
        b.classList.add("bacteria");

        const size = Math.random() * 10 + 8;
        b.style.width = size + "px";
        b.style.height = size + "px";

        b.style.top = Math.random() * 320 + "px";
        b.style.left = Math.random() * 320 + "px";

        const color = ["#00ff9d", "#00eaff", "#ff00c8", "#f3ff00"][Math.floor(Math.random()*4)];
        b.style.background = color;
        b.style.boxShadow = `0 0 12px ${color}`;

        dish.appendChild(b);
    }
}

btn.addEventListener("click", spawnBacteria);
