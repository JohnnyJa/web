
var LvivIntro = document.getElementById("lviv-intro");
LvivIntro.onclick = function(){
    if(LvivIntro.className == "red")
        LvivIntro.className = "green";
    else
        LvivIntro.className = "red";
};

var LvivEnding = document.querySelectorAll("p#lviv-ending")
LvivEnding[0].onclick = function(){
    if(LvivEnding[0].className == "red")
        LvivEnding[0].className = "green";
    else
        LvivEnding[0].className = "red";
};

var imagesDiv = document.getElementById("images");
var addButton = document.getElementById("add-button");
addButton.onclick = function(){
    var img = document.createElement("img");
    img.src = "img/lviv2.png"
    imagesDiv.appendChild(img);
}

var increaseButton = document.getElementById("increase-button");
increaseButton.onclick = function(){
    var images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width += 10;
        image.height += 10;
    });
}

var decreaseButton = document.getElementById("decrease-button");
decreaseButton.onclick = function(){
    var images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width -= 10;
        image.height -= 10;
    });
}

var deleteButton = document.getElementById("delete-button");
deleteButton.onclick = function(){
    var images = document.querySelectorAll("img");  
    if(images.length > 1)
    {
        imagesDiv.removeChild(images[images.length -1 ]);
    }
}