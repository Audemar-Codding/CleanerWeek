//MUSIC
class LEFTMUSICBehavior extends Sup.Behavior {

  music1;
  music2;
  
  start()
  { this.music1 = music1.getVolume();
    this.music2 = music2.getVolume(); }
  
  
  update() {   
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {if(MusicV!=-1){MusicV = MusicV-1; Sup.getActor("MusicNumber").textRenderer.setText(MusicV)}
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       
        MusicTab.forEach((element,index) => {element.setVolume(MusicTabMax[index]*MusicV/10);})
       
      }}
}
Sup.registerBehavior(LEFTMUSICBehavior);

class RIGHTMUSICBehavior extends Sup.Behavior {

  music1;
  music2
  
  start()
  {
    this.music1 = music1.getVolume();
       this.music1 = music2.getVolume();
  }
  
  update() {   
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { if(MusicV!=10){MusicV = MusicV+1; Sup.getActor("MusicNumber").textRenderer.setText(MusicV);
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
   MusicTab.forEach((element,index) => {element.setVolume(MusicTabMax[index]*MusicV/10);})}

      }      

  }
}
Sup.registerBehavior(RIGHTMUSICBehavior);



  

//SOUND
class LEFTSOUNDBehavior extends Sup.Behavior {

  
  
  
  update() {
     if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { if(SoundV!=0){SoundV = SoundV-1; Sup.getActor("SoundNumber").textRenderer.setText(SoundV);}
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       
       laser1.stop();   
       SoundTab.forEach((element,index) => {element.setVolume(SoundTabMax[index]*SoundV/10);})
       laser1.play();}
  }
}
Sup.registerBehavior(LEFTSOUNDBehavior);

class RIGHTSOUNDBehavior extends Sup.Behavior {

  update() {   
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { if(SoundV!=10){SoundV = SoundV+1; Sup.getActor("SoundNumber").textRenderer.setText(SoundV);}
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       
       laser1.stop();   
       SoundTab.forEach((element,index) => {element.setVolume(SoundTabMax[index]*SoundV/10);})
       laser1.play();}
  }
}
Sup.registerBehavior(RIGHTSOUNDBehavior);


