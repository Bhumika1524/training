function ValidateForm(){
	
	var contact = document.form1.number.value;
	var email = document.form1.email.value;
	var name = document.form1.name.value;
	var city = document.form1.city.value;
	var hobby = document.form1.hobby;
	var dob = document.form1.Dob.value;
	var gender = document.form1.gender.value;
	var address = document.form1.address.value;
	var form = document.getElementsByTagName("form");
	var regex_contact = /^[0-9]\d{9}$/;
	var regex_email = /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$/;
	var regex_name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
	var regex_address = /^[0-9]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
	

	// Display Error mr=essage without using alert Box
	var name_error = document.getElementById("name-error");
	var contact_error = document.getElementById("contact-error");
	var email_error = document.getElementById("email-error");
	var city_error = document.getElementById("city-error");
	var hobby_error = document.getElementById("hobby-error");
	var dob_error = document.getElementById("dob-error");
	var gender_error = document.getElementById("gender-error");
	var address_error = document.getElementById("address-error");

	//Validate the form using javaScript
	if(name == ''){
		name_error.textContent = "Blank is not allowed";
		return false;
	}
	else if(!name.match(regex_name))
	{
		name_error.textContent = "Name is invalid!";
		return false;
	}
	else if(contact== '')
	{   
		name_error.textContent = "";
		contact_error.textContent = "Blank is not allowed";
		return false;
	}
	else if(!contact.match(regex_contact)){
		contact_error.textContent = "Contact number is invalid!";
		return false;
	}else if (email== ''){
		contact_error.textContent = "";
		email_error.textContent = "Email can't be blank";
		return false;
	}else if(!regex_email.test(email)){  
  		email_error.textContent = "Email is invalid!";
  		return false;
	}else if(city == ''){
		email_error.textContent = "";
		city_error.textContent = "City is invalid!";
		return false;
	}else if(hobby[0].checked == false && hobby[1].checked == false && hobby[2].checked == false){
		city_error.textContent = "";
		hobby_error.textContent = "Hobby is invalid!";
		return false;
	}else if(dob == ''){
		hobby_error.textContent = "";
		dob_error.textContent = "DOB is invalid!";
		return false;
	}else if(gender == ''){
		dob_error.textContent = "";
		gender_error.textContent = "Gender is invalid!";
		return false;
	}else if(address == ''){
		gender_error.textContent = "";
		address_error.textContent = "Address can't be blank";
		return false;
	}else if (!address.match(regex_address)){
		address_error.textContent = "Address is invalid";
    	return false;
    }
    var hobbies = [];
	for(var i=0;i<hobby.length;i++){
	  	if (hobby[i].checked)
	   	{
	    	hobbies.push(hobby[i].value);
	    }
	}

    //Enter forms data into a table
    let br = document.createElement('br');
	let div = document.getElementById('table');
	let node = document.createTextNode('Thank you! You have just entered the following:');
	let node1 = document.createTextNode('Name :'+ name);
	let node2 = document.createTextNode('Contact Number :'+ contact);
	let node3 = document.createTextNode('Email Address :'+ email);
	let node4 = document.createTextNode('City :'+ city);
	let node5 = document.createTextNode('Hobby :'+ hobbies);
	let node6 = document.createTextNode('Date Of Birth :'+ dob);
	let node7 = document.createTextNode('Gender  :'+ gender);
	let node8 = document.createTextNode('Address :'+ address);

	removeAllChildNodes(div);

	div.appendChild(node);
	div.appendChild(br.cloneNode(true));

	div.appendChild(node1);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node2);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node3);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node4);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node5);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node6);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node7);
	div.appendChild(br.cloneNode(true));
	
	div.appendChild(node8);
	div.appendChild(br.cloneNode(true));

	function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

}


