
function checkForm() {
    var lastName = document.getElementById("last").value;
    var firstName = document.getElementById("first").value;
    var myEmail = document.getElementById("email").value;
    var lastNameYes = false;
    var firstNameYes = false;
    var emailYes = false;
    var myEmailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if(lastName == null || lastName == "" || lastName.trim().length < 1){
        document.getElementById("lastError").innerHTML = "please enter your last name."
    }
    else{
        document.getElementById("lastError").innerHTML = "";
        lastNameYes = true;
    }

    if(firstName == null || firstName == "" || firstName.trim().length < 1){
        document.getElementById("firstError").innerHTML = "please enter your first name."
    }

    else{
        document.getElementById("firstError").innerHTML = "";
        firstNameYes = true;
    }

    if(myEmail == null || myEmail == ""){
        document.getElementById("emailError").innerHTML = "please enter your email."
    }

    else if(myEmail.search(myEmailPattern) == -1){
        document.getElementById("emailError").innerHTML = "please enter a valid email."
    }

    else{
        document.getElementById("emailError").innerHTML = "";
        emailYes = true;
    }

    if(lastNameYes && firstNameYes && emailYes){
        document.getElementById("success").innerHTML = "Your form was successfully submitted";
    }

}