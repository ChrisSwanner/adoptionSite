
function Pet(name, age, type, weight, sex, dateAvail){
  this.name = name;
  this.age = age;
  this.type = type;
  this.weight = weight;
  this.sex = sex;
  this.dateAvail = dateAvail;
};

var typeOrganize = function (Pet) {
  if (this.type === "Dog") {
    $("ul#DogListIDGoesHere").append("<li><span class=petClickyClassGoesHere>" + this.name + "</span></li>")
  } else if (this.type === "Cat") {
    $("ul#CatListIDGoesHere").append("<li><span class=petClickyClassGoesHere>" + this.name + "</span></li>")
  } else if (this.type === "Reptile") {
    $("ul#ReptileListIDGoesHere").append("<li><span class=petClickyClassGoesHere>" + this.name + "</span></li>")
  }
};

$(document).ready(function() {
  $("SubmitIDGoesHere").click(function(event) {
  (event).preventDefault();

  var petName = $("PetNameIDGoesHere").val();
  var petAge = $("PetAgeIDGoesHere").val();
  var petType = $("PetTypeIDGoesHere").val();
  var petWeight = $("PetWeightIDGoesHere").val();
  var petSex = $("PetSexIDGoesHere").val();
  var petDateAvail = $("PetDateIDGoesHere").val();

  var newPet = new Pet(petName, petAge, petType, petWeight, petSex, petDateAvail)

  typeOrganize(newPet)

  $(".petClickyClassGoesHere").last().click(function() {
    $("#nameDisplay").text(newPet.name);
    $("#ageDisplay").text(newPet.age);
    $("#weightDisplay").text(newPet.weight);
    $("#sexDisplay").text(newPet.sex);
    $("#dateAvailDisplay").text(newPet.dateAvail);
    })
  })


})

})
