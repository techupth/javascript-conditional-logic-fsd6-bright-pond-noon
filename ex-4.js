let lightBulbStatus = "On";
switch (lightBulbStatus) {
  case "On":
    lightBulbStatus = "On";
    break;
  case "Off":
    lightBulbStatus = "Off";
    break;
  case "broken":
    lightBulbStatus = "Broken";
    break;
  default:
    lightBulbStatus = "Please choose the correct input (On/Off/Broken)";
}
console.log(lightBulbStatus);
