
let btn = document.getElementById("generate"),
  btn_c = document.getElementById("generate_to_color_s_mod"),
  btn_k = document.getElementById("generate_to_color_k_mod");
var in_array;
let generated_data = document.getElementById('generated_data').value
var arr1;
var result_code=document.getElementById('result_code')



//READ FILE//
const btn_read=document.getElementById('btn_read_file');
btn_read.addEventListener('click', ()=>{
  btn_read.style.background="#04182e";
})
var arr_text_in_file="";
function readFile() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (!file) {
   alert('No file selected');
    return;
  }

  const reader = new FileReader();

  reader.onload = (event) => {
    // console.log(event.target.result);
    arr_text_in_file = event.target.result;
  };

  reader.readAsText(file);
}



btn.addEventListener("click", () => {
  
  
  if(arr_text_in_file.length==0){
    in_array = document.getElementById('get_data').value;
  }else
  {
    in_array=arr_text_in_file;
  }
  document.getElementById('input_data').value = in_array;
  var out_array = "";
  var res_arr=""; 
  for (let i = 0; i < in_array.length; i++) {
    if (in_array[i] == "a") {
      out_array += "t"
    } else
      if (in_array[i] == "t") {
        out_array += "a"
      } else
        if (in_array[i] == "g") {
          out_array += "c"
        } else
          if (in_array[i] == "c") {
            out_array += "g"
          }
  }
  for (let i = 0; i < in_array.length; i++) {
    if (in_array[i] == "a") {
      res_arr += "t"
    } else
      if (in_array[i] == "t") {
        res_arr += "a"
      } else
        if (in_array[i] == "g") {
          res_arr += "c"
        } else
          if (in_array[i] == "c") {
            res_arr += "g"
          }
          else{
            res_arr+=in_array[i];
          }
  }
  arr1 = out_array
  document.getElementById('generated_data').value = out_array;
  console.log(arr1.length)
})







// if clicked s-mod btn
var click_btn=0 

btn_c.addEventListener('click', () => {
  btn_c.style.background="#04182e";
click_btn=1; 
  function color_div() {

    const colors = {
      a: 'red',
      t: 'blue',
      g: 'green',
      c: 'brown'
    };

  const inputString = arr1;
    // console.log("arr1:" + arr1)
    const gridColors = [];

    for (let i = 0; i < inputString.length; i++) {
      const letter = inputString[i];
      gridColors.push(colors[letter]);
    }

    function drawGrid(colors) {
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      const cellSize = 20;
      ctx.strokeStyle = 'black';


      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const x = (i % 50) * cellSize;
        const y = Math.floor(i / 50) * cellSize;

        if (color) {

          ctx.fillStyle = color;
        } else {

          ctx.fillStyle = 'white';
        }


        ctx.fillStyle = color;
        ctx.fillRect(x, y, cellSize, cellSize);
        ctx.strokeRect(x, y, cellSize, cellSize);
      }




    }

    drawGrid(gridColors);
  }
  color_div();
})







// if clicked k-mod btn
btn_k.addEventListener('click', () => {
  btn_k.style.background="#04182e";
click_btn=2; 
  function color_div() {

    const colors = {
      a: 'red',
      t: 'blue',
      g: 'green',
      c: 'brown'
    };


    const inputString = arr1;
    
    const gridColors = [];

    for (let i = 0; i < inputString.length; i++) {
      const letter = inputString[i];
      gridColors.push(colors[letter]);
    }

    function drawGrid(colors) {
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      const cellSize = 20;
      ctx.strokeStyle = 'black';

      let leng_word = colors.length
      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];




    
        let ydiver = Math.floor(i / 50);
        if (ydiver % 2 == 0) {
          var xdiver = i % 50;
        }
        else if (ydiver % 2 == 1) {
          var xdiver = 49 - (i % 50)
        }


        const x = xdiver * cellSize;
        const y = ydiver * cellSize;


        if (color) {

          ctx.fillStyle = color;
        } else {

          ctx.fillStyle = 'white';
        }


        ctx.fillStyle = color;
        ctx.fillRect(x, y, cellSize, cellSize);
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    drawGrid(gridColors);
  }
  color_div();
})

