// Get the modal
const modal = document.getElementById("modal");
var noVirus;
// Get the button that opens the modal
const btn_modal = document.getElementById("CutCheck");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
let enter_p = document.getElementById('result_enter_to_p')
let before = document.querySelector('.before')
let after = document.querySelector('.after')

// When the user clicks the button, open the modal
btn_modal.onclick = function () {
  modal.style.display = "block";


  console.log("ans_2:", ans_2__k)
  console.log("v1:",v5)
  var v1 = "tctaattcatgtgcccgaagtcc",
      v2 = "ctaattcatgtgcccgaagtccc",
      v3 = "tcatgtgcccgaagtccctggcc",
      v4 = "gaagtccctggccggggtgctcc",
      v5 = "aaggtcttgcggacggcgctgcc";
  var cut_part = "";
  var index_start = 0, index_end = 0;
  var br = ""
  if (ans__k == v1 || ans__k == v2 || ans__k == v3 || ans__k == v4 || ans__k == v5) {
    cut_part = ans__k;
    console.log("ans__k mathces !")
    for (let i = 0; i < arr1.length - 22; i++) {
      for (let j = i; j < i + 23; j++) {
        br += arr1[j]
      }
      // console.log(br.length)
      if (br == ans__k) {

        index_start = i
        index_end = i + 23
        break;
        // test2=test_arr.replace(v1, '')
        // break; 
      } else {
        // console.log(br)
        br = ""
      }
    }


  } else if (ans_1__k == v1 || ans_1__k == v2 || ans_1__k == v3 || ans_1__k == v4 || ans_1__k == v5) {
    cut_part = ans_1__k;
    console.log("ans_1__k mathces !")
    for (let i = 0; i < arr1.length - 22; i++) {
      for (let j = i; j < i + 23; j++) {
        br += arr1[j]
      }
      // console.log(br.length)
      if (br == ans_1__k) {

        index_start = i
        index_end = i + 23
        break;
        // test2=test_arr.replace(v1, '')
        // break; 
      } else {
        // console.log(br)
        br = ""
      }
    }
  } else if (ans_2__k == v1 || ans_2__k == v2 || ans_2__k == v3 || ans_2__k == v4 || ans_2__k == v5) {
    cut_part = ans_2__k;
    console.log("ans_2__k mathces !")
    for (let i = 0; i < arr1.length - 22; i++) {
      for (let j = i; j < i + 23; j++) {
        br += arr1[j]
      }
      // console.log(br.length)
      if (br == ans_2__k) {

        index_start = i
        index_end = i + 23
        break;
        // test2=test_arr.replace(v1, '')
        // break; 
      } else {
        // console.log(br)
        br = ""
      }
    }



  } else if (ans_3__k == v1 || ans_3__k == v2 || ans_3__k == v3 || ans_3__k == v4 || ans_3__k == v5) {
    console.log("ans_3__k mathces !")
    cut_part = ans_3__k;
    for (let i = 0; i < arr1.length - 22; i++) {
      for (let j = i; j < i + 23; j++) {
        br += arr1[j]
      }
      // console.log(br.length)
      if (br == ans__k) {

        index_start = i
        index_end = i + 23
        break;
        // test2=test_arr.replace(v1, '')
        // break; 
      } else {
        // console.log(br)
        br = ""
      }
    }
  }
  console.log("CUT PART: ", cut_part)
  noVirus = arr1.replace(cut_part, '')
  var cut_arr = in_array.slice(index_start, index_end)
  console.log("cut_arr", cut_arr)
  // console.log("ans_1_k" , ans_1__k)
  var noVirus1 = in_array.replace(cut_arr, '')
  // console.log("cut_v : " + cut_part)
  console.log("NoV1", noVirus.length)
  // alert(noVirus)
  console.log("index:" + index_start, index_end)
  var quantity_a = 0, quantity_t = 0, quantity_g = 0, quantity_c = 0
  var quantity_a_0 = 0, quantity_t_0 = 0, quantity_g_0 = 0, quantity_c_0 = 0
  for (let i = 0; i < noVirus.length; i++) {
    if (noVirus[i] == 'a') {
      quantity_a += 1
    } else if (noVirus[i] == 't') {
      quantity_t += 1
    } else if (noVirus[i] == 'g') {
      quantity_g += 1
    } else if (noVirus[i] == 'c') {
      quantity_c += 1
    }

  }
  for (let i = 0; i < noVirus1.length; i++) {
    if (noVirus1[i] == 'a') {
      quantity_a_0 += 1
    } else if (noVirus1[i] == 't') {
      quantity_t_0 += 1
    } else if (noVirus1[i] == 'g') {
      quantity_g_0 += 1
    } else if (noVirus1[i] == 'c') {
      quantity_c_0 += 1
    }

  }
  // alert(in_array)

  console.log("n0:" + noVirus1.length, " , n:" + noVirus.length)
  console.log("a:" + quantity_a + ", t:" + quantity_t + ", g:" + quantity_g + ", c:" + quantity_c)
  console.log("a0:" + quantity_a_0 + ", t0:" + quantity_t_0 + ", g0:" + quantity_g_0 + ", c0:" + quantity_c_0)
  var sum_a = quantity_a + quantity_a_0,
    sum_t = quantity_t + quantity_t_0,
    sum_c = quantity_c + quantity_c_0,
    sum_g = quantity_g + quantity_g_0


  if (sum_a == sum_t && sum_g == sum_c) {
    enter_p.innerHTML = "Chargaf Successful !"

       //   console.log("Success !")
    // result_code.classList.ad
    //   result_code.style.background="green"
    // result_code.innerHTML+="Hii"
  } else {
    enter_p.innerHTML = "Not Successful !"
  }
  before.innerHTML += `quantity all : ${arr1.length}`
  before.innerHTML += '<br><br>'
  before.innerHTML += `a: ${((quantity_a_0*100)/noVirus1.length).toFixed(1)}%, t: ${((quantity_t_0*100)/noVirus1.length).toFixed(1)}%, g: ${((quantity_g_0*100)/noVirus1.length).toFixed(1)}%, c: ${((quantity_c_0*100)/noVirus1.length).toFixed(1)}%`
  after.innerHTML += `quantity all : ${noVirus1.length}`
  after.innerHTML += '<br><br>'
  after.innerHTML += `a: ${((quantity_a*100)/noVirus.length).toFixed(1)}%, t: ${((quantity_t*100)/noVirus.length).toFixed(1)}%, g: ${((quantity_g*100)/noVirus.length).toFixed(1)}%, c: ${((quantity_c*100)/noVirus.length).toFixed(1)}%`

  // endalgorithm

// arr1---100%
// qa-----x%
// x=qa*100/arr1



};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
let a_b = 1, a_c = 3;

// let index_1=document.getElementsByClassName('index_1')

