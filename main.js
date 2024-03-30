const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  
  const inputNum = document.querySelector("#convert");
  
  const usdOutput = document.querySelector('.usd__output');
  
  const eurOutput = document.querySelector('.eur__output');
  
  const gbpOutput = document.querySelector('.gbp__output');
  
  const clearBtn = document.querySelector('.clear');
  
  
  const convertBtn = document.querySelector(".convert__btn");
  
 
  async function coins(convert){
    const res = await fetch(url);
    const data = await res.json();
    const coins = await data;
    
    const USD = parseFloat(coins.bpi.USD.rate.replace(",", ""));
    const EUR = parseFloat(coins.bpi.EUR.rate.replace(",", ""));;
    const GBP = parseFloat(coins.bpi.GBP.rate.replace(",", ""));
    
    const BTCUSD = await USD * convert;
    const BTCEUR = await EUR * convert;
    const BTCGBP = await GBP * convert;
    
    
    usdOutput.value = await BTCUSD.toLocaleString();
    eurOutput.value = await BTCEUR.toLocaleString();
    gbpOutput.value = await BTCGBP.toLocaleString();
    
    
  }
  
  convertBtn.addEventListener("click", ()=>{
    coins(inputNum.value);
  });
  
  clearBtn.addEventListener("click", ()=>{
    inputNum.value = "";
    usdOutput.value = "";
    eurOutput.value = "";
    gbpOutput.value = "";
  });
  
