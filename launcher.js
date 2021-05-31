class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){
        if(this.launcher.bodyA != null){ 
            var pointA = this.launcher.bodyA.position;

            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);


        }
       
    }
    fly(){
        this.launcher.bodyA=null;
    }
}