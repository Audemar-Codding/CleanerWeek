function OpacityAnimationText(actor, Time: number)
{
  let opacity = -0.1;
  let modif = 0.1;
  let i = 0;
  Opacity();
  
function Opacity()
  {
    i++;
    opacity += modif;
    
    
    actor.textRenderer.setOpacity(opacity);
    
    if(opacity >= 1)
      { modif = -0.1;}
    
        if( i < 23)
      { Sup.setTimeout(Time,Opacity)}
    
  }
  
  
  
  
}