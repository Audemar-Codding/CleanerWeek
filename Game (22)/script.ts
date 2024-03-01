document.addEventListener("webkitvisibilitychange", OUT, false);


function OUT() // ce qui se passe quand le jeu n'est pas sélectioner
{ if (document.hidden) {ispaused = true} else {ispaused = false}  outPAUSE() }

var Speedpause;

function outPAUSE() // se qui se passe quand le jeu est en pause ou unpause
{
  if (ispaused == true) // on met tout en pause
    {
      Speedpause = GLOBALspeed
      GLOBALspeed = 0
      music1.pause()
    }
  else // on reprend tout
    {
      GLOBALspeed = Speedpause
      music1.play();
      InfiniteStarts()
      if(AsteNumber!=0)
        {AstéroidsField(AsteNumber,ROADLEVELS[currentRoad][Eventid]["density"],AsteCLearPts)}
      
      // Il faut aussi reporendre le spaw pour tout le reste !
      
    }
}

class GameBehavior extends Sup.Behavior {

  update() {
    
    if (Rayonisactive == true) {Rayon.setFromCamera(this.actor.camera, Sup.Input.getMousePosition());}
        
// if(Sup.Input.wasKeyJustPressed("SPACE") == true)   
//{ Eventid=0; EnemiesSpawnEvent(ROADLEVELS[currentRoad][Eventid]["ENumber"],ROADLEVELS[currentRoad][Eventid]["BEHAV"],ROADLEVELS[currentRoad][Eventid]["sprite"],ROADLEVELS[currentRoad][Eventid]["spawnW"],ROADLEVELS[currentRoad][Eventid]["EneHp"])     }
    
// if(Sup.Input.wasKeyJustPressed("M") == true)   { Eventid=1;  AsteNumber = ROADLEVELS[currentRoad][Eventid]["ANumber"] ;AstéroidsField(AsteNumber,ROADLEVELS[currentRoad][Eventid]["density"]) }
    
  }
}
Sup.registerBehavior(GameBehavior);

  
  