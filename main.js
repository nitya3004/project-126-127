arabic_kuthu_song="";
kalaavathi_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    arabic_kuthu_song = loadSound("arabic.mp3");
   kalaavathi_song= loadSound("kala.mp3");
}

function draw(){
    image(video,0,0,600,530);
}