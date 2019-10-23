$(document).ready(function() {
  $("form#formLetter").submit(function(event) {

    var person1Input = $("input#person1").val();
    $(".person1").text(person1Input);

    var addressInput = $("input#address").val();
    $(".address").text(addressInput);


    var hairInput = $("input#hair").val();
    $(".hair").text(hairInput);

    var eyesInput = $("input#eyes").val();
    $(".eyes").text(eyesInput);

    $("#story").show();

    event.preventDefault();
  });
});
