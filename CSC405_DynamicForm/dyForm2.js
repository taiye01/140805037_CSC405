function nameValidation(){
    var betaExp = /^[a-zA-Z ]+$/;
    var full_name = document.getElementById("full_name").value;
    if (betaExp.test(full_name)){
        document.getElementById("email").style.display = "block";
    }
    else {
        document.getElementById("info").innerHTML ="Please enter your correct name";
    }
}

function emailAddress() {
    var emailExp = /^([A-Za-z0-9_\.\-]){1,}\@([A-Za-z\.\-]){1,}\.([A-za-z]{2,4})$/;
    var user_email = document.getElementById("user_email").value;
    if (emailExp.test(user_email)) {
        document.getElementById("age").style.display = "block";
    }
    else {
        document.getElementById("info").innerHTML = "Invalid email address";
    }
}

function ageValidation(){
    var ageExp= /^[0-9]+$/;
    var age = document.getElementById("age_field").value;
    if (ageExp.test(age)) {
        if(age>= 0 && age<=16){
            document.getElementById("info").innerHTML ="Sorry,this survey is open only to those above the age of 10";
            document.getElementById("info").style.display ="block";
        }
        else if(age>16 &&age<=90){
            document.getElementById("info").style.display="none";
            document.getElementById("phone").style.display = "block";
        }
        else{
            alert("Please enter a valid age");
        }
    }
}

function phoneValidation(){
    var phoneExp= /^[0-9]+$/;
    var user_phone_no = document.getElementById("phoneno").value;
    var user_phone_no_length = document.getElementById("phoneno").value.length;
    if (phoneExp.test(user_phone_no)) {
        if (user_phone_no_length > 9 && user_phone_no_length < 12){
            document.getElementById("gender").style.display = "block";
        }
        else {
            document.getElementById("info").innerHTML = "Incorrect Phone Number";
        }

    }
    else {
        document.getElementById("info").innerHTML = "Invalid Phone Number";
    }
}

function userGender() {
    var user_gender = document.getElementById("morf").value;
    if (user_gender === "Male" || user_gender === "Female"){
        document.getElementById("occupation").style.display = "block";
    }
    else {
        document.getElementById("info").innerHTML = "Please choose a gender";
    }
}

function occupationValidation(){
    var str = document.getElementById("occupation_field").value.toLocaleLowerCase();
    if(str ==("student")){
        document.getElementById("university").style.display = "block";
    }
    else if(str==("unemployed")){
        document.getElementById("empowerment").style.display = "block";
    }
    else if(str==("retired")){
        document.getElementById("retired").style.display = "block";
    }
    else{
        document.getElementById("tax").style.display = "block";
    }
}
