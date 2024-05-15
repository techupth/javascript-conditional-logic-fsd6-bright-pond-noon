//Exercise 2
let lightBulbStatus = "On";

let statusLight = (lightBulbStatus) =>{
    if (lightBulbStatus === "On"){
        return "Light bulb is On.";
    }
    else if (lightBulbStatus === "Off"){
        return "Light bulb is Off.";
    }
    else if (lightBulbStatus === "Broken"){
        return "Light bulb is Broken.";
    }
    else{
        return "Please choose the correct input (On/Off/Broken)";
    }
}
let ans = statusLight("Broken");
let noChoose = statusLight();
console.log(ans);
console.log(noChoose);