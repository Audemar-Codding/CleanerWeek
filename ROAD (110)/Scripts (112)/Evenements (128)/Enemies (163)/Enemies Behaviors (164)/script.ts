function DestroyEnemie(Actor)
{
  let actor = new Sup.Actor("BoomE"+Actor.getName());
  actor.addBehavior(Boombye);
  actor.setPosition(Actor.getPosition());
  new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion7");
  actor.spriteRenderer.setAnimation("Boom",false)
  
 
  
}


function Explosion(SpriteName)
{
   let Explosion;
  
  
  
  switch (SpriteName) {
    case "Enemie1":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion1",Explosion1.getVolume());
        break;
    case "Enemie2":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion1",Explosion1.getVolume());
      Explosion.setPitch(0.25)
        break;  
       case "Enemie3":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion3",Explosion3.getVolume());
        break;
         case "Enemie4":
         Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion1",Explosion1.getVolume());
         Explosion.setPitch(-0.5)
        break;
         case "Enemie5":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion3",Explosion3.getVolume());
        Explosion.setPitch(-0.5)
        break;
       case "Enemie6":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion3",Explosion3.getVolume());
        break;
       case "Enemie7":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion4",Explosion4.getVolume());
        break;
       case "Enemie8":
        Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion4",Explosion4.getVolume());
      Explosion.setPitch(-0.5)
        break;
      
    default:
  
}
  
  Explosion.play();

}


function Evade()
{
  let Scale=10
  
     Sup.getActor("ShShell").spriteRenderer.setColor(GREY)
     Sup.getActor("ShWileft").spriteRenderer.setColor(GREY)
     Sup.getActor("ShWiright").spriteRenderer.setColor(GREY)
     Sup.getActor("ShEngine").spriteRenderer.setColor(GREY)
  
     Sup.getActor("SHIELD").setVisible(true)

  
  Effect()
  
  function Effect()
  {
    Sup.getActor("SHIELD").setLocalScale(Scale/10,Scale/10,1)

    
    Scale = Scale + 2
    
    if(Scale != 30)
      {Sup.setTimeout(10,Effect)}
    else
    {
      
      Sup.getActor("SHIELD").setLocalScale(2,2,1)

    
     Sup.getActor("ShShell").spriteRenderer.setColor(Blue)
     Sup.getActor("ShWileft").spriteRenderer.setColor(Blue)
     Sup.getActor("ShWiright").spriteRenderer.setColor(Blue)
     Sup.getActor("ShEngine").spriteRenderer.setColor(Blue)
    
     Sup.getActor("SHIELD").setVisible(false)

    }
    
    
  }
}

function Bullet(value, index, array)
{ if (value["actor"]["__inner"]["name"].slice(0,5) == "ShotJ" )
     {return ( value )} }

function AsteHIT(value, index, array)
{   if (value["actor"]["__inner"]["name"].slice(0,4) == "Aste" )
       {return ( value )}}

var Actor;
class BULLETEBehavior extends Sup.Behavior {
 
  awake()
  {if(Timeisslowed==true){this.actor.arcadeBody2D.setVelocity(this.actor[0]/2,this.actor[1]/2)}
 
  }
  

  update() {
   
        if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
         { if(Timeisslowed==true){this.actor.arcadeBody2D.setVelocity(this.actor[0]/2,this.actor[1]/2)}else{this.actor.arcadeBody2D.setVelocity(this.actor[0],this.actor[1])}
           if(SHIPSTATS["Ev"]>Sup.Math.Random.integer(0,99) )
           { Evade(); this.actor.getBehavior(BULLETEBehavior).destroy() } // Si le player esquive
       else{if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.actor[2]["DMG"] ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]); this.actor.destroy() }
           else{ let actor = new Sup.Actor("BoomB"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion2");actor.spriteRenderer.setAnimation("Boom",false)
                  Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.actor[2]["DMG"] ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]); this.actor.destroy() }}
          
         }
    
   
      
  }
  
}
Sup.registerBehavior(BULLETEBehavior)



