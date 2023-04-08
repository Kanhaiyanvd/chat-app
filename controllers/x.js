// // pattern
// let a=[1,2,2];
// function pattern(a){
//    a = a.sort();
//    let count=0;
//    //console.log(a)
//    for(let i=0;i<a.length;i++){
//        if(a[i]==a[i+1]){
//          a[i+1]=a[i+1]+1;
//          count++
//        }
//    } return count
// }
// console.log(pattern(a))



// let s = 'AZ';
// let n=s.length;
// for(let i=0;i<n;i++){
//    let c= s.charCodeAt(i)
//    console.log(c)
// }AZ- 65-90, 97-122

// let s='UsA';
// for(let i=0;i<s.length;i++){
//    if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
//       console.log(true)
//    } else console.log(false)
// } 
// if(s.charCodeAt()>=65 && s.charCodeAt()<=90){
//    console.log(true)
// }


// // max in 2d array

// function findMax(a){
// let max =0
//  for(let i=0;i<a.length;i++){
//    for(let j=0;j<a[i].length;j++){
//     if(max<a[i][j]){
//       max=a[i][j]
//     } 
//    } 
//  } return max 
// }
// let a=[[5,4,7,2,6],[9,-7,8]];
// console.log(findMax(a))

// const s='usa';
// for(let i=0;i<s.length;i++){
//    let c= s.charCodeAt(i)
//    console.log(c)
// }
// //console.log(c)

// function topper(n){
//     n=a.length;
//     let rightMax = new Array(n);
//     rightMax[n-1]= a[n-1]
//     for(let i=n-2;i>=0;i--){
//       rightMax[i] = Math.max(a[i],rightMax[i+1])
//     } //console.log(rightMax)
//     let x=''
//     for(let i=0;i<rightMax.length;i++){
//       if(rightMax[i]!=rightMax[i+1]){
//         if(x.length>0) x+=' '
//         x+=rightMax[i]
//       } 
//     } return x
    
//   }
//   //let a=[16,17,4,3,5,2];
//   let a=[1,2,3,4,0]
//   console.log(topper(a))

// function checkPass(s){
//     if(s=s.toUpperCase(0)){
//         return false
//     }  else return true
// }
// let s='Usa';
// console.log(checkPass(s))
// s.toUpperCase
// s.toUpperCase


// function badnumber(n){
//     console.log(n)
//    let r;
//    let sum=0;
//    while(n>0){
//     r=n%10;
//     //console.log(r);
//     n=parseInt(n/10)
//      sum = sum+r; 
//    } 
//    console.log(n)
//    if(n%sum==0){
//     console.log('bad')
//    } else console.log('not bad')
// }
// let n=11
// console.log(n)
// badnumber(n)

// function getsharpees(n) {
//     let digitSum = 0;
//     let temp = n;
//     while (temp > 0) {
//       digitSum += temp % 10;
//       temp = Math.floor(temp / 10);
//     }
//     return digitSum%5=== 0;
//   }
  
//   function sharpees(n) {
//     let sharpnee = [];
//     let i = 1;
//     while (sharpnee.length < n) {
//       if (getsharpees(i)) {
//         sharpnee.push(i);
//       }
//       i++;
//     }
//     return sharpnee;
//   }
//   console.log(sharpees(10))



// function is_valid_password(word) {
//     let hasAllCapitals = false;
//     let hasAllNotCapitals = false;
//     let hasFirstCapital = false;
    
//     for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (char >= 'A' && char <= 'Z') {
//         if (char === word[i]) {
//           if (i > 0) {
//             hasAllCapitals = true;
//           } else {
//             hasFirstCapital = true;
//           }
//         } else {
//           hasAllNotCapitals = true;
//         }
//       } else if (char >= 'a' && char <= 'z') {
//         hasAllNotCapitals = true;
//       }
//     }   
//     return hasAllCapitals || hasAllNotCapitals || hasFirstCapital;
//   }
//   console.log(is_valid_password("USA"));
//   console.log(is_valid_password("FlaG"));

