function loginSubmit() {
    location.href = "home.html";
}

function validateform() {
    var validateClick = confirm("Dear user" + document.articleform.userName.value + "Thanks for posting " + document.articleform.title.value);
    if (validateClick === true) {
        //location.href = "home.html";
        //document.location = "home.html";
        // location.href = "file:///Users/venkatasiva/Desktop/Simplelearn/phase1-get%20started%20with%20web%20development/simplilearn-phase1/home.html"
        return true;
    }

}