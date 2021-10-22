function ValidateForm(){
	
	var contact = document.form1.number.value;
	var email = document.form1.email.value;
	var name = document.form1.name.value;
	var select = document.form1.city;
	var hobby = document.form1.hobby;
	var address = document.form1.address.value;
	var regex_contact = /^[789]\d{9}$/;
	var regex_email = /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$/;
	var regex_name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
	var regex_address = /^[0-9]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;

	if(name == ''){
		alert("Name can't be blank");
		return false;
	}
	else if(!name.match(regex_name))
	{
		alert("Name is invalid");
		return false;
	}
	else if(contact== '')
	{
		alert("Contact Number can't be blank");
		return false;
	}
	else if(!contact.match(regex_contact)){
		alert("Contact Number is invalid");
		return false;
	}else if (email== ''){
		alert("Email can't be blank.");
		return false;
	}else if(!regex_email.test(email)){  
  		alert("Please enter a valid e-mail address");  
  		return false;
	}else if(select.value == ''){
		alert("Choose a City");
		return false;
	}else if(hobby[0].checked == false && hobby[1].checked == false && hobby[2].checked == false){
		alert("Hobby not selcted.");
		return false;
	}else if(document.form1.Dob.value == ''){
		alert("Select your Date of birth");
		return false;
	}else if(document.form1.gender.value == ''){
		alert("Select your gender.");
		return false;
	}else if(address == ''){
		alert("Please enter your Permanent Address!");
		return false;
	}else if (!address.match(regex_address)){
    alert("Please enter some data (not spaces!)");
    return false;
  }

}
