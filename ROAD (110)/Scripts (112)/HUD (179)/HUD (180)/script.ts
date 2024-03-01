let Actid = [-1,-1,-1]
function SHIELDACTUA(ActuaSh) 
{ 
  if(EndGame == false && ispaused == false)
  {
  
  ActuaSh = ActuaSh/(SHIPSTATS["Sh"]/100)


 
 //Entame Le rechargement en fonction du Shield
 if (Actid[0] != -1) { Sup.clearTimeout(Actid[0]) }
 if (Actid[1] != -1) { Sup.clearTimeout(Actid[1]) }
 
    if(Timeisslowed == false) { 
      ShieldHit()
      Actid[0] = Sup.setTimeout(SHIPSTATS["Sh"]*40+2000,ReloadSh) }
    else {Sup.setTimeout(10,ReloadSh)}    
 
  function ReloadSh()
  {
    if(EndGame == false && ispaused == false && Timeisslowed == false)
  {
   Sup.getActor("PLAYER")[0]["Sh"] = Sup.getActor("PLAYER")[0]["Sh"] + SHIPSTATS["Sh"]/100
    ActuaSh = Sup.getActor("PLAYER")[0]["Sh"] /(SHIPSTATS["Sh"]/100)
  
   if(Sup.getActor("PLAYER")[0]["Sh"]<SHIPSTATS["Sh"])
  { Sup.getActor("SHBarfill").setLocalScaleX(ActuaSh/100) 
    Actid[1] = Sup.setTimeout(SHIPSTATS["Sh"],ReloadSh) }
   else{ Sup.getActor("PLAYER")[0]["Sh"] = SHIPSTATS["Sh"]
         Sup.getActor("SHBarfill").setLocalScaleX(1) }
  }}
 
   if(ActuaSh>0 )
  { Sup.getActor("SHBarfill").setLocalScaleX(ActuaSh/100) }
 else
 { Sup.getActor("SHBarfill").setLocalScaleX(-0.1)
   Sup.getActor("PLAYER")[0]["Sh"] = 0
   // SCRIPT DE SHIELD LOOSE
 }
  } 
}

let Shid = 0
function ShieldHit()
{  Sup.getActor("SHIELD").setLocalScale(2,2,1)  
   Sup.getActor("ShShell").spriteRenderer.setColor(Blue)
   Sup.getActor("ShWileft").spriteRenderer.setColor(Blue)
   Sup.getActor("ShWiright").spriteRenderer.setColor(Blue)
   Sup.getActor("ShEngine").spriteRenderer.setColor(Blue)
   Sup.getActor("SHIELD").setVisible(true)
   Sup.setTimeout(50,hideshield) 
   Hit1.play();}

function hideshield()
{ if(EndGame == false)
  {Sup.getActor("SHIELD").setVisible(false)} }

function HPBarActua(ActuaHp) 
{ ActuaHp = ActuaHp/(SHIPSTATS["Hp"]/100)
  Hit2.play();
 if(ActuaHp>0)
 { Sup.getActor("HPBarfill").setLocalScaleX(ActuaHp/100) }
 else
 { Sup.getActor("PLAYER")[0]["Hp"] = 0
   Sup.getActor("HPBarfill").setLocalScaleX(-0.1)
   EndtheRoad() }
}

let timeout1;
let timeout2;

function ShotActua(ActuaShot) // ActuaShot = 100
{ 
    if(Actid[2] !=-1 )
    {Sup.clearTimeout(Actid[2])}
  
  Sup.clearTimeout(timeout1)
  Sup.clearTimeout(timeout2)
  
  let RT = (SHIPSTATS["Rt"]);
  
  Sup.getActor("WpBarfill").setLocalScaleY(ActuaShot/100)
  
  if(RT>49)
    { timeout1 = Sup.setTimeout(RT/10,ReloadShot1) }
  else{ timeout2 =Sup.setTimeout(RT,ReloadShot10)}

 function ReloadShot10()
 {
   if(EndGame == false && ispaused == false)
  {
  ActuaShot -= 10;

   if(ActuaShot > 0) 
  { Sup.getActor("WpBarfill").setLocalScaleY(ActuaShot/100)
   Actid[2] =  Sup.setTimeout(RT,ReloadShot10) } // tout les 10% on actua
 else {Sup.getActor("WpBarfill").setLocalScaleY(-0.1); Shotend = true; Shot();}} }
 
   function ReloadShot1()
 {
   if(EndGame == false && ispaused == false)
  {
  ActuaShot--

   if(ActuaShot > 0) 
  { Sup.getActor("WpBarfill").setLocalScaleY(ActuaShot/100)
   Actid[2] =  Sup.setTimeout(RT/10,ReloadShot1) } // tout les 1% on actua
 else {Sup.getActor("WpBarfill").setLocalScaleY(-0.1); Shotend = true; Shot();}}}
 
 }
 
function ClearActua()
{if(ClearValue)
{ Sup.getActor("ClearIndicator").textRenderer.setText((ClearValue/ClearMaxValue*100).toFixed(1) +"%")
if(ClearValue>ClearMaxValue*0.5){Sup.getActor("ClearIndicator").textRenderer.setColor(Green)} } }

class IcoEBehavior extends Sup.Behavior { 
  
