type coord = { lat: number; long: number };

interface ICoord {
	lat: number;
	long: number;
}

type ID = number | string;

function compute(coord: ICoord) {}

interface Dog {
	name: string;
}
interface Dog {
	tail: boolean;
}

const dog: Dog = {
	name: "fsdf",
	tail: true,
};
