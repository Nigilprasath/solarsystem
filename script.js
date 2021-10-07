'use strict';

const input=document.getElementById('mass-input');
const calculatebtn=document.getElementById('btn');
const output=document.getElementById('mass-output');
const planets=document.getElementById('planet')


const calcweight=async function(){
  const inputText=input.value;

  if(inputText==='' || inputText===null){
    alert('mass field is required');
  }
  else{
      const displayoutput=async function(inputText,planet){
        if(planet==='mercury'){
          return inputText*0.38;
        }
        else if(planet==='venus'){
            return inputText*0.91;
        }
        else if(planet==='earth'){
          return inputText*1;
        }
        else if(planet==='mars'){
          return inputText*0.38;
        }
        else if(planet==='jupiter'){
          return inputText*2.34;
        }
        else if(planet==='saturn'){
          return inputText*1.06;
        }
        else if(planet==='uranus'){
          return inputText*0.92;
        }
        else if(planet==='neptune'){
          return inputText*1.19;
        }

      }
  }
}






calculatebtn.addEventListener('click',calcweight);
planets.addEventListener('change',calcweight);

  