let universalID: number | string = 5;

console.log(universalID);

printId(universalID);

universalID = "sdf";

printId(universalID);

function printId(id: number | string) {
	if (typeof id == "number") {
		console.log("Number:" + id);
	} else {
		console.log(id.toUpperCase());
	}
}

function helloUser(user: string | string[]) {
	if (Array.isArray(user)) {
		user.forEach((user, index, arr) => {
			console.log(user);
		});
	} else {
		console.log(user + "hi");
	}
}
