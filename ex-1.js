//Exercise 1
let lightBulbStatus = "On";

let statusLight = (lightBulbStatus) =>{
    if (lightBulbStatus === "On"){
        return "Light bulb is On.";
    }
    else {
        return "Light bulb is Off.";
    }
}
let ans = statusLight(lightBulbStatus);
console.log(ans);
