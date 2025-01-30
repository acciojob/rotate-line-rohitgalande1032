//your JS code here. If required.
let line = document.getElementById("line");

let angle = 2;
setInterval(()=>{
	angle+=2;
	line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20)
