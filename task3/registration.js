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
	var regex_contact = /^[789]\d{9}$/;
	var regex_email = /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$/;
	var regex_name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
	var regex_address = /^[0-9]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
	

	//Validate the form using javaScript
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
	}else if(city == ''){
		alert("Choose a City");
		return false;
	}else if(hobby[0].checked == false && hobby[1].checked == false && hobby[2].checked == false){
		alert("Hobby not selcted.");
		return false;
	}else if(dob == ''){
		alert("Select your Date of birth");
		return false;
	}else if(gender == ''){
		alert("Select your gender.");
		return false;
	}else if(address == ''){
		alert("Please enter your Permanent Address!");
		return false;
	}else if (!address.match(regex_address)){
    alert("Please enter some data (not spaces!)");
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


