class supressionstars extends Sup.Behavior {
  
  update() {

  if(this.actor.getY() < - 330)
    {  this.actor.destroy();  }
  }
}
Sup.registerBehavior(supressionstars);
