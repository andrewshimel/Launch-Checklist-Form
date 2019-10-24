// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch ("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">`;
      
      });
   });
   
   
   
   
   
   
   
   let faultyItems = document.getElementById("faultyItems");
   let launchForm = document.querySelector("form");
   let formSubmit = document.getElementById("formSubmit");  
   launchForm.addEventListener("submit", function(){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      console.log(pilotName.value);
      console.log(copilotName.value);
      console.log(fuelLevel.value);
      console.log(cargoMass.value);

      if (isNaN(Number(pilotName.value)) && isNaN(Number(copilotName.value)) && !isNaN(Number(fuelLevel.value)) && !isNaN(Number(cargoMass.value))){
         
         console.log("success!");
         
         document.getElementById("pilotStatus").innerHTML = pilotName.value;
         document.getElementById("copilotStatus").innerHTML = copilotName.value;
         document.getElementById("fuelStatus").innerHTML = fuelLevel.value;
         document.getElementById("cargoStatus").innerHTML = cargoMass.value;
         
         if (fuelLevel.value < 10000){
            document.getElementById("fuelStatus").style.color = "red";
         }
         if (cargoMass.value > 10000){
            document.getElementById("cargoStatus").style.color = "red";
         }
         if (fuelLevel.value < 10000 || cargoMass.value > 10000){
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
            faultyItems.style.visibility = "visible";
            event.preventDefault();
         }
         else{
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready For Launch";
            document.getElementById("cargoStatus").style.color = "";
            document.getElementById("fuelStatus").style.color = "";
            event.preventDefault();
         
         }
      }else{
         console.log("failure!");
         event.preventDefault();
         window.alert("Please input valid parameters");
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
