function spojnicovy(clear = true) {
  graf_select = 0;
  let obsah=document.getElementById("platno").getContext("2d");
  let x=0;
  let x2=40;

  let newX = 0;
  let newY = 400;
  if (clear) obsah.clearRect(0,0,600,400);
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

function sloupcovy(clear = true) {
  graf_select = 1;
  let obsah = document.getElementById("platno").getContext("2d");
  let x = 10;
  if (clear) obsah.clearRect(0,0,600,400);
  max_min_souhrn();
  for (let i = 0; i < hodnoty.length; i++) {
    if (hodnoty[i].smazano) continue;
    if (max === hodnoty[i].value) {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "green";
      obsah.strokeStyle = "black";
      obsah.fill();
      obsah.stroke();
    } else if (min === hodnoty[i].value) {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "red";
      obsah.strokeStyle = "black";
      obsah.stroke();
      obsah.fill();
    } else {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "yellow";
      obsah.strokeStyle = "black";
      obsah.stroke();
      obsah.fill();
    }
    x += 41;
  }
}

function prolnuty() {
  graf_select = 2;
  sloupcovy(false);
  spojnicovy(false);
}
