function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t();const e={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};e.startBtn.addEventListener("click",(function(){n=setInterval((()=>{e.body.style.backgroundColor=t()}),1e3),e.startBtn.setAttribute("disabled",!0)})),e.stopBtn.addEventListener("click",(function(){clearInterval(n),e.startBtn.removeAttribute("disabled")}));let n=null;
//# sourceMappingURL=01-color-switcher.1c63ef24.js.map