let myImg = document.querySelector("img");
let myButton = document.querySelector("button");
let myHead = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHead.textContent = "Cat's is cool, " + myName;
}

if (!localStorage.getItem("name") || localStorage.getItem("name") === "null") {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHead.textContent = "Cat's is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}

myImg.onclick = function () {
    alert("Mrrrrrrrrrr");
    let mySrc = myImg.getAttribute("src");
    if (mySrc === "images/cute_cat.jfif") {
        myImg.setAttribute("src", "images/cute_cat2.jpg");
    }
    else if (mySrc === "images/cute_cat2.jpg") {
        myImg.setAttribute("src", "images/cute_cat3.jpg");
    }
    else {
        myImg.setAttribute("src", "images/cute_cat.jfif");
    }
}
