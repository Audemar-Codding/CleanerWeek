
 function SINGULA(value, index, array)
{ if (value["actor"]["__inner"]["name"].slice(0,4) == "Sing" )
     {return value} }

   function ALLBUTPLAYERDESTROY(value, index, array)
{ if (value["actor"]["__inner"]["name"].slice(0,6) != "PLAYER" && value["actor"]["__inner"]["name"].slice(0,5) != "Stars" && value["actor"]["__inner"]["name"].slice(0,2) != "BA" && value["actor"]["__inner"]["name"].slice(0,7) != "NEvents" && value["actor"]["__inner"]["name"].slice(0,5) != "Laser" )
     {
       
       if(Sup.ArcadePhysics2D.collides(value["actor"].arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(SINGULA)) )
      {value["actor"].destroy()}
       
       
       
       
       
       return value  } }

class SingstormBehavior extends Sup.Behavior {

  
  awake() {
  
    new Sup.ArcadePhysics2D.Body(this.actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 61,  height: 61,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
 
    
    SingDestroy(this.actor,1750)
    
  }

  update() {
    
   if(this.actor.spriteRenderer.getAnimationFrameIndex() == 3)
     {this.actor.spriteRenderer.setAnimation("STAND",true)}
    
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.ArcadePhysics2D.getAllBodies().filter(ALLBUTPLAYERDESTROY))       
    
        
  if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYER").arcadeBody2D))
    {      if(Sup.getActor("PLAYER")[0]["Sh"]!=0)
             { Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] - 1 ;SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"]) }
         else{ Sup.getActor("PLAYER")[0]["Hp"] = Sup.getActor("PLAYER")[0]["Hp"] - 1 ;HPBarActua(Sup.getActor("PLAYER")[0]["Hp"]) }  }
   }
}
Sup.registerBehavior(SingstormBehavior);

function SingDestroy(actor,time)
{ Sup.setTimeout(time,destroy)
 
 
  function destroy()
  {
    if(Timeispaused == true)
      {Sup.setTimeout(4005,destroy)}else{if(Timeisslowed == true)
      {Sup.setTimeout(1750,destroy)} else{actor.destroy()}}
    
    } }

function SingsStorm(SingsNumber: number, density: number)
{


Sings()

function Sings()
{  
  if(EndGame == false && ispaused == false)
  {
  if(Timeispaused == false) 
{           

  // création de l'acteurs Sing
 
  let actor = new Sup.Actor("Sing"+SingsNumber+"");
    
// Atribution du sprite 

  new Sup.SpriteRenderer(actor, "ROAD/Sprites/Obstacles/Singularites/Sing02")
  actor.spriteRenderer.setAnimation("POP",false)
   
// Positionement aléatoire des acteurs 
   
  let size = actor.spriteRenderer.getSprite().getGridSize() // !! si un seul sprite peut être remplacer 
  SLargeur = size.width
  SHauteur = size.height
    
    SingsNumber--
  
   actor.setPosition(Sup.Math.Random.float(-640 + SLargeur, 640 - SLargeur),Sup.Math.Random.float(-250 +SHauteur, 320 - SHauteur),9)
    
   // Chaque acteur suis le comportement de SingstormBehavior
     actor.addBehavior(SingstormBehavior);
        
   // Récupération d'un temps d'attente aléatoire
     let WaitSi = Sup.Math.Random.integer(1500-(density*2) + GLOBALspeed*100 , 3500-(density*2) + GLOBALspeed*100) //(-dang *5)

    
     
   // Creation d'une autre Sing si pas en pause
     if (SingsNumber > 0)   
     {Sup.setTimeout(WaitSi,Sings)}}
    else{Sup.setTimeout(4005,Sings)}
    }
} }