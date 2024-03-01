// 0.9238795325112867

// Pour la Pause
let ispaused = false;

// Pour la commande selection
let commandstext = ["LEFT","RIGHT","UP","DOWN","Shot","Skill-1","Skill-2","Special"];
let keyispress = false;
var commands = ["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","s","q","d","f"];
let commandid = 0;

// Couleurs
let WHITE = new Sup.Color(16777215);
let shine = new Sup.Color(15132390);
let BLACK = new Sup.Color(65793);
let GREY = new Sup.Color(7303023);
let Dark = new Sup.Color(14277081);
let Orange = new Sup.Color(16362824);
let Green = new Sup.Color(7073108);
let Red = new Sup.Color(16668246);
let Blue = new Sup.Color(4230399);
let Yellow = new Sup.Color(16775936);

// Sélection souris
var Rayon = new Sup.Math.Ray(new Sup.Math.Vector3(0,0,0),new Sup.Math.Vector3(0,0,0));
var Rayonisactive = true; 

// Pour le son
var MusicV = 10;
var SoundV = 10;

// Pour le jeu
let GLOBALspeed = -5;
let GLOBALMoney = 9999;
let Difficulty = 50 // de 0 a 100
let EndGame = false;

// Pour les stars
let PsxStars = -710;
let STempsAttente = 0;
let SLargeur = 6.5;
let SHauteur = 15;

// Pour le Hangar
let buyparts = [[true,false,false,false,false,false,false,false,false],[true,false,false,false,false,false,false,false],[true,false,false,false,false,false,false,false],[true,false,false,false,false]]
// ["This low cost laser are more useful\nfor space barbecue than for fight.\nHe cost nothing but have 0.0025% chance of\nexplode in supernova."]
let Weapons = [{type: "WEAPONS",sprite: "HANGAR/Sprites/Weapons/weapon",stat1: "Dmg",stat2: "As", stat3:"Spr",stat4:"Rt"},{name: "I-shot",1: 20,2: 6,3: 10,4: 100,Des: "Cheap gun powered by AI.",price:"50"},{name: "CoppeShower",1: 10,2: 10,3: 15,4: 40,Des: "Comming directly from the coppers \nmines.",price:"75"},{name: "Future-rule",1: 20,2: 6,3: 5,4: 75,Des: "Shoot lasers ? so cool !",price:"100"},{name: "Royal gatling",1: 10,2: 100,3: 15,4: 50,Des: "For the one who can't aim.",price:"125"},{name: "HugeSlicer",1: 4,2: 1,3: 0,4: 5,Des: "Originaly made for mining very,\nvery tiny planets.",price:"150"},{name: "NowOldNew",1: 15,2: 20,3:15,4: 100,Des: "Shotgun but in space.",price:"100"},{name: "BigDeal",1: 75,2: 6,3: 2,4: 75,Des: "Enorme cannons.",price:"150"},{name: "Void's Whip",1: 20,2: 20,3: 1,4: 50,Des: "Whipe them down.",price:"200"},{name: "Laser gatling",1: 10,2: 2,3: 10,4: 1,Des: "A gatling but even better.",price:"300"}]
let Shells = [{type:"SHELLS",sprite:"HANGAR/Sprites/Shell/shell",stat1:"Hp" ,stat2:"Sh" , stat3:"Ac",stat4:"Ev"},{name: "Sk1",1: 100,2: 50,3: 0,4: 0,Des: "The most used shell in the \nuniverse.",price:"0"},{name: "Naked",1: 25,2: 25,3: 10,4: 20,Des: "Putting this it's like being \nnaked on winter day.",price:"75"},{name: "Sk4",1: 150,2: 50,3: 5,4: 5,Des: "The second and most loved \nshell in the universe.",price:"75"},{name: "Big berta",1: 250,2: 100,3: -2,4: -5,Des: "Not uses for batlleship, it's \nfor Garbage one.",price:"25"},{name: "Long' Cross",1: 125,2: 50,3: 20,4: 5,Des: "Made for ship race.",price:"125"},{name: "PK7-Security",1: 200,2: 100,3: 5,4: 5,Des: "This hull equips the basic \nspace police ships.",price:"200"},{name: "PC-Civilian4",1: 125,2: 125,3: 10,4: 5,Des: "One of the best shell \na civilian can buy.",price:"175"},{name: "FR0",1: 200,2: 200,3: 15,4: 0,Des: "Military secret.",price:"300"}]
let Wings = [{type:"WINGS",sprite:"HANGAR/Sprites/Wings/wing",stat1:"Ev" ,stat2:"Ac" , stat3:"Hp",stat4:"Sh"},{name: "W2K",1: 5,2: 5,3: 0,4: 0,Des: "Made for mass production.",price:"20"},{name: "Eagle P4",1: 15,2: 10,3: -5,4: -15,Des: "very profiled but also very \nfragile.",price:"50"},{name: "P3 Racer",1: 5,2: 15,3: 0,4: 5,Des: "There is racer in the name",price:"75"},{name: "Elephant'",1: 0,2: 5,3: 15,4: 15,Des: "Easy way for win a battle is \nto use wings as a shield.",price:"100"},{name: "Mandible",1: 5,2: 10,3: 10,4: 10,Des: "Copy cat the nature.",price:"100"},{name: "Blade4U",1: 15,2: 15,3: 5,4: 5,Des: "Made for all the sharp pilot !",price:"125"},{name: "Perfect000",1: 10,2: 10,3: 10,4: 10,Des: "Only one version necessary.",price:"250"},{name: "Reverce it",1: 30,2: -10,3: 30,4: -15,Des: "Made with scraps material,\n but the best one.",price:"150"}]
let Engines = [{type:"ENGINES",sprite:"HANGAR/Sprites/Engines/engine",stat1:"Sp" ,stat2:"Ac" , stat3:"Ev" ,stat4:"Hp"},{name: "Move.exe",1: 100,2: 45,3: 0,4: 20,Des: "Typical junk on black market.",price:"50"},{name: "The V8",1: 88,2: 88,3: 8,4: 44,Des: "It use 8 time the fuel",price:"80"},{name: "OverBurst",1: 150,2: 75,3: -10,4: -40,Des: "Use it at your risk.",price:"150"},{name: "Race-IN IV",1: 200,2: 100,3: 20,4: 10,Des: "Only the skillest can handle it.",price:"250"},{name: "MicroDash",1: 125,2: 500,3: 25,4: 5,Des: "Better for space figth than\nspace travels",price:"150"}]

