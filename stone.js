class Stone{
	constructor(x,y,width,height)
	{
	
	var options={
	restitution:0.8,
	friction:9,
	density:12
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
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the rect here to display the rubber ball
            rect(0,0,this.width,this.height)
			pop()
	}
}