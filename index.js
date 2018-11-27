//const title = document.getElementById("title");
//title.innerHTML = "Hi !! Form JS";

const title = document.querySelector("#title"); //#아이디, .클래스

function clickHandle() {
  title.style.color = "red";
}

window.addEventListener("click", clickHandle);
