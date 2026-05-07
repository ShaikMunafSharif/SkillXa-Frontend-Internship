const checkAnswer = (answer) => {

    if(answer === "correct") {
        document.getElementById("result").innerHTML = "Correct Answer!";
    }
    else {
        document.getElementById("result").innerHTML = "Wrong Answer!";
    }

}