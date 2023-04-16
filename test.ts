class Coord {
	message = "1";
	lat: number;
	long: number;

	computeDistance(newLat: number, newLong: number) {
		return 0;
	}

	protected test() {
		if (this.lat > 0) {
		}
	}

	constructor(lat: number, long: number) {
		this.lat = lat;
		this.long = long;
		console.log(this.message);
	}
}

class MapLocation extends Coord {
	message = "2";

	_name: string;

	get name() {
		return this._name;
	}
	set name(s: string) {
		this._name = s;
	}

	override computeDistance(newLat: number, newLong: number): number {
		console.log(this.name);
		return 1;
	}

	constructor(lat: number, long: number, name: string) {
		super(lat, long);
		this.name = name;
		console.log(this.message);
	}
}
const point = new MapLocation(0, 1, "NY");

interface LoggerService {
	log: (s: string) => void;
}

class Logger implements LoggerService {
	log(s: string) {
		console.log(s);
	}
}

const l = new Logger();
l.log("Hello");

class MyClass<T> {
	a: T;
}

const b = new MyClass<String>();
b.a;

abstract class Base {
	print(s: string) {
		console.log(s);
	}

	abstract error(s: string): void;
}

class BaseChild extends Base {
	override error(s: string): void {
		throw new Error(s);
	}

	override print(s: string): void {
		console.log(s);
	}
}

class Animal {
	name: string;
}

class Dog {
	name: string;
	tail: boolean;
}

const puppy: Animal = new Dog();
