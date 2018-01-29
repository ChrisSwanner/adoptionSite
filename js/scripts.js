
function Pet(name, age, type, weight, sex, dateAvail){
  this.name = name;
  this.age = age;
  this.type = type;
  this.weight = weight;
  this.sex = sex;
  this.dateAvail = dateAvail;
}

$(document).ready(function() {
  $("form#addPet").submit(function(event) {
  (event).preventDefault();

  var petType = $("input:radio[name=type]:checked").val();
  var petName = $("input#name").val();
  var petAge = $("input#age").val();
  var petWeight = $("input#weight").val();
  var petSex = $("input#sex").val();
  var petDateAvail = $("input#dateAvail").val();

  var newPet = new Pet(petName, petAge, petType, petWeight, petSex, petDateAvail);

  debugger;

  if (newPet.type === "Dog") {
    $("ul#dogHidden").append("<li><span class=clicky>" + newPet.name + "</span></li>");
  } else if (newPet.type === "Cat") {
    $("ul#catHidden").append("<li><span class=clicky>" + newPet.name + "</span></li>");
  } else if (newPet.type === "Reptile") {
    $("ul#reptileHidden").append("<li><span class=clicky>" + newPet.name + "</span></li>");
  }

  $(".clicky").last().click(function() {
    $("#showPet").show()
    $("#nameDisplay").text(newPet.name);
    $("#ageDisplay").text(newPet.age);
    $("#weightDisplay").text(newPet.weight);
    $("#sexDisplay").text(newPet.sex);
    $("#dateAvailDisplay").text(newPet.dateAvail);
    })
  })

  $("#catBtn").click(function() {
    $("#catHidden").show();
    $("#dogHidden").hide();
    $("#reptileHidden").hide();
  })

  $("#dogBtn").click(function() {
    $("#dogHidden").show();
    $("#catHidden").hide();
    $("#reptileHidden").hide();
  })

  $("#reptileBtn").click(function() {
    $("#reptileHidden").show();
    $("#dogHidden").hide();
    $("#catHidden").hide();
  })
})
