class Menubtn extends Sup.Behavior {
 hover = false;
 actorstart = Sup.getActor("MenuBtn") 
  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button1.stop(); Button1.play();Sup.loadScene("MENU/Menu") }
        if (this.hover==false)
       { this.hover = true ; this.actorstart.textRenderer.setColor(GREY) }
      }
    else
      {if(this.hover==true)
          { this.hover = false
           this.actorstart.textRenderer.setColor(WHITE) } }          
          }

}
Sup.registerBehavior(Menubtn);