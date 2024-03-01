// Les Enemies

class EnemieRIGHTBehavior extends Sup.Behavior {
 
  LVLEditorEnemie;
  LVLEditorEnemieStat;
  LVLEditorEnemieDesc;
  
  start() {
    
    CurrentROAD = [];
    
    this.LVLEditorEnemie = Sup.getActor("EnemieSprite");
    this.LVLEditorEnemieStat = Sup.getActor("EnemieStats");
    this.LVLEditorEnemieDesc = Sup.getActor("EnemieDescription");
    currentEnemeieid = 0;
    this.LVLEditorEnemie.spriteRenderer.setSprite("ROAD/Sprites/Enemies/" + EnemiePictures[currentEnemeieid]);
    this.LVLEditorEnemieStat.textRenderer.setText(EnemieStats[currentEnemeieid]);
    this.LVLEditorEnemieDesc.textRenderer.setText(EnemieDescription[currentEnemeieid]);
    
  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentEnemeieid = (currentEnemeieid + 1) % EnemiePictures.length;
       this.LVLEditorEnemie.spriteRenderer.setSprite("ROAD/Sprites/Enemies/" + EnemiePictures[currentEnemeieid]);
       this.LVLEditorEnemieStat.textRenderer.setText(EnemieStats[currentEnemeieid]);
       this.LVLEditorEnemieDesc.textRenderer.setText(EnemieDescription[currentEnemeieid]);
  }
 }
}
Sup.registerBehavior(EnemieRIGHTBehavior);

class EnemieLEFTBehavior extends Sup.Behavior {
 
  LVLEditorEnemie;
  LVLEditorEnemieStat;
  LVLEditorEnemieDesc;
  
   start() {
    this.LVLEditorEnemie = Sup.getActor("EnemieSprite");
    this.LVLEditorEnemieStat = Sup.getActor("EnemieStats");
    this.LVLEditorEnemieDesc = Sup.getActor("EnemieDescription");
    this.LVLEditorEnemie.spriteRenderer.setSprite("ROAD/Sprites/Enemies/" + EnemiePictures[currentEnemeieid]);
    this.LVLEditorEnemieStat.textRenderer.setText(EnemieStats[currentEnemeieid]);
    this.LVLEditorEnemieDesc.textRenderer.setText(EnemieDescription[currentEnemeieid]);
    
  }
  
  
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button2.stop();Button2.play();
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentEnemeieid = (currentEnemeieid - 1 + EnemiePictures.length) % EnemiePictures.length;
       this.LVLEditorEnemie.spriteRenderer.setSprite("ROAD/Sprites/Enemies/" + EnemiePictures[currentEnemeieid]);
       this.LVLEditorEnemieStat.textRenderer.setText(EnemieStats[currentEnemeieid]);
       this.LVLEditorEnemieDesc.textRenderer.setText(EnemieDescription[currentEnemeieid]);
  }
 }
}
Sup.registerBehavior(EnemieLEFTBehavior);




// Les Behaviors
class EnemieBehaviorRIGHTBehavior extends Sup.Behavior {
 
  LVLEditorBehavior;
  LVLEditorBehaviorDescription;
  
  start() {
    this.LVLEditorBehavior = Sup.getActor("BehaviorShow");
    this.LVLEditorBehaviorDescription = Sup.getActor("BehaviorDescription");
    currentBehaviorid = 0;
    this.LVLEditorBehavior.spriteRenderer.setSprite("EDITOR/Sprites/Behavior/" + BehaviorPictures[currentBehaviorid]);
    this.LVLEditorBehaviorDescription.textRenderer.setText(BehaviorDescription[currentBehaviorid]);
  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button2.stop();Button2.play();
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentBehaviorid = (currentBehaviorid + 1) % BehaviorPictures.length;
       this.LVLEditorBehavior.spriteRenderer.setSprite("EDITOR/Sprites/Behavior/" + BehaviorPictures[currentBehaviorid]);
       this.LVLEditorBehaviorDescription.textRenderer.setText(BehaviorDescription[currentBehaviorid]);
       
  }
 }
}
Sup.registerBehavior(EnemieBehaviorRIGHTBehavior);

class EnemieBehaviorLEFTBehavior extends Sup.Behavior {
  LVLEditorBehavior;
  LVLEditorBehaviorDescription;
  
  start() {
    this.LVLEditorBehavior = Sup.getActor("BehaviorShow");
    this.LVLEditorBehaviorDescription = Sup.getActor("BehaviorDescription");
    currentBehaviorid = 0;
    this.LVLEditorBehavior.spriteRenderer.setSprite("EDITOR/Sprites/Behavior/" + BehaviorPictures[currentBehaviorid]);
    this.LVLEditorBehaviorDescription.textRenderer.setText(BehaviorDescription[currentBehaviorid]);
  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button2.stop();Button2.play();
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentBehaviorid = (currentBehaviorid - 1 + BehaviorPictures.length) % BehaviorPictures.length;
       this.LVLEditorBehavior.spriteRenderer.setSprite("EDITOR/Sprites/Behavior/" + BehaviorPictures[currentBehaviorid]);
       this.LVLEditorBehaviorDescription.textRenderer.setText(BehaviorDescription[currentBehaviorid]);
       
  }
 }
}
Sup.registerBehavior(EnemieBehaviorLEFTBehavior);






