let imagesSrc = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
imagesSrc.sort(() => Math.random() > 0.5 ? 1 : -1);

let boxes = document.querySelectorAll(".col-sm-3");
let counter = 0;
let choosenCards = [];

boxes.forEach((box, i)=> {    
    let image = box.querySelector(".back img");
    image.src = `images\\img-${imagesSrc[i]}.png`;

    
    box.addEventListener("click", (e)=> {
        box.classList.add("flip");
        choosenCards.push(box);

        if (choosenCards.length === 2) {
            if (choosenCards[0].childNodes[3].childNodes[0].src === choosenCards[1].childNodes[3].childNodes[0].src) {
                choosenCards[0].classList.add("done");
                choosenCards[1].classList.add("done");
            }else if (choosenCards[0].childNodes[3].childNodes[0].src !== choosenCards[1].childNodes[3].childNodes[0].src) {
                choosenCards[0].classList.add("diff");
                choosenCards[1].classList.add("diff");
            }
            setTimeout(function() {
                choosenCards[0].classList.remove("diff");
                choosenCards[1].classList.remove("diff");
                choosenCards[0].classList.remove("flip");
                choosenCards[1].classList.remove("flip");
                choosenCards = [];
            }, 600);
        }
    });
});