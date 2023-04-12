import express from "express";

const port = 8080;
const app = express();

app.get("/hello", (req, resp) => {
	// resp.status(201).json({ success: true });
	// resp.download("/test.pdf", "teeeeeeeeeest.pdf");
	// resp.redirect(301, "https://google.com");
	// resp.append("Warning", "code");
	// resp.type("application/json");

	// resp.cookie("token", "sdfsdfs", {
	// 	domain: "",
	// 	path: "/",
	// 	secure: true,
	// 	maxAge: 60000
	// });

	// resp.clearCookie("token");

	// resp.links({
	// 	next: "ssafas",

	// });

	// resp.send("Привет");
	// resp.set("Content-Type", "text/html");

	resp.sendStatus(404).end();

});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});