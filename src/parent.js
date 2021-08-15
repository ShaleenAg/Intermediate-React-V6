import { Cube, Foo, Graph } from "./parentnode.js";

Graph.options = {
    color: "blue",
    thickness: "3px",
};

Graph.draw();
console.log(Cube(3)); // 27
console.log(Foo); // 4.555806215962888