var ans_end="", ans_end_1="", ans_end_2=""; 
var ans__k, ans_1__k, ans_2__k;  

var btn_segment = document.getElementById('segment')

btn_segment.addEventListener('click', () => {
  btn_segment.style.background="#04182e";



  var res="";
  var ans0=""
  
  var ans="";
  var ans2="";
  var res_1="";
  var ans0_1="";
  
  var ans_1="";
  var ans2_1=""
  var res_2="";
  var ans0_2="";
  
  var ans_2="";
  var ans2_2=""
  // console.log(arr1.length)
  // law-1
  for(let i=0; i<arr1.length-2; i++){
    res=arr1[i]+arr1[i+1]+arr1[i+2]; 

    if(res=="agg" ){
      if(i>=20){   
      for(let j=0; j<i-17; j++)
      {
        ans0+="w";
      }
      for(let j=i-17; j<i+3; j++)
      {
        ans+=arr1[j];
      }
      for(let j=i+3; j<arr1.length; j++)
      {
        ans2+="w";
      }
      } else if(i<20){
      for(let j=0; j<i+3; j++)
      {
        ans+=arr1[j];
      }
      for(let j=i+3; j<arr1.length; j++){
        ans2+='w'
      }
    }
    break; 
    }
    
    else{
      res=""
    }
  }
 ans_end=ans0+ans+ans2; 
 ans__k=ans;
// console.log("len" + ans_end.length)
if(ans_end.length==0){
  for(let i=0; i<arr1.length; i++){
    ans_end+='w'; 
  }
}

// law-2
// console.log(arr1.length)
for(let i=0; i<arr1.length-2; i++){
  res_1=arr1[i]+arr1[i+1]+arr1[i+2]; 

  if(res_1=="ttc" ){
    if(i>=20){   
    for(let j=0; j<i-17; j++)
    {
      ans0_1+="w";
    }
    for(let j=i-17; j<i+3; j++)
    {
      ans_1+=arr1[j];
    }
    for(let j=i+3; j<arr1.length; j++)
    {
      ans2_1+="w";
    }
    } else if(i<20){
    for(let j=0; j<i+3; j++)
    {
      ans_1+=arr1[j];
    }
    for(let j=i+3; j<arr1.length; j++){
      ans2_1+='w'
    }
  }
  break; 
  }
  
  else{
    res_1=""
  }
}
 ans_end_1=ans0_1+ans_1+ans2_1; 
 ans_1__k=ans_1
if(ans_end_1.length==0){
  for(let i=0; i<arr1.length; i++){
    ans_end+='w'; 
  }
}
// console.log("len" + ans_end_1.length)

// console.log("ans_end_1 : " + ans_end_1)
// endlaw-2
// law-3
// console.log(arr1.length)
for(let i=0; i<arr1.length-2; i++){
  res_2=arr1[i]+arr1[i+1]+arr1[i+2]; 

  if(res_2=="ccg" ){
    if(i>=20){   
    for(let j=0; j<i-17; j++)
    {
      ans0_2+="w";
    }
    for(let j=i-17; j<i+3; j++)
    {
      ans_2+=arr1[j];
    }
    for(let j=i+3; j<arr1.length; j++)
    {
      ans2_2+="w";
    }
    } else if(i<20){
    for(let j=0; j<i+3; j++)
    {
      ans_2+=arr1[j];
    }
    for(let j=i+3; j<arr1.length; j++){
      ans2_2+='w'
    }
  }
  break; 
  }
  
  else{
    res_2=""
  }
}
 ans_end_2=ans0_2+ans_2+ans2_2; 
 ans_2__k=ans_2
// console.log("len" + ans_end_2.length)
if(ans_end_2.length==0){
  for(let i=0; i<arr1.length; i++){
    ans_end_2+='w'; 
  }
}
// console.log("ans_end_2 : " + ans_end_2)
// endlaw-3

  function color_div() {

    const colors = {
      a: 'red',
      t: 'blue',
      g: 'green',
      c: 'brown'
    };

    // slick js
   
    // endslick

 var inputString;
    // const inputString = ans_end; 
    // const inputString = ans_end_1; 
    // const inputString = ans_end_2; 
    if(counter==1){
      inputString=ans_end;
      //  console.log("counter=1")       
    } else if(counter==2){
      inputString = ans_end_1; 
      // console.log("counter=2")
    } if(counter==3){
      inputString = ans_end_2;
      // console.log("counter=3") 
    }
    
    // 
    const gridColors = [];
    for (let i = 0; i < inputString.length; i++) {
      const letter = inputString[i];
      gridColors.push(colors[letter]);
    }

    function drawGrid(colors) {
      const canvas = document.getElementById('canvas_vis');
      const ctx = canvas.getContext('2d');
      const cellSize = 20;
      ctx.strokeStyle = 'black';


      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];

// ;;;;
if(click_btn == 1){
  // console.log('clicked s_mod');
  var x = (i % 50) * cellSize;
  var y = Math.floor(i / 50) * cellSize;
}else if(click_btn == 2)
{
  // console.log('clicked k_mod');
          var ydiver = Math.floor(i / 50);
        if (ydiver % 2 == 0) {
          var xdiver = i % 50;
        }
        else if (ydiver % 2 == 1) {
          var xdiver = 49 - (i % 50)
        }
        var x = xdiver * cellSize;
var y = ydiver * cellSize;
} else if(click_btn==0){
  alert("Click to S_mod or K_mod");
  break; 
}

// ;;;;


        if (color) {

          ctx.fillStyle = color;
        } else {

          ctx.fillStyle = 'white';
        }


        ctx.fillStyle = color;
        ctx.fillRect( x,y, cellSize, cellSize);
        ctx.strokeRect(x, y, cellSize, cellSize);
      }




    }

    drawGrid(gridColors);
  }
  color_div();
})

