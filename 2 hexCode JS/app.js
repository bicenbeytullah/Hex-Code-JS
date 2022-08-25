let btn = document.querySelector(".btn");
let body = document.body;
let hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b",  "c", "d", "e", "f",];

btn.onclick = function () {
   let hex = "#";
    for (let i = 0; i < 6; i++) {
      let randomHex = Math.floor(Math.random() * hexCode.length);
       hex += hexCode[randomHex];



    }  

    body.style.background = hex;
    this.innerHTML = hex;
}


 
