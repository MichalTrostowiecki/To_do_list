(()=>{"use strict";!function(){const t=document.querySelector("main");(function(t){const e=document.createElement("div");e.classList.add("inbox-container"),t.appendChild(e)})(t),function(t){const e=document.createElement("div");e.classList.add("projects-container"),t.appendChild(e)}(t),function(t){const e=document.createElement("button");e.textContent="+",e.classList.add("addButton"),t.appendChild(e),e.addEventListener("click",function(t){const e=document.createElement("div");e.classList.add("inputDiv");const n=document.createElement("input");n.classList.add("tittle"),t.appendChild(e),t.appendChild(n);const c=document.createElement("p");c.textContent=n.value,t.appendChild(c)}(t))}(t)}()})();