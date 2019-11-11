// 一保存就会生成js文件
(() => {
const num:number=1;
const bool:boolean=true;
const arr:number[]=[1,2,3,4]
const arr2:string[]=['1','2']
const arr3:[string,number,boolean|null|undefined]=['1',2,true]
const fn=(num1:number,num2:number):string=>{
    return num1+num2+'1223'
}
fn(1,2)
})();