function SLOW(value, index, array)
{  
  if ( value["actor"]["__inner"]["name"].slice(0,6) == "Enemie" || value["actor"]["__inner"]["name"].slice(0,4) == "Aste" || value["actor"]["__inner"]["name"].slice(0,5) == "ShotE" || value["actor"]["__inner"]["name"].slice(0,2) == "BA" || value["actor"]["__inner"]["name"].slice(0,5) == "Stars")
  { value["actor"].arcadeBody2D.setVelocity(value["actor"].arcadeBody2D.getVelocityX()/2,value["actor"].arcadeBody2D.getVelocityY()/2)   
   return ( value )} }

function UNSLOW(value, index, array)
{ if (value["actor"]["__inner"]["name"].slice(0,6) == "Enemie" || value["actor"]["__inner"]["name"].slice(0,4) == "Aste" || value["actor"]["__inner"]["name"].slice(0,5) == "ShotE" || value["actor"]["__inner"]["name"].slice(0,2) == "BA" || value["actor"]["__inner"]["name"].slice(0,5) == "Stars")
  { value["actor"].arcadeBody2D.setVelocity(value["actor"].arcadeBody2D.getVelocityX()*2,value["actor"].arcadeBody2D.getVelocityY()*2)   
   return ( value )} }

function PAUSE(value, index, array)
{  
  if ( value["__inner"]["name"].slice(0,6) == "Enemie" || value["__inner"]["name"].slice(0,4) == "Aste" || value["__inner"]["name"].slice(0,5) == "ShotE" || value["__inner"]["name"].slice(0,2) == "BA" || value["__inner"]["name"].slice(0,5) == "Stars")
  { value[10] =  value.arcadeBody2D.getVelocity()
    value.arcadeBody2D.setVelocity(0,0)   
   return ( value )} }

function UNPAUSE(value, index, array)
{ if ( value["__inner"]["name"].slice(0,6) == "Enemie" || value["__inner"]["name"].slice(0,4) == "Aste" || value["__inner"]["name"].slice(0,5) == "ShotE" || value["__inner"]["name"].slice(0,2) == "BA" || value["__inner"]["name"].slice(0,5) == "Stars")
  { value.arcadeBody2D.setVelocity(value[10])   
   return ( value )} }

function SKILLAlmostEND(time,skillid)
{ if(EndGame == false && ispaused == false)
  {
  
  
  Sup.setTimeout(time,clignote)
  function clignote()
  {if(EndGame == false){Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setAnimation("ENDING",true)}}} }

class UpEffectBehavior extends Sup.Behavior { 
  
  awake()  { this.actor.spriteRenderer.setAnimation("ON",true) }
  
  update() { this.actor.setPosition(Sup.getActor("PLAYER").getX(),Sup.getActor("PLAYER").getY(),9) }        
} 
Sup.registerBehavior(UpEffectBehavior);

function ReloadSkill(wtime,skillid)
{ Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setColor(GREY)
  Sup.setTimeout(wtime,ActiveSkill)
  function ActiveSkill()
  { Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setColor(WHITE)
    SkillbuttonPress[skillid] = false} }

// Time abylities //
function TimePause(skillid) // IN WORK
{ if(EndGame == false && ispaused == false)
  { Sup.getActor("PLAYER")[0]["Sh"] = 0;
  SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"])
  Timeispaused = true
  Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setAnimation("ON")
  Sup.getActor("PLAYERICO")[10] = Sup.getActor("PLAYERICO").arcadeBody2D.getVelocity()
  Sup.getActor("PLAYERICO").arcadeBody2D.setVelocity(0,0)
  Sup.getAllActors().filter(PAUSE) 
  Sup.setTimeout(4000,END)
  SKILLAlmostEND(3000,skillid)
   
  function END()
  { if(EndGame == false && ispaused == false)
  { SHIELDACTUA(0) 
    Timeispaused = false
    Sup.getActor("SKILL" + (skillid+1)  + "").spriteRenderer.setAnimation("OFF")
    Sup.getActor("PLAYERICO").arcadeBody2D.setVelocity(Sup.getActor("PLAYERICO")[10]) 
    Sup.getAllActors().filter(UNPAUSE)
    ReloadSkill(10000,skillid)}} }}

