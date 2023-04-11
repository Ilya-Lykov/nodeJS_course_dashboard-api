import express from "express";

const host = "127.0.0.1";
const port = 8080;
const app = express();


app.get("/hello", (req, resp) => {
	resp.send("Hello World!!!");
});


app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});