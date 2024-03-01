class MOVEBehavior extends Sup.Behavior {
 
  Velx = 0
  Vely = 0
  ArcBody2D
  EngineSize
  
  awake() {
    
    
    
    
    ShipCreator()
    this.actor.arcadeBody2D.setVelocityMax(SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp,SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp) 
    document.addEventListener('keydown', KeyDownMove)
    document.addEventListener('keyup', KeyUpMove)
    this.ArcBody2D = this.actor.arcadeBody2D
    this.EngineSize = Sup.getActor("Engine").spriteRenderer.getSprite().getGridSize()
    Sup.getActor("Engine").spriteRenderer.setAnimation("Burn", true)
    InfiniteStarts()
  }

  update() {
   
    this.actor
    
   // On gére les vecteurs x   
    if (Movex == 1)
   { if (this.Velx < this.actor.arcadeBody2D.getVelocityMax().x )
     {this.Velx = this.Velx + SHIPSTATS["Ac"]*0.005*Pilotes[Piloteid].Ac } }
       
     if (Movex == 0)
    { if (this.Velx > 0)
      { this.Velx = this.Velx - SHIPSTATS["Ac"]*0.005*Pilotes[Piloteid].Ac} else {this.Velx = 0} }
    
    if(Orientationx == -1)
    {       
      if(this.actor.getPosition().x < -640 + this.ArcBody2D.getSize().width/2)
     {Movex=0 ;   this.ArcBody2D.warpPosition(-640 + this.ArcBody2D.getSize().width/2,this.actor.getY()) } }   
    if(Orientationx == 1)
    { 
      if(this.actor.getPosition().x > 640 - this.ArcBody2D.getSize().width /2 )
     {Movex=0  ; this.ArcBody2D.warpPosition(640 - this.ArcBody2D.getSize().width/2,this.actor.getY()) } }
  
// On gére les vecteurs y   
        if (Movey == 1)
   { if (this.Vely < this.actor.arcadeBody2D.getVelocityMax().y)
     {this.Vely = this.Vely + SHIPSTATS["Ac"]*0.005*Pilotes[Piloteid].Ac } }
       
     if (Movey == 0)
    { if (this.Vely > 0 && this.Vely != 0)
      { this.Vely = this.Vely - SHIPSTATS["Ac"]*0.005*Pilotes[Piloteid].Ac} else {this.Vely = 0; }  }
    
    if(Orientationy == -1)
    { if(this.actor.getPosition().y < -256 + this.ArcBody2D.getSize().height/2 + this.EngineSize.height/2 - 8.375 )
     { Movey=0 ;  this.ArcBody2D.warpPosition(this.actor.getX() ,-256 + this.ArcBody2D.getSize().height/2 + this.EngineSize.height/2 - 8.375 ) } }
    if(Orientationy == 1)
    { if(this.actor.getPosition().y > 320 - this.ArcBody2D.getSize().height/1.25 )
     { Movey=0 ; this.ArcBody2D.warpPosition(this.actor.getX(), 320 - this.ArcBody2D.getSize().height/2 - Sup.getActor("Shell").spriteRenderer.getSprite().getGridSize().height/8) } }
    
    this.ArcBody2D.setVelocity(this.Velx * Orientationx,this.Vely * Orientationy)
  }
}
Sup.registerBehavior(MOVEBehavior);

