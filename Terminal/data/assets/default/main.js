let appList = `
'h.app.calc'    -calculator \n 
'h.app.browser'    -launch browser \n 
'h.app.js'    -exe a js scripts\n 
`;

function calculator(number,type,number2) {
       if (type == "1") {
              echo("the results is : "+(number+number2))
       }
       
       if (type == "2") {
              echo("the results is : "+(number-number2))
       }
       
       if (type == "3") {
              echo("the results is : "+(number*number2))
       }
       
       if (type == "4") {
              echo("the results is : "+(number/number2))
       }

       if (type !== "1" && type !== "2" && type !== "3" && type !== "4") {
              echo("error the type : '"+type+"' is not a number or a function type choices")
       }
}

function scriptsRun(txt) {
       const o = document.createElement("script");
       o.innerText = "try {"+txt+"} catch (e) { echo('ERROR when played the scripts :‹, logs :'+e,'red'); }";
       document.body.appendChild(o);
}

function repeatCount(num) {
       for (var i = 0; i < Number.parseInt(num); i++) {
              echo(i)
              
              if (i >= Number.parseInt(num) - 1) {
                     echo("done","green");
              }
       }
}

function makeBrowser(src) {
       var i = document.createElement("iframe");
       i.src = src;
       i.frameborder = 0;
       i.width=window.innerWidth-50;
       i.height="500";
       document.body.appendChild(i);
       newLine();
       echo("close ?","red").onclick = function () {
              i.src = "null.nihkk";
       }
}