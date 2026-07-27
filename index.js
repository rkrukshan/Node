// const fs = require("fs").promises;
const fs = require("fs");

// const data = fs.readdirSync("./");

// console.log(data);

// fs.readdir("./a", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.readdir("./a", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.mkdir("myFolder", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// fs.mkdir("myFolder/folder", (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }

// })

// fs.mkdir("myFolder/folder/folder1", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// const data1 = fs.readdirSync("myFolder");
// console.log(data1);

// async function mkFol() {
//   try {
//     await fs.mkdir("NewFolder", (err) => {
//       if (err) {
//         console.log(err);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// mkFol();

// function creFol() {
//   const folder = fs.existsSync("NewFolder1", (err) => {
//     if (err) {
//       console.log(err + "Folder Exists");
//     }
//   })

//     if (!folder)
//             {
//         fs.mkdir("NewFolder1", (err) => {
//             if (err) {
//             console.log(err);
//             }
//         });
//         }
//         else{
//             console.log("Already Exists");

//         };
// }

// creFol();

function folCre(){
    const folder = fs.existsSync("app",err=>{
        console.log(err);
    })

    if(!folder){
        fs.mkdir("app",err =>{
            if(err){
                console.log(err);
            }
        })
    }
    else{
        console.log("Folder Exists");
        
    }
}

folCre();
