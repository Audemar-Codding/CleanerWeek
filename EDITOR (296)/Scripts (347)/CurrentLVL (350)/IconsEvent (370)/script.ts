class IconsEventBehavior extends Sup.Behavior {
  selected = false;
    
  Number;
  
  
  LVLEditorBehavior;
  LVLEditorBehaviorDescription;
  
  LVLEditorEnemie;
  LVLEditorEnemieStat;
  LVLEditorEnemieDesc;
  
  spawnW;
  EneHp;
  Nshot;
  ClearPts;
  PRoadBar;
  
  ObstacleNumber;
  Density;
     
  ObstacleShow;
  ObstacleName;
  ObstacleDescription;
  
  start()
  {
    this.Number = Sup.getActor("Number");
    this.LVLEditorBehavior = Sup.getActor("BehaviorShow");
    this.LVLEditorBehaviorDescription = Sup.getActor("BehaviorDescription");    
    this.LVLEditorEnemie = Sup.getActor("EnemieSprite");
    this.LVLEditorEnemieStat = Sup.getActor("EnemieStats");
    this.LVLEditorEnemieDesc = Sup.getActor("EnemieDescription");
    this.spawnW = Sup.getActor("SpawnInterval");
    this.EneHp = Sup.getActor("EnemieHP");
    this.Nshot = Sup.getActor("NumberOfShot");
    this.ClearPts = Sup.getActor("ClearPoints");
    this.PRoadBar = Sup.getActor("Position");
    
     this.ObstacleNumber = Sup.getActor("ObstacleNumber");
     this.Density = Sup.getActor("Density");
    
     this.ObstacleShow = Sup.getActor("ObstacleShow");
     this.ObstacleName = Sup.getActor("ObstacleName");
     this.ObstacleDescription = Sup.getActor("ObstacleDescription");
  }
  
  
  update() {
    
     if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0) && (IcoSelected[0] == false || this.selected == true))
       {
         Button2.stop();Button2.play();   
         if(this.selected == false) {this.selected = true; this.actor.spriteRenderer.setColor(GREY);IcoSelected[0] = true; IcoSelected[1] = this.actor[0]; IcoSelected[2] = this.actor;  
                                     if(CurrentROAD[this.actor[0]]["Eventtype"] == 1){this.LOADEventEnemie()}else{this.LOADEventObstacle();}                             
                                      }
         else{ this.selected = false; this.actor.spriteRenderer.setColor(WHITE);  IcoSelected[0] = false; }        
         
  
        
         
       }
    
    
  
    
  }
  
     LOADEventEnemie()
    {
      
    this.Number.textRenderer.setText(CurrentROAD[this.actor[0]]["Number"]).toString;
      
     currentBehaviorid = CurrentROAD[this.actor[0]]["BEHAV"]-1;
     currentEnemeieid  = CurrentROAD[this.actor[0]]["sprite"]-1;                                
                                           
      
    this.LVLEditorBehavior.spriteRenderer.setSprite("EDITOR/Sprites/Behavior/" + BehaviorPictures[currentBehaviorid]);
    this.LVLEditorBehaviorDescription.textRenderer.setText(BehaviorDescription[currentBehaviorid]);  
      
    this.LVLEditorEnemie.spriteRenderer.setSprite("ROAD/Sprites/Enemies/" + EnemiePictures[currentEnemeieid]);
    this.LVLEditorEnemieStat.textRenderer.setText(EnemieStats[currentEnemeieid]);
    this.LVLEditorEnemieDesc.textRenderer.setText(EnemieDescription[currentEnemeieid]);
    this.spawnW.textRenderer.setText(CurrentROAD[this.actor[0]]["spawnW"]/1000).toString;
    this.EneHp.textRenderer.setText(CurrentROAD[this.actor[0]]["EneHp"]).toString;
    this.Nshot.textRenderer.setText(CurrentROAD[this.actor[0]]["Nshot"]).toString;
    this.ClearPts.textRenderer.setText(CurrentROAD[this.actor[0]]["ClearPts"]).toString;
    this.PRoadBar.textRenderer.setText(CurrentROAD[this.actor[0]]["PRoadBar"]).toString;
      
    }
  
   LOADEventObstacle()
    {
      
    this.ObstacleNumber.textRenderer.setText(CurrentROAD[this.actor[0]]["Number"]).toString;
      Sup.log(CurrentROAD[this.actor[0]]["Number"])
    currentObstacleid = CurrentROAD[this.actor[0]]["Eventtype"]-2;
      
    this.ObstacleShow.spriteRenderer.setSprite("ROAD/Sprites/Obstacles/" + ObstaclePictures[currentObstacleid]);
    this.ObstacleName.textRenderer.setText(ObstacleName[currentObstacleid]);
    this.ObstacleDescription.textRenderer.setText(ObstacleDescription[currentObstacleid]);  
      
    this.Density.textRenderer.setText(CurrentROAD[this.actor[0]]["density"]).toString;    
      
    this.ClearPts.textRenderer.setText(CurrentROAD[this.actor[0]]["ClearPts"]).toString;
    this.PRoadBar.textRenderer.setText(CurrentROAD[this.actor[0]]["PRoadBar"]).toString;
      
    }
  
}
Sup.registerBehavior(IconsEventBehavior);