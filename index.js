import express from "express";
import cron from "node-cron";
import fs from "fs";

const app = express();
const port = 200;

cron.schedule("*/10 * * * * *", ()=> {
    const data = "Hii cron-job is running\n";

    fs.appendFile('log.txt', data, (err)=> {
        if(err) throw err;
        console.log("File data added successfully");
    });
});


app.listen(port, ()=> {
    console.log(`Server is running on https://localhost:${port}`)
});