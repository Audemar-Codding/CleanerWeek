class CrewSelectionLEFTBehavior extends Sup.Behavior {
   
  awake(){ 
    
    //Affichage
       Sup.getActor("CrewName").textRenderer.setText(Pilotes[Piloteid]["name"])
       Sup.getActor("CrewShow").spriteRenderer.setSprite("HANGAR/Sprites/Pilots/pilot" + (Piloteid + 1 + "") )
       Sup.getActor("CrewDescription").textRenderer.setText(Pilotes[Piloteid]["stat1"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat1"]]*100 + "% " + Pilotes[Piloteid]["stat2"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat2"]]*100 + "% " + Pilotes[Piloteid]["stat3"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat3"]]*100 + "%")
       Sup.getActor("CDescription").textRenderer.setText(Pilotes[Piloteid]["Des"])
  
  
  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       Piloteid--
       if(Piloteid == -1)
       {Piloteid = Pilotes.length-1}
       ShipStatCalc()
       Statcompdestroy()
       Statscomparison()
       
       //Affichage
       Sup.getActor("CrewName").textRenderer.setText(Pilotes[Piloteid]["name"])
       Sup.getActor("CrewShow").spriteRenderer.setSprite("HANGAR/Sprites/Pilots/pilot" + (Piloteid + 1 + "") )
       Sup.getActor("CrewDescription").textRenderer.setText(Pilotes[Piloteid]["stat1"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat1"]]*100 + "% " + Pilotes[Piloteid]["stat2"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat2"]]*100 + "% " + Pilotes[Piloteid]["stat3"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat3"]]*100 + "%")
       Sup.getActor("CDescription").textRenderer.setText(Pilotes[Piloteid]["Des"])
       
       
  }
 }
}
Sup.registerBehavior(CrewSelectionLEFTBehavior);

class CrewSelectionRIGHTBehavior extends Sup.Behavior {
   
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       Piloteid++
       if(Piloteid == Pilotes.length)
       {Piloteid = 0}
       ShipStatCalc()
       Statcompdestroy()
       Statscomparison()
      
       //Affichage
       Sup.getActor("CrewName").textRenderer.setText(Pilotes[Piloteid]["name"])
       Sup.getActor("CrewShow").spriteRenderer.setSprite("HANGAR/Sprites/Pilots/pilot" + (Piloteid + 1 + "") )
       Sup.getActor("CrewDescription").textRenderer.setText(Pilotes[Piloteid]["stat1"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat1"]]*100 + "% " + Pilotes[Piloteid]["stat2"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat2"]]*100 + "% " + Pilotes[Piloteid]["stat3"] +":" + Pilotes[Piloteid][Pilotes[Piloteid]["stat3"]]*100 + "%")
       Sup.getActor("CDescription").textRenderer.setText(Pilotes[Piloteid]["Des"])
       
       
  }
 }
}
Sup.registerBehavior(CrewSelectionRIGHTBehavior);