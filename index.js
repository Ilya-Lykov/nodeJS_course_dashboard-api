import http from "http";

const host = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, resp) => {
	switch (req.method) {
		case "GET":
			switch (req.url) {
				case "/hello":
					resp.statusCode = 200;
					resp.setHeader("Content-Type", "text/html");
					resp.end("<h1>Hello World!!!</h1>");
					break;
			}
			break;
	}


});

server.listen(port, host, () => {
	console.log(`Сервер запущен на ${host}:${port}`);
});