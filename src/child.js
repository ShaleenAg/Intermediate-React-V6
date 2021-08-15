function Cube(x) {
    return x * x * x;
}

const Foo = Math.PI + Math.SQRT2;

var Graph = {
    options: {
        color: "white",
        thickness: "2px",
    },
    draw: function () {
        console.log("From graph draw function");
    },
};

export { Cube, Foo, Graph };
export default Cube;
