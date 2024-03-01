class RandomLVL extends Sup.Behavior {
 hover = false;
 actorRandom = Sup.getActor("RandomLVL") 
 
  
  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button1.stop(); Button1.play();
           LevelGenerator();
           ROADLEVELS[1] = ROADRandom ;
           ClearMaxValue= 0;
           currentRoad = 1;
           StartRoad(1);
           }
        if (this.hover==false)
       { this.hover = true; this.actorRandom.spriteRenderer.setColor(GREY) }
      }
    else
      {if(this.hover==true)
          { this.hover = false
           this.actorRandom.spriteRenderer.setColor(WHITE) } }         
          }

}
Sup.registerBehavior(RandomLVL);


function LevelGenerator()
{
  // 5 incidents tout les 20%
  // Entre 2 et 5 events / obstacle
  // 1 seul obstacle par incident ?
  // soit proche soit éloigné
  
  ROADRandom = [];
  
  let i =5;
  let EventNumber = 0;
  let PositionMax = 20;
  
  
while (i>0) {
  
  
  let nombreevents = Sup.Math.Random.integer(2,5);
  let PositionALea = 0;
  
  
 
  
  while (nombreevents>0) {
    EventNumber = Sup.Math.Random.integer(0,100);
    let Event;
     PositionALea = PositionALea+Sup.Math.Random.integer(1,3)
    if(EventNumber<51)
      {    Event = {Eventtype: 1,Number: Sup.Math.Random.integer(2,6),BEHAV:Sup.Math.Random.integer(1,6),sprite:Sup.Math.Random.integer(1,8),spawnW:Sup.Math.Random.integer(250,1500),Nshot:Sup.Math.Random.integer(4,12),EneHp:Sup.Math.Random.integer(25,100),ClearPts:Sup.Math.Random.integer(5,20),PRoadBar:PositionALea+PositionMax-20}; }
    
    if(EventNumber<76&&EventNumber>50)
      {    Event = {Eventtype: 2,Number:Sup.Math.Random.integer(50,200),density:Sup.Math.Random.integer(75,250),ClearPts:0,PRoadBar:PositionALea+PositionMax-20}; }
    
    if(EventNumber<91&&EventNumber>75)
      {    Event = {Eventtype: 3,Number:Sup.Math.Random.integer(50,150),density:Sup.Math.Random.integer(50,250),ClearPts:0,PRoadBar:PositionALea+PositionMax-20}; }
    
    if(EventNumber<101&&EventNumber>90)
      {    Event = {Eventtype: 4,Number:Sup.Math.Random.integer(15,40),density:-Sup.Math.Random.integer(-500,1500),ClearPts:0,PRoadBar:PositionALea+PositionMax-20}; }
    
    ROADRandom.push(Event);
    nombreevents--;
  }
  
  PositionMax += 20;
i--;

}


  
  
  
}