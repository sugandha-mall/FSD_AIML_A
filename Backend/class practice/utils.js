
function average(num1,num2,num3) {
    return (num1+num2+num3)/3;
    
}
//var a= average(10,20,30);
const avgsquare=(a)=>{
    return Math.sqrt(a);
}

const obj={
    av:average,
    avsquare:avgsquare
};

module.exports=obj;