// function swap(a){
//   let n=a.length-1;
//   let temp;
//   let swaped = false
//   for(let i=0;i<n/2;i++){
//     if(a[i]>a[n-i-1]){
//        temp = a[i];
//        a[i]= a[n-i-1];
//        a[n-i-1] = temp
//     }
//   } return a
// }
// let a=[2,8,5,4];
// console.log(swap(a))

// function bubbleSortWithCount(arr) {
//     let count = 0;
//     let n = arr.length;
//     let swapped;
//     do {
//       swapped = false;
//       for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           // swap arr[i] and arr[i+1]
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//           count++;
//         }
//       }
//       n--;
//     } while (swapped);
//     return count;
//   }
//   let arr=[2,8,5,4];
// console.log(bubbleSortWithCount(arr))


// function isIdeal(s){
//     for(let i=0;i<s.length;i++){
//         if(s[i]==s[i+1]){
//             return false
//         }
//     } return true
// }
// //let s='abc';
// console.log(isIdeal('aba'))
// console.log(isIdeal('aabc'))
// console.log(isIdeal('abca'))

// function minSwaps(nums){
//     // code here
//     const map = [];
//     for(let i=0; i<nums.length; i++) {
//         map.push([nums[i], i]);
//     }
//     map.sort((a,b) => a[0] - b[0]);
//     let swaps = 0;
//     for(let i=0; i<nums.length; i++) {
//         let [value, index] = map[i];
//         if(i !== index) {
//             swaps++;
//             swap(map, i, index);
//             i--;
//         }
//     }
//     return swaps;
// }
// function swap(map, i, j){
//     [map[i], map[j]] = [map[j], map[i]];
// }
// let nums=[10,19,6,3,5];
// console.log(minSwaps(nums))

// function findMaxA(s){
//     let count =0;
//    let x;
//     for(let i=0;i<s.length;i++){
//          x= s[i].split(',');
//         let y='';
//         for(let j=0;j<x.length;j++){ 
//             y+=x[j]  
//          } //console.log(y) 
//          let c= y.split('');
//          for(let z=0;z<y.length;z++){
//             //console.log(c[z])
//             if(y[z]==='a'){
//                 count ++
//             }return count
//          }
         
//     } 
// }
// let s= ['ananya loves sharpner', 'apple is a very healty fruit','this is great thanks very much'];
// console.log(findMaxA(s))

// function rev(s){
//    let x={};
//    for(let i=0;i<s.length;i++){
//     let cc= s[i];
//     if(x[cc]){
//         x[cc]++
//     }else {
//         x[cc]=1
//     }
//    }
//    let max=0;
//    let maxChar=0;
//    for(let char in x){
//     if(x[char]>max){
//         max= x[char];
//         maxChar = char
//     }
//    } return maxChar
// }
// let s = "aabbccddeeee";
// console.log(rev(s))

// function rev(s1,s2){
//     if(s1.length!==s2.length){
//         return false
//     }
//     let x = s1.split('').sort().join('');
//     let y= s2.split('').sort().join('');
//     return x==y
// }
// const s1 = 'silent';
// const s2 = 'listen';
// console.log(rev(s1,s2))
// function rem(s,r,k){
//     if(k>s.length){
//         return s+r
//     }
//     else if(k<0){
//         return r+s
//     } else{
//        return  s=s.slice(0,k) + r + s.slice(k)
//     }
    
// }
// let s='hello world';
// let r='new ';
// let k=6;
// console.log(rem(s,r,k))

// function find(x){
//     let sorted={};
//     let keys = Object.keys(x)
//     keys.sort((a,b)=>{
//         return x[a]-x[b]
//     })
//     for(let key of keys){
//         sorted[key] = x[key]
//     } return sorted

// }
// let x ={a:2,b:5,c:1,d:9};
// let b={e:7,f:8}
// console.log(find(x,b))

// function fact(a){
//     let res=[]
//     for(let i=0;i<a.length;i++){
//         if(Array.isArray(a[i])){
//             res.push(...fact(a[i]))
//         } else{
//         res.push(a[i])
//         }
//     } return res
// }
// let a = [1, 2, [3, 4], 5, [6, 7, [8]]];
// console.log(fact(a))

// function remove(a,k){
//     let n= a.length
//     a.sort();
//     return a[k-1]
// }
// let a=[1,2,3,4,5]
// let k=2;
// console.log(remove(a,k))