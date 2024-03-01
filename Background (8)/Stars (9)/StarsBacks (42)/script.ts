class StarsBack1Behavior extends Sup.Behavior {
 
  awake(){  this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.05); }
  
  update() {
    
    if ( this.actor.getY() < -680)
    { this.actor.arcadeBody2D.warpPosition(0,Sup.getActor("BA2").getY()+680); }
  }
}
Sup.registerBehavior(StarsBack1Behavior);

class StarsBack2Behavior extends Sup.Behavior {
 
  awake(){  this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.05); }
  
  update() {
  
    if ( this.actor.getY() < -680)
    { this.actor.arcadeBody2D.warpPosition(0,Sup.getActor("BA1").getY()+680); }
  }
}
Sup.registerBehavior(StarsBack2Behavior);

