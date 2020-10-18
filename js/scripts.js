function loginSubmit() {
    location.href = "home.html";
}

function validateform() {
    let userName = document.articleform.userName.value;
    let title = document.articleform.title.value;
    let description = document.articleform.description.value;
    let errorFlag = false;

    if(userName !== '' && userName.length < 3){
       document.getElementById('userNameError').innerHTML = 'User Name length greater the 3 characters';
       errorFlag = true;
    }
    if(title !== '' && title.length < 6){
        document.getElementById('titleError').innerHTML = 'Title length greater the 6 characters';
        errorFlag = true;
     }
     if(description !== '' && description.length < 20){
        document.getElementById('descriptionError').innerHTML = 'Description should be greater the 20 characters';
        errorFlag = true;
     }
    if(!errorFlag) {
    var validateClick = confirm("Dear user" + document.articleform.userName.value + "Thanks for posting " + document.articleform.title.value);
    if (validateClick === true) {
        //location.href = "home.html";
        //document.location = "home.html";
        // location.href = "file:///Users/venkatasiva/Desktop/Simplelearn/phase1-get%20started%20with%20web%20development/simplilearn-phase1/home.html"
        return true;
    }
} else {
    return false;
}

}