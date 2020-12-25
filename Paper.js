class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = 20;

        this.body = Bodies.circle(25, height - 10, this.radius, options);

        World.add(world, this.body);
        

    }

    display() {
        fill("rgb(255, 0, 255)");
        //push();
        ellipse(this.body.position.x, this.body.position.y, 50, 50);
        
        //pop();
    }
}