function random(min,max){
    return Math.round(Math.random() * (max-min) + min);
}
var objectInfo = getComputedStyle(document.getElementById("object"))

function select1(){
    document.querySelector("li#david2").removeAttribute("class")
    document.querySelector("li#david3").removeAttribute("class")

    document.querySelector("li#david2").setAttribute("class", "unselected")
    document.querySelector("li#david3").setAttribute("class", "unselected")

    document.querySelector("li#david1").setAttribute("class", "selected")
    document.getElementById("character").removeAttribute("src")
    document.getElementById("character").setAttribute("src", "IMAGES/pic1.png")

}
function select2(){
    document.querySelector("li#david1").removeAttribute("class")
    document.querySelector("li#david3").removeAttribute("class")

    document.querySelector("li#david1").setAttribute("class", "unselected")
    document.querySelector("li#david3").setAttribute("class", "unselected")

    document.querySelector("li#david2").setAttribute("class", "selected")
    document.getElementById("character").removeAttribute("src")
    document.getElementById("character").setAttribute("src", "IMAGES/pic2.png")

}
function select3(){
    document.querySelector("li#david1").removeAttribute("class")
    document.querySelector("li#david2").removeAttribute("class")

    document.querySelector("li#david1").setAttribute("class", "unselected")
    document.querySelector("li#david2").setAttribute("class", "unselected")

    document.querySelector("li#david3").setAttribute("class", "selected")
    document.getElementById("character").removeAttribute("src")
    document.getElementById("character").setAttribute("src", "IMAGES/pic3.png")
}

document.querySelector("li#david1").addEventListener("click",select1);
document.querySelector("li#david2").addEventListener("click",select2);
document.querySelector("li#david3").addEventListener("click",select3);
var characterInfo = getComputedStyle(document.getElementById("character"))
var score = 0
function countdown() {
        var seconds = 10;
        function tick() {
            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + " Sec";
            if( seconds > 0 ) {
                setTimeout(tick, 1000);
            } else {
                document.querySelector("div.end p").textContent = "Your score is " + score;
                document.querySelector("div.end").style.visibility = "visible";
                document.querySelector("img#character").style.position = "absolute"
                document.querySelector("img#object").style.position = "absolute"
                document.querySelector("img#character").style.visibility = "hidden";
                document.querySelector("img#object").style.visibility = "hidden";

            }
        }
        tick();
    }


console.log(random(1,10));

function startGame(){
    
    document.querySelector("div.startButton").style.visibility = "hidden"; 
    document.querySelector("img#character").style.visibility = "visible";
    document.querySelector("img#object").style.visibility = "visible";
    document.querySelector("img#object").style.left = random(60, 1320) + "px";
    document.querySelector("img#object").style.marginTop = random(0, 500)+ "px";


    document.querySelector("div.end").style.visibility = "hidden";
    document.querySelector("img#character").style.position = "relative"
    document.querySelector("img#character").style.marginLeft = "45.5" + "%"
    document.querySelector("img#character").style.marginTop = "250" + "px"


    console.log("object:");
    console.log(objectInfo.left);
    console.log(objectInfo.marginTop);
    console.log("character:");
    console.log(characterInfo.marginLeft);
    console.log(characterInfo.marginTop);
    countdown()
    score = 0
    document.querySelector("span.value").textContent = score;
    var randomObject = random(1,3)
    if (randomObject == 1){
        document.querySelector("img#object").removeAttribute("src");
        document.querySelector("img#object").setAttribute("src", "IMAGES/javascript_logo.png");
    }else if (randomObject == 2){
        document.querySelector("img#object").removeAttribute("src");
        document.querySelector("img#object").setAttribute("src", "IMAGES/css_logo.png");    
    }else{
        document.querySelector("img#object").removeAttribute("src");
        document.querySelector("img#object").setAttribute("src", "IMAGES/html_logo.png");
    }
}


document.querySelector("div.startButton").addEventListener("click", startGame);
document.querySelector("div.end h3").addEventListener("click", startGame);

