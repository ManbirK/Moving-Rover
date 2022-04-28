rover_x = 400;
rover_y = 400;

rover_width = 120;
rover_height = 110;

rover_img = "rover.png";
background_img = "mars.jpg";

canvas = document.getElementById("rover");
ctx = canvas.getContext('2d');

function mars(){
 // <img src = ""> frame with image in it 

   background_tag = new Image();
   background_tag.onload = upload_background;
   background_tag.src = background_img;

   rover_tag = new Image();
   rover_tag.onload = upload_rover;
   rover_tag.src = rover_img;
   
}

function upload_background(){

    ctx.drawImage(background_tag, 0,0,canvas.width, canvas.height );

}

function upload_rover(){

    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height);
}