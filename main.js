console.log(document.getElementById("hb"));
let btn = document.createElement("span");
btn.className = "btn not-playing";
btn.innerHTML = "Sound";
document.body.appendChild(btn);
btn.onclick = function () {
    if (btn.classList.contains("not-playing")) {
        document.getElementById("hb").play();
        btn.classList.remove("not-playing");
    } else {
        document.getElementById("hb").pause();
        btn.classList.add("not-playing");
    }
};
