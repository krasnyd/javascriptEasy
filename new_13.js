function zaplatit_vybrane()
{
  console.log(pole);
  let cislo = document.getElementById("polozka").value
  if(cislo <= 0){
    alert("Nelze zaplatit záporné nebo nulove polozky")
  }else{
    pocet_polozek=1;
    document.getElementById("utrata").innerHTML="";
    if (cislo > -1) { // only splice array when item is found
    pole.splice(cislo-1, 1); // 2nd parameter means remove one item only
    console.log(pole);
    for (let i = 0; i < pole.length; i++) {
    //text += 
    document.getElementById("utrata").innerHTML+=pocet_polozek + ". " +pole[i] + "<br>";
    pocet_polozek++;
}
}
  }
}















const pole = [];

let cena = 0;
let pocet_polozek = 1;
let first = true;
const pivo = "pivo";
const bramburky = "brambůrky";
const rum = "rum";
const smazak = "smažák";

function zasednout()
{
  let objednavka = prompt("Co si dáš draku?");
  let objednavka_mala = objednavka.toLowerCase();
  if(objednavka_mala==pivo.toLowerCase() || objednavka_mala==rum.toLowerCase() || objednavka_mala==bramburky.toLowerCase() || objednavka_mala==smazak.toLowerCase())
      {
        //console.log(objednavka_mala);
        pole.push(objednavka_mala);
        if(first == true){
          document.getElementById("utrata").innerHTML=pocet_polozek + ". " + objednavka_mala + "<br>";
          first = false;
          pocet_polozek++;
          //console.log("prvni");
        }else{
          document.getElementById("utrata").innerHTML+=pocet_polozek + ". " + objednavka_mala + "<br>";
          pocet_polozek++;
          console.log("druhy");
        }
        
   if(objednavka_mala==pivo.toLowerCase()){
    cena = cena + 45;
  }else if(objednavka_mala==rum.toLowerCase()){
    cena = cena+ 50;
  }else if(objednavka_mala==bramburky.toLowerCase()){
    cena = cena + 20;
  }else{
    cena = cena + 110;
  }
  document.getElementById("vase_utrata").value=cena;
        
      }else if(objednavka_mala == ""){
        alert("Co eee? Mluv pořádně kámo");
      }else{
        alert("To nemám v nabídce");
      }

  console.log(cena);
  zasednout();
}

function odejit()
{
  //console.log(pole.length)
  if(cena==0){
    alert("Měj se");
  }else{
    alert("Hele jeste nemas zaplaceno");
  }
  document.getElementById("vase_utrata").value=cena;
}

function zaplatit_vybrane()
{
  console.log(pole);
  let cislo = document.getElementById("polozka").value
  if(cislo <= 0){
    alert("Nelze zaplatit záporné nebo nulove polozky")
  }else{
    pocet_polozek=1;
    document.getElementById("utrata").innerHTML="";
    if (cislo > -1) { // only splice array when item is found
    pole.splice(cislo-1, 1); // 2nd parameter means remove one item only
    console.log(pole);
    for (let i = 0; i < pole.length; i++) {
    //text += 
    document.getElementById("utrata").innerHTML+=pocet_polozek + ". " +pole[i] + "<br>";
    pocet_polozek++;
}
}
  }
}

function zaplatit_vsechno()
{
  alert("Měj se zabijáku");
  //pole = [];
  document.getElementById("utrata").innerHTML=" ";
  cena = 0;
  pocet_polozek = 1;
  document.getElementById("vase_utrata").value=cena;
}