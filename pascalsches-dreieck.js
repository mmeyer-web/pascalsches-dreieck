/*******************************
*  Datei: pascalsches-dreieck.js
*  Author: Markus Meyer
*  Version: 1.0
*  Erstellt: 2019
*******************************/
var i, j;
var anzahlZeilen = 9;
const ZEILE1 = [1];
const ZEILE2 = [1, 1];
var zeilenArray = [ZEILE1, ZEILE2];

function pascalschesDreieck(){

   for(i=2; i<anzahlZeilen; i++){
      let zeile = new Array();
      zeile.push(1);

      for(j=0; j<zeilenArray[i-1].length-1; j++){
         let neueZeile = zeilenArray[i-1][j] + zeilenArray[i-1][j+1];
         zeile.push(neueZeile)
      }

      zeile.push(1);
      zeilenArray.push(zeile);
   }

   for(let k of zeilenArray){     
      document.write(k+"<br>");
   }
}