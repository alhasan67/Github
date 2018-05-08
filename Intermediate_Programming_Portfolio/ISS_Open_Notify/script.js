let spaceData;
let globeImg;
let issImg;
//let backgroundImg

let long = dataReceived.longitude;
let lat  = dataReceived.latitude;

function preload(){
    //backgroundImg = loadImage("images/wallpaper.jpg")
   globeImg = loadImage("images/globe.png");
   issImg = loadImage("images/iss.png");
    
}

function setup(){
    createCanvas(2000,1112);
    loadJSON("http://api.open-notify.org/iss-now.json", dataReceived, 'jsonp');
    imageMode(CENTER);
    
}

function dataReceived(stuff){
   background(255);
   spaceData = stuff;
    //image(backgroundImg)
   image(globeImg,width/2,height/2); 
        
    if (spaceData){  
      
        lat = map(spaceData.iss_position.latitude, -180, 180, 0, width);
        long = map(spaceData.iss_position.longitude, -90, 90, 0, height); 
        console.log(lat);
        console.log(long);       
        image(issImg, lat, long);       
    }
}
