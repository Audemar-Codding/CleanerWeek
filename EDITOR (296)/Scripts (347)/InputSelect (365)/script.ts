class StatSelectBehavior extends Sup.Behavior {
 
  StatText;
  CurrentInput = "";
  
  awake() {
    this.StatText = this.actor.getChildren()[0];

  }

  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {
        this.StatText.textRenderer.setText("?");
         this.CurrentInput ="";
  
        document.addEventListener('keydown', this.SelectStat);
        Sup.Input.lockMouse();
      }
    
    
    
    
  }
  
   SelectStat = (event: KeyboardEvent) =>
  {
    
    if (event.key === "Backspace" && this.CurrentInput.length > -1) {
      this.CurrentInput=  this.CurrentInput.slice(0,this.CurrentInput.length-1);
    }
    
    
     if (/^[0-9.]$/.test(event.key)) {
    this.CurrentInput += event.key;
  } else if (event.key === "Enter") {

    
    if(this.CurrentInput == ""){this.CurrentInput = "1";}
    this.StatText.textRenderer.setText(this.CurrentInput);
    this.CurrentInput = "";
    Sup.Input.unlockMouse();
    document.removeEventListener('keydown', this.SelectStat);
  }
    
    
  }
  
}
Sup.registerBehavior(StatSelectBehavior);

class TextSelectBehavior extends Sup.Behavior {

  CurrentInput = "";
  NumberOfInput = 0;

  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0 && Sup.Input.wasMouseButtonJustPressed(0))
      {
        this.actor.textRenderer.setText("typing...");
         this.CurrentInput ="";
  
        document.addEventListener('keydown', this.SelectText);
        Sup.Input.lockMouse();
      }
    
    
    
    
  }
  
   SelectText = (event: KeyboardEvent) =>
  {
    
    if (event.key === "Backspace" && this.CurrentInput.length > -1) {
      this.CurrentInput=  this.CurrentInput.slice(0,this.CurrentInput.length-1);
      this.NumberOfInput--;
    }
    
    
     if (/^[0-9.a-zA-Z ?]$/.test(event.key)) {
       if(this.NumberOfInput<14)
         {this.CurrentInput += event.key;this.NumberOfInput++;}
       else{ this.CurrentInput += (event.key + "\n");this.NumberOfInput=0}
    
  } else if (event.key === "Enter") {

    this.NumberOfInput = 0;
    CurrentRoadName = this.CurrentInput;
    if(this.CurrentInput == ""){this.CurrentInput = "1";}
    this.actor.textRenderer.setText(this.CurrentInput);
    this.CurrentInput = "";
    Sup.Input.unlockMouse();
    document.removeEventListener('keydown', this.SelectText);
  }
    
    
  }
  
}
Sup.registerBehavior(TextSelectBehavior);