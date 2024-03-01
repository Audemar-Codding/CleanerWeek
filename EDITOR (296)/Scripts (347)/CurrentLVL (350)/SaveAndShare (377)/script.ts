

function copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
 
 
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

pasteFromClipboard()
function pasteFromClipboard() {
document.addEventListener("paste", (e: ClipboardEvent) => {
  e.preventDefault();
  let paste = (e.clipboardData).getData("text");
  
  ImportLVL(JSON.parse(paste));
    
});
  

  


  
  }

function TriggerPaste()
{
    
  let input = document.createElement("INPUT");
  document.body.appendChild(input);
  input.focus();
  
  document.execCommand('paste');
  input.remove();
  
}



class ShareBehavior extends Sup.Behavior {
hover = false;

  
  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button4.stop();Button4.play();  
           let info = Sup.getActor("ImportExportInfo");
           info.textRenderer.setText("Copied");
           OpacityAnimationText(info, 25);
           
           CurrentROAD.unshift(CurrentRoadName);
           copyToClipboard(JSON.stringify(CurrentROAD));
           CurrentROAD.shift(); }
        
        if (this.hover==false)
       { this.hover = true ; this.actor.spriteRenderer.setColor(GREY) }


}else{
   if (this.hover==true)
       { this.hover = false ;  this.actor.spriteRenderer.setColor(WHITE) }
}
    
  }
}
Sup.registerBehavior(ShareBehavior);

class ImportBehavior extends Sup.Behavior {
hover = false;

  
  update() {
    
    if(Rayon.intersectActor(this.actor,false).length > 0)
      {
         if(Sup.Input.wasMouseButtonJustPressed(0))
         { Button4.stop();Button4.play();  
           let info = Sup.getActor("ImportExportInfo");
           info.textRenderer.setText("Imported");
           OpacityAnimationText(info, 25);
           
           CleanCurrentRoad()
           TriggerPaste();
          
           

         }
        
        if (this.hover==false)
       { this.hover = true ; this.actor.spriteRenderer.setColor(GREY) }


}else{
   if (this.hover==true)
       { this.hover = false ;  this.actor.spriteRenderer.setColor(WHITE) }
}
    
  }
}
Sup.registerBehavior(ImportBehavior);

function ImportLVL(LVL)
{
  

CurrentRoadName = LVL[0];
   Sup.getActor("Title").textRenderer.setText(CurrentRoadName);
LVL.shift();
CurrentROAD = LVL;
  
  
  
  let Posy;
  let index = -1;
  let ActorRoad = Sup.getActor("CurrentROAD");
  
  LVL.forEach( function(element){
  
  index++;
    
    
  
     
// Création de l'icone
   
    let actor = new Sup.Actor("NEvents"+index)
    new Sup.SpriteRenderer(actor,"ROAD/Sprites/HUD/IcoEvent")
    
    actor.setParent(ActorRoad);
    actor.setLocalScale(2,2,1);
    
     if(index %2==0)
     {Posy=-205}else{Posy=-175}
   
     actor.setPosition((1120*(element["PRoadBar"]/100)-560),Posy,1) 
    
    actor[0] = index;
    
      Sup.log(CurrentROAD);
    
    actor.addBehavior(IconsEventBehavior);

});
  
  
   
  
}

function CleanCurrentRoad()
{
  let CurrentRoad = Sup.getActor("CurrentROAD");
  
  
  
 CurrentRoad.getChildren().slice(1).forEach((element) => {
   
   element.destroy();
});
  
  
  

  
}
