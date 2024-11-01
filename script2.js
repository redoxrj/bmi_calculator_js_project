const form =document.querySelector('form');
const body = document.querySelector('body');

const result = document.querySelector('#result');
const resultM = document.querySelector('#result-m');
console.log(form);
console.log(result);

form.addEventListener('submit',(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    e.preventDefault()

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    console.log(height);
    console.log(isNaN(height));
    

    if(height=='' || isNaN(height)  ){
        result.innerHTML =  `<span>Please Enter Valid Height: ${height}</span>` 
        resultM.innerHTML =`<span></span>`

console.log(result);


    }
    else if(weight=='' || isNaN(weight)  ){
        result.innerHTML =  `<span>Please Enter Valid weight: ${weight}</span>`
console.log(result);
resultM.innerHTML =`<span></span>`



    }
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2);
        result.innerHTML =`<span>${bmi}</span>`
     console.log(result);
     if(bmi==2){
        resultM.innerHTML =`<span>| OkWeight</span>`
     
     }
     else if(bmi<2){
        resultM.innerHTML =`<span>| UnderWeight</span>`


     }
     else{
        resultM.innerHTML =`<span>| overWeight</span>`


     }



    }
    
    

})