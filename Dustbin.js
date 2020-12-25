class Dustbin {
    constructor() {
        this.body1 = Bodies.rectangle(509, height - 30, 20, 100);
        this.body2 = Bodies.rectangle(691, height - 30, 20, 100);
        this.body3 = Bodies.rectangle(600, height - 10, 200, 20);

        Body.setStatic(this.body1, true);
        Body.setStatic(this.body2, true);
        Body.setStatic(this.body3, true);

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
        
    }

    display() {
        fill("white");
        //push();
        rect(this.body1.position.x, this.body1.position.y, 20, 100);
        rect(this.body2.position.x, this.body2.position.y, 20, 100);
        rect(this.body3.position.x, this.body3.position.y, 200, 20);
        //strokeWeight(0);
        
        //stroke("white");
        //pop();
    }
}