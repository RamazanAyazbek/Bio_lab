
let btn = document.getElementById("generate"),
  btn_c = document.getElementById("generate_to_color_s_mod"),
  btn_k = document.getElementById("generate_to_color_k_mod");
var in_array;
let generated_data = document.getElementById('generated_data').value
var arr1;



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

    //   const inputString = prompt('Введите строку:');
    // let in_array = document.getElementById('get_data').value;
// var example="attttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttcattttttttttttttttttttttttttttttttttttttttttttttttc"
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




// canva

// end canva



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

    //   const inputString = prompt('Введите строку:');
    // let in_array = document.getElementById('get_data').value;

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

      let leng_word = colors.length
      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];




        // console.log("x" + xdiver)
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




const btn_segment = document.getElementById('segment')
btn_segment.addEventListener('click', () => {
  btn_segment.style.background="#04182e";
  var res="";
  var ans0=""
  var ans="";
  var ans2=""

   let arr_mod; 
  console.log(arr1.length)
  for(let i=0; i<arr1.length-2; i++){
    res=arr1[i]+arr1[i+1]+arr1[i+2]; 

    if(res=="aac"){
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
var ans_end=ans0+ans+ans2; 
console.log("len" + ans_end.length)
// console.log("ans:" + ans_end)

if(ans_end.length==0){
  for(let i=0; i<arr1.length; i++){
    ans_end+='w'; 
  }
}


  function color_div() {

    const colors = {
      a: 'red',
      t: 'blue',
      g: 'green',
      c: 'brown'
    };


//     var res="";
//     var ans="";
//     var ans2=""

//      let arr_mod; 
//     //  if(document.getElementById('generate_to_color_s_mod').clicked == true){
//     //   arr_mod=arr1; 
//     //  }else if(
//     //   arr_mod=
//     //  )
//     // const inputString = arr1;
//     console.log(arr1.length)
//     for(let i=0; i<arr1.length-2; i++){
//       res=arr1[i]+arr1[i+1]+arr1[i+2]; 

//       if(res=="aac"){
//         for(let j=0; j<i+3; j++)
//         {
//           ans+=arr1[j];
//         }
//         for(let j=i; j<arr1.length; j++)
//         {
//           ans2+="w";
//         }
//       }else{
//         res=""
//       }
//     }
// var ans_end=ans+ans2; 
// console.log("ans:" + ans_end)


    // const inputString = ans_end;
    const inputString = ans_end; 
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
  console.log('clicked s_mod');
  var x = (i % 50) * cellSize;
  var y = Math.floor(i / 50) * cellSize;
}else if(click_btn == 2)
{
  console.log('clicked k_mod');
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
// console.log("nege bari mooz")
})
const home_btn=document.getElementById('home_btn');
home_btn.addEventListener('click', ()=>{
  
})