class DroneBehavior extends Sup.Behavior {
 
  hp = 10
  
  awake()
  { 
   
 
    if(Timeisslowed==true){this.actor.arcadeBody2D.setVelocity(this.actor[0]/2,this.actor[1]/2)}}
  
  update() {
   
    
        if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
         { if(Timeisslowed==true){this.actor.arcadeBody2D.setVelocity(this.actor[0]/2,this.actor[1]/2)}else{this.actor.arcadeBody2D.setVelocity(this.actor[0],this.actor[1])}
          if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.actor[2]["DMG"] ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]); this.actor.destroy() }
           else{ let actor = new Sup.Actor("BoomB"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion2");actor.spriteRenderer.setAnimation("Boom",false)
                  Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.actor[2]["DMG"] ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]); this.actor.destroy() }}
         
 
 if(Timeispaused == false)
    {   
      
    let ActPOS = Sup.getActor("PLAYER").getPosition()
    let DronePOS = this.actor.getPosition()
    
      
   if(ActPOS.x<DronePOS.x)
     {if(this.actor[0]>-5){this.actor[0]=this.actor[0]-0.1}}else{if(this.actor[0]<5){this.actor[0]=this.actor[0]+0.1}}
   if(ActPOS.y<DronePOS.y)
     {if(this.actor[1]>-2.5){this.actor[1]=this.actor[1]-0.05}}else{if(this.actor[1]<2.5){this.actor[1]=this.actor[1]+0.05}} 
      
      this.actor.arcadeBody2D.setVelocity(this.actor[0],this.actor[1]) }
    
    if(this.actor.getY() < -340 || this.actor.getY() > 340 || this.actor.getX() < -640 || this.actor.getX() > 640  )
         { this.actor.destroy() }  
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; }
           
  
             if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.hp = this.hp - SHIPSTATS["Dmg"] ;}} }
    
     if( this.hp < 0)
      { let Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion1",Explosion1.getVolume());Explosion.setPitch(0.75);Explosion.play() ;this.actor.destroy(); }
                 
  }
  
  onDestroy()
{let actor = new Sup.Actor("BoomE"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion7");actor.spriteRenderer.setAnimation("Boom",false)}
    
  
}
Sup.registerBehavior(DroneBehavior)

class BULLETEBehaviorDestroy extends Sup.Behavior {

  update() {
    
      if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(AsteHIT)))
         { this.actor.destroy(); let actor = new Sup.Actor("BoomB"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion2");actor.spriteRenderer.setAnimation("Boom",false) }
    
       if(this.actor.getY() < -340 || this.actor.getY() > 340 || this.actor.getX() < -640 || this.actor.getX() > 640  )
         { this.actor.destroy() }   
  }
}
Sup.registerBehavior(BULLETEBehaviorDestroy)

class RAYEBehavior extends Sup.Behavior {
Actor;
  
update() {
 
  if(this.Actor.isDestroyed() == false)
   {this.actor.arcadeBody2D.warpPosition(this.Actor.getX(),this.Actor.getY())}
    else{this.actor.destroy()}
  
    if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
         { 
           if(SHIPSTATS["Ev"]>Sup.Math.Random.integer(0,99) )
           { Evade() } // Si le player esquive
       else{if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.actor[2]["DMG"] ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
           else{ let actor = new Sup.Actor("BoomB"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(Sup.getActor("PLAYER").getPosition());new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion2");actor.spriteRenderer.setAnimation("Boom",false)
                  Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.actor[2]["DMG"] ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }}
               }

  }
}
Sup.registerBehavior(RAYEBehavior);

// Appear UP AND shoot
class BehaviorE1 extends Sup.Behavior {
  ID = Enemid
  haveshot = false
  hp = this.actor[1]
  Vectx = 0
  Vecty = -15
  Event = 0
  SpriteName;
  Hitable;
  
  awake() {

    this.Hitable = false;
    
    if(this.ID % 2 ==0)
    {this.actor.arcadeBody2D.warpPosition(Sup.Math.Random.integer(-600,0),500)}
    else{this.actor.arcadeBody2D.warpPosition(Sup.Math.Random.integer(0,600),500)}
    this.actor.arcadeBody2D.setVelocity(this.Vectx, this.Vecty)

    this.SpriteName = this.actor.spriteRenderer.getSprite().name;
  }

  update() {
    let Actory = this.actor.getY()
    
    if(this.haveshot == false){
      
      if(Actory < 250)
      {this.Hitable = true;this.actor.arcadeBody2D.setVelocity(0,0); TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 1, this.actor,"D"); this.haveshot = true }}
    
    if(Actory < -360)
      {this.actor.destroy()}
    

    if(this.actor[0] != true && this.Hitable == true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false)}
           
  
             if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} }
          
          
            if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
    
    if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; ClearActua(); Explosion(this.SpriteName);this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE1)

