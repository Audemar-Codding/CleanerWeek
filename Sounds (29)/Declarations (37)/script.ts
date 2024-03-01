// Musics
let music1 = new Sup.Audio.SoundPlayer("Sounds/Musics/Music1",0.5,{loop:true});
let music2 = new Sup.Audio.SoundPlayer("Sounds/Musics/Music2",0.4,{loop:true}); 
let jingleloose1 =  new Sup.Audio.SoundPlayer("Sounds/Musics/JingleLoose1",0.4);
let jingleWin1 =  new Sup.Audio.SoundPlayer("Sounds/Musics/JingleWin1",0.2);

let MusicTab = [music1,music2,jingleloose1,jingleWin1]
let MusicTabMax =[]

MusicTab.forEach((element) => { MusicTabMax.push(element.getVolume()); })


// Sounds
let laser1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/laser1",0.1);
let laser2 = new Sup.Audio.SoundPlayer("Sounds/Sounds/laser2",0.03);
let laser3 = new Sup.Audio.SoundPlayer("Sounds/Sounds/laser3",0.49);
let laser4 = new Sup.Audio.SoundPlayer("Sounds/Sounds/laser4",0.05);
let Bullet1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Bullet1",0.2);
let Bullet2 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Bullet2",0.15);
let Bullet3 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Bullet3",0.15);
let ShotGun1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/ShotGun1",0.25);
let Explosion1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion1",0.1);
let Explosion2 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion2",0.15);
let Explosion3 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion3",0.15);
let Explosion4 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion4",0.15);
let Explosion5 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Explosion5",0.1);
let Hit1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Hit1",0.15);
let Hit2 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Hit2",0.15);
let Shoot1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Shoot1",0.05);

let Button1 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Button1",0.15);
let Button2 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Button2",0.05);
let Button3 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Button2",0.1);
let Button4 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Button2",0.5);
let Button5 = new Sup.Audio.SoundPlayer("Sounds/Sounds/Button3",0.25);

let RollingDice = new Sup.Audio.SoundPlayer("Sounds/Sounds/RollingDice",0.2);

let SoundTab = [laser1,laser2,laser3,Bullet1,Bullet2,Bullet3,ShotGun1,Explosion1,Explosion2,Explosion3,Explosion4,Explosion5,Hit1,Hit2,Shoot1,Button1,Button2,Button3,Button4,Button5,RollingDice];
let SoundTabMax = [];

SoundTab.forEach((element) => { SoundTabMax.push(element.getVolume()); })

  laser1.setPitch(-1)
  laser2.setPitch(-0.9)
  laser3.setPitch(-0.55)
  laser4.setPitch(-1)

  Bullet3.setPitch(-0.70)
  Button1.setPitch(-1)
  Button2.setPitch(-0.25)
  Button3.setPitch(0.25)
  Button4.setPitch(-1)
  Button5.setPitch(-0.15)