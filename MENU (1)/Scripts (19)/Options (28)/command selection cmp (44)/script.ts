class KeyBoardBtnBehavior extends Sup.Behavior {
  hover=false;
  active=false;
  update() {
   if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0) && Rayonisactive == true)
         { 
           if(this.active != true ){ this.active = true; this.actor.spriteRenderer.setAnimation("On");Selectcommands();document.addEventListener('keydown', keyboardselect);commands= ["","","","",""] }
           else{this.active = false}
         }
        if (this.hover==false)
       {
        this.hover = true
        this.actor.spriteRenderer.setAnimation("On")
        }
      }
    else
      {
        if(this.hover==true)
          {
            this.hover = false
            if (this.active==false) {this.actor.spriteRenderer.setAnimation("Off")}
           
          }
        
      }       
  }
}
Sup.registerBehavior(KeyBoardBtnBehavior);

function Selectcommands()
{
  Rayonisactive = false;
  Sup.Input.lockMouse();
  
  let back = new Sup.Actor("backcommand")
  new Sup.SpriteRenderer(back,"MENU/Sprites/Commandwindows")
  back.setPosition(-440,47,4)
  
  
  let text = new Sup.Actor("textofcommand",back)
  new Sup.TextRenderer(text,"PRESS LEFT","MENU/Menufont",{size: 60})
  text.setPosition(-440,47,5)
  text.addBehavior(SelectcommandsBehavior);  
}

function Selectcommandsdestructor()
{
  Sup.getActor("backcommand").destroy()

  Rayonisactive = true;
   Sup.Input.unlockMouse();
    document.removeEventListener('keydown', keyboardselect);
}

function keyboardselect(event: KeyboardEvent)
{
  if(commands[0] != event.key && commands[1] != event.key && commands[2] != event.key && commands[3] != event.key && commands[4] != event.key && commands[5] != event.key && commands[6] != event.key) 
  {
    commands[commandid] = event.key 
    commandid++
  }

}

class SelectcommandsBehavior extends Sup.Behavior {
id = -1
  update()
  {
    
        if(this.id != commandid)
      {this.id = commandid; this.actor.textRenderer.setText("PRESS " + commandstext[commandid])}
    
    if(commandid > 7 )  
      {commandid = 0; Selectcommandsdestructor(); Sup.getActor("KeyBoardBtn").getBehavior(KeyBoardBtnBehavior).active=false}

      
  }
}
Sup.registerBehavior(SelectcommandsBehavior);

