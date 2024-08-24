// ==========================================================
// ==========================================================
// ==========================================================

// Loop and callback functions -- 21 dars 


/*

console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq hato qiling", // 20-30 
    "uzingizga ishlashiongizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 50-60
    "endi dam oling, foydasi yoq endi" // 60
];

function maslahatBering(a, callback) {
    if (typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null,list[1]);
    else if(a > 30 && a <= 40) callback(null,list[2]);
    else if(a > 40 && a <= 50) callback(null,list[3]);
    else if(a > 50 && a <= 60) callback(null,list[4]);
    else {
        setTimeout(function () {
            callback(null, list[4]);
        }, 5000)
      }
    }

    console.log('passed here 0')

 maslahatBering(65, (err, data) => {
if(err) console.log('ERROR:', err);
else {
    console.log('javob:', data);
}
 })

 console.log('passed here 1')

 */

// ==========================================================
// ==========================================================
// ==========================================================

// async function ---- 22 dars


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30 
//     "uzingizga ishlashiongizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 50-60
//     "endi dam oling, foydasi yoq endi" // 60
// ];

/*
async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error ("insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
    */
        // return list[4];
        // setTimeout(function () {
        //     return list[5];
        // }, 5000)                               // async functionalda togridan togri setTimeout ishlaaydi
    
        // return new Promise ((resolve, reeject) => {
        //     setTimeout(() => {
        //         resolve(list[4])
        //     }, 5000)
            
        // }) ============================

        // return new Promise ((resolve, reeject) => {
        //     setInterval(() => {
        //         resolve(list[4])
        //     }, 1000)
            
        // })    ======= async function lar bilan setInterval ishlamayd va bir marta korsatadi holos
    
    // }
    // }


    // then / catch ni ishlatish uslubi  ======================

//     console.log('passed here 0')

//  maslahatBering(65)
//  .then(data => {
// console.log("javob:", data)
//  }).catch(err => {
// console.log('ERROR:', err)
//  })
//  console.log('passed here 1')


 // async function ishlashidan oldin sync funton ishlaydi oldin va async funciton bizni single sthread ni bant qilmaydi birdaniga multy threat ga tashlanadi

   // then / catch ni ishlatish uslubi  ======================


 //  console.log('passed here 0')
//  maslahatBering(65)
//  .then(data => {
//     maslahatBering(40)
//     .then(data => {
//         console.log("javob:", data)
//          }).catch(err => {
//         console.log('ERROR:', err)
//          })
//          console.log('passed here 1')
// console.log("javob:", data)
//  }).catch(err => {
// console.log('ERROR:', err)
//  })
//  console.log('passed here 1')
 

// async  /   await ========================================  

// async function run() {
//     let javob = await maslahatBering(65)
//     console.log(javob)
    // javob = await maslahatBering(40)
    // console.log(javob)
    // javob = await maslahatBering(65)
    // console.log(javob)
// }
// run();
 

//  ======== SetInterval ishlatishini korsatish va bu faqat callback la bilan keladi

/*

console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq hato qiling", // 20-30 
    "uzingizga ishlashiongizni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 50-60
    "endi dam oling, foydasi yoq endi" // 60
];

function maslahatBering(a, callback) {
    if (typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null,list[1]);
    else if(a > 30 && a <= 40) callback(null,list[2]);
    else if(a > 40 && a <= 50) callback(null,list[3]);
    else if(a > 50 && a <= 60) callback(null,list[4]);
    else {
        setInterval(function () {
            callback(null, list[4]);
        }, 1000)
      }
    }

    console.log('passed here 0')

 maslahatBering(65, (err, data) => {
if(err) console.log('ERROR:', err);
else {
    console.log('javob:', data);
}
 })

 console.log('passed here 1')

 */

// ==========================================================
// ==========================================================
// ==========================================================