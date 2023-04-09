var res="";
var ans="";
var ans2=""
var ans0=""
let arr1="atgccgcgcgtcgtgcccgaccagagaagcaagttcgagaacgaggagttttttaggaagctgagccgcg'tyy'agtgtgagattaagtacacgggcttcagggaccggccccacgaggaacgccaggcacgcttccagaacgcctgccgcgacggccgctcggaaatcgcttttgtggccacaggaaccaatctgtctctccagttttttccggccagctggcagggagaacagcgacaaacacctagccgagagtatgtcgacttagaaagagaagcaggcaaggtatatttgaaggctcccatgattctgaatggagtctgtgttatctggaaaggctggattgatctccaaagactggatggtatgggctgtctggagtttgatgaggagcgagcccagcaggaggatgcattagcacaacaggcctttgaagaggctcggagaaggacacgcgaatttgaagatagagacaggtctcatcgggaggaaatggaggcaagaagacaacaagaccctagtcctggttccaatttaggtggtggtgatgacctcaaacttcgttaa"
 let arr_mod; 
// console.log(arr1.length)
var air; 
for(let i=0; i<arr1.length-2; i++){
  res=arr1[i]+arr1[i+1]+arr1[i+2]; 

  if(res=="tyy"){
    air=i;
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
console.log("i: "+ air);  
console.log(ans_end)