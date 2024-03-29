let currentCount = 1
bricksArray = ['<div class="brick"></div>'];


function addBrick() {
    if (currentCount <= 12) {
        currentCount++;

        bricksArray.push('<div class="brick"></div>')
        document.getElementById("right-container").innerHTML = bricksArray;

    }

    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "green";

}


function removeBrick() {
    if (currentCount >= 1) {
        currentCount--;
        bricksArray.pop();
        document.getElementById("right-container").innerHTML = bricksArray
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "red";

}