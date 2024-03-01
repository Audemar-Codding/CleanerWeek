class ScrapsfieldBehavior extends Sup.Behavior {
  Speedactual = GLOBALspeed
  ScrapHP
  Corner = 1

  Scaleboom = 1
  
  awake() {
      
  if( this.actor[1] == 0)
  { this.Corner = -1 }
    
    new Sup.ArcadePhysics2D.Body(this.actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 1,  height: 1,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
    let pixunit = this.actor.spriteRenderer.getSprite().getPixelsPerUnit()
    
    let size = this.actor.spriteRenderer.getSprite().getGridSize()
    this.actor.arcadeBody2D.setSize(size.width/pixunit,size.height/(2*pixunit)-size.height/(5*pixunit))
    
    this.actor.setOrientation(new Sup.Math.Quaternion(0,0,Sup.Math.Random.float(-0.2,0.2),0.9238795325112867))
    
    this.ScrapHP = 30+size.width*pixunit
    
    if(Timeisslowed == false) 
    {this.actor.arcadeBody2D.setVelocity(GLOBALspeed*0.75*this.Corner,GLOBALspeed*0.75) }
    else{this.actor.arcadeBody2D.setVelocity(GLOBALspeed*0.375*this.Corner,GLOBALspeed*0.375)}
     
    
    //if(size.height>40){this.Scaleboom = 2}
    this.Scaleboom = 1+size.height/100 / pixunit
    
  }

  update() {
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(EBullet)) == true)
      {this.ScrapHP=-1}
    
     if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(Bullet)) == true)
         { this.ScrapHP = this.ScrapHP-SHIPSTATS["Dmg"]*10 ; 
          if(Timeisslowed == false) 
            {this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.75)}
        else{this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.375)} 
         if(Timeispaused== true) { this.actor.arcadeBody2D.setVelocity(0,0) }
         }
        else 
       {if(this.actor.getY() < -360)
         { this.actor.destroy()} }
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
    { this.ScrapHP = 0
        if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - this.actor[0]["DMG"] ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - this.actor[0]["DMG"] ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }    }
    
    if(this.Speedactual != GLOBALspeed)
      { this.actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.75); this.Speedactual = GLOBALspeed }
    
    if(Shotend == false && IsShooting == true)
               {if(Sup.getActor("Laser")!= null)
                 {if(Sup.ArcadePhysics2D.intersects(this.actor.arcadeBody2D,Sup.getActor("Laser").arcadeBody2D))
               {this.ScrapHP = this.ScrapHP - SHIPSTATS["Dmg"]  }} }
    
    
    if(this.ScrapHP < 1)
      {ClearValue += this.actor[0]["ClearPts"]; ClearActua() ;ExplosionObstacle(this.actor[0]["DMG"]); this.actor.destroy() }
    
  }

onDestroy()
{
let actor = new Sup.Actor("Boom"+this.actor.getName());actor.addBehavior(Boombye);actor.setPosition(this.actor.getPosition());actor.setLocalScale(this.Scaleboom,this.Scaleboom,1);new Sup.SpriteRenderer(actor,"ROAD/Sprites/Effects/Explosion3");actor.spriteRenderer.setAnimation("Boom",false)
}
    

}
Sup.registerBehavior(ScrapsfieldBehavior);

function ScrapsField(ScrapNumber: number, density: number, ClearPts: number)
{

let SHauteur = 20
let RandomCorner = 0;

Scraps()

function Scraps()
{  
  if(EndGame == false && ispaused == false)
  {
  if(Timeispaused == false) 
{           

  // création de l'acteurs Scraps
 
  let actor = new Sup.Actor("Scraps"+ScrapNumber+"");
    
// Atribution d'un sprite aléatoire de Scraps

  let Nsprite = Sup.Math.Random.integer(1,8);
  new Sup.SpriteRenderer(actor, "ROAD/Sprites/Obstacles/Scraps/Scraps0"+Nsprite+"")
    
    if(Nsprite>6)
  {actor[0] = {DMG: 25,ClearPts: ClearPts*2}} 
  else
  {actor[0] = {DMG: 10,ClearPts: ClearPts}} 
  
  // Positionement aléatoire des acteurs
 
  let precH =  SHauteur
  var SLargeur
  
  let size = actor.spriteRenderer.getSprite().getGridSize()
  SLargeur = size.width
  SHauteur = size.height
  
  RandomCorner = Sup.Math.Random.integer(0,1);
  
  actor[1] = RandomCorner;
    
    ScrapNumber--
  
  if (RandomCorner == 1)
     { if(ScrapNumber %2 == 0)
         { actor.setPosition(Sup.Math.Random.float(640 + SLargeur, 800 - SLargeur),Sup.Math.Random.float(320 +precH, 640 - precH),1) }
     else { actor.setPosition(Sup.Math.Random.float(800 + SLargeur, 960 - SLargeur),Sup.Math.Random.float(320 +precH, 640 - precH),1) } }
 else{ if(ScrapNumber %2 == 0)
         { actor.setPosition(Sup.Math.Random.float(-640 - SLargeur, -800 + SLargeur),Sup.Math.Random.float(320 +precH, 640 - precH),1) }
     else { actor.setPosition(Sup.Math.Random.float(-800 - SLargeur, -960 + SLargeur),Sup.Math.Random.float(320 +precH, 640 - precH),1) } }
      
   // Chaque acteur suis le comportement de ScrapsfieldBehavior
     actor.addBehavior(ScrapsfieldBehavior);
        
   // Récupération d'un temps d'attente aléatoire
     let WaitSc = Sup.Math.Random.integer(750-density + GLOBALspeed*100 , 1000-density + GLOBALspeed*100) //(-dang *5)

   // Creation d'un autre Aste si pas en pause
     if (ScrapNumber > 0)   
     {Sup.setTimeout(WaitSc,Scraps)}}
    else{Sup.setTimeout(4005,Scraps)}
    }
} }