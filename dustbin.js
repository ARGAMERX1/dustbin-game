class Dustbin {
constructor(x,y,width,hight){
var options = {
  'restitution':0.8,
  'friction':1.0,
  'density':1.0
}
this.body = Bodies.rectangle(x,y,width,hight,options);
this.width = width;
this.hight = hight;
World.add(World,this.body);
}
display(){
push();
translate(this.body.position.x, this.body.position.y);





pop();



}




}