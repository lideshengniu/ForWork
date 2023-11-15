let ary1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let ary2 = ['A', 'B', 'C', 'D'];
//!!!这是要求=>合并后的数组为：['A1', 'A2','A', 'B1', 'B2','B', 'C1', 'C2','C', 'D1', 'D2','D']
/* 
!!!这个不满足因为如下
不能用arr.sort((a,b)=>a.localeCompare(b))
['A','A1', 'A2','B','B1','C', 'B2', 'C1', 'C2','D','D1', 'D2']
*/

/*
!!这个也不满足 
如果是 arr1 =['D1','D2','A1','A2','C1','C2','B1','B2']
       arr2 = ['B','A','D','C',]
       这个用localeCompare 的话整个数组位置都变了
*/
ary2 = ary2.map((item) => item + '珠峰');
let arr = ary1.concat(ary2);
arr = arr
  .sort((a, b) => a.localeComare(b))
  .map((item) => {
    return item.replace('珠峰', '');
  });
console.log(arr);

//!!!这个满足 把每一个字符用大数组的include去判断
/* 
let n = 0
for(let i =0;i<ary2.length;i++){
    let item2 = ary2[i]
    for(let k=0;k<ary1.length;k++){
        let item1 = ary1[k]
        if(item1.includes(item2)){
            =>如果包含就记录一下当前这一项的索引位置(后面还有包含的会重新记录这个值)
            n = k
        }
    }
    ary1.splice(n+1,0,item2)
}

*/
