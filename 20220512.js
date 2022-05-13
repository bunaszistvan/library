let konyvek = [
    {
    nev:"Ötperces Novellák",
    kiado:"Libri",
    ar:"4990",
},
{
    nev:"Életem: Mike Tyson",
    kiado:"Libri",
    ar:"4990",
},
{
    nev:"Muhammad Ali: Mint ember",
    kiado:"Libri",
    ar:"4990",
},
];

const ide = document.getElementById("ide");
const btn1 = document.getElementById("btnkilistaz");

btn1.addEventListener("click", kiir)
function kiir(){
    let ki = document.getElementById("ki");
    ki.innerHTML = `<table><td>Név</td><td>Kor</td><td>Osztály</td></table>`
    let tablazat = document.createElement("table");
    for(let i=0; i<konyvek.length; i++){
        let adat = konyvek[i];

        let sor = document.createElement("tr");
        let cella = document.createElement("td");
        cella.innerHTML=adat.nev;
        sor.appendChild(cella);
        cella = document.createElement("td");
        cella.innerHTML = adat.kiado;
        sor.appendChild(cella);
        cella = document.createElement("td");
        cella.innerHTML = adat.ar;
        sor.appendChild(cella);
        tablazat.appendChild(sor);

    }
    ki.appendChild(tablazat);
};
let btn2 = document.getElementById("btnbekuld");
btn2.addEventListener("click", bekuld);

function Konyv(nev, kiado, ar){
    this.nev = nev;
    this.kiado = kiado;
    this.ar = ar;
};
function feltoltes(){
    window.alert("Sikeres feltöltés");
}
function bekuld(){
    let nev = document.getElementById("floatingName").value;
    let kiado = document.getElementById("floatingAutor").value;
    let ar = document.getElementById("floatingPrice").value;

    let konyv = new Konyv(nev, kiado, ar);
    if(nev == "" || kiado==""){
        window.alert("Valamelyik értéket üresen hagyta, kérem javítsa ! ");
    }
    else{
    konyvek.push(konyv);
    feltoltes();
    }
    kiir();

};
