function sum(num1,num2) {
    return num1+num2;
    
}
const multiply=(num1,num2)=>{
    return num1*num2;
}

const obj={
    sum:sum,
    multiply:multiply
};

module.exports=obj;