let Partstypeid = 1;
let PartstypeName = [Weapons,Shells,Wings,Engines]
let SHIP = [1,1,1,1,0] // Le ship actuel = 4parts + crew
let CurrentPartid = SHIP[1]
let SHIPSTATS = { Hp: 120,Sh: 50,Sp: 100, Ac: 50,Ev: 5,Dmg: 20,As: 6,Spr: 10,Rt: 100 }

//==>// Pour le Crew
let Piloteid = SHIP[4]
let Pilotes = [{name: "Alone",stat1:"Sp",stat2: "Ev",stat3:"Dmg",Hp: 1, Sh: 1,Sp: 1, Ac: 1,Ev: 1, Dmg: 1,As: 1,Spr: 1,Rt: 1,Des:"Bad idea to travel alone in space.\nEven more when you have one\nplace free of use."},{name: "Void",stat1:"Sh",stat2: "Ac",stat3:"Ev",Hp: 1, Sh: 0.5,Sp: 1, Ac: 1.2,Ev: 1.2, Dmg: 1,As: 1,Spr: 1,Rt: 1,Des:"Void doesn't have a name,\nor even a voice.\n*It* is a legend well know, tales\nspeak of void and its origins but\nin fact we only know two things :\nfirst, it is not from this dimension\nand causes interferences\nwhit electronic devices.\nSecond, no one can catch it.\n"},{name: "Bilie-Boom",stat1:"Dmg",stat2: "Ac",stat3:"Ev",Hp: 1, Sh: 1,Sp: 1, Ac: 0.6,Ev: 0.8, Dmg: 1.5,As: 1,Spr: 1,Rt: 1,Des:"Billie is a really nice girl,\nalthough a little slow.\nShe does not have good reflexes\nbut her accuracy is one of the\nbest among the cleaners.\nHer first job was the explosion of\nincoming asteroids on a fuel'\nextraction orbital platform.\nHer presence distract through,\nshe can't stop humming."},{name: "Litlle-guts",stat1:"Dmg",stat2: "Spr",stat3:"Rt",Hp: 1, Sh: 1,Sp: 1, Ac: 1,Ev: 1, Dmg: 0.6,As: 1,Spr: 1.2,Rt: 0.7,Des:"All start from a silly joke\nand now it become the name of\none of the most famous cleaner\nin the galaxie.\nHe have guts of common size."}]

// Pour Road
let Orientationx = 0
let Orientationy = 0
let Movex = 0
let Movey = 3
let IsShooting = false
let NumberShot = 0
let Shotend = true
let currentRoad = 0

// Pour les saves
if (Sup.Storage.getJSON("currentRoad") != null) // Uniquement si il y a une progression enregistrée
{ currentRoad = Sup.Storage.getJSON("currentRoad") }

