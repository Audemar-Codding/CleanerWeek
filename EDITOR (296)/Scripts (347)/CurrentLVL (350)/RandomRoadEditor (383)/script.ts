class RandomRoadEditorBehavior extends Sup.Behavior {
  
  update() {
    
    
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {
        RollingDice.stop();RollingDice.play();
        LevelGenerator();
        CleanCurrentRoad()
        ROADRandom.unshift("Random Title");
        ImportLVL(ROADRandom);
        IcoSelected[0] = false;

        
      }
    
    
    
  }
}
Sup.registerBehavior(RandomRoadEditorBehavior);