  update() {
    
    if(Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D,Sup.getActor("PLAYERICO").arcadeBody2D))
    {  
           
      this.actor.spriteRenderer.setAnimation("OFF",false)  
       
      
     let Eventtype =  ROADLEVELS[currentRoad][this.actor[0]]["Eventtype"]
     
     Eventid = this.actor[0];
     
     if(Eventtype == 1)  
     { EnemiesSpawnEvent(ROADLEVELS[currentRoad][this.actor[0]]["Number"],ROADLEVELS[currentRoad][this.actor[0]]["BEHAV"],ROADLEVELS[currentRoad][this.actor[0]]["sprite"],ROADLEVELS[currentRoad][this.actor[0]]["spawnW"],ROADLEVELS[currentRoad][this.actor[0]]["EneHp"],ROADLEVELS[currentRoad][this.actor[0]]["ClearPts"]) }
 else{if(Eventtype == 2){AstéroidsField(ROADLEVELS[currentRoad][this.actor[0]]["Number"],ROADLEVELS[currentRoad][this.actor[0]]["density"], ROADLEVELS[currentRoad][this.actor[0]]["ClearPts"])}
     if(Eventtype == 3){ScrapsField(ROADLEVELS[currentRoad][this.actor[0]]["Number"],ROADLEVELS[currentRoad][this.actor[0]]["density"],ROADLEVELS[currentRoad][this.actor[0]]["ClearPts"] )}
     if(Eventtype == 4){SingsStorm(ROADLEVELS[currentRoad][this.actor[0]]["Number"],ROADLEVELS[currentRoad][this.actor[0]]["density"])}   
     }
     
    
     this.actor.getBehavior(IcoEBehavior).destroy()
    } 
    }    

  }
Sup.registerBehavior(IcoEBehavior);

function IcoEvents(id,NEvents)
{ NEvents = ROADLEVELS[currentRoad].length
 
 
 if(ROADLEVELS[currentRoad].length>0)
   { Icospawn()}

  
 
 let Posy;
 
 function Icospawn()
  { let actor = new Sup.Actor("NEvents"+id)
    new Sup.SpriteRenderer(actor,"ROAD/Sprites/HUD/IcoEvent")
   
   if(id%2==0)
     {Posy=-284}else{Posy=-294}
   
   
    actor.setPosition((640*(ROADLEVELS[currentRoad][id]["PRoadBar"]/100) -320),Posy,9)  // ICI pour le spawn sur la bare en fonction du %   
    actor.spriteRenderer.setAnimation("ON",true)
    
    new Sup.ArcadePhysics2D.Body(actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 14.5,  height: 19,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});

   actor.addBehavior(IcoEBehavior)
   
    actor[0] = id;
     
    id++
    if(id!=NEvents)
      {Icospawn()} } }

class PLAYERIcoBehavior extends Sup.Behavior {
  update() { if(this.actor.getX() > 320)  {EndtheRoad()} } } 
Sup.registerBehavior(PLAYERIcoBehavior);

function ENDTHEROAD(value, index, array)
{ if (value["__inner"]["name"].slice(0,2) != "BA" && value["__inner"]["name"].slice(0,3) != "Cam" && value["__inner"]["name"].slice(0,4) != "Back")
  { value.destroy();return( true ) } }

function EndtheRoad()
{ EndGame = true
  document.removeEventListener('keydown', KeyDownMove)
  document.removeEventListener('keyup', KeyUpMove) 
  let HP = Sup.getActor("PLAYER")[0]["Hp"]
  Sup.getAllActors().filter(ENDTHEROAD)
  Sup.setTimeout(10,endtext)
 
 function endtext()
  {let actor = new Sup.Actor("ENDTEXT")
  new Sup.TextRenderer(actor,"","MENU/Menufont")
  actor.setPosition(0,0,4) 
  actor.textRenderer.setSize(120)
  
   
   // Réinitiallisation des variables $!!!$  A MODIFIER QUAND HANGAR ADD
      
      Eventid = 0
      Timeisslowed = false
      Timeispaused = false
      SkillbuttonPress = [false,false,false] 
      AsteNumber = 0  
      Orientationx = 0
      Orientationy = 0
      Movex = 0
      Movey = 3
      IsShooting = false
      NumberShot = 0
      Shotend = true
      currentRoad = 0
      PsxStars = -710;
      STempsAttente = 0;
      SLargeur = 6.5;
      SHauteur = 15;

      ispaused = false
      ShotSound.stop();
   
   actor.addBehavior(MENU)
   
   if(HP==0 || ClearValue < ClearMaxValue*0.5)
      { music2.stop(); jingleloose1.play();actor.textRenderer.setText("YOU LOOSE,\nand that mean nothing\n---IN BUILD---\n\nHp: "+HP+"  Clear at: " + (ClearValue/ClearMaxValue*100).toFixed(1) +"% < 50%\npress 0 for menu");actor.textRenderer.setColor(Red)}
  else{ music2.stop(); jingleWin1.play();actor.textRenderer.setText("YOU WIN,\nnothing at all\n---IN BUILD---\n\nHp: "+HP+"  Clear at: " + (ClearValue/ClearMaxValue*100).toFixed(1) +"% > 50%\npress 0 for menu");actor.textRenderer.setColor(Green)}}


}


class MENU extends Sup.Behavior { 
  
  update() {
    
      if(Sup.Input.wasKeyJustPressed("0"))
      { 
        EndGame = false
        ClearValue = 0
        music2.stop();
        jingleloose1.stop();
        jingleWin1.stop();
        Sup.loadScene("MENU/Menu") }
    
    }    

}
Sup.registerBehavior(MENU);