//Pour les events
let AsteNumber = 0;
let AsteCLearPts = 0;

// Pour les lvls -320 à 320
let ClearValue = 0; // la valeur des point de clear actuels
let ClearMaxValue = 0; // la valeur aditioné de tout les point possible
let Eventid = 0;


// Pour les Skills
let Timeisslowed = false;
let Timeispaused = false;
let SkillbuttonPress = [false,false,false]
let SKILLSSHIP = [2,3,6] // skills en 1,2 et ab en 3
let FunctionSkills = [PowerUp,SpeedUp,PowerUp,PowerUp,PowerUp,TimePause,TimeSlow]


// Eventtype                                                              //sprite 1: Standard ship shooting round bullets - DMG: 20, Shot: 1.5s
//  1 = Enemies                                                           //sprite 2: Standard ship shooting round bullets - DMG: 25, Shot: 1.8s
// BEHAV: 1 Appear UP AND shoot                                           //sprite 3: Thin ship shooting 1 laser line bullet - DMG: 15, Shot: 1,25s
// BEHAV: 2 Left to Right while shooting                                  //sprite 4: Big ship shooting lasers line bullet fast - DMG: 5, Shot: 1s
// BEHAV: 3 Appear L or R AND shoot                                       //sprite 5: Big Ship shooting Slow bullets - DMG: 40, Shot: 3.5s
// BEHAV: 4 Appear corners AND shoot                                      //sprite 6: thin ship shooting a huge laser then destroying himself - DMG: 1, Shot: permanent
// BEHAV: 5 Kamikaze, rush on player FROM TOP                             //sprite 7: BIG ship with 4 cannon shooting lasers line bullet from 1 random cannon,  DMG: 15, Shot: 1s
// BEHAV: 6 Kamikaze, rush on player FROM LEFT OR RIGHT                   //sprite 8: Very big Ship shooting Drones, Drone DMG: 25,Drones hp: 10, Spawn: 0.5s

// 2 = Astéroide field
// 3 = Scarpsfield
// 4 = singularityStorm


// {Eventtype: 1,Number:2,BEHAV:5,sprite:2,spawnW:500,Nshot:0,EneHp:15,ClearPts:50,PRoadBar:100}
// {Eventtype: 2,Number:100,density:250,ClearPts:10,PRoadBar:100}
// {Eventtype: 3,Number:100,density:250,ClearPts:10,PRoadBar:100}
// {Eventtype: 4,Number:60,density:-500,ClearPts:0,PRoadBar:100}


