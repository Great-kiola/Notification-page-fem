let notifNum = document.querySelector(".notifNum");
let markAll = document.getElementById("markAll");

let messages = document.querySelectorAll(".message");

markAll.addEventListener("click", function(e){
    e.preventDefault();

    messages.forEach( (msg) => {
        msg.classList.remove("active");
    });

    notifNum.innerHTML = 0;


});

messages.forEach( (msg) => {
    msg.addEventListener("click", function(e){
        e.preventDefault();

        msg.classList.remove("active");
        notifNum.innerHTML --;

    });
});