//Function pour gérer les touches
function KeyDownMove(event: KeyboardEvent)
{
  
  var LeThis = Sup.getActor("PLAYER").getBehavior(MOVEBehavior);

  // Pour le Right choisi
    if(event.key == commands[1] && Movex == 0) {
  
      //     if(Orientationx == -1 && LeThis.Velx > 1)      { LeThis.Velx = LeThis.Velx /(SHIPSTATS["Ac"]/5*Pilotes[Piloteid].Ac}
     Sup.getActor("Wileft").spriteRenderer.setColor(WHITE); Sup.getActor("Wiright").spriteRenderer.setColor(Dark)
    Sup.getActor("Wiright").setLocalScale(0.9,0.95,1); Sup.getActor("Wileft").setLocalScale(1.1,1,1)
     Orientationx = 1; LeThis.Velx = LeThis.Velx - (LeThis.Velx - SHIPSTATS["Ac"]*0.01*Pilotes[Piloteid].Ac) ;Movex = 1 }
  
// Pour le Left choisi
 if (event.key == commands[0] && Movex == 0)  {
    //  if(Orientationx == 1 && LeThis.Velx > 1) { LeThis.Velx = LeThis.Velx /(SHIPSTATS["Ac"]/5*Pilotes[Piloteid].Ac)}
  Sup.getActor("Wiright").spriteRenderer.setColor(WHITE); Sup.getActor("Wileft").spriteRenderer.setColor(Dark); 
   Sup.getActor("Wileft").setLocalScale(0.9,0.95,1); Sup.getActor("Wiright").setLocalScale(1.1,1,1) 
       Orientationx = -1; LeThis.Velx = LeThis.Velx - (LeThis.Velx - SHIPSTATS["Ac"]*0.01*Pilotes[Piloteid].Ac );Movex = 1 }


  
  
  // Pour le DOWN choisi
 if (event.key == commands[3])  
      { if(Orientationy == 1 && Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely > 1)
      { Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely = Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely /(SHIPSTATS["Ac"]/5*Pilotes[Piloteid].Ac)}
  
     Orientationy = -1; Movey = 1 }

// Pour le UP choisi
 if (event.key == commands[2])  
      { if(Orientationy == -1 && Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely > 1)
      { Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely = Sup.getActor("PLAYER").getBehavior(MOVEBehavior).Vely /(SHIPSTATS["Ac"]/5*Pilotes[Piloteid].Ac)}
  
     Orientationy = 1; Movey = 1 }

//Pour le SHOT choisi
  if (event.key == commands[4])
  { if (IsShooting == false && Shotend == true){IsShooting = true;Shot()} }
  
//Pour le Skill-1 choisie
  if (event.key == commands[5] && SkillbuttonPress[0] == false)
     { FunctionSkills[SKILLSSHIP[0]-1](0) ; SkillbuttonPress[0] = true  }
  
//Pour le Skill-2 choisie
  if (event.key == commands[6] && SkillbuttonPress[1] == false)
     { FunctionSkills[SKILLSSHIP[1]-1](1); SkillbuttonPress[1] = true }

//Pour l'abilité choisie
if (event.key == commands[7] && SkillbuttonPress[2] == false)
   { FunctionSkills[SKILLSSHIP[2]-1](2); SkillbuttonPress[2] = true}

  
//pour retour au menu
  if (event.key == "Escape" || event.key == "0" || event.key == "à" )
  {
      Sup.getActor("PLAYER")[0]["Hp"] = 0
   Sup.getActor("HPBarfill").setLocalScaleX(-0.1)
    music2.stop();
   EndtheRoad() 
  }
  

  
}

function KeyUpMove(event: KeyboardEvent)
{ if (event.key == commands[0] || event.key == commands[1])
  { Movex = 0 ; Sup.getActor("Wiright").spriteRenderer.setColor(shine); Sup.getActor("Wileft").spriteRenderer.setColor(shine) 
  Sup.getActor("Wileft").setLocalScale(1,1,1); Sup.getActor("Wiright").setLocalScale(1,1,1) }
if (event.key == commands[2] || event.key == commands[3])
  { Movey = 0 }
if (event.key == commands[4] )
  {IsShooting = false; if(SHIP[0]==5 ){Shotend = true; ShotSound.pause();}}
 
 
 
}

