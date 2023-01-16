function spojnicovy() {
  graf_select = 0;
  let obsah=document.getElementById("platno").getContext("2d");
  let x=0;
  let x2=40;

  let newX = 0;
  let newY = 400;
  obsah.clearRect(0,0,600,400);
  for(let i=0;i<hodnoty.length;i++)
  {
    obsah.beginPath();
    obsah.moveTo(newX, newY);
    let offset = 400-hodnoty[i].value
    obsah.lineTo(x2,offset);
    obsah.moveTo(x,offset);
   
    obsah.strokeStyle="black";
    obsah.stroke();
    
    if(hodnoty[i].value==max)
    {
      obsah.beginPath();
      obsah.moveTo(x2,offset);
      obsah.arc(x2,offset,4,0,2*Math.PI);
      obsah.fillStyle="green";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    else if(hodnoty[i].value==min)
    {
      obsah.beginPath();
      obsah.moveTo(x2,offset);
      obsah.arc(x2,offset,4,0,2*Math.PI);
      obsah.fillStyle="red";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    else
    {
      obsah.beginPath();
      obsah.moveTo(x2,offset);
      obsah.arc(x2,offset,4,0,2*Math.PI);
      obsah.fillStyle="yellow";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    newX = x2;
    newY = offset;
    x+=40;
    x2+=40;
  }
}
