const fs = require("fs");
const http = require("http");

/////////////////////////////////////////////////////////////////
/// FIles

//Blocking, SYNCHRONOUS way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // შეიქმნა ახალი ფაილი ქვედა მოქმედებით
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

//Non-Blocking, ASYNCHRONOUS way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written!😂");
//       });
//     });
//   });
// });
// console.log("will read file!");

// fs.writeFile("./txt/luka.txt", "es aris axali faili", "utf-8", (err) => {
//   console.log("luka gaaketa mamamisma )))))))");
// });
////////////////////////////////////////////////////////////////

/// SERVER 😎

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from MOHIKAN!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listenning to requests on port 8000");
});
