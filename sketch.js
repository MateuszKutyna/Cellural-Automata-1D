let started = false;
let width,bcondtion,rulse,iterations;
let ca;
let x,y;
let cnv;
let scl;
function setup(){
 
  cnv = createCanvas(600,600);
  
} 

function draw() { 
  

  if(started){
  
    for(let i=0;i<cnv.width/scl;i++){
      if(ca.cells[i]==1){
        fill(0);
        stroke(0);
      }else{
        fill(255);
        stroke(255);
      }
      rect(x,y,scl,scl);
      x+=scl;
    }
    
    ca.generate();
    if(ca.iterations===0)noLoop();
    
    x=0;  
    y+=scl;
    
  }
}

function start(){
  loop();
  background(255);
  x=0;
  y=0;
  
  width=document.getElementById("width").value;
  rulse=document.getElementById("rulse").value;
  iterations=document.getElementById("iterations").value;
  if(width < 0 || iterations <0) {
    alert("Enter a value greater than zero");
    return;
  }
  scl=cnv.width/width;
  
  ca = new CA(parseInt(rulse),parseInt(iterations));
  started?started=false:started=true;
}