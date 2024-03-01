
function Partrefresh(index: number)
{    
      let search = PartstypeName[Partstypeid][index]
      let stat = PartstypeName[Partstypeid][0];
  
  // Affichage dans le ship
  
      Shiprefresh(index) 

     // Gestion des ressources

    if(buyparts[Partstypeid][index-1] == false) 
      { Sup.getActor("Buybutton").setVisible(true)
        Sup.getActor("RessourceNeedNumber").textRenderer.setText((search["price"]))
        Sup.getActor("Buybutton").spriteRenderer.setSprite("HANGAR/Sprites/HUD/BuyBtn");
        Sup.getActor("Buybutton").getBehavior(BUYBtnBehavior).isbuy = false }
  else
    { if(SHIP[Partstypeid] == index) { Sup.getActor("RessourceNeedNumber").textRenderer.setText("Equiped"); Sup.getActor("Buybutton").setVisible(false)}
     else { Sup.getActor("RessourceNeedNumber").textRenderer.setText("EQUIP") ; Sup.getActor("Buybutton").setVisible(true) }
      Sup.getActor("Buybutton").spriteRenderer.setSprite("HANGAR/Sprites/HUD/Validation")
      Sup.getActor("Buybutton").getBehavior(BUYBtnBehavior).isbuy = true }
       
  
      // Affichage dans le HUD

       Sup.getActor("PartShow").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"")
       Sup.getActor("PartShow").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"")
       Sup.getActor("PartName").textRenderer.setText(search["name"])
       Sup.getActor("Description").textRenderer.setText(search["Des"]) 
       Sup.getActor("PartDescription").textRenderer.setText(stat["stat1"]+":"+search["1"]+""+" "+stat["stat2"]+":"+search["2"]+""+" "+stat["stat3"]+":"+search["3"]+""+" "+stat["stat4"]+":"+search["4"]+"") 
}



// Sélection du type de part
class PartSelectRIGHTBehavior extends Sup.Behavior {
   partypeidlocal = 0
  
  awake()  {
    Sup.getActor("PartSelect").textRenderer.setText(PartstypeName[Partstypeid][0]["type"]) 
Partrefresh(SHIP[Partstypeid])
  }
  
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       
        this.partypeidlocal = Partstypeid
      
       Partstypeid = 0; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 1 ; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 2 ; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 3 ; Shiprefresh(SHIP[Partstypeid])
 
       Partstypeid = this.partypeidlocal
       
       
       Partstypeid++
       if(Partstypeid == 4)
       {Partstypeid=0}
       Sup.getActor("PartSelect").textRenderer.setText(PartstypeName[Partstypeid][0]["type"]) 
       CurrentPartid = SHIP[Partstypeid]; 
       Statcompdestroy()
       Statscomparison()
       Partrefresh(SHIP[Partstypeid])
       
      }
  }
}
Sup.registerBehavior(PartSelectRIGHTBehavior);

class PartSelectLEFTBehavior extends Sup.Behavior {
 partypeidlocal = 0
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       
       this.partypeidlocal = Partstypeid
      
       Partstypeid = 0; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 1 ; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 2 ; Shiprefresh(SHIP[Partstypeid])
       Partstypeid = 3 ; Shiprefresh(SHIP[Partstypeid])
 
       Partstypeid = this.partypeidlocal
       
       Partstypeid--
       if(Partstypeid == -1)
       {Partstypeid=3}
       Sup.getActor("PartSelect").textRenderer.setText(PartstypeName[Partstypeid][0]["type"]) 
       CurrentPartid = SHIP[Partstypeid]; 
       Statcompdestroy()
       Statscomparison()
      Partrefresh(CurrentPartid)
  }
 }
}
Sup.registerBehavior(PartSelectLEFTBehavior);

// Sélection de la part à show
class PartShowRIGHTBehavior extends Sup.Behavior {
   
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       CurrentPartid++
       if(CurrentPartid == PartstypeName[Partstypeid].length)
       {CurrentPartid=1}
       Partrefresh(CurrentPartid)
        Statcompdestroy()
       Statscomparison()
  }
 }
}
Sup.registerBehavior(PartShowRIGHTBehavior);

class PartShowLEFTBehavior extends Sup.Behavior {
 
  
  update() {
        if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      { Button2.stop();Button2.play();
        this.actor.spriteRenderer.stopAnimation() ;this.actor.spriteRenderer.setAnimation("Click",false)
       CurrentPartid--
       if(CurrentPartid == 0)
       {CurrentPartid=PartstypeName[Partstypeid].length-1}
       Partrefresh(CurrentPartid)
       Statcompdestroy()
       Statscomparison()
  }
 }
}
Sup.registerBehavior(PartShowLEFTBehavior);

