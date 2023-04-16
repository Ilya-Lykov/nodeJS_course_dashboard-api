var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coord = /** @class */ (function () {
    function Coord(lat, long) {
        this.message = "1";
        this.lat = lat;
        this.long = long;
        console.log(this.message);
    }
    return Coord;
}());
var point = new Coord(0, 1);
var MapLocation = /** @class */ (function (_super) {
    __extends(MapLocation, _super);
    function MapLocation(lat, long, name) {
        var _this = _super.call(this, lat, long) || this;
        _this.message = "2";
        _this.name = name;
        console.log(_this.message);
        return _this;
    }
    return MapLocation;
}(Coord));
