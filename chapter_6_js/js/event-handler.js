var eventHandler = function () {
    var feedBackMsg = document.getElementById('feedback');
    if (this.value.length < 5) { //this - refers to field, invoked event - var inputUser
        feedBackMsg.textContent = "User name must be 5 charakters or more!";
    } else {
        feedBackMsg.textContent = "";
    }
}
var inputUser = document.getElementById('username');
inputUser.onblur = eventHandler;
