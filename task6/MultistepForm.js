var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = $(".tab");
  x.eq(n).css('display', "block");
  if (n == 0) {
    $("#prevBtn").css("display","none");
    $("#submit").css("display", "none");
  } else {
    $("#prevBtn").css("display","inline");
    $("#submit").css("display", "none");
  }
  if (n == (x.length - 1)) {
    $("#submit").css("display", "block");
    $("#nextBtn").css("display", "none");
  } else {
    $("#nextBtn").css("display", "block")
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = $(".tab");
  if (n == 1 && !validateForm()) return false;
  x.eq(currentTab).css("display", "none");
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
      return false;
    }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = $(".tab");
  if(currentTab == 0){
    y = $(".input1");
  }else if(currentTab == 1){
    y = $(".input2");
  }else{
    y = $(".input3");
  }
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    $(".step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = $(".step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";

}
function submit1(){
  $('form').on('submit',(e)=>{
    e.preventDefault();
    $('#data').html($(this).serialize());
  });
}

