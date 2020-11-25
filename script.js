$(document).ready(function(){

var quantity=0;
   $('.quantity-right-plus-1').click(function(e){

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-1').val());

        // If is not undefined

            $('#quantity-1').val(quantity + 1);


            // Increment

    });

     $('.quantity-left-minus-1').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity-1').val());

        // If is not undefined

            // Increment
            if(quantity>0){
            $('#quantity-1').val(quantity - 1);
            }
    });

    $('.quantity-right-plus-2').click(function(e){

         // Stop acting like a button
         e.preventDefault();
         // Get the field name
         var quantity = parseInt($('#quantity-2').val());

         // If is not undefined

             $('#quantity-2').val(quantity + 1);


             // Increment

     });

      $('.quantity-left-minus-2').click(function(e){
         // Stop acting like a button
         e.preventDefault();
         // Get the field name
         var quantity = parseInt($('#quantity-2').val());

         // If is not undefined

             // Increment
             if(quantity>0){
             $('#quantity-2').val(quantity - 1);
             }
     });

});

function validateForm() {
  var error = false;
  var email = document.forms["form"]["email"].value;
  if (email == "") {
    error = true
    alert("Email field must be filled out");
  }

  var phone = document.forms["form"]["phone"].value;
  if (phone == "") {
    error = true
    alert("Phone field must be filled out");
  }

  var fullName = document.forms["form"]["full-name"].value;
  if (fullName == "") {
    error = true
    alert("Full Name field must be filled out");
  }

  var address = document.forms["form"]["address"].value;
  if (address == "") {
    error = true
    alert("Address field must be filled out");
  }

  var city = document.forms["form"]["city"].value;
  if (city == "") {
    error = true
    alert("City field must be filled out");
  }

  var country = document.forms["form"]["country"].value;
  if (country == "") {
    error = true
    alert("Country field must be filled out");
  }

  var postalCode = document.forms["form"]["postal-code"].value;
  if (postalCode == "") {
    error = true
    alert("Postal field code must be filled out");
  }

  if(!error) {
    alert('Validation successful, thank you !')
  }
}