function Statscomparison()
{
  let posy = {Hp: -89, Sh: -107,Sp: -125, Ac: -143,Ev: -161, Dmg: -179,As: -197,Spr: -215,Rt: -233} 
  
  let stat1 = PartstypeName[Partstypeid][CurrentPartid]["1"]
  let stat2 = PartstypeName[Partstypeid][CurrentPartid]["2"]
  let stat3 = PartstypeName[Partstypeid][CurrentPartid]["3"]
  let stat4 = PartstypeName[Partstypeid][CurrentPartid]["4"]
  
  let Compstat1 = new Sup.Actor("Compstat1")
  let Compstat2 = new Sup.Actor("Compstat2")
  let Compstat3 = new Sup.Actor("Compstat3")
  let Compstat4 = new Sup.Actor("Compstat4")
  
  Compstat1.setLocalScaleY(1.2)
  Compstat2.setLocalScaleY(1.2)
  Compstat3.setLocalScaleY(1.2)
  Compstat4.setLocalScaleY(1.2)
  
  new Sup.TextRenderer(Compstat1,"","HANGAR/HangarFont",{size: 30,alignment: "left", verticalAlignment: "top"})
  new Sup.TextRenderer(Compstat2,"","HANGAR/HangarFont",{size: 30,alignment: "left", verticalAlignment: "top"})
  new Sup.TextRenderer(Compstat3,"","HANGAR/HangarFont",{size: 30,alignment: "left", verticalAlignment: "top"})
  new Sup.TextRenderer(Compstat4,"","HANGAR/HangarFont",{size: 30,alignment: "left", verticalAlignment: "top"})
  
   Compstat1.setPosition(82,posy[PartstypeName[Partstypeid][0]["stat1"]],1)
   Compstat2.setPosition(82,posy[PartstypeName[Partstypeid][0]["stat2"]],1)
   Compstat3.setPosition(82,posy[PartstypeName[Partstypeid][0]["stat3"]],1)
   Compstat4.setPosition(82,posy[PartstypeName[Partstypeid][0]["stat4"]],1)
  
  
  
  if (stat1 == PartstypeName[Partstypeid][SHIP[Partstypeid]]["1"])
    { Compstat1.textRenderer.setText("==")
      Compstat1.textRenderer.setColor(Orange) }
  else{ if (stat1 > PartstypeName[Partstypeid][SHIP[Partstypeid]]["1"])
        { Compstat1.textRenderer.setText("+" + (stat1-PartstypeName[Partstypeid][SHIP[Partstypeid]]["1"]) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat1"]]/1000)
          Compstat1.textRenderer.setColor(Green); }
      else{ Compstat1.textRenderer.setText("-" + (PartstypeName[Partstypeid][SHIP[Partstypeid]]["1"]-stat1) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat1"]]/1000)
           Compstat1.textRenderer.setColor(Red);} } 

  if (stat2 == PartstypeName[Partstypeid][SHIP[Partstypeid]]["2"])
    { Compstat2.textRenderer.setText("==")
      Compstat2.textRenderer.setColor(Orange) }
  else{ if (stat2 > PartstypeName[Partstypeid][SHIP[Partstypeid]]["2"])
        { Compstat2.textRenderer.setText("+" + (stat2-PartstypeName[Partstypeid][SHIP[Partstypeid]]["2"]) * 1000 *Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat2"]]/1000)
          Compstat2.textRenderer.setColor(Green); }
      else{ Compstat2.textRenderer.setText("-" + (PartstypeName[Partstypeid][SHIP[Partstypeid]]["2"]-stat2) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat2"]]/1000)
           Compstat2.textRenderer.setColor(Red);} } 
  
  if (stat3 == PartstypeName[Partstypeid][SHIP[Partstypeid]]["3"])
    { Compstat3.textRenderer.setText("==")
      Compstat3.textRenderer.setColor(Orange) }
  else{ if (stat3 > PartstypeName[Partstypeid][SHIP[Partstypeid]]["3"])
        { Compstat3.textRenderer.setText("+" + (stat3-PartstypeName[Partstypeid][SHIP[Partstypeid]]["3"]) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat3"]]/1000)
          Compstat3.textRenderer.setColor(Green); }
      else{ Compstat3.textRenderer.setText("-" + (PartstypeName[Partstypeid][SHIP[Partstypeid]]["3"]-stat3) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat3"]]/1000)
           Compstat3.textRenderer.setColor(Red);} }
  
  if (stat4 == PartstypeName[Partstypeid][SHIP[Partstypeid]]["4"])
    { Compstat4.textRenderer.setText("==")
      Compstat4.textRenderer.setColor(Orange) }
  else{ if (stat4 > PartstypeName[Partstypeid][SHIP[Partstypeid]]["4"])
        { Compstat4.textRenderer.setText("+" + (stat4-PartstypeName[Partstypeid][SHIP[Partstypeid]]["4"]) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat4"]]/1000)
          Compstat4.textRenderer.setColor(Green);if(PartstypeName[Partstypeid][0]["stat4"] == "Rt"){Compstat4.textRenderer.setColor(Red)} }
      else{ Compstat4.textRenderer.setText("-" + (PartstypeName[Partstypeid][SHIP[Partstypeid]]["4"]-stat4) * 1000 * Pilotes[Piloteid][PartstypeName[Partstypeid][0]["stat4"]]/1000)
           Compstat4.textRenderer.setColor(Red);if(PartstypeName[Partstypeid][0]["stat4"] == "Rt"){Compstat4.textRenderer.setColor(Green)}} }

}

function Statcompdestroy()
{ Sup.getActor("Compstat1").destroy()
   Sup.getActor("Compstat2").destroy()
    Sup.getActor("Compstat3").destroy()
     Sup.getActor("Compstat4").destroy() }




