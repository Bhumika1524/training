
var regex_contact = /^[0-9]\d{9}$/;
var regex_email = /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$/;
var regex_name = /^[a-zA-Z]*$/g;
var regex_address = /^([0-9])?[a-zA-z]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$/;
var name_error = $("#name-error");
var contact_error = $("#contact-error");
var email_error = $("#email-error");
var city_error = $("#city-error");
var hobby_error = $("#hobby-error");
var dob_error = $("#dob-error");
var gender_error = $("#gendererror");
var address_error = $("#address-error");
var edu_error =$("#edu-error");



function validatetab4(){
	var class1 = $("#class1").val();
	var class2 = $("#class2").val();
	var class3 = $("#class3").val();
	var percent1 = $("#percent1").val();
	var percent2 = $("#percent2").val();
	var percent3 = $("#percent3").val();
	var year1 = $("#yr1").val();
	var year2 = $("#yr2").val();
	var year3 = $("#yr3").val();

   if(class1 == ''){
		edu_error.html("Select your Qualifications");
		return false;
	}else if(percent1 == ''){
		edu_error.html(" Enter your percentage of respective Qualifications");
		return false;
	}else if(year1 == ''){
		edu_error.html(" Enter year of passing of respective Qualifications");
		return false;
	}else if(class2 == ''){
		edu_error.html("Select your Qualifications");
		return false;
	}else if(percent2 == ''){
		edu_error.html(" Enter your percentage of respective Qualifications");
		return false;
	}else if(year2 == ''){
		edu_error.html(" Enter year of passing of respective Qualifications");
		return false;
	}else if(class3 == ''){
		edu_error.html("Select your Qualifications");
		return false;
	}else if(percent3 == ''){
		edu_error.html(" Enter your percentage of respective Qualifications");
		return false;
	}else if(year3 == ''){
		edu_error.html(" Enter year of passing of respective Qualifications");
		return false;
	}else{
		edu_error.html("");
	}

	// Checking Qualification Details entered by the user

	if(class1 == "10" && year1 != "2015") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class2 == "10" && year2 != "2015") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class3 == "10" && year3 != "2015") {
		edu_error.html("Invalid Details!");
		return false;
	}if(class1 == "12" && year1 != "2017") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class2 == "12" && year2 != "2017") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class3 == "12" && year3 != "2017") {
		edu_error.html("Invalid Details!");
		return false;
	}if(class1 == "graduation" && year1 != "2020") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class2 == "graduation" && year2 != "2020") {
		edu_error.html("Invalid Details!");
		return false;
	}else if(class3 == "graduation" && year3 != "2020") {
		edu_error.html("Invalid Details!");
		return false;
	}else{
		edu_error.html("");
	}
	return true;

}
	$("select").on("change", function() {
    var selected = [];  
    $.each($("select"), function(index, select) {           
        if (select.value !== "") { selected.push(select.value); }
    });         
    $(".disable").show();         
       for (var index in selected) { $('.disable[value="'+selected[index]+'"]').hide(); }
    });

$("#tab1").show();
$("#tab2").hide();
$("#tab3").hide();
$("#tab4").hide();


var currentTab = 0;

function current_next(){
	if( currentTab == 0){
		if(Validatetab1()){
			$("#tab1").hide();
  			$("#tab2").show();
  			currentTab += 1;
  			return false;
		}
	}else if(currentTab == 1){
		if(Validatetab2()){
			$("#tab2").hide();
  			$("#tab3").show();
  			currentTab += 1;
  			return false;
		}
	}else if(currentTab == 2){
		if(validatetab3()){
			$("#tab3").hide();
			$("#tab4").show();
			currentTab += 1;
			return false;
		}
	}else if(currentTab == 3){
		if(validatetab4()){
			$("#tab4").show();
  			$("#table").html($('form').serialize());
  			return false;
		}
	}
}



function Validatetab1(){
	var contact = $("#number").val();
	var email =$("#email").val();
	var name =$("#name").val();
	if(name == ''){
		name_error.html("Blank is not allowed");
		return false;
	}else if(!name.match(regex_name)){
		name_error.html("Name is invalid!");
		return false;
	}else{
		name_error.html("");
	}

	if(contact== ''){
		contact_error.html("Blank is not allowed");
		return false;
	}else if(!contact.match(regex_contact)){
		contact_error.html("Contact number is not invalid!");
		return false;
	}else {
		contact_error.html("");
	}
	
	if (email== ''){
		email_error.html("Email can't be blank!");
		return false;
	}else if(!regex_email.test(email)){  
  		email_error.html("Email is invalid!");
  		return false;
	}else {
		email_error.html("");
	}
	return true;

}

function Validatetab2(){
	var city = $("#city").val();
	var hobby = $(".hobby");
	var dob = $("#Dob").val();

	if(city == ''){
		city_error.html("City is invalid!");
		return false;
	}else {
		city_error.html("");
	}
	if(hobby[0].checked == false && hobby[1].checked == false && hobby[2].checked == false){
		hobby_error.html("Hobby is invalid!");
		return false;
	}else {
		hobby_error.html("");
	}

	if(dob == ''){
		dob_error.html("DOB is invalid!");
		return false;
	}else {
		dob_error.html("");
	} 
	return true;

}
function validatetab3(){
	var gender = $("input[name='gender']:checked").val();
	var address =$("#address").val();
	if(typeof gender == 'undefined'){
		gender_error.html("Gender is invalid!");
		return false;
	}else {
		gender_error.html("");
	}
	if(address == ''){
		address_error.html("Address can't be blank");
		return false;
	}else if (!address.match(regex_address)){
		address_error.html("Address is invalid");
    	return false;
    }else {
    	address_error.html("");
    }
    return true;	
}

function Prev(){
	$("#tab1").hide();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
	currentTab -= 1;
	if(currentTab == 0){
		$("#tab1").show();
		return false;
	}
	if(currentTab == 1){
		$("#tab2").show();
		return false;
	}
	if(currentTab == 2){
		$("#tab3").show();
		return false;
	}
	return true;
}

function step1(){
	$("#tab1").show();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab4").hide();
}
function step2(){
	currentTab = 0;
	$("#tab2").show();
	$("#tab1").hide();
	$("#tab3").hide();
	$("#tab4").hide();
}
function step3(){
	currentTab = 1;
	$("#tab3").show();
	$("#tab2").hide();
	$("#tab1").hide();
	$("#tab4").hide();
}
function step4(){
	currentTab = 2;
	$("#tab4").show();
	$("#tab2").hide();
	$("#tab3").hide();
	$("#tab1").hide();
}
