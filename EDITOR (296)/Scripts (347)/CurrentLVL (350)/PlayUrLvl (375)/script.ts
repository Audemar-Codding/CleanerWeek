class PlayUrLvlBehavior extends Sup.Behavior {

  hover= false;
  
  update() {
    
    
     if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { 
            ROADLEVELS[2] = CurrentROAD;
           currentRoad = 2;
           StartRoad(2); }
        
        if (this.hover==false)
       { this.hover = true ; this.actor.textRenderer.setColor(GREY) }


}else{
   if (this.hover==true)
       { this.hover = false ;  this.actor.textRenderer.setColor(WHITE) }
}

    
    
    
  }
}
Sup.registerBehavior(PlayUrLvlBehavior);
