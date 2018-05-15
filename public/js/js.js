// Drop down menu for classes selection 
$(document).ready(function () {
  $('select').formSelect();
});
// Carsousel on Classes page
$(document).ready(function () {
  $('.carousel').carousel();

});

// For img upload

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// JS for profile and classes

$(document).ready(function () {
  function getImputVal(id){
    return document.getElementById(id).value;
 }

  $('profileSubmit').on('click', submitForm);
  function submitForm(e) {
    e.preventDefault();
    var file = getImputVal('file');
    var first = getImputVal('first');
    var last = getImputVal('last');
    var number = getImputVal('number');
    var email = getImputVal('email');
    var textarea2= getImputVal('textarea2');
    console.log(last);
    var dropdown = $("select option:selected").val();
    console.log(dropdown);
    console.log(file);
   
    //   // $.ajax({
    //   //   method: "PUT",
    //   //   url: "/burgers/" + burger_id
    //   // }).then(function(data) {

    //   //   location.reload();
    //   // });

    // });
  }
  $("#pickclass").on("click", submitForm)
    function submitForm(er) {
    er.preventDefault();

   var dropdown = $("select option:selected").val();

    // re-initialize material-select
    console.log(dropdown);

    // $.ajax({
    //   method: "GET",
    //   url: "/session/:id" 
    // }).then(function(data) {

    //   location.reload();
    // });
}
});



// $("#pickclass").on("submit", function(event) {
//   event.preventDefault();
//   $(".select-dropdown").on('#select-options', function() {
//     // re-initialize material-select
//     $('.select-dropdown').material_select();
//     console.log('#select-options');
// });
//   // $.ajax({
//   //   method: "UPDATE",
//   //   url: "/session/:id" 
//   // }).then(function(data) {

//   //   location.reload();
//   // });

// });
