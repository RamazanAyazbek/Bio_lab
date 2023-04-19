// Get the modal
const modal = document.getElementById("modal");
var noVirus;
// Get the button that opens the modal
const btn_modal = document.getElementById("CutCheck");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
let enter_p=document.getElementById('result_enter_to_p')

// When the user clicks the button, open the modal
btn_modal.onclick = function() {
  modal.style.display = "block";



// algorithm
var v1="agattaagcacggcttcagg",
    v2="gattaagtacacggttcaggg", 
    v3="agtacacgggctagggaccgg",
    v4="cttcagggacgccccacgagg"
var cut_part="";
var index_start=0, index_end=0;
var br=""
if(ans__k==v1 || ans__k==v2 || ans__k==v3 || ans__k==v4){
  cut_part=ans__k;

  for(let i=0; i<arr1.length-19; i++){
    for(let j=i; j<i+20; j++)
    {
        br+=arr1[j]
    }
    // console.log(br.length)
    if(br==ans__k){
      
         index_start=i
         index_end=i+20
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br=""
    }
}


} else if(ans_1__k==v1 || ans_1__k==v2 || ans_1__k==v3 || ans_1__k==v4){
cut_part=ans_1__k;
for(let i=0; i<arr1.length-19; i++){
  for(let j=i; j<i+20; j++)
  {
      br+=arr1[j]
  }
  // console.log(br.length)
  if(br==ans__k){
    
       index_start=i
       index_end=i+20
       break;
      // test2=test_arr.replace(v1, '')
      // break; 
  }else{
      // console.log(br)
      br=""
  }
}
} else
 if(ans_2__k==v1 || ans_2__k==v2 || ans_2__k==v3 || ans_2__k==v4){
  cut_part=ans_2__k;
  for(let i=0; i<arr1.length-19; i++){
    for(let j=i; j<i+20; j++)
    {
        br+=arr1[j]
    }
    // console.log(br.length)
    if(br==ans__k){
      
         index_start=i
         index_end=i+20
         break;
        // test2=test_arr.replace(v1, '')
        // break; 
    }else{
        // console.log(br)
        br=""
    }
}
  


  }
noVirus=arr1.replace(cut_part, '')
var cut_arr=in_array.slice(index_start, index_end)
var noVirus1=in_array.replace(cut_arr, '')
// console.log("cut_v : " + cut_part)
// console.log(noVirus.length)
// alert(noVirus)
// console.log("index:" + index_start, index_end)
var quantity_a=0,quantity_t=0,quantity_g=0,quantity_c=0
var quantity_a_0=0,quantity_t_0=0,quantity_g_0=0,quantity_c_0=0
for(let i=0; i<noVirus.length; i++)
{
  if(noVirus[i]=='a'){
    quantity_a+=1
  } else if(noVirus[i]=='t'){
    quantity_t+=1
  } else if(noVirus[i]=='g'){
    quantity_g+=1
  } else if(noVirus[i]=='c'){
    quantity_c+=1
  } 
  
}
for(let i=0; i<noVirus1.length; i++)
{
  if(noVirus1[i]=='a'){
    quantity_a_0+=1
  } else if(noVirus1[i]=='t'){
    quantity_t_0+=1
  } else if(noVirus1[i]=='g'){
    quantity_g_0+=1
  } else if(noVirus1[i]=='c'){
    quantity_c_0+=1
  } 
  
}
// alert(in_array)

// console.log("n0:" + noVirus1.length, " , n:" + noVirus.length)
// console.log("a:" + quantity_a +", t:" + quantity_t +", g:" + quantity_g +", c:" + quantity_c)
// console.log("a0:" + quantity_a_0 +", t0:" + quantity_t_0 +", g0:" + quantity_g_0 +", c0:" + quantity_c_0)
var sum_a=quantity_a+quantity_a_0,
sum_t=quantity_t+quantity_t_0,
sum_c=quantity_c+quantity_c_0,
sum_g=quantity_g+quantity_g_0

 
 if(sum_a==sum_t && sum_g==sum_c){
    enter_p.innerHTML="Chargaf Successfu; !"
//   console.log("Success !")
  // result_code.classList.ad
//   result_code.style.background="green"
  // result_code.innerHTML+="Hii"
  } else{
    enter_p.innerHTML="Failed !"

    // result_code.style.background="red"
  }
// endalgorithm




 
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };


// let cut=document.getElementById("CutCheck");


