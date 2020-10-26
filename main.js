var bubble=document.getElementById("bubble");

var x=0,y=0;

var xSpeed=8,ySpeed=2;

var w=document.documentElement.clientWidth+100,h=document.body.clientHeight+100;

function floatimg(){

if(x<0||x>w) xSpeed=-xSpeed;
if(y<0||y>h) ySpeed=-ySpeed;
x+=xSpeed;
y+=ySpeed;
setTimeout("floatimg()",1000);
var n=bubble.style.top=Math.round(Math.random()*h)+"px";
var m=bubble.style.left=Math.round(Math.random()*w)+"px";
}
floatimg();


function bubble_next() {
    var img1 = "/bubble.gif";
    var img2 = "/bubble_broken.gif";    
    // var img2 = "./test.jpg";
    
    var imgElement = document.getElementById('bubble');

    if (imgElement.src == img1){
        imgElement.src = img2
    } else {
        imgElement.src = img1
    };

    // imgElement.src = (imgElement.src === img1)? img2 : img1;
 }