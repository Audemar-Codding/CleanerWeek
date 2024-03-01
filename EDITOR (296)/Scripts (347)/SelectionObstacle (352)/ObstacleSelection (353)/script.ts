// Les Enemies

class ObstacleRIGHTBehavior extends Sup.Behavior {
 
  ObstacleShow;
  ObstacleName;
  ObstacleDescription;
  
  start() {
    this.ObstacleShow = Sup.getActor("ObstacleShow");
    this.ObstacleName = Sup.getActor("ObstacleName");
    this.ObstacleDescription = Sup.getActor("ObstacleDescription");
    currentObstacleid = 0;
    this.ObstacleShow.spriteRenderer.setSprite("ROAD/Sprites/Obstacles/" + ObstaclePictures[currentObstacleid]);
    
    
  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button2.stop();Button2.play(); 
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentObstacleid = (currentObstacleid + 1) % ObstaclePictures.length;
       this.ObstacleShow.spriteRenderer.setSprite("ROAD/Sprites/Obstacles/" + ObstaclePictures[currentObstacleid]);
       this.ObstacleName.textRenderer.setText(ObstacleName[currentObstacleid]);
       this.ObstacleDescription.textRenderer.setText(ObstacleDescription[currentObstacleid]);
       
  }
 }
}
Sup.registerBehavior(ObstacleRIGHTBehavior);

class ObstacleLEFTBehavior extends Sup.Behavior {
 
  ObstacleShow;
  ObstacleName;
  ObstacleDescription;
  
  start() {
    this.ObstacleShow = Sup.getActor("ObstacleShow");
    this.ObstacleName = Sup.getActor("ObstacleName");
    this.ObstacleDescription = Sup.getActor("ObstacleDescription");
    currentObstacleid = 0;
    this.ObstacleShow.spriteRenderer.setSprite("ROAD/Sprites/Obstacles/" + ObstaclePictures[currentObstacleid]);
    

  }
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button2.stop();Button2.play();
       this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       currentObstacleid = (currentObstacleid - 1 + ObstaclePictures.length) % ObstaclePictures.length; 
       this.ObstacleShow.spriteRenderer.setSprite("ROAD/Sprites/Obstacles/" + ObstaclePictures[currentObstacleid]);
       this.ObstacleName.textRenderer.setText(ObstacleName[currentObstacleid]);
       this.ObstacleDescription.textRenderer.setText(ObstacleDescription[currentObstacleid]);
       
  }
 }
}
Sup.registerBehavior(ObstacleLEFTBehavior);





