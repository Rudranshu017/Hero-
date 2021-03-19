class rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:300
        }
        this.pointB = pointB
        this.rope1 = Constraint.create(options)
        World.add(world, this.rope1)
    }
    display() {
        if(this.rope1.bodyA) {
            var pointA = this.rope1.bodyA.position
            var pointB = this.pointB
            push()
            stroke("black")
            strokeWeight(4)
            line(pointB.x, pointB.y, pointA.x, pointA.y)
            pop()
        }
    }
}