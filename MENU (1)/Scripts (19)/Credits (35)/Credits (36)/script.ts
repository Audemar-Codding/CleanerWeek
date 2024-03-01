class CreditsBehavior extends Sup.Behavior {
hover = false;
active = false;
Interact;
  
    awake() {
    this.Interact = this.actor.getChildren()[0];

  }
  
  
  update() {
    
    if(Rayon.intersectActor(this.Interact,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button1.stop(); Button1.play();
           if(this.active != true ){créditscreator(); this.active = true}
           else{creditsdestructor(); this.active = false}
         }
        if (this.hover==false)
       {
        this.hover = true
        this.actor.textRenderer.setColor(GREY);
        }
      }
    else
      {
        if(this.hover==true)
          {
            this.hover = false
           this.actor.textRenderer.setColor(WHITE);
          }
        
      }
         
          }

}
Sup.registerBehavior(CreditsBehavior);

function créditscreator()
{ 

  
  let windows =  new Sup.Actor("CreditsBack")
  new Sup.SpriteRenderer(windows,"MENU/Sprites/VerticalWindows");
  windows.setPosition(440,0,2)
  
  let Credittext =  new Sup.Actor("Credittext")
  new Sup.TextRenderer(Credittext,"Code:\nAudemar Romain\n\nVisuals:\nAudemar Romain, Sparkin lab\nGame-icons.net\nKenney Space Shooter\nKenney UI Pack\n\nMusics:\nthrough space by Maxstack\nOpengameart music\n\nSounds:\nLittleRobotSoundFactory\npixabay ","MENU/Menufont",{size: 38.5, verticalAlignment: "Bottom"})
  Credittext.setPosition(440,100,3)
}

function creditsdestructor()
{
  Sup.getActor("CreditsBack").destroy()
  Sup.getActor("Credittext").destroy()
}

