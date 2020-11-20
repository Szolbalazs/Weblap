function csinal()
{
    var os=0;
    var szam1=0;
    szam1 = parseFloat(document.getElementById('tart').value);
    var szam2=0;
     szam2 = parseFloat(document.getElementById('log').value);
    var szam3=0;
     szam3 = parseFloat(document.getElementById('kif').value);
    var szam4=0;
     szam4 = parseFloat(document.getElementById('kom').value);
    
    var osszpont= szam1+szam2+szam3+szam4;
    document.getElementById('osszes').innerHTML= osszpont +"pont";
    var szaz=(100*osszpont)/30; document.getElementById('szaz').innerHTML = szaz.toFixed(2) + "%";
    if (szaz>=0 && szaz<25){os=1;}
    if (szaz>=25 && szaz<40){os=2;}
    if (szaz>=40 && szaz<60){os=3;}
    if (szaz>=60&&szaz<80){os=4;}
    if (szaz>=80&&szaz<=100){os=5;}
    document.getElementById('eredmeny').style.visibility = "visible";   
    document.getElementById('os').innerHTML= os;
    return false;
    e.preventDefault();
}