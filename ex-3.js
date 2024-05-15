let lightBulbStatus = "Off";

function lightBulb(lightBulbStatus) {
  if (lightBulbStatus === "On") {
    return "Light bulb is On.";
  } else if (lightBulbStatus === "Off") {
    return "Light bulb is Off.";
  } else {
    return "Please choose the correct input (On/Off)";
  }
}
console.log(lightBulb(lightBulbStatus));
