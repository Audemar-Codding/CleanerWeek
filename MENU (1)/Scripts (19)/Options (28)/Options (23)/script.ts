class OptionsBehavior extends Sup.Behavior {
hover = false;
active = false;
Interact;

  awake()
  {InfiniteStarts();music1.play();this.Interact = this.actor.getChildren()[0];}
   
  
  
  update() {
    
    if(Rayon.intersectActor(this.Interact,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { 
            Button1.stop(); Button1.play();
           
           if(this.active != true ){optionscreator(); this.active = true}
           else{optionsdestructor(); this.active = false}
         }
        if (this.hover==false)
       {
        this.hover = true
        this.actor.textRenderer.setColor(GREY)
        }
      }
    else
      {
        if(this.hover==true)
          {
            this.hover = false
           this.actor.textRenderer.setColor(WHITE)
          }
        
      }          
          }

}
Sup.registerBehavior(OptionsBehavior);


function optionscreator()
{
  let windows =  new Sup.Actor("OptionBack")
  new Sup.SpriteRenderer(windows,"MENU/Sprites/VerticalWindows")
  windows.setPosition(-440,0,2)
  
  let Optionstext =  new Sup.Actor("OptionText")
  new Sup.TextRenderer(Optionstext,"MUSICS\n\nSOUNDS\n\nCONTROLS","MENU/Menufont",{size: 60, alignment: "right",verticalAlignment: "bottom"})
  Optionstext.setPosition(-430,100,3)
  
  // Nombre et boutons de l'option musics
  let MusicNumber = new Sup.Actor("MusicNumber")
  new Sup.TextRenderer(MusicNumber,MusicV,"MENU/Menufont",{size: 50})
  MusicNumber.setPosition(-360,245,3)
  
  let MusicLeft =  new Sup.Actor("MusicLeft")
  new Sup.SpriteRenderer(MusicLeft,"MENU/Sprites/LEFT")
  MusicLeft.setPosition(-390,245,3)
  MusicLeft.addBehavior(LEFTMUSICBehavior)
 
  let  MusicRight =  new Sup.Actor("MusicRight")
  new Sup.SpriteRenderer(MusicRight,"MENU/Sprites/RIGHT")
  MusicRight.setPosition(-327,245,3)
  MusicRight.addBehavior(RIGHTMUSICBehavior)

  // Nombre et boutons de l'option sounds
  let SoudNumber = new Sup.Actor("SoundNumber")
  new Sup.TextRenderer(SoudNumber,SoundV,"MENU/Menufont",{size: 50})
  SoudNumber.setPosition(-360,185,3)
  
  let  SoundLeft =  new Sup.Actor("SoundLeft")
  new Sup.SpriteRenderer(SoundLeft,"MENU/Sprites/LEFT")
  SoundLeft.setPosition(-390,185,3)
  SoundLeft.addBehavior(LEFTSOUNDBehavior)
  
  let  SoundRight =  new Sup.Actor("SoundRight")
  new Sup.SpriteRenderer(SoundRight,"MENU/Sprites/RIGHT")
  SoundRight.setPosition(-327,185,3)
  SoundRight.addBehavior(RIGHTSOUNDBehavior)
  
  // Le boutton keyboard
  let  KeyBoardBtn =  new Sup.Actor("KeyBoardBtn")
  new Sup.SpriteRenderer(KeyBoardBtn,"MENU/Sprites/Keyboard")
  KeyBoardBtn.setPosition(-358,125,3)
  KeyBoardBtn.addBehavior(KeyBoardBtnBehavior)
  
}

function optionsdestructor()
{
  Sup.getActor("OptionBack").destroy()
  Sup.getActor("OptionText").destroy()
  
   Sup.getActor("MusicNumber").destroy()
   Sup.getActor("MusicLeft").destroy()
   Sup.getActor("MusicRight").destroy()
  
    Sup.getActor("SoundNumber").destroy()
    Sup.getActor("SoundLeft").destroy()
    Sup.getActor("SoundRight").destroy()
  
     Sup.getActor("KeyBoardBtn").destroy()
  
  
}