// Left to Right while shooting
class BehaviorE2 extends Sup.Behavior {
  ID = Enemid
  haveshot = false
  hp = this.actor[1]
  Vecty = -1
  Vectx = 20
  SpriteName;
  Hitable;
  
  awake() {
 this.Hitable = false;
    
    if(this.ID % 2 == 0)
    {this.actor.arcadeBody2D.warpPosition(-660,300);this.Vectx = 3}
    else{this.actor.arcadeBody2D.warpPosition(660,200);this.Vectx = -3} 
    if(Timeisslowed==false){this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty)}else{this.actor.arcadeBody2D.setVelocity(this.Vectx/2,this.Vecty/2)}  
    this.SpriteName = this.actor.spriteRenderer.getSprite().name;
    
   }
  
update() {
    let Actorx = this.actor.getX()
    
    if(this.ID % 2 == 0)
    {
    if (this.haveshot == false)
      { if(Actorx > -600)
      { TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 2, this.actor,"D"); this.haveshot = true; this.Hitable = true; }}
    
    if(Actorx<1 && Actorx>-1)
      {this.Vectx = 3 ; this.Vecty = 1; if(Timeispaused==false){if(Timeisslowed==false){this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty)}else{this.actor.arcadeBody2D.setVelocity(this.Vectx/2,this.Vecty/2)} }}
    
    }else {
    if (this.haveshot == false)
      { if(Actorx < 600)
      { TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 2, this.actor,"D"); this.haveshot = true;  this.Hitable = true; }}
    
    if(Actorx<5 && Actorx>-5)
      {this.Vectx = -3 ; this.Vecty = 1; this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty)}
    }
    
   if( Actorx < -695 || Actorx > 695 )
      { this.actor.destroy()}
  
        if(this.actor[0] != true &&  this.Hitable == true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false); if(Timeispaused==false){if(Timeisslowed==false){this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty)}else{this.actor.arcadeBody2D.setVelocity(this.Vectx/2,this.Vecty/2)}}}
           
              if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} }
          
           if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
 
    if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; ClearActua(); Explosion(this.SpriteName); this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE2)

// Appear L or R AND shoot
class BehaviorE3 extends Sup.Behavior {
  ID = Enemid
  haveshot = false
  hp = this.actor[1]
  Vecty = 0
  Vectx = 0
  ORient = ""
  SpriteName;
  Hitable;
  
awake() {

   this.Hitable = false;
  
  let size = this.actor.arcadeBody2D.getSize();
  this.actor.arcadeBody2D.setSize(size.height,size.width-size.width/5) 

    
  if(this.ID % 2 == 0)
    { this.Vectx = 10 
      if(this.ID % 4 == 0) {this.actor.arcadeBody2D.warpPosition(-660,Sup.Math.Random.integer(50,300))}
         else{this.actor.arcadeBody2D.warpPosition(-660,Sup.Math.Random.integer(50,-200))}
             this.ORient = "R";this.actor.setEulerZ(1.5707963267948963) }
     else{ this.Vectx = -10 
          this.ID = this.ID/4 
          let Div4 = this.ID.toFixed(2)
         
         if (Div4.slice(Div4.length-2,Div4.length) == "25")
            {this.actor.arcadeBody2D.warpPosition(660,Sup.Math.Random.integer(50,300))}
            else{this.actor.arcadeBody2D.warpPosition(660,Sup.Math.Random.integer(50,-200))}
                this.ORient = "L";this.actor.setEulerZ(-1.5707963267948963) } 
  
    this.actor.arcadeBody2D.setVelocity(this.Vectx,0)
  this.SpriteName = this.actor.spriteRenderer.getSprite().name;

}
  

update() {
    
  let Actorx = this.actor.getX()

  if(this.ORient == "L") 
      {if (this.haveshot == false)
          { if(Actorx < 600)
          { this.actor.arcadeBody2D.setVelocity(0,0); { TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 3, this.actor, this.ORient); this.haveshot = true;  this.Hitable = true; }}}
       if(Actorx < -680)
         {this.actor.destroy()} }               
  
