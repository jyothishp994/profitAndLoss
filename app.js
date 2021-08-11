
buypriceVar=document.querySelector('#buyprice');
currentpriceVar=document.querySelector('#currentprice');
qtyVar=document.querySelector('#qty')

buttoncheckVar=document.querySelector('#buttoncheck');
buttoncheckVar.addEventListener("click",CheckPnL)

function CheckPnL()
{
if((buypriceVar.value!='')&&(currentpriceVar.value!='')&&(qtyVar.value!='')) 
{
console.log("clicked");
pnl=(currentpriceVar.value-buypriceVar.value)*qtyVar.value;
console.log(pnl);
perc=(currentpriceVar.value-buypriceVar.value)*100/buypriceVar.value
console.log(perc);
if(pnl>0)
{
    showOutputMsg="Hurray..You made a profit of "+ pnl + "Rs and your Portfolio is increased by " + Math.round(perc * 100) / 100 +"%"
    backgroundimageVar="url('./images/backing-you-get-yours.gif')";
    setGif();
}
else if(pnl<0)
{
    showOutputMsg="Ooops..You made a loss  of "+ Math.abs(pnl) + "Rs and your Porfolio is decreased by " + Math.round(perc * 100) / 100 +"%"
    backgroundimageVar="url('./images/cry-tears.gif')";
    setGif();
}
}
else
{
    showOutputMsg="Please enter all fields";
}
displayOutput()
}

function displayOutput(){
    document.querySelector('.display').innerHTML = showOutputMsg;
}

function setGif()
{
    document.body.style.backgroundImage =backgroundimageVar;
}

