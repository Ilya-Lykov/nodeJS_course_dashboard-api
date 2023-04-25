function Component(id: number) {
	console.log("init Component");
	return (target: Function) => {
		console.log("run Component");
		target.prototype.id = id;
	};
}

function Logger() {
	console.log("init Logger");
	return (target: Function) => {
		console.log("run Logger");
	};
}

function Method(
	target: Object,
	propertyKey: string,
	propertyDescriptor: PropertyDescriptor
) {
	console.log(propertyKey);
	const oldValue = propertyDescriptor.value;
	propertyDescriptor.value = function (...args: unknown[]) {
		if (typeof args[0] == "number") {
			return args[0] * 10;
		}
	};
}

function Prop(target: Object, propertyKey: string) {
	let value: number;

	const getter = () => {
		console.log("GET");
		return value;
	};

	const setter = (newValue: number) => {
		console.log("SET");
		value = newValue;
	};

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
	});
}
function Param(
	target: Object,
	propertyKey: string,
	parameterIndex: number
): void {
	console.log(propertyKey, parameterIndex);
}

@Logger()
@Component(1)
export class User {
	@Prop id: number;

	@Method
	updateId(@Param newId: number) {
		this.id = newId;
		return this.id;
	}
}

console.log(new User().id);
console.log(new User().updateId(2));
