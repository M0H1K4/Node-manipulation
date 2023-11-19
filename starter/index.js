const fs = require("fs");

//Blocking, SYNCHRONOUS way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // შეიქმნა ახალი ფაილი ქვედა მოქმედებით
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

//Non-Blocking, ASYNCHRONOUS way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2 ) => {
        console.log(data2);
      });
});
console.log("will read file!");
