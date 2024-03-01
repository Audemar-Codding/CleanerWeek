class BUYBtnBehavior extends Sup.Behavior {

  hover = false;
  isbuy = true;

   awake()
  { Sup.getActor("RessourceNumber").textRenderer.setText(GLOBALMoney);
      Partstypeid = 0
  Shiprefresh(SHIP[Partstypeid])
    Partstypeid = 2
  Shiprefresh(SHIP[Partstypeid])
      Partstypeid = 3
  Shiprefresh(SHIP[Partstypeid])
   Partstypeid = 1
  Partrefresh(SHIP[Partstypeid])
   ShipStatCalc()
   Statscomparison()
  }
  
  
  update() {
    if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { 
           this.actor.spriteRenderer.setAnimation("Click",false);
           if (this.isbuy == false)
             { 
               if(GLOBALMoney - PartstypeName[Partstypeid][CurrentPartid]["price"] > -1)
               { Button5.stop();Button5.play();
               Sup.getActor("Buybutton").setVisible(false)
               this.isbuy = true;
               SHIP[Partstypeid] = CurrentPartid;
                 
               ShipStatCalc()
               Statcompdestroy()
               Statscomparison()
                              
               GLOBALMoney = GLOBALMoney - PartstypeName[Partstypeid][CurrentPartid]["price"]
               Sup.getActor("RessourceNumber").textRenderer.setText(GLOBALMoney)
               buyparts[Partstypeid][CurrentPartid-1] = true; 
               Sup.getActor("RessourceNeedNumber").textRenderer.setText("Equiped");  }
               else { // play a deniedbuy sound and some visual effects 
               Button4.stop();Button4.play();  
               }          
             }
           else
             { Button3.stop();Button3.play();
               
               Sup.getActor("RessourceNeedNumber").textRenderer.setText("Equiped");
             
              Sup.getActor("Buybutton").setVisible(false)
              SHIP[Partstypeid] = CurrentPartid
              
              ShipStatCalc()
              Statcompdestroy()
              Statscomparison() }
           
           
         }
        if (this.hover==false)
       {
        this.hover = true
         this.actor.setLocalScale(1.2,1.2,1)
        }
      }
    else
      {
        if(this.hover==true)
          {
            this.hover = false
           this.actor.setLocalScale(1,1,1)
          }
        
      } 
    
  }
}
Sup.registerBehavior(BUYBtnBehavior);

// Calcule les stats du ship en fonction de ses parts et du pilote
function ShipStatCalc()
{
  SHIPSTATS["Hp"] = (Shells[SHIP[1]]["1"] * 1000 + Wings[SHIP[2]]["3"] * 1000 + Engines[SHIP[3]]["4"] * 1000 ) * Pilotes[Piloteid]["Hp"] /1000
  SHIPSTATS["Sh"] = ((Shells[SHIP[1]]["2"] * 1000 + Wings[SHIP[2]]["4"]* 1000 ) * Pilotes[Piloteid]["Sh"]) /1000
  SHIPSTATS["Sp"] = Engines[SHIP[3]]["1"] * 1000 * Pilotes[Piloteid]["Sp"] /1000
  SHIPSTATS["Ac"] = ((Shells[SHIP[1]]["3"] * 1000 + Wings[SHIP[2]]["2"]* 1000 + Engines[SHIP[3]]["2"]* 1000) * Pilotes[Piloteid]["Ac"]) /1000
  SHIPSTATS["Ev"] = (Shells[SHIP[1]]["4"] * 1000 + Wings[SHIP[2]]["1"] * 1000 + Engines[SHIP[3]]["3"] * 1000) * Pilotes[Piloteid]["Ev"] /1000
  SHIPSTATS["Dmg"] = Weapons[SHIP[0]]["1"] * 1000 * Pilotes[Piloteid]["Dmg"] /1000
  SHIPSTATS["As"] = Weapons[SHIP[0]]["2"] * 1000 * Pilotes[Piloteid]["As"] /1000
  SHIPSTATS["Spr"] = Weapons[SHIP[0]]["3"] * 1000 * Pilotes[Piloteid]["Spr"] /1000
  SHIPSTATS["Rt"] = Weapons[SHIP[0]]["4"] * 1000 * Pilotes[Piloteid]["Rt"] /1000
 
  Sup.getActor("CurrentValues").textRenderer.setText(SHIPSTATS["Hp"]+"\n"+SHIPSTATS["Sh"]+"\n"+SHIPSTATS["Sp"]+"\n"+SHIPSTATS["Ac"]+"\n"+SHIPSTATS["Ev"]+"\n"+SHIPSTATS["Dmg"]+"\n"+SHIPSTATS["As"]+"\n"+SHIPSTATS["Spr"]+"\n"+SHIPSTATS["Rt"])
  
}

// Raffraichie l'affichage du ship
function Shiprefresh(index: number)
{
  
  if (Partstypeid == 0){ Sup.getActor("Wleft").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"")
       Sup.getActor("Wright").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"") }

  if (Partstypeid == 1) 
     { Sup.getActor("Shell").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"")
       let ShellSize = Sup.getActor("Shell").spriteRenderer.getSprite().getGridSize() 

       Sup.getActor("Weapons").setY(ShellSize.height + 47 + (ShellSize.height/4))                

       Sup.getActor("Wings").setY( (ShellSize.height/2) + 47 + (ShellSize.height/8) )
       Sup.getActor("Wileft").setX( -ShellSize.width)
       Sup.getActor("Wiright").setX( ShellSize.width )
     
       Sup.getActor("Engine").setY(-ShellSize.height + 47 - (ShellSize.height/4)) }

    if (Partstypeid == 2){ Sup.getActor("Wileft").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"")
       Sup.getActor("Wiright").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"") }
  
    if (Partstypeid == 3){ Sup.getActor("Engine").spriteRenderer.setSprite(PartstypeName[Partstypeid][0]["sprite"]+index+"") }
}




