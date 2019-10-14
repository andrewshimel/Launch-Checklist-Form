// Write your JavaScript code here!
window.addEventListener("load", function(){
   let formSubmit = document.getElementById("formSubmit");  
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   formSubmit.addEventListener("click", function(){
      if (isNaN(Number(pilotName.value)) && isNaN(Number(copilotName.value)) && Number(fuelLevel.value) != NaN && Number(cargoMass.value) != NaN){
         console.log("success!");
      }else{
         console.log("failure!");
      }
   });
});








/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
