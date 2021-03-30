function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score" + score
}

function saveScore() {
    localStorage.setItem("score", score);
}

function nextPage() {
    window.location = "quiz_login.html";
}

function addUser()
{
    player1_name = document.getElementById("p1_name_input").value;
    player2_name = document.getElementById("p2_name_input").value;

    localStorage.setItem("p1_name_input", player1_name);
    localStorage.setItem("p2_name_input", player2_name);

    window.location = "quiz_page.html";
}

