class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage:
const cylinder = new Cylinder(5, 10);
console.log(Cylinder Volume: ${cylinder.getVolume()} cubic units);