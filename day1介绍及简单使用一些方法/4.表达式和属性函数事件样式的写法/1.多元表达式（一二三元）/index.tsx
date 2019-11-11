(() => {
 interface Data{
    //  声明属性的数据类型
    name:string,
    num:number
 }
 const data:Data={
     name:'eno',
     num:888
 }
//  构造虚拟DOM
 const template=<div>
     <p>1三元表达式</p>
     {0?data.name:'假的'}
     <p>2.二元表达式</p>
     {data.name+'123'}
     <p>1.一元表达式</p>
     {data.name}
 </div>
//  把虚拟DOM边真实DOM并挂载渲染
const el=document.querySelector('#demo')
ReactDOM.render(template,el)
})()