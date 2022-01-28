function getSum(num1:number, num2:number):number {
  return num1 + num2;
}

let mySum = function(num1:any, num2:any):number {
  if(typeof num1 == 'string')
    num1 = parseInt(num1);
  if(typeof num2 == 'string')
    num2 = parseInt(num2);
  return num1 + num2
}

function getName(firstname:string, lastname: string): string {
  return `${firstname} ${lastname}`
}

function myVoid(): void{
  return;
}

console.log(getName('Evandro','Types'))