function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

function calculate() {
    var displayBox = document.getElementById("result").value;
    var answer = eval(displayBox);
    document.getElementById("result").value = answer;
}

function display(value) {
    (document.getElementById("result")).value += value;
}