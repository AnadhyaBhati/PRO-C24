class Iron{
	constructor(x,y,width,height)
	{
	
	var options={
	restitution:0.8,
	friction:3,
	density:30
	}
	
		
		this.body=Bodies.rectangle(x,y,width,height,options)
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
        World.add(world, this.body);

	}
   display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("cyan");
			//draw the rect here to display the rubber ball
            rect(0,0,this.width,this.height)
			pop()
	}
}