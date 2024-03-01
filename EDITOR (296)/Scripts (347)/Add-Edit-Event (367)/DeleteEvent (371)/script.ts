class DeleteEventBehavior extends Sup.Behavior {
  
  
  
  awake() { 
  
  }

  update() {
    
      if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0) && IcoSelected[0] == true )
       {Explosion3.stop();Explosion3.play();
        this.actor.spriteRenderer.setAnimation("Click",false)
        IcoSelected[0] = false;  IcoSelected[2].destroy();
        CurrentROAD.splice(IcoSelected[1], 1);
        CurrentRoadid--;  }
   }
}

Sup.registerBehavior(DeleteEventBehavior);