// let window_1=document.getElementById('modal_window_res')
// cut.addEventListener('click', ()=>{
// window_1.style.display='block';
// console.log('hellow')
//   console.log("a1:" + ans_end.length + ", a2:"+ans_end_1.length + ", a3:" + ans_end_2.length)
//  console.log("ans:" + ans.length + ", ans_1 : " + ans_1.length + ", ans_2:" + ans_2.length)
// var v1="agattaagcacggcttcagg",
//     v2="gattaagtacacggttcaggg", 
//     v3="agtacacgggctagggaccgg",
//     v4="cttcagggacgccccacgagg"
// var cut_part="";
// var index_start=0, index_end=0;
// var br=""
// if(ans__k==v1 || ans__k==v2 || ans__k==v3 || ans__k==v4){
//   cut_part=ans__k;

//   for(let i=0; i<arr1.length-19; i++){
//     for(let j=i; j<i+20; j++)
//     {
//         br+=arr1[j]
//     }
//     // console.log(br.length)
//     if(br==ans__k){
      
//          index_start=i
//          index_end=i+20
//          break;
//         // test2=test_arr.replace(v1, '')
//         // break; 
//     }else{
//         // console.log(br)
//         br=""
//     }
// }


// } else if(ans_1__k==v1 || ans_1__k==v2 || ans_1__k==v3 || ans_1__k==v4){
// cut_part=ans_1__k;
// for(let i=0; i<arr1.length-19; i++){
//   for(let j=i; j<i+20; j++)
//   {
//       br+=arr1[j]
//   }
//   // console.log(br.length)
//   if(br==ans__k){
    
//        index_start=i
//        index_end=i+20
//        break;
//       // test2=test_arr.replace(v1, '')
//       // break; 
//   }else{
//       // console.log(br)
//       br=""
//   }
// }
// } else if(ans_2__k==v1 || ans_2__k==v2 || ans_2__k==v3 || ans_2__k==v4){
//   cut_part=ans_2__k;
//   for(let i=0; i<arr1.length-19; i++){
//     for(let j=i; j<i+20; j++)
//     {
//         br+=arr1[j]
//     }
//     // console.log(br.length)
//     if(br==ans__k){
      
//          index_start=i
//          index_end=i+20
//          break;
//         // test2=test_arr.replace(v1, '')
//         // break; 
//     }else{
//         // console.log(br)
//         br=""
//     }
// }
//   } 
// noVirus=arr1.replace(cut_part, '')
// var cut_arr=in_array.slice(index_start, index_end)
// var noVirus1=in_array.replace(cut_arr, '')
// // console.log("cut_v : " + cut_part)
// // console.log(noVirus.length)
// // alert(noVirus)
// // console.log("index:" + index_start, index_end)
// var quantity_a=0,quantity_t=0,quantity_g=0,quantity_c=0
// var quantity_a_0=0,quantity_t_0=0,quantity_g_0=0,quantity_c_0=0
// for(let i=0; i<noVirus.length; i++)
// {
//   if(noVirus[i]=='a'){
//     quantity_a+=1
//   } else if(noVirus[i]=='t'){
//     quantity_t+=1
//   } else if(noVirus[i]=='g'){
//     quantity_g+=1
//   } else if(noVirus[i]=='c'){
//     quantity_c+=1
//   } 
  
// }
// for(let i=0; i<noVirus1.length; i++)
// {
//   if(noVirus1[i]=='a'){
//     quantity_a_0+=1
//   } else if(noVirus1[i]=='t'){
//     quantity_t_0+=1
//   } else if(noVirus1[i]=='g'){
//     quantity_g_0+=1
//   } else if(noVirus1[i]=='c'){
//     quantity_c_0+=1
//   } 
  
// }
// // alert(in_array)

// // console.log("n0:" + noVirus1.length, " , n:" + noVirus.length)
// // console.log("a:" + quantity_a +", t:" + quantity_t +", g:" + quantity_g +", c:" + quantity_c)
// // console.log("a0:" + quantity_a_0 +", t0:" + quantity_t_0 +", g0:" + quantity_g_0 +", c0:" + quantity_c_0)
// var sum_a=quantity_a+quantity_a_0,
// sum_t=quantity_t+quantity_t_0,
// sum_c=quantity_c+quantity_c_0,
// sum_g=quantity_g+quantity_g_0

 
//  if(sum_a==sum_t && sum_g==sum_c){
//   console.log("Success !")
//   // result_code.classList.ad
//   result_code.style.background="green"
//   // result_code.innerHTML+="Hii"
//   } else{
//     result_code.style.background="red"
//   }
// })


