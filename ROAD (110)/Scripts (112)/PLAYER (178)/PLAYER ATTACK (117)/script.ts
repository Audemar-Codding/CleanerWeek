
let idShot = 0;

// Ici on met les types de shots et on les appelles
let ShotSound = laser1;

function Shot()
{

  
  if(IsShooting==true)
    {
  
  let ProjectVect = 0;
  let TimeBeetShot = 50
  let Alea = 0;
  let SpriteName;
  let Scale = 1;
  NumberShot = 0;

   //I-shot
    if(SHIP[0]==1)
    { ProjectVect = 5;
      ShotSound = laser1;  
      SpriteName = "Bullet1";
      ShotSound.setLoop(false); }
    
    //Copper Shower
    if(SHIP[0]==2)
    { ProjectVect = 10 
      ShotSound = Bullet3;   
      SpriteName = "Bullet1"; 
      Scale = 0.5; }
    
    //Future Rule
    if(SHIP[0]==3)
    { ProjectVect = 15 
      ShotSound = laser4;  
      SpriteName = "Laser1";
      Scale = 1.5; } 
    
    //Royal Gatling
    if(SHIP[0]==4)
    { ProjectVect = 10 
      ShotSound = Bullet2; 
      SpriteName = "Bullet2"; 
      Scale = 0.75; }
    
    //HugeSlicer
    if(SHIP[0]==5)
    { ProjectVect = 0 
      SpriteName = "Laser2"; 
      ShotSound = laser2;
      ShotSound.setVolume(0.03);
      ShotSound.setLoop(true); }
     
     
     //True-Newold
    if(SHIP[0]==6)
    { ProjectVect = 5 
      TimeBeetShot = 15
      ShotSound = ShotGun1; 
      SpriteName = "Bullet2";
      Scale = 0.75; }
     
     //Bigdeal
    if(SHIP[0]==7)
    { ProjectVect = 5 
     TimeBeetShot = 150
      ShotSound = Explosion2; 
      SpriteName = "Bullet3";
      Scale = 1.5; }
    
    //Void's Whip
    if(SHIP[0]==8)
    { ProjectVect = 15
      TimeBeetShot = 30
      ShotSound = laser2; 
     ShotSound.setVolume(0.1);
      SpriteName = "Laser3"; }

    //Laser Gatling
    if(SHIP[0]==9)
    { ProjectVect = 10 
     // ShotSound = laser2; il y a un bug inconnu quand on le déclare
      SpriteName = "Laser1";  
      Scale = 0.75; }
  
      Alea = Sup.Math.Random.integer(5,20);
  
  Shooting();
  
 
  function Shooting()
  {  
      
      
   NumberShot++  
   Sup.getActor("Wleft").setY(Sup.getActor("Weapons").getY());Sup.getActor("Wright").setY(Sup.getActor("Weapons").getY())           
      
      

         
    Shotend = false;
    idShot++
    
    let actorshot  = new Sup.Actor("ShotJ" + idShot)
    new Sup.ArcadePhysics2D.Body(actorshot, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 1,  height: 1,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
    new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/" + SpriteName) // attribue le sprite   
    actorshot.setZ(6);
    actorshot.setLocalScale(Scale,Scale,1);
    
  
    //HugeSlicer
    if(SHIP[0]==5)
    { actorshot.spriteRenderer.stopAnimation()
      actorshot.spriteRenderer.setAnimation("Shot",true)
      actorshot.addBehavior(RAYBehavior) 
      actorshot.setName("Laser") }
    else{actorshot.addBehavior(BULLETBehavior);}
     
     //True-Newold
    if(SHIP[0]==6)
    {Sup.getActor("Wleft").setY(Sup.getActor("Wleft").getY()-2) 
     Alea = Sup.Math.Random.sample([-25,-50,-100,-120,-130,-140,-150,-160,-170,0,25,50,-180,200,220,240,260,280,300,320,340,360]) }
     

    let Sprorient = 0;

    if(NumberShot %2 == 0)
        { actorshot.arcadeBody2D.warpPosition(Sup.getActor("Wleft").getX(),Sup.getActor("Wleft").getY()) 
          Sup.getActor("Wleft").setY(Sup.getActor("Wleft").getY()-2)
          Sprorient = -0.05
          ShotSound.setPan(-0.2);
         
 
        }
      else
        { actorshot.arcadeBody2D.warpPosition(Sup.getActor("Wright").getX(),Sup.getActor("Wleft").getY())
          Sup.getActor("Wright").setY(Sup.getActor("Wright").getY()-2)
          Sprorient = 0.05
          ShotSound.setPan(0.2);
         
         
        }

    
  
     
    let actorsize = actorshot.spriteRenderer.getSprite().getGridSize()
    let Pixel = actorshot.spriteRenderer.getSprite().getPixelsPerUnit()
    actorshot.arcadeBody2D.setSize(actorsize.width/Pixel,actorsize.height/Pixel)
    actorshot.arcadeBody2D.setVelocity(SHIPSTATS["Spr"]*Sprorient+Alea*Sprorient*0.01*SHIPSTATS["Spr"],ProjectVect)

    
 
    
      if(SHIP[0]!=5)
   {
     
     if(SHIP[0]!=6 && SHIP[0]!=9)
      {  ShotSound.stop();
        ShotSound.play();}
     else{
       
       if(SHIP[0]!=9)
       { if(NumberShot==1){ShotSound.play();} }
        else{   if(NumberShot %2 == 0){ laser2.stop(); laser2.play(); }
      }
     
     
     
     
     }
 
     
          
      if(NumberShot < SHIPSTATS["As"])
      {Sup.setTimeout(TimeBeetShot,Shooting); }
  else{ ShotActua(100); ShotSound.stop()}  
     
    }else
    { ShotSound.play();     
     ShotSound.setPan(0);
    
     if(IsShooting==false)
     {ShotSound.stop();}
     

  }
     
    }
  
   

 
}
}



function Enemies(value, index, array)
{   if(value["actor"]["__inner"]["name"].slice(0,4) == "Aste" )
      {return ( value )}
      
    if(value["actor"]["__inner"]["name"].slice(0,6) == "Enemie")
      { if( value["actor"][0] != true) {return ( value )} } }

class BULLETBehavior extends Sup.Behavior {

  update() {

        if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Enemies)))
         { this.actor.destroy(); 
         }
        else 
       {if(this.actor.getY() > 340)
         { this.actor.destroy() } }

  }
}
Sup.registerBehavior(BULLETBehavior);

class RAYBehavior extends Sup.Behavior {

  awake(){
   Sup.getActor("Wleft").setY(Sup.getActor("Weapons").getY()-2);
   this.actor.arcadeBody2D.setOffset({x: 0, y : this.actor.spriteRenderer.getSprite().getGridSize().height/2}) }
  
update() {

   if (IsShooting == false) { Sup.getActor("Wleft").setY(Sup.getActor("Weapons").getY());Sup.getActor("Wright").setY(Sup.getActor("Weapons").getY()) ; this.actor.destroy() } 
  
   this.actor.arcadeBody2D.warpPosition(Sup.getActor("PLAYER").getX(),Sup.getActor("Wleft").getY()-10)
    
  }
}
Sup.registerBehavior(RAYBehavior);
