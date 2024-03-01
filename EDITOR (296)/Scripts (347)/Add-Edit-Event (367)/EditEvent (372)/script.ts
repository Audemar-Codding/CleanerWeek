class EditEvent extends Sup.Behavior {


  Number;
  BEHAV;
  sprite;
  spawnW;
  EneHp;
  Nshot;
  ClearPts;
  PRoadBar;
  
  EventType;
  ObstacleNumber;
  Density;  
  
  update() {
    
     if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0) && IcoSelected[0] == true)
       {
         this.actor.spriteRenderer.setAnimation("Click",false)
         this.EDITEvent();
         Button3.stop();Button3.play(); 
       }
  }
  
  EDITEvent()
  {
    let ROADtoEdit = CurrentROAD[IcoSelected[1]];
      
    this.Number = Math.floor(parseInt(Sup.getActor("Number").textRenderer.getText()));
    this.BEHAV = currentBehaviorid;
    this.sprite =  currentEnemeieid;
    this.spawnW = parseFloat(Sup.getActor("SpawnInterval").textRenderer.getText());
    this.EneHp = Math.floor(parseInt(Sup.getActor("EnemieHP").textRenderer.getText()));
    this.Nshot = Math.floor(parseInt(Sup.getActor("NumberOfShot").textRenderer.getText()));
    this.ClearPts = Math.floor(parseInt(Sup.getActor("ClearPoints").textRenderer.getText()));
    this.PRoadBar = parseFloat(Sup.getActor("Position").textRenderer.getText());
    if( this.PRoadBar>100){ this.PRoadBar = 100;}
    
    this.EventType = currentObstacleid+2;
    this.ObstacleNumber = Math.floor(parseInt(Sup.getActor("ObstacleNumber").textRenderer.getText()));
    this.Density = Math.floor(parseInt(Sup.getActor("Density").textRenderer.getText()))
    
    if(ROADtoEdit["Eventtype"]==1)
   { ROADtoEdit = {Eventtype: 1,Number:this.Number,BEHAV:this.BEHAV+1,sprite:this.sprite+1,spawnW:(this.spawnW*1000),Nshot:this.Nshot,EneHp:this.EneHp,ClearPts:this.ClearPts,PRoadBar:this.PRoadBar};}
   else{ROADtoEdit = {Eventtype: this.EventType,Number:this.ObstacleNumber,density:this.Density,ClearPts:this.ClearPts,PRoadBar:this.PRoadBar} } 
    
    
    
    CurrentROAD[IcoSelected[1]] = ROADtoEdit;

    
    // Affiche une confirmation
    ManagerInfo();
    
  }
  
  
}
Sup.registerBehavior(EditEvent);


function ManagerInfo() {Sup.getActor("ManagerInformation").spriteRenderer.setAnimation("Info",false);}
