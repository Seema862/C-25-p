class paper
{
	constructor(x,y,r)
	{
        var options={
            'isStatic':false,
            'density':1.2,
            'friction': 0,
            'restitution':0.3
        }
        this.x=x;
		this.y=y;
		this.r=r

        this.image = loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
    }

    display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
            ellipse(0, 0, this.r, this.r);
			pop()
}
}