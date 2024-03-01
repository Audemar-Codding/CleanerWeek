class AddEventEnemieBehavior extends Sup.Behavior {

  Number;
  BEHAV;
  sprite;
  spawnW;
  EneHp;
  Nshot;
  ClearPts;
  PRoadBar;
  
  CurrentEvent;
  
  icoid = 0;
  Posy;
  
  update() {
    
     if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {
       this.actor.spriteRenderer.setAnimation("Click",false)
       this.CreateEvent();
       Button3.stop();Button3.play(); 
      }
    
  }
  
  CreateEvent()
  {
    this.Number = Math.floor(parseInt(Sup.getActor("Number").textRenderer.getText()));
    this.BEHAV = currentBehaviorid;
    this.sprite =  currentEnemeieid;
    this.spawnW = parseFloat(Sup.getActor("SpawnInterval").textRenderer.getText());
    this.EneHp = Math.floor(parseInt(Sup.getActor("EnemieHP").textRenderer.getText()));
    this.Nshot = Math.floor(parseInt(Sup.getActor("NumberOfShot").textRenderer.getText()));
    this.ClearPts = Math.floor(parseInt(Sup.getActor("ClearPoints").textRenderer.getText()));
    this.PRoadBar = parseFloat(Sup.getActor("Position").textRenderer.getText());
    if( this.PRoadBar>100){ this.PRoadBar = 100;}
    
    
    this.CurrentEvent = {Eventtype: 1,Number:this.Number,BEHAV:this.BEHAV+1,sprite:this.sprite+1,spawnW:(this.spawnW*1000),Nshot:this.Nshot,EneHp:this.EneHp,ClearPts:this.ClearPts,PRoadBar:this.PRoadBar};
  
    CurrentROAD.push(this.CurrentEvent);
    CurrentRoadid++;
    
    // Création de l'icone
    this.icoid++
    
    let actor = new Sup.Actor("NEvents"+this.icoid)
    new Sup.SpriteRenderer(actor,"ROAD/Sprites/HUD/IcoEvent")
    
    actor.setParent(Sup.getActor("CurrentROAD"));
    actor.setLocalScale(2,2,1);
    
     if(this.icoid%2==0)
     {this.Posy=-205}else{this.Posy=-175}
   
     actor.setPosition((1120*(this.PRoadBar/100)-560),this.Posy,1) 
    
    actor[0] = CurrentRoadid;
    
    actor.addBehavior(IconsEventBehavior);
    
  }
}
Sup.registerBehavior(AddEventEnemieBehavior);

class AddEventObstacleBehavior extends Sup.Behavior {

  EventType;
  Number;
  Density;
  ClearPts;
  PRoadBar;
  
  CurrentEvent;
  
  icoid = 0;
  Posy;
  
  update() {
    
     if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {Button3.stop();Button3.play(); 
       this.actor.spriteRenderer.setAnimation("Click",false)
        this.CreateEvent();
      }
    
  }
  
  CreateEvent()
  {
    this.EventType = currentObstacleid+2;
    this.Number = Math.floor(parseInt(Sup.getActor("ObstacleNumber").textRenderer.getText()));
    this.Density = parseFloat(Sup.getActor("Density").textRenderer.getText());
    this.ClearPts = Math.floor(parseInt(Sup.getActor("ClearPoints").textRenderer.getText()));
    this.PRoadBar = parseFloat(Sup.getActor("Position").textRenderer.getText());
    if( this.PRoadBar>100){ this.PRoadBar = 100;}
    
    
    this.CurrentEvent = {Eventtype: this.EventType,Number:this.Number,density:this.Density,ClearPts:this.ClearPts,PRoadBar:this.PRoadBar};
  
    CurrentROAD.push(this.CurrentEvent);
    CurrentRoadid++;
    
    // Création de l'icone
    this.icoid++
    
    let actor = new Sup.Actor("NEvents"+this.icoid)
    new Sup.SpriteRenderer(actor,"ROAD/Sprites/HUD/IcoEvent")
    
    actor.setParent(Sup.getActor("CurrentROAD"));
    actor.setLocalScale(2,2,1);
    
     if(this.icoid%2==0)
     {this.Posy=-205}else{this.Posy=-175}
   
     actor.setPosition((1120*(this.PRoadBar/100)-560),this.Posy,1) 
    
    actor[0] = CurrentRoadid;
    
    actor.addBehavior(IconsEventBehavior);
    
  }
}
Sup.registerBehavior(AddEventObstacleBehavior);