function TimeSlow(skillid)
{ if(EndGame == false && ispaused == false)
  { Sup.getActor("PLAYER")[0]["Sh"] = 0;
    SHIELDACTUA(Sup.getActor("PLAYER")[0]["Sh"])
    Timeisslowed = true
  Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setAnimation("ON")
  Sup.getActor("PLAYERICO").arcadeBody2D.setVelocity(Sup.getActor("PLAYERICO").arcadeBody2D.getVelocityX()/2,Sup.getActor("PLAYERICO").arcadeBody2D.getVelocityY()/2)
  Sup.ArcadePhysics2D.getAllBodies().filter(SLOW) 
  Sup.setTimeout(5000,END)
  SKILLAlmostEND(4000,skillid)
   
  function END()
  { if(EndGame == false && ispaused == false)
  { SHIELDACTUA(0) 
    Timeisslowed = false
    Sup.getActor("SKILL" + (skillid+1)  + "").spriteRenderer.setAnimation("OFF")
    Sup.getActor("PLAYERICO").arcadeBody2D.setVelocity(Sup.getActor("PLAYERICO").arcadeBody2D.getVelocityX()*2,Sup.getActor("PLAYERICO").arcadeBody2D.getVelocityY()*2) 
    Sup.ArcadePhysics2D.getAllBodies().filter(UNSLOW)
    ReloadSkill(15000,skillid)}} }}

// Stats skills
function PowerUp(skillid)
{ if(EndGame == false && ispaused == false)
  {
  Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setAnimation("ON") 
 SHIPSTATS["Dmg"] =  SHIPSTATS["Dmg"] * 1.3
 Sup.setTimeout(4000,END)
 SKILLAlmostEND(3000,skillid)
 // mettre un effet sur les weapons 
 Sup.getActor("Wleft").spriteRenderer.setColor(Red)
 Sup.getActor("Wright").spriteRenderer.setColor(Red)
  
   function END()
 { if(EndGame == false && ispaused == false)
  {
   Sup.getActor("Wleft").spriteRenderer.setColor(WHITE)
   Sup.getActor("Wright").spriteRenderer.setColor(WHITE)
   Sup.getActor("SKILL" + (skillid+1)  + "").spriteRenderer.setAnimation("OFF")
   SHIPSTATS["Dmg"] =  SHIPSTATS["Dmg"] / 1.3 
   ReloadSkill(8000,skillid)} }}}

function SpeedUp(skillid)
{if(EndGame == false && ispaused == false)
  {
 Sup.getActor("SKILL" + (skillid+1) + "").spriteRenderer.setAnimation("ON") 
     SHIPSTATS["Ac"] =  SHIPSTATS["Ac"] * 1.5
    Sup.getActor("PLAYER").arcadeBody2D.setVelocityMax(SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp*1.5,SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp*1.5) 
  
 Sup.setTimeout(4500,END)
 SKILLAlmostEND(3500,skillid)
 // mettre un effet de vitesse (traits bleus) sur le player 
 let actor = new Sup.Actor("EffectSpeed")
 new Sup.SpriteRenderer(actor,"SKILL/Sprites/UpEffectAnim")
 actor.addBehavior(UpEffectBehavior) 
 
 
   function END()
 { if(EndGame == false && ispaused == false)
  {
   actor.destroy()
   Sup.getActor("SKILL" + (skillid+1)  + "").spriteRenderer.setAnimation("OFF")
    SHIPSTATS["Ac"] =  SHIPSTATS["Ac"] / 1.5
Sup.getActor("PLAYER").arcadeBody2D.setVelocityMax(SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp/1.5,SHIPSTATS["Sp"]*0.04*Pilotes[Piloteid].Sp/1.5) 
   
   ReloadSkill(5000,skillid)} }}}