// Création du ship, ship icon et shield en fonction des sprites
function ShipCreator()
{
       Sup.getActor("Shell").spriteRenderer.setSprite(Shells[0]["sprite"]+SHIP[1]+"")
       Sup.getActor("ShShell").spriteRenderer.setSprite(Shells[0]["sprite"]+SHIP[1]+"")
       Sup.getActor("ShShell").spriteRenderer.setOpacity(0.35)
       Sup.getActor("Shellico").spriteRenderer.setSprite(Shells[0]["sprite"]+SHIP[1]+"")
       let ShellSize = Sup.getActor("Shell").spriteRenderer.getSprite().getGridSize() 
       
        Sup.getActor("Weapons").setY(ShellSize.height/4 + - 200 )
        Sup.getActor("Weaponsico").setX(ShellSize.height/10 + -320 )
        Sup.getActor("Wleft").spriteRenderer.setSprite(Weapons[0]["sprite"]+SHIP[0]+"")
        Sup.getActor("Wright").spriteRenderer.setSprite(Weapons[0]["sprite"]+SHIP[0]+"")
        Sup.getActor("Wleftico").spriteRenderer.setSprite(Weapons[0]["sprite"]+SHIP[0]+"")
        Sup.getActor("Wrightico").spriteRenderer.setSprite(Weapons[0]["sprite"]+SHIP[0]+"")
  
       Sup.getActor("Wings").setY( (ShellSize.height/8) + -200)
       Sup.getActor("ShWings").setY( (ShellSize.height/4) + -200)
       Sup.getActor("Wingsico").setX( (ShellSize.height/20) + -320)
        
        Sup.getActor("Wileft").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
        Sup.getActor("Wileft").setX( -ShellSize.width/4)
        Sup.getActor("ShWileft").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
        Sup.getActor("ShWileft").setX( -ShellSize.width/4)
        Sup.getActor("ShWileft").spriteRenderer.setOpacity(0.35)
        Sup.getActor("Wileftico").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
        Sup.getActor("Wileftico").setY( ShellSize.width/10 + -289)
   
         
         Sup.getActor("Wiright").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
         Sup.getActor("Wiright").setX( ShellSize.width/4)
         Sup.getActor("ShWiright").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
         Sup.getActor("ShWiright").setX(ShellSize.width/4)
         Sup.getActor("ShWiright").spriteRenderer.setOpacity(0.35)  
         Sup.getActor("Wirightico").spriteRenderer.setSprite(Wings[0]["sprite"]+SHIP[2]+"")
         Sup.getActor("Wirightico").setY( -ShellSize.width/10 + -289)
  
  
  
        Sup.getActor("Engine").spriteRenderer.setSprite(Engines[0]["sprite"]+SHIP[3]+"")
        Sup.getActor("Engine").setY(-ShellSize.height/6 + -200 )
        Sup.getActor("ShEngine").spriteRenderer.setSprite(Engines[0]["sprite"]+SHIP[3]+"")
        Sup.getActor("ShEngine").setY(-ShellSize.height/3 + -200 )
        Sup.getActor("ShEngine").spriteRenderer.setOpacity(0.35)
        Sup.getActor("Engineico").spriteRenderer.setSprite(Engines[0]["sprite"]+SHIP[3]+"")
        Sup.getActor("Engineico").setX(-ShellSize.height/15 + -320 )
  
  
  
  // Gestion de la taille de l'arcade body 2d du player
  let WingsSize = Sup.getActor("Wileft").spriteRenderer.getSprite().getGridSize() 
  Sup.getActor("PLAYER").arcadeBody2D.setSize(ShellSize.width-((ShellSize.width-WingsSize.width)/2)  , WingsSize.height/2 )  
  Sup.getActor("PLAYER").arcadeBody2D.setOffset({x: 0, y :ShellSize.height/16})
  
  Sup.getActor("PLAYERICO").arcadeBody2D.setSize( WingsSize.height/5 ,ShellSize.width/2.5-((ShellSize.width-WingsSize.width)/5))  
  Sup.getActor("PLAYERICO").arcadeBody2D.setOffset({x: ShellSize.height/40, y :0})
  
  Sup.getActor("PLAYERICO").arcadeBody2D.setVelocityX(GLOBALspeed/40*-1)
  IcoEvents(0,0)
  
  Sup.getActor("PLAYER")[0] = {"Hp": SHIPSTATS["Hp"],"Sh": SHIPSTATS["Sh"] }
  
  
}

