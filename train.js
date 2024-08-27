

  

  //console.log(===============================)
  //console.log(===============================)
  //console.log(===============================)


  // CALLBACK function
  
  // function maslahatBering(a, callback) {
  //   if (typeof a !== "number") callback("Insert a number", null);
  //   else if (a <= 20) callback(null, list[0]);
  //   else if (a > 20 && a <= 30) callback(null, list[1]);
  //   else if (a > 30 && a <= 40) callback(null, list[2]);
  //   else if (a > 40 && a <= 50) callback(null, list[3]);
  //   else if (a > 50 && a <= 60) callback(null, list[4]);
  // else {
  //   setInterval(function () {
  //     callback(null, list[5]);
  //   }, 1000);
  // }
  // }
  

  //console.log(===============================)
  //console.log(===============================)
  //console.log(===============================)

  // call qismi
  
  
  // console.log("passed here 0");
  // maslahatBering(70, (err, data) => {
  //   if (err) console.log("ERROR:", err);
  //   else {
  //     console.log("javob:", data);
  //   }
  // });
  // console.log("passed here 2");
  
  // console.log("Jack Ma maslahatlari");
  // const list = [
  //   "yaxshi talaba boling", // 0-20
  //   "togri boshliq tanlang va koproq xato qiling", // 20-30
  //   "ozingizga ishlashni boshlang", // 30-40
  //   "siz kuchli bolgan narsalarni qiling", // 40-50
  //   "yoshlarga savmoya kiriting", // 50-60
  //   "endi dam oling,  foydasi yoq endi", // 60
  // ];

  // ASYNC funtion
  
  // async function maslahatBering(a) {
  //   if (typeof a !== "number") throw new Error("Insert a number");
  //   else if (a <= 20) return list[0];
  //   else if (a > 20 && a <= 30) return list[1];
  //   else if (a > 30 && a <= 40) return list[2];
  //   else if (a > 40 && a <= 50) return list[3];
  //   else if (a > 50 && a <= 60) return list[4];
  //   else {
  //     return new Promise((resolve, reject) => {
  //       setInterval(() => {
  //         resolve(list[5]);
  //       }, 1000);
  //     });
  //   }
  // }
  
  // call qismi
  // catch/Eror => Tutib olish
  // then/data
  
  // call via then/catch
  //
  
  // console.log("passed here 0");
  // maslahatBering(25)
  //   .then((data) => {
  //     console.log("javob:", data);
  //   })
  //   .catch((err) => {
  //     console.log("ERROR:", err);
  //   });
  // console.log("passed here 1");
  
  // call via asyn/await
  // async function run() {
  //   let javob = await maslahatBering(75);
  //   console.log(javob);
  //   javob = await maslahatBering(70);
  //   console.log(javob);
  //   javob = await maslahatBering(42);
  //   console.log(javob);
  // }
  // run();
  
  // function countLetter(a, word) {
  //   return word.split(a).length - 1;
  // }
  // console.log(countLetter("e", "engineer"));
  // console.log(countLetter("n", "engineer"));
  // console.log(countLetter("g", "engineer"));


  console.log("Jack Ma maslahatlari");
  const list = [
      "yahshi talaba boling", // 0-20
      "togri boshliq tanlang va koproq hato qiling", // 20-30 
      "uzingizga ishlashiongizni boshlang", // 30-40
      "siz kuchli bolgan narsalarni qiling", // 50-60
      "endi dam oling, foydasi yoq endi" // 60
  ];
  
  async function maslahatBering(a) {
      if (typeof a !== 'number') throw new Error("insert a number");
      else if(a <= 20) return list[0];
      // else if(a > 0 && a <= 20) callback(null,list[0]);
      else if(a > 20 && a <= 30) return list[1];
      else if(a > 30 && a <= 40) return list[2];
      else if(a > 40 && a <= 50) return list[3];
      else if(a > 50 && a <= 60) return list[4];
      else { 
       
          return new Promise ((resolve, reeject) => {
              setInterval(() => {
                  resolve(list[4])
              }, 1000)
              
          }) 
          // setTimeout(function () {
          //     callback(null, list[4]);
          // }, 5000)
        }
      }
  
      async function run() {
        let javob = await maslahatBering(65)
        console.log(javob)
        javob = await maslahatBering(0)
        console.log(javob)
        javob = await maslahatBering(33)
        console.log(javob)
    }
    run();


//console.log(===============================)
//console.log(===============================)
//console.log(===============================)

// class Shop {
//     constructor(non, lagmon, cola) {
//       this.products = {
//         non: non,
//         lagmon: lagmon,
//         cola: cola,
//       };
//     }
  
//     logMessage(message) {
//       const currentTime = new Date().toLocaleTimeString();
//       console.log(`Hozir ${currentTime}da ${message}`);
//     }
//     qoldiq() {
//       const { non, lagmon, cola } = this.products;
//       return `Hozir ${new Date().toLocaleTimeString()}da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//     }
//     sotish(product, quantity) {
//       if (
//         this.products[product] !== undefined &&
//         this.products[product] >= quantity
//       ) {
//         this.products[product] -= quantity;
//         this.logMessage(`${quantity}ta ${product} sotildi!`);
//       } else {
//         this.logMessage(
//           `${product} uchun yetarli miqdor yo'q yoki mahsulot topilmadi!`
//         );
//       }
//     }
//     qabul(product, quantity) {
//       if (this.products[product] !== undefined) {
//         this.products[product] += quantity;
//         this.logMessage(`${quantity}ta ${product} qabul qilindi!`);
//       } else {
//         this.logMessage(`${product} mahsuloti topilmadi!`);
//       }
//     }
//   }
//   const shop = new Shop(4, 5, 2);
//   console.log(shop.qoldiq());
//   shop.sotish("non", 3);
//   shop.qabul("cola", 4);
//   console.log(shop.qoldiq());
  

  // function countDigits(str) {
  //   let count = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     if (!isNaN(str[i]) && str[i] !== " ") {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(countDigits("ad2a54y79wet0sfgb92")); // 8 ta son  bor


  //  =============================================
  
  // console.log("Jack Ma maslahatlari");
  // const list = [
  //   "yaxshi talaba boling", // 0-20
  //   "togri boshliq tanlang va koproq xato qiling", // 20-30
  //   "ozingizga ishlashni boshlang", // 30-40
  //   "siz kuchli bolgan narsalarni qiling", // 40-50
  //   "yoshlarga savmoya kiriting", // 50-60
  //   "endi dam oling,  foydasi yoq endi", // 60
  // ];
  

   