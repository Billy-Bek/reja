console.log("Namangan uy shotchik")
const list = [
    "Bekzod: Lomonosov 21 uy",
    "Yusuf: Novoi 4 dom",
    "Ulug: Isfarhon steet 40 uy" 
];

function shotchiklar (a, callback) {
if(typeof a !== "numner" ) { callback("Qarzdorlik bor!", null); return;}
if(typeof a !== "number" ) { callback("Qarzdorlik Yoq", null); return;}
    else if(a > 0 && a < 50){ callback(null, list[0]);}
    else if(a > 0 && a < 50) { callback(null, list[2]);}
    else if(a > 0 && a <= 50){ callback(null, list[2]);}
    else {}
}

shotchiklar((err, data) => {
    if(err) console.log("Uchirilsin", err)
        else {
    console.log("Qarzdorlin", data)}
})