  if(this.ORient == "R") 
      {if (this.haveshot == false)
          { if(Actorx > -600)
          { this.actor.arcadeBody2D.setVelocity(0,0); { TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 3, this.actor, this.ORient); this.haveshot = true; this.Hitable = true; }}}
       if(Actorx > 680)
         {this.actor.destroy()} } 
    
  
    
        if(this.actor[0] != true &&  this.Hitable == true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false)}
           
  
          if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                  {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
                     {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} }
          
           if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
      
 
    if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; Explosion(this.SpriteName); ClearActua(); this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE3)

// Appear corners AND shoot
class BehaviorE4 extends Sup.Behavior {
  ID = Enemid
  haveshot = false
  hp = this.actor[1]
  Vecty = -10
  Vectx = 0
  ORient = ""
  SpriteName;
   Hitable;
  
  
awake() {
    
this.Hitable = false;
    
  if(this.ID % 2 == 0)
    { this.Vectx = 10 
      this.actor.arcadeBody2D.warpPosition(-660,340)
      this.ORient = "CR";this.actor.setEulerZ(0.7853981633974483) }
 else{ this.Vectx = -10 
       this.actor.arcadeBody2D.warpPosition(660,340)
       this.ORient = "CL";this.actor.setEulerZ(-0.7853981633974483) } 
  
    this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty) 
this.SpriteName = this.actor.spriteRenderer.getSprite().name;
}
    
update() {
    
  let Actorx = this.actor.getX()

          if(this.haveshot == false)
            { if(this.ORient == "CR")
                {if(Actorx > -600)
                   {this.actor.arcadeBody2D.setVelocity(0,0);  TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 4, this.actor, this.ORient); this.haveshot = true; this.Hitable = true; }}
        else{ if(Actorx < 600)
                {this.actor.arcadeBody2D.setVelocity(0,0);  TheEnemiesShots(ROADLEVELS[currentRoad][this.actor[3]]["Nshot"], 4, this.actor, this.ORient); this.haveshot = true; this.Hitable = true; } }}
  
       if(Actorx < -680 || Actorx > 680)
         {this.actor.destroy()}                
  
        if(this.actor[0] != true && this.Hitable == true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false)}
           
  
           if(Sup.getActor("Laser")!= null)
             {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
                {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} 
          
            if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
      
 
   if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; ClearActua();Explosion(this.SpriteName); this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE4)

// Kamikaze, rush on player FROM TOP
class BehaviorE5 extends Sup.Behavior {
  ID = Enemid
  hp = this.actor[1]
  Vectx = 1.5
  Vecty = -3
  Event = 0
  haveshot = false
   SpriteName;
   Hitable;
  awake() {
   
    if(this.ID % 2 ==0)
    {this.actor.arcadeBody2D.warpPosition(Sup.Math.Random.integer(-600,0),500)}
    else{this.actor.arcadeBody2D.warpPosition(Sup.Math.Random.integer(0,600),500)}
   
     let ActPOS = Sup.getActor("PLAYER").getPosition()
     let DronePOS = this.actor.getPosition()
    
      if(ActPOS.x<DronePOS.x)
     {this.Vectx=this.Vectx*-1}
    
    this.SpriteName = this.actor.spriteRenderer.getSprite().name;

  }

  update() {
   
    
      let DronePOS = this.actor.getPosition()
    
    if(DronePOS.y < -360)
      {this.actor.destroy()}
    
  
    if(this.actor[0] != true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false)}
           
  
             if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} }
   
           
  if(Timeispaused == false)
    { let ActPOS = Sup.getActor("PLAYER").getPosition()
    
      if(ActPOS.x<DronePOS.x)
        {if(this.Vectx>-5){this.Vectx=this.Vectx-0.1}}else{if(this.Vectx<5 ) {this.Vectx=this.Vectx+0.1}}
        
      this.actor.arcadeBody2D.setVelocity(this.Vectx, this.Vecty) }
           
          
            if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
    
    
      if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(AsteHIT)))
         { this.hp = -1 }
    

    if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; ClearActua(); Explosion(this.SpriteName); this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE5)

// Kamikaze, rush on player FROM LEFT OR RIGHT
class BehaviorE6 extends Sup.Behavior {
  ID = Enemid
  hp = this.actor[1]
  Vectx = 0
  Vecty = -1.5
  Event = 0
  haveshot = false
  SpriteName;
  Hitable;
  
  awake() {
    
      let size = this.actor.arcadeBody2D.getSize();
     this.actor.arcadeBody2D.setSize(size.height,size.width-size.width/5) 
    
    let posx = Sup.Math.Random.integer(-300,300)
    
   if(this.ID % 2 == 0)
    {this.actor.arcadeBody2D.warpPosition(-660,posx);this.Vectx = 5;this.actor.setEulerZ(1.5707963267948963)}
    else{this.actor.arcadeBody2D.warpPosition(660,posx);this.Vectx = -5;this.actor.setEulerZ(-1.5707963267948963)} 
    if(Timeisslowed==false){this.actor.arcadeBody2D.setVelocity(this.Vectx,this.Vecty)}else{this.actor.arcadeBody2D.setVelocity(this.Vectx/2,this.Vecty/2)}  
   
     let ActPOS = Sup.getActor("PLAYER").getPosition()
     let DronePOS = this.actor.getPosition()
    
      if(ActPOS.y>DronePOS.y)
     {this.Vectx=this.Vectx*-1}
    
    this.SpriteName = this.actor.spriteRenderer.getSprite().name;

  }

  update() {
    let DronePOS = this.actor.getPosition()
    
    if( DronePOS.x < -695 || DronePOS.x > 695 )
      { this.actor.destroy()}
    
     if(this.actor[0] != true)
          { if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)))
              { this.hp = this.hp - SHIPSTATS["Dmg"]; this.actor.spriteRenderer.setAnimation("HIT",false)}
           
  
             if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.hp = this.hp - SHIPSTATS["Dmg"] ; this.actor.spriteRenderer.setAnimation("HIT",false)}} }
   
           
  if(Timeispaused == false)
    { let ActPOS = Sup.getActor("PLAYER").getPosition()
      
     if(ActPOS.y<DronePOS.y)
        {if(this.Vecty>-2.5){this.Vecty=this.Vecty-0.05}}else{if(this.Vecty<2.5 ) {this.Vecty=this.Vecty+0.1}}
        
      this.actor.arcadeBody2D.setVelocity(this.Vectx, this.Vecty) }
           
          
            if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
              { if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.hp ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.hp ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }
              this.hp=-1 } }
   
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(AsteHIT)))
         { this.hp = -1 }
    
    

    if( this.hp < 0)
      { ClearValue = ClearValue + this.actor[2]; ClearActua(); Explosion(this.SpriteName); this.actor.destroy() }
      
  }
  
   onDestroy()
{DestroyEnemie(this.actor)}  
}
Sup.registerBehavior(BehaviorE6)




// Fonction qui fait spawn les Enemies
let MoveEnembehavior = [BehaviorE1,BehaviorE2,BehaviorE3,BehaviorE4,BehaviorE5,BehaviorE6]
let Enemid = 0
function EnemiesSpawnEvent(EnemNumber: number,BEHAVenem: number,Nsprite: number,spawnTime: number,EnemHp: number, ClearPts: number)
{  
  let EVtid = Eventid
  EnemieSpawn()
  let currentSpawnTime = spawnTime
  
  
function EnemieSpawn()
{  
  if(EndGame == false && ispaused == false)
  {
  if(Timeispaused == false)
 { Enemid++
    
  // création de l'acteurs Enem
 
  let actor = new Sup.Actor("Enemie"+Enemid+"");
  actor[0] = false
  actor[1] = EnemHp
  actor[2] = ClearPts
  actor[3] = EVtid
  actor.setZ(5)
  
  
  // Attribution du Sprite et de l'arcadebody2D
  new Sup.SpriteRenderer(actor, "ROAD/Sprites/Enemies/Enemie"+Nsprite+"")
  
  new Sup.ArcadePhysics2D.Body(actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 1,  height: 1,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
  
  let size = actor.spriteRenderer.getSprite().getGridSize()
 
  
  if(Nsprite==8)
    {  actor.arcadeBody2D.setSize(size.width-size.width/6,size.height-size.height/6) }
  else{ actor.arcadeBody2D.setSize(size.width/2-size.width/10,size.height/2-size.height/6) }
  
  
  // Atribution du comportement
  actor.addBehavior(MoveEnembehavior[BEHAVenem-1])
 
  EnemNumber--

  if(EnemNumber>0)
    {if(Timeisslowed == false)
    {Sup.setTimeout(spawnTime,EnemieSpawn)}
    else{Sup.setTimeout(spawnTime*2,EnemieSpawn)}} }else{Sup.setTimeout(4005,EnemieSpawn)}}
  
  
}}

// Fonction qui s'occupe des shots des Enemies
let idEnemieShot = 0
function TheEnemiesShots(Shotscount : number,Behavior: number, Actor,Orientation: string)
{ 
let Shottimepass = false
let SpriteName = Actor.spriteRenderer.getSprite().name
let actorShot;

EnemiesShots()
  
function EnemiesShots()
{  if(Timeispaused == false)
  {if(Actor.isDestroyed() == false)
  {
  let TimeBeetShot = 1000
  let GOx
  let GOy
  let Vector = 8
  let Pmodif = 0
  let spread = 0
  
  let AleaP = Sup.Math.Random.sample([1,-1])

  if(SpriteName  == "Enemie1")
    { TimeBeetShot = 1500 
      Pmodif = 15*AleaP }
    
  if(SpriteName  == "Enemie2")
    { TimeBeetShot = 1800 
      Vector = 6
      Pmodif = 15*AleaP }
    
  if(SpriteName  == "Enemie3")
    { TimeBeetShot = 1250 
      Vector = 10 }   
    
  if(SpriteName  == "Enemie4")
    { TimeBeetShot = 1000
      Vector = 10
      Pmodif = 14*AleaP }  
    
  if(SpriteName  == "Enemie5")
    { TimeBeetShot = 3500 
      Vector = 2 
      Pmodif = 17*AleaP 
      spread = 0.05*AleaP } 
    
  
    
     if(SpriteName  == "Enemie7")
    { TimeBeetShot = 1000
      Vector = 15 
      Pmodif = Sup.Math.Random.sample([5,14])*AleaP } 
    
      if(SpriteName  == "Enemie8")
    { TimeBeetShot = 500
      Vector = 2 
      Pmodif = 40} 
    
    
    
    var TimeoutShot;
    if(Actor)
    {TimeBeetShot = Sup.Math.Random.integer(TimeBeetShot,TimeBeetShot+TimeBeetShot/2);Shot()}
    else{
     clearTimeout(TimeoutShot);
    }
   
        
    
    function Shot()
    {if(EndGame == false){
      if(Timeispaused == false){
        Shoot1.stop();
        Shoot1.play();
      idEnemieShot++
      Pmodif=Pmodif*-1
    
       let actorshot  = new Sup.Actor("ShotE" + idEnemieShot)
       actorShot = actorshot;
      actorshot.setZ(4)
  
      new Sup.ArcadePhysics2D.Body(actorshot, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 6,  height: 17,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});

    if(Timeisslowed==true){actorshot.arcadeBody2D.setVelocity(actorshot[0]/2,actorshot[1]/2);GOx=GOx/2;GOy=GOy/2}
     
      if(SpriteName  == "Enemie1")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Bullet1") 
     actorshot[2] =  {"DMG": 20}
     actorshot.addBehavior(BULLETEBehavior)
     actorshot.addBehavior(BULLETEBehaviorDestroy) }
     
        if(SpriteName  == "Enemie2")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Bullet1")    
      actorshot[2] =  {"DMG": 25} 
      actorshot.addBehavior(BULLETEBehavior)
      actorshot.addBehavior(BULLETEBehaviorDestroy) }
     
         if(SpriteName  == "Enemie3")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Laser1")    
      actorshot.setLocalScale(2.5,2.5,1) 
      actorshot[2] = {"DMG": 15} 
      actorshot.addBehavior(BULLETEBehavior)
      actorshot.addBehavior(BULLETEBehaviorDestroy) }  
             
      if(SpriteName  == "Enemie4")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Laser1")    
      actorshot[2] = {"DMG": 5} 
      actorshot.addBehavior(BULLETEBehavior)
      actorshot.addBehavior(BULLETEBehaviorDestroy) }  
     
      if(SpriteName  == "Enemie5")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Bullet2")    
      actorshot[2] = {"DMG": 40} 
      actorshot.addBehavior(BULLETEBehavior)
      actorshot.addBehavior(BULLETEBehaviorDestroy) 
      spread = spread*-1 } 
     
      if(SpriteName  == "Enemie6")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Laser2")    
      actorshot[2] = {"DMG": 1} 
      actorshot.addBehavior(RAYEBehavior).Actor = Actor }
     
      if(SpriteName  == "Enemie7")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Laser1")    
      actorshot[2] = {"DMG": 15} 
      actorshot.addBehavior(BULLETEBehavior)
      actorshot.addBehavior(BULLETEBehaviorDestroy) 
      Pmodif=Pmodif*-1
      spread = spread*-1 } 
        
        if(SpriteName  == "Enemie8")
    { new Sup.SpriteRenderer(actorshot,"ROAD/Sprites/Projectiles/Enemies/Drone1")    
      actorshot[2] = {"DMG": 25} 
      actorshot.addBehavior(DroneBehavior) 
      actorshot.addBehavior(BULLETEBehaviorDestroy) 
      spread = spread*-1 } 
     
        
            let actorsize = actorshot.spriteRenderer.getSprite().getGridSize()
    let Pixel = actorshot.spriteRenderer.getSprite().getPixelsPerUnit()
    
          
    // Gére l'orientation des  bullets
    actorshot.arcadeBody2D.setSize(actorsize.width/Pixel,actorsize.height/Pixel);
    actorshot.arcadeBody2D.setOffset({x: actorshot.spriteRenderer.getSprite().getGridSize().width/2, y : -actorshot.spriteRenderer.getSprite().getGridSize().height/2})
    
     if(Orientation == "U")
     {actorshot.arcadeBody2D.setVelocity(0,Vector);GOx=0;GOy=10;actorshot.rotateEulerZ(3.141592653589793); }
    if(Orientation == "D")
     {actorshot.arcadeBody2D.warpPosition(Actor.getX()+Pmodif,Actor.getY()-15);actorshot.arcadeBody2D.setVelocity(0+spread,-Vector);GOx=0;GOy=-10;}
    if(Orientation == "R")
     {actorshot.arcadeBody2D.warpPosition(Actor.getX()+15,Actor.getY()+Pmodif);actorshot.arcadeBody2D.setVelocity(Vector,0);GOx=5;GOy=0;actorshot.setEulerZ(1.5707963267948963);
        actorshot.arcadeBody2D.setSize(actorsize.height/Pixel,actorsize.width/Pixel);
      actorshot.arcadeBody2D.setOffset({x: actorshot.spriteRenderer.getSprite().getGridSize().height/2, y : -actorshot.spriteRenderer.getSprite().getGridSize().width/2})
     }
     if(Orientation == "L")
     {actorshot.arcadeBody2D.warpPosition(Actor.getX()-15,Actor.getY()+Pmodif);actorshot.arcadeBody2D.setVelocity(-Vector,0);GOx=-5;GOy=0;actorshot.setEulerZ(-1.5707963267948963);
      actorshot.arcadeBody2D.setSize(actorsize.height/Pixel,actorsize.width/Pixel);   
           actorshot.arcadeBody2D.setOffset({x: -actorshot.spriteRenderer.getSprite().getGridSize().height/2, y : -actorshot.spriteRenderer.getSprite().getGridSize().width/2+15})
     }
     if(Orientation == "CR")
     {actorshot.arcadeBody2D.warpPosition(Actor.getX()+15+Pmodif,Actor.getY()-15+Pmodif);actorshot.arcadeBody2D.setVelocity(Vector,-Vector);GOx=5;GOy=-5;actorshot.setEulerZ(0.7853981633974483)
     
     } 
    if(Orientation == "CL")
     {actorshot.arcadeBody2D.warpPosition(Actor.getX()-15-Pmodif,Actor.getY()-15-Pmodif);actorshot.arcadeBody2D.setVelocity(-Vector,-Vector);GOx=-5;GOy=-5;actorshot.setEulerZ(-0.7853981633974483)
     
     }
     
     if (Behavior==4 && SpriteName  == "Enemie8"){actorshot.setEulerZ(0)} 
        
    
     
    let Velo =  actorshot.arcadeBody2D.getVelocity()
    actorshot[0] = Velo.x
    actorshot[1] = Velo.y
      
     
    if(Actor.isDestroyed == true){actorshot.destroy()} 
     
    }
       Shotscount--
      
        if(Shotscount > 0)
       { TimeoutShot = Sup.setTimeout(TimeBeetShot,EnemiesShots)
          if(SpriteName  == "Enemie6"){Sup.setTimeout(TimeBeetShot-2,RayeClean)}
        }
      else{ if(Behavior == 1 || Behavior == 3 || Behavior == 4)
           { if(Timeispaused == false){TimeoutShot = Sup.setTimeout(TimeBeetShot/2+500,OUT)}
       else{ if(Timeispaused == false){TimeoutShot = Sup.setTimeout(TimeBeetShot/2+4005,OUT)}}
    
            
     function OUT()
     {
        Actor.arcadeBody2D.setSize(1,1)
        RéductionSize(Actor,0.85,0.85)
        Actor[0] = true
        Actor.setZ(1)
        Actor.arcadeBody2D.setVelocity(GOx,GOy) 
        if(SpriteName  == "Enemie6"){Actor.destroy();}
     }
            
              
     function RayeClean()
    {     actorShot.destroy();         
    }
           
           
           }
    }
      
    
    
    
    
  }}
  }
  
}else{ TimeoutShot = Sup.setTimeout(4005,EnemiesShots)} 
}

}

function RéductionSize(Actor,X: number,Y: number )
{ 
 
 let Ax = Actor.getLocalScaleX()

 let Ay = Actor.getLocalScaleY()

 reduce()
  
 function reduce()
  { if(Ax > X)
      {Ax = Ax -0.1}
    if(Ay > Y)
      {Ay = Ay -0.1}
    if(Actor.isDestroyed() == false)    
    {Actor.setLocalScale(Ax,Ay,1)
    
    if (Ax > X && Ay > Y)
    {Sup.setTimeout(250,reduce)}
    else{Actor.spriteRenderer.setColor(GREY);  }}
  }
  
}