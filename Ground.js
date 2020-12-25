class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2, height, width, 20, options);

        World.add(world, this.body);
    }

    display() {
        fill("yellow");
        //push();
        rect(this.body.position.x, this.body.position.y, width, 20);
        //pop();
    }
}