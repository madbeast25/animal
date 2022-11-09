var numberOfbuttons=document.querySelectorAll(".tool").length;

for (i=0;i<numberOfbuttons;i++) {
    document.querySelectorAll(".tool")[i].addEventListener("click" ,function(){
         var buttoninnerHTML= this.innerHTML;
        makeSound(buttoninnerHTML);
        addAnimation(buttoninnerHTML);

    })
}

document.addEventListener("keypress",function(event){
        makeSound(event.key);
        addAnimation(event.key);

})

function makeSound(key){
    switch(key) {
        case "t":
            var tiger=new Audio("sounds/tiger.mp3")
            tiger.play();
            break;

        case "d":
            var dog=new Audio("sounds/dog.mp3")
            dog.play();
            break;

        case "c":
             var cat=new Audio("sounds/cat.mp3")
             cat.play();
             break;

        case "e":
             var elephant=new Audio("sounds/elephant.mp3")
             elephant.play();
             break;

        case "l":
             var lion=new Audio("sounds/lion.mp3")
             lion.play();
             break;

             default: alert("hey kiddo");
    }
}

function addAnimation(currentKey){
      var anime=document.querySelector("." + currentKey);
      anime.classList.add(".pressed");
}

setTimeout(function(){
    anime.classList.remove(".pressed")
},100);