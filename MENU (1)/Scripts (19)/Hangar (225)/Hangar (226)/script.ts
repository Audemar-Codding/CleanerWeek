class HangardBehavior extends Sup.Behavior {
 hover = false;
 
 Interact;
  
    awake() {
    this.Interact = this.actor.getChildren()[0];

  }
  
  
  update() {
    
    if(Rayon.intersectActor(this.Interact,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button1.stop(); Button1.play(); Sup.loadScene("HANGAR/Hangar") }
        if (this.hover==false)
       { this.hover = true ; this.actor.textRenderer.setColor(GREY) }
      }
    else
      {if(this.hover==true)
          { this.hover = false
           this.actor.textRenderer.setColor(WHITE) } }          
          }

}
Sup.registerBehavior(HangardBehavior);