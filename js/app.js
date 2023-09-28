const button = document.querySelector(".button-start")


button.addEventListener("click", () => { 
    if(button.textContent === "tap to wooow"){
        addMouseMove()
    }else if (button.textContent === "stop wooow"){
        deleteMouseMove()
    }
});

const listener = function (event) {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(event.clientX - window.innerWidth / 2) * -0.0125}deg;
        --move-y: ${(event.clientY - window.innerHeight / 2) * -0.025}deg;
        `
    })
}
    
function addMouseMove() {
    button.textContent = 'stop wooow';
    document.addEventListener('mousemove', listener )
}

function deleteMouseMove() {
    button.textContent = 'tap to wooow'
    document.removeEventListener('mousemove', listener);
}