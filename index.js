import express from "express";

const port = 8080;
const app = express();

app.all("/hello", (req, resp, next) => {
	console.log("All");
	next();
});

const cb = (req, resp, next) => {
	console.log("CB");
	next();
};

// app.route("/user")
// 	.get("/hello", cb, (req, resp) => {
// 		resp.send("Hello World!!!");
// 	}).post("/hello", (req, resp) => {
// 		resp.send("Hello World by POST");
// 	});

app.route('/user')
	.get((req, res) => {
		res.send("Hello World by GET");
	})
	.post((req, resp) => {
		resp.send("Hello World by POST");
	});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});