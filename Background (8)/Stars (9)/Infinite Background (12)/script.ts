let startid = 0;


function InfiniteStarts()
{
  if(Timeispaused==false)
 { startid++;
  
// création de l'acteurs stars
 
  let actor = new Sup.Actor("Stars"+startid+"");
    
// Atribution d'un sprite aléatoire d'étoile

  let Nsprite = Sup.Math.Random.integer(1,3);
  new Sup.SpriteRenderer(actor, "Background/Stars/Stars0"+Nsprite+"")
    
// Chaque acteur suis le comportement de supressionstars
 
  actor.addBehavior(supressionstars);
  
// Positionement aléatoire sur x et hors ecran sur y
  actor.setPosition(PsxStars,340,0);
  
// Attribution d'un arcadebody2D 

  new Sup.ArcadePhysics2D.Body(actor, Sup.ArcadePhysics2D.BodyType.Box, {movable : true, width: 1,  height: 1,  offset: { x: 0, y: 0, }, bounce: { x: 0, y: 0, }});
  
  
// Calcul du temps d'attente minimal
     let Distance = -1 * GLOBALspeed * 30 + STempsAttente  ;
     let Sx = Distance / SHauteur; 
      
  // Récupération d'un temps d'attente aléatoire
      let Sxmax = Sx*2;
      STempsAttente = Sup.Math.Random.integer(2000/Sx + 2000 + GLOBALspeed*5 , 2500/Sxmax + 4000 + GLOBALspeed*5);
 
  if(Timeisslowed==false){actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.16)}
else{actor.arcadeBody2D.setVelocity(0,GLOBALspeed*0.08)} 
 
// Positionement aléatoire des acteurs en fonction de la largeur du précedent
 
  
  if (Nsprite == 1 || Nsprite == 3 )
  {SLargeur = 6.5; SHauteur = 15;}
  if (Nsprite == 2)
  {SLargeur = 9; SHauteur = 21;}
  
      PsxStars = Sup.Math.Random.float(-640 + SLargeur, 640 - SLargeur);  

  
     // Creation d'une autre étoile si pas en pause
     if (GLOBALspeed != 0 && ispaused == false)  
     { if(Timeisslowed==true){STempsAttente= STempsAttente*2}
      
       Sup.setTimeout(STempsAttente,InfiniteStarts)}}
  else{Sup.setTimeout(4005,InfiniteStarts)}
  
}