// end_btn

let cut=document.getElementById("CutCheck");
var noVirus;
cut.addEventListener('click', ()=>{

  // console.log("a1:" + ans_end.length + ", a2:"+ans_end_1.length + ", a3:" + ans_end_2.length)
//  console.log("ans:" + ans.length + ", ans_1 : " + ans_1.length + ", ans_2:" + ans_2.length)
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
} else if(ans_2__k==v1 || ans_2__k==v2 || ans_2__k==v3 || ans_2__k==v4){
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
  } else{
    if(arr1.length!=0){
      alert("not found nothing virus")
      result_code.style.background="green";
    } else if(arr1.length==0 || arr1.length=='undefined'){
      alert("no data")
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
  console.log("Success !")
  // result_code.classList.ad
  result_code.style.background="green"
  // result_code.innerHTML+="Hii"
  } else{
    result_code.style.background="red"
  }
})


const clearing_0 = document.getElementById('clearing0')

clearing_0.addEventListener('click', ()=>{
  btn_c.style.background="#0078d0";
  btn_k.style.background="#0078d0";
  const canvas0 = document.getElementById('canvas');
const ctx0 = canvas0.getContext('2d');
ctx0.clearRect(0, 0, canvasWidth, canvasHeight);
// console.log("nege bari mooz")
})
const clearing = document.getElementById('clearing')

clearing.addEventListener('click', ()=>{
  btn_segment.style.background="#0078d0";
  const canvas1 = document.getElementById('canvas_vis');
const ctx1 = canvas1.getContext('2d');
ctx1.clearRect(0, 0, canvasWidth, canvasHeight);

})


