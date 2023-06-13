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

        if (messages.active) {
            msg.classList.remove("active");

            if (notifNum.innerHTML >= 1){
                notifNum.innerHTML --;
            } else if (notifNum.innerHTML <= 0){
                notifNum.innerHTML = 0;
            } else{
                notifNum.innerHTML ++;
            }
        }

    });
});




