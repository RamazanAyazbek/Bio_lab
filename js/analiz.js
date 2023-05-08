// we have ans__k, ans_1__k, ans_2__k, ans_3__k
const gridItem1 = document.querySelector('.index_1'),
      gridItem2 = document.querySelector('.index_2'),
      gridItem3 = document.querySelector('.index_3'),
      gridItem4 = document.querySelector('.index_4'),
      gridItem5 = document.querySelector('.index_5'),
      virus_1 = document.querySelector('.virus_1'),
      virus_2 = document.querySelector('.virus_2'),
      virus_3 = document.querySelector('.virus_3'),
      virus_4 = document.querySelector('.virus_4'),
      virus_5 = document.querySelector('.virus_5'),
      koef1 = document.querySelector('.kofc1'),
      koef2 = document.querySelector('.kofc2'),
      koef3 = document.querySelector('.kofc3'),
      koef4 = document.querySelector('.kofc4'),
      koef5 = document.querySelector('.kofc5'); 
      var index_s1=0, index_e1=0,
      index_s2=0, index_e2=0,
      index_s3=0, index_e3=0,
      index_s4=0, index_e4=0;
let design=document.getElementById('design')
design.addEventListener('click', ()=>{
// index_1, ans__k
let br_1=""
for(let i=0; i<arr1.length-22; i++){
    for(let j=i; j<i+23; j++)
    {
        br_1+=arr1[j]
    }
    // console.log(br.length)
    if(br_1==ans__k){
      
         index_s1=i
         index_e1=i+23
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br_1=""
    }
}


// index_2, ans_1__k
let br_2=""
for(let i=0; i<arr1.length-22; i++){
    for(let j=i; j<i+23; j++)
    {
        br_2+=arr1[j]
    }
    // console.log(br.length)
    if(br_2==ans_1__k){
      
         index_s2=i
         index_e2=i+23
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br_2=""
    }
}


// index_3, ans_2__k
let br_3=""
for(let i=0; i<arr1.length-22; i++){
    for(let j=i; j<i+23; j++)
    {
        br_3+=arr1[j]
    }
    // console.log(br.length)
    if(br_3==ans_2__k){
      
         index_s3=i
         index_e3=i+23
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br_3=""
    }
}

// index_4, ans_3__k
let br_4=""
for(let i=0; i<arr1.length-22; i++){
    for(let j=i; j<i+23; j++)
    {
        br_4+=arr1[j]
    }
    // console.log(br.length)
    if(br_4==ans_3__k){
      
         index_s4=i
         index_e4=i+23
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br_4=""
    }
}

// // index_5, ans_4__k
// let br_5=""
// for(let i=0; i<arr1.length-22; i++){
//     for(let j=i; j<i+23; j++)
//     {
//         br_3+=arr1[j]
//     }
//     // console.log(br.length)
//     if(br_3==ans_2__k){
      
//          index_s3=i
//          index_e3=i+23
//          break;
//         // test2=test_arr.replace(v1, '')
//         // break; 
//     }else{
//         // console.log(br)
//         br_3=""
//     }
// }


  // ans_2__k
  // index_1.innerHTML+=`<div class="grid-item index_1">${a_b}-${a_c}</div>`
  gridItem1.innerHTML +=`${index_s1}-${index_e1}`;
  gridItem2.innerHTML +=`${index_s2}-${index_e2}`;
  gridItem3.innerHTML +=`${index_s3}-${index_e3}`;
  gridItem4.innerHTML +=`${index_s4}-${index_e4}`;
  gridItem5.innerHTML +=`${76}-${99}`;

// virus plus
// alert(ans_2__k.length)
virus_1.innerHTML +=`${ans__k}`;
virus_2.innerHTML +=`${ans_1__k}`;
virus_3.innerHTML +=`${ans_2__k}`;
virus_4.innerHTML +=`${ans_3__k}`;
virus_5.innerHTML +=`actgagcctttagcgaaaacctg`;

koef1.innerHTML +=`${kf1}`;
koef2.innerHTML +=`${kf2}`;
koef3.innerHTML +=`${kf3}`;
koef4.innerHTML +=`${kf4}`;
koef5.innerHTML +=`${0}`;
// console.log(kf1, kf2, kf3, kf4, kf5)
})



















