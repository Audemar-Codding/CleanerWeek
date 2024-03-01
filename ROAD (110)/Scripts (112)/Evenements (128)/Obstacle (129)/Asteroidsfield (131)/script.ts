

function ExplosionObstacle(DmgValue: number)
{
   let Explosion;
    
   Explosion= new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion5",Explosion5.getVolume());
  

  switch (DmgValue) {
    case 5: Explosion.setPitch(0.5)
        break;
    case 20: Explosion.setPitch(-0.5)
        break;  
       case 25:
        Explosion.setPitch(-1)
        break;
         case 10:
        Explosion.setPitch(1)
        break;
              
    default:
  
}
  
  Explosion.play();

}



function EBullet(value, index, array)
{ if (value["actor"]["__inner"]["name"].slice(0,5) == "ShotE" )
     {return ( value )} }

class AstéroidsfieldBehavior extends Sup.Behavior {
  Speedactual = GLOBALspeed
  AsteHP
Scaleboom = 1
  
  awake() {
      new Sup.ArcadePhysics2D.Body(this.actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 1,  height: 1,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
    let pixunit = this.actor.spriteRenderer.getSprite().getPixelsPerUnit()
    
    let size = this.actor.spriteRenderer.getSprite().getGridSize()
    this.actor.arcadeBody2D.setSize(size.width/pixunit,size.height/(2*pixunit)-size.height/(5*pixunit))
    
    this.actor.setOrientation(new Sup.Math.Quaternion(0,0,Sup.Math.Random.float(-0.2,0.2),0.9238795325112867))
    
    this.AsteHP = 5+size.width*pixunit
    
    if(Timeisslowed == false) 
    {this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.75) }
    else{this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.375)}
     
    
    //if(size.height>40){this.Scaleboom = 2}
    this.Scaleboom = 1+size.height/100 / pixunit
    
  }

  update() {
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(EBullet)) == true)
      {this.AsteHP=-1}
    
     if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)) == true)
         { this.AsteHP = this.AsteHP-SHIPSTATS["Dmg"]*2 ; 
          if(Timeisslowed == false) 
            {this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.75)}
        else{this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.375)} 
         if(Timeispaused== true) { this.actor.arcadeBody2D.setVelocity(0,0) }
         }
        else 
       {if(this.actor.getY() < -360)
         { this.actor.destroy()} }
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
    { this.AsteHP = 0
        if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.actor[0]["DMG"] ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.actor[0]["DMG"] ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }    }
    
    if(this.Speedactual != GLOBALspeed)
      { this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.75); this.Speedactual = GLOBALspeed }
    
    if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.AsteHP = this.AsteHP - SHIPSTATS["Dmg"]  }} }
    
    
    if(this.AsteHP < 1)
      {ClearValue = ClearValue + this.actor[0]["ClearPts"]; ClearActua();ExplosionObstacle(this.actor[0]["DMG"]); this.actor.destroy()}
    
    
  }

onDestroy()
{
  let actor = new Sup.Actor("Boom"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());actor.setLocalScale(this.Scaleboom,this.Scaleboom,1);new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion3");actor.spriteRenderer.setAnimation("Boom",false);}


}
Sup.registerBehavior(AstéroidsfieldBehavior);

function AstéroidsField(AsteNumber: number, density: number, ClearPts: number)
{

AsteCLearPts = ClearPts;  
  
let AHauteur = 20

Astés()

function Astés()
{  
  if(EndGame == false && ispaused == false)
  {
  if(Timeispaused == false) 
{           
// création de l'acteurs Aste
 
  let actor = new Sup.Actor("Aste"+AsteNumber+"");
    
// Atribution d'un sprite aléatoire d'Aste

  let Nsprite = Sup.Math.Random.integer(1,14);
  new Sup.SpriteRenderer(actor, "ROAD/Sprites/Obstacles/Aste/Aste"+Nsprite+"")
    
  if(Nsprite>10)
  {actor[0] = {DMG: 20,ClearPts: ClearPts*2}} 
  else
  {actor[0] = {DMG: 5,ClearPts: ClearPts}} 
  
  // Positionement aléatoire des acteur en fonction de la largeur du précedent
 
  let precH =  AHauteur
  var ALargeur
  
  let size = actor.spriteRenderer.getSprite().getGridSize()
  ALargeur = size.width
  AHauteur= size.height
  
    AsteNumber--
  
  if(AsteNumber %2 == 0)
    { actor.setPosition(Sup.Math.Random.float(-640 + ALargeur, 0 ),340+precH,1) }
  else
    { actor.setPosition(Sup.Math.Random.float(0, 640 - ALargeur),340+precH,1) }
    
      
   // Chaque acteur suis le comportement de AstéroidsfieldBehavior
     actor.addBehavior(AstéroidsfieldBehavior);
        
   // Récupération d'un temps d'attente aléatoire
     let WaitAs = Sup.Math.Random.integer(750-density + GLOBALspeed*100 , 1000-density + GLOBALspeed*100) //(-dang *5)

   // Creation d'un autre Aste si pas en pause
     if (AsteNumber > 0)   
     {Sup.setTimeout(WaitAs,Astés)}}
    else{Sup.setTimeout(4005,Astés)}
    }
} }

class Boombye extends Sup.Behavior {

  update() {
    
    if(this.actor.spriteRenderer.getAnimationFrameIndex()==this.actor.spriteRenderer.getAnimation().length)
      {this.actor.destroy()}
  }
}
Sup.registerBehavior(Boombye);