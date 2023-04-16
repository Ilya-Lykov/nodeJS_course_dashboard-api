interface HasLegth {
	length: number;
}

function log<T extends HasLegth, K>(obj: T, arr: K[]): T {
	obj.length;
	console.log(obj);
	return obj;
}

interface IUser {
	name: string;
	age?: number;
	bid: <T>(sum: T) => boolean;
}

function bid<T>(sum: T): boolean {
	return true;
}
