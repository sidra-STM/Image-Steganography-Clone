function showsection(button) {
  const sectionMap = {
    encode: "encodesection",
    decode: "decodesection",
    about: "aboutsection"
  };

  
  for (let key in sectionMap) {
    document.getElementById(sectionMap[key]).style.display = (button.id === key) ? "block" : "none";
  }


  document.querySelectorAll(".tab-button").forEach(btn => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}
window.onload = function() {
  document.getElementById("encodesection").style.display = "block";
  document.getElementById("decodesection").style.display = "none";
  document.getElementById("aboutsection").style.display = "none";
};


document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});


  githubIcon.addEventListener("click", () => {
    window.open("https://github.com/abuzar-mishwani/Advanced-Image-Steganography", "_blank");
  });