document.body.addEventListener("keydown",move);
var character = document.querySelector("img#character")
var style = getComputedStyle(character);
var width = getComputedStyle(mainDiv);
function move(event){
    if(event.key === "ArrowRight" || event.key === "d"){
        var oldRight = parseInt(style.marginLeft);
        var newRight = oldRight + 25;

        if (innerWidth >= 1800) {
            if (newRight < 90 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        } else if (innerWidth >= 1600 ){
            if (newRight < 88 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        } else if (innerWidth >= 1150 ){
            if (newRight < 86 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        } else if (innerWidth >= 930 ){
            if (newRight < 85 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        } else if (innerWidth >= 720 ){
            if (newRight < 83 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        } else if (innerWidth >= 0 ){
            if (newRight < 78 / 100 * innerWidth) {
                character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
            }
        }
        console.clear()
        console.log("object:");
        console.log(objectInfo.left);
        console.log(objectInfo.marginTop);
        console.log("character:");
        console.log(characterInfo.marginLeft);
        console.log(characterInfo.marginTop);

        if((parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) <= 70 && (parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) >= -70 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) <= 40 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) >= -125){
            score = score + 1;
            

            var randomObject = random(1,3)
            if (randomObject == 1){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/javascript_logo.png");
            }else if (randomObject == 2){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/css_logo.png");    
            }else{
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/html_logo.png");
            }
        
            document.querySelector("span.value").textContent = score
            document.querySelector("img#object").style.visibility = "visible";
            document.querySelector("img#object").style.left = random(60, 1320) + "px";
            document.querySelector("img#object").style.marginTop = random(0, 500)+ "px";
            document.querySelector("img.object").style.width = random(60,120) + "px"

    }}
    else if(event.key === "ArrowLeft" || event.key === "a"){
        var oldRight = parseInt(style.marginLeft);
        var newRight = oldRight - 25;

        if (newRight > 1 / 100 * innerWidth) {
            character.style.marginLeft = newRight / parseInt(width.width) * 100 + "%";
        }
        console.clear()
        console.log("object:");
        console.log(objectInfo.left);
        console.log(objectInfo.marginTop);
        console.log("character:");
        console.log(characterInfo.marginLeft);
        console.log(characterInfo.marginTop);

        if((parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) <= 70 && (parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) >= -70 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) <= 40 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) >= -125){
            score = score + 1;

            var randomObject = random(1,3)
            if (randomObject == 1){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/javascript_logo.png");
            }else if (randomObject == 2){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/css_logo.png");    
            }else{
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/html_logo.png");
            }
        
            document.querySelector("span.value").textContent = score
            document.querySelector("img#object").style.visibility = "visible";
            document.querySelector("img#object").style.left = random(60, 1320) + "px";
            document.querySelector("img#object").style.marginTop = random(0, 500)+ "px";
            document.querySelector("img.object").style.width = random(60,120) + "px"

    }}
    else if(event.key === "ArrowUp" || event.key === "w"){
        var oldTop = parseInt(style.marginTop);
        var newTop = oldTop - 20;
        if (newTop >= 0){
            character.style.marginTop = newTop + "px";
        }
        console.clear()
        console.log("object:");
        console.log(objectInfo.left);
        console.log(objectInfo.marginTop);
        console.log("character:");
        console.log(characterInfo.marginLeft);
        console.log(characterInfo.marginTop);

        if((parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) <= 70 && (parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) >= -70 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) <= 40 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) >= -125){
            score = score + 1;

            var randomObject = random(1,3)
            if (randomObject == 1){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/javascript_logo.png");
            }else if (randomObject == 2){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/css_logo.png");    
            }else{
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/html_logo.png");
            }
        
            document.querySelector("span.value").textContent = score
            document.querySelector("img#object").style.visibility = "visible";
            document.querySelector("img#object").style.left = random(60, 1320) + "px";
            document.querySelector("img#object").style.marginTop = random(0, 500)+ "px";
            document.querySelector("img.object").style.width = random(60,120) + "px"

    }}
    else if(event.key === "ArrowDown" || event.key === "s"){
        var oldTop = parseInt(style.marginTop);
        var newTop = oldTop + 20;
        if (newTop <= 520) {
            character.style.marginTop = newTop + "px";
        }
        console.clear()
        console.log("object:");
        console.log(objectInfo.left);
        console.log(objectInfo.marginTop);
        console.log("character:");
        console.log(characterInfo.marginLeft);
        console.log(characterInfo.marginTop);

        if((parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) <= 70 && (parseInt(characterInfo.marginTop) - parseInt(objectInfo.marginTop)) >= -70 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) <= 40 && parseInt(characterInfo.marginLeft) - parseInt(objectInfo.left) >= -125){
            score = score + 1;

            var randomObject = random(1,3)
            if (randomObject == 1){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/javascript_logo.png");
            }else if (randomObject == 2){
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/css_logo.png");    
            }else{
                document.querySelector("img#object").removeAttribute("src");
                document.querySelector("img#object").setAttribute("src", "IMAGES/html_logo.png");
            }
        
            document.querySelector("span.value").textContent = score
            document.querySelector("img#object").style.visibility = "visible";
            document.querySelector("img#object").style.left = random(60, 1320) + "px";
            document.querySelector("img#object").style.marginTop = random(0, 500)+ "px";
            document.querySelector("img.object").style.width = random(60,120) + "px"

    }}
}
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);







