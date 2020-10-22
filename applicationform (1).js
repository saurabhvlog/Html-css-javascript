/*function checktext(obj)
{
    let data=obj.value;
    var checkname=/^[a-zA-Z ]+$/;
    if(checkname.test(data)===false)
    alert("plz enter correct name");
}

function checknumber(obj)
{
    let data=obj.value;
    data=parseInt(data);
    if(!Number.isInteger(data))
    {
        alert("plz enter correct age");
        obj.value="";
        obj.setFocus=true;
    }
}*/

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes =document.getElementsByName("hobbies");
    for( var i=0; i<checkboxes.length; i++) {
         if(checkboxes[i].checked) {
             hobbies.push(checkboxes[i].value);
         }
    }


var nameErr = emailErr = mobileErr = countryErr =genderErr = true;

if(name =="") {
    printError("nameErr","Plz enter your name");
} else {
     var regex =/^[a-zA-Z\s]+$/;
     if(regex.test(name)===false) {
         printError("nameErr","plz enter a valid name");
     } else {
         printError("nameErr","");
         nameErr= false;
     }
}

if(email =="") {
    printError("emailErr","Plz enter your email address");
} else {
     var regex =/^\S+@\S+\.\S+$/;
     if(regex.test(email) === false) {
         printError("emailErr","plz enter a valid email adress");
     } else {
         printError("emailErr","");
         emailErr = false;
     }
}

if(mobile =="") {
    printError("mobileErr","Plz enter your mobile number");
} else {
     var regex =/^[1-9]\d{9}$/;
     if(regex.test(mobile) === false) {
         printError("mobileErr","plz enter a valid 10 digit mobile number");
     } else {
         printError("mobileErr","");
         mobileErr = false;
     }
}

if(country =="Select") {
    printError("countryErr","Plz enter your country");
} else {
         printError("countryErr","");
         countryErr = false;
     }


if(gender == "") {
    printError("genderErr","Plz enter your gender");
} else {
         printError("genderErr","");
         genderErr = false;
     }
if((nameErr || emailErr || mobileErr || countryErr || genderErr ) == true){
    return false;
}else {
     var dataPreview ="You have entered the follwing details : \n" +
                     " Full Name: " + name + "\n" +
                     " Email Address: " + email + "\n" +
                     "Mobile Number :" + mobile + "\n" +
                     "Country: " + country + "\n" + 
                     "Gender: " + gender + "\n" ;
                     if(hobbies.length) {
                         dataPreview += "Hobbies: " +hobbies.join(", ");
                     }
               alert(dataPreview);
        }   
                    
};           
                    
    