let ROAD1 = [
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:1,spawnW:500,Nshot:10,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:2,spawnW:500,Nshot:10,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:3,spawnW:500,Nshot:10,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:4,spawnW:10,Nshot:5000,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:5,spawnW:500,Nshot:10,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:6,spawnW:500,Nshot:1,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:1,BEHAV:1,sprite:7,spawnW:500,Nshot:10,EneHp:15,ClearPts:50,PRoadBar:1},
 // {Eventtype: 1,Number:3,BEHAV:1,sprite:8,spawnW:1,Nshot:50,EneHp:150,ClearPts:50,PRoadBar:1},
  
 // Introduction  
 {Eventtype: 2,Number:45,density:100,ClearPts:0.1,PRoadBar:10},
 {Eventtype: 1,Number:4,BEHAV:5,sprite:1,spawnW:1,Nshot:500,EneHp:20,ClearPts:15,PRoadBar:5}, 
 
  
  // ENEMIE LASER PROTECT
  {Eventtype: 2,Number:150,density:250,ClearPts:0.1,PRoadBar:22},
  {Eventtype: 1,Number:4,BEHAV:3,sprite:6,spawnW:3150,Nshot:3,EneHp:150,ClearPts:10,PRoadBar:22.25}, 
  {Eventtype: 2,Number:100,density:250,ClearPts:0.1,PRoadBar:24.5},

  
  // AGRESSION kamikaze
  {Eventtype: 1,Number:5,BEHAV:3,sprite:3,spawnW:1500,Nshot:3,EneHp:15,ClearPts:20,PRoadBar:40},
  {Eventtype: 1,Number:4,BEHAV:5,sprite:2,spawnW:1000,Nshot:0,EneHp:25,ClearPts:20,PRoadBar:41.5},
  {Eventtype: 1,Number:4,BEHAV:6,sprite:2,spawnW:1000,Nshot:0,EneHp:25,ClearPts:20,PRoadBar:44.5}, 

  
  // Agression spam
  {Eventtype: 1,Number:3,BEHAV:1,sprite:7,spawnW:250,Nshot:4,EneHp:35,ClearPts:10,PRoadBar:54},
  {Eventtype: 1,Number:3,BEHAV:3,sprite:7,spawnW:250,Nshot:3,EneHp:35,ClearPts:10,PRoadBar:54},
  {Eventtype: 1,Number:2,BEHAV:4,sprite:7,spawnW:250,Nshot:4,EneHp:35,ClearPts:10,PRoadBar:54}, 
  
    {Eventtype: 1,Number:3,BEHAV:1,sprite:7,spawnW:250,Nshot:4,EneHp:35,ClearPts:10,PRoadBar:56},
  {Eventtype: 1,Number:3,BEHAV:3,sprite:7,spawnW:250,Nshot:3,EneHp:35,ClearPts:10,PRoadBar:56},
  {Eventtype: 1,Number:2,BEHAV:4,sprite:7,spawnW:250,Nshot:4,EneHp:35,ClearPts:10,PRoadBar:56}, 

  // Drone storm
  {Eventtype: 4,Number:6,density:-250,ClearPts:0,PRoadBar:66},
  {Eventtype: 1,Number:2,BEHAV:4,sprite:8,spawnW:250,Nshot:13,EneHp:500,ClearPts:50,PRoadBar:67.5},
  {Eventtype: 1,Number:1,BEHAV:1,sprite:8,spawnW:250,Nshot:13,EneHp:500,ClearPts:50,PRoadBar:69}, 
  
    
  //Scrap attack
  {Eventtype: 3,Number:50,density:50,ClearPts:0.1,PRoadBar:80},
  {Eventtype: 3,Number:50,density:50,ClearPts:0.1,PRoadBar:80},
  {Eventtype: 1,Number:10,BEHAV:5,sprite:2,spawnW:500,Nshot:0,EneHp:35,ClearPts:50,PRoadBar:80.5},
  
  
  //Scraps cross and astéroid
  {Eventtype: 1,Number:4,BEHAV:1,sprite:5,spawnW:250,Nshot:1,EneHp:50,ClearPts:10,PRoadBar:88},
  {Eventtype: 1,Number:4,BEHAV:3,sprite:5,spawnW:250,Nshot:2,EneHp:50,ClearPts:10,PRoadBar:88},
  {Eventtype: 3,Number:50,density:500,ClearPts:0.1,PRoadBar:95},
  {Eventtype: 3,Number:50,density:500,ClearPts:0.1,PRoadBar:95}, 
  
  
  // Scary
  {Eventtype: 2,Number:300,density:400,ClearPts:0,PRoadBar:99}
 
]

let ROADRandom = [];
let ROADLEVELS = [ROAD1];

// Level Editor
let LVLEditorEventid = 0;

let BehaviorPictures = ["Behavior1","Behavior2","Behavior3","Behavior4","Behavior5","Behavior6"];
let BehaviorDescription = ["Appear up and shoot","One side to other while shooting","Appear left or rigth and shoot","Appear corners and shoot","Kamikaze, rush on player from\ntop", "Kamikaze, rush on player from\nleft or rigth"]
let currentBehaviorid = 0;


let EnemiePictures = ["Enemie1","Enemie2","Enemie3","Enemie4","Enemie5","Enemie6","Enemie7","Enemie8"];
let EnemieStats = ["Dmg: 20, Shot: 1.5s","Dmg: 25, Shot: 1.8s","Dmg: 15, Shot: 1,25s","Dmg: 5, Shot: 1s","Dmg: 40, Shot: 3.5s","Dmg: 1, Shot: permanent","Dmg: 15, Shot: 1s","Dmg: 25, hp: 10, Shot: 0.5s"]
let EnemieDescription = ["Standard ship shooting round\nbullets","Standard ship shooting also\nround bullets","Thin ship shooting 1 laser\nline bullet","Big ship shooting lasers line\nbullet fast","Big Ship shooting Slow bullets","Thin ship shooting a huge\nlaser then exploding","Big ship with 4 cannon shooting\nlasers line bullet from\n1 random cannon","Very big Ship shooting Drones"]
let currentEnemeieid = 0;


let ObstaclePictures = ["Aste/Aste1","Scraps/Scraps07","Singularites/Sing01"];
let ObstacleName = ["Asteroids field","Scraps field","Singularity storm"];
let ObstacleDescription = ["Asteroids comming from the top","Scraps comming from\nthe corners","Singularity appear randomly\nand dealing dmg over time\nto everything"];
let currentObstacleid = 0;

let CurrentRoadid = -1;
let CurrentROAD = [];
let CurrentRoadName = "Default Title";
let IcoSelected= [];
IcoSelected[0] = false;


//item.unshift(CurrentRoadName);





