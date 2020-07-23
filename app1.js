// chap 38 to 42

// Question 1
// function power(){
//     var a=prompt();
//     var b=prompt();
// document.write(Math.pow(a,b));
// }

// power();

// Question 2

// function leap(){
//     var a=prompt();
//     if(a%4==0){
//         alert("leap year");
//     }
//     else{
//         alert("not")
//     }

// }
// leap()

// Question 3

// function S(){
// var a=6,b=6,c=6;
// var s=(a+b+c)/2;
// return s;
// }
// function Area(x,y,z){
//     var area= S()*(S()-x)*(S()-y)*(S()-z)
//     return area;
// }
// alert("the value of S "+S())
// alert("the area is "+Area(2,2,2));

// Question 4
// function mainFunction(){ 
//    console.log(avg());
//    console.log(perc())

// }

// function avg(){
//     var sub1=99,sub2=100,sub3=97;
//     var total=sub1+sub2+sub3;
// var average=(total)/3;
// return average,total
// }

// function perc(totals){
//     var sub1=99,sub2=100,sub3=97;
//     var total=sub1+sub2+sub3;
//     var percentage=(total/300)*100
//     return percentage
// }

// mainFunction()

// Question 6
// function remove_Vowel(){
// var strings = ["Write a function to delete all vowels from a sentence"];
// string = strings.map(x=>x.replace( /[aeiou]/g, '' ));
// console.log(string);}
// remove_Vowel()

// chap 43 to 48

// Question 1

{/* <a href="#" onClick="alert('Hi');">click me</a> */}

// Question 2

{/* <img src="mobile.PNG" onClick="alert('Thanks for purchasing');"></img> */}

// Question 3

//  function myFunction(variable) {
//   document.getElementById("myTable").deleteRow(variable);
// }

// <table id="myTable" style="width: 60%;">
        
//         <tr>
//             <th>Index</th>
//             <th>name</th> 
//             <th>button</th>
//           </tr>
//           <tr>
//               <td>1</td>
//               <td>Shayan</td>
//               <td><button onclick=" myFunction(1)">delete</button></td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>Ali</td>
//             <td><button onclick=" myFunction(2)" >delete</button></td>
//         </tr>
//         <tr>
//             <td>3</td>
//             <td>Omer</td>
//             <td><button onclick=" myFunction(3)">delete</button></td>
//         </tr>
//         <tr>
//             <td>4</td>
//             <td>Hamza</td>
//             <td><button onclick=" myFunction(4)">delete</button></td>
//         </tr> <tr>
//             <td>5</td>
//             <td>Lodhi</td>
//             <td><button onclick=" myFunction(5)">delete</button></td>
//         </tr> <tr>
//             <td>6</td>
//             <td>Daniyal</td>
//             <td><button onclick=" myFunction(6)">delete</button></td>
//         </tr> <tr>
//             <td>7</td>
//             <td>Kamal</td>
//             <td><button onclick=" myFunction(7)">delete</button></td>
//         </tr> 
//         <tr>
//             <td>8</td>
//             <td>Shafiq</td>
//             <td><button onclick=" myFunction(8)">delete</button></td>
//         </tr>
//         <tr>
//             <td>9</td>
//             <td>Fahim</td>
//             <td><button onclick=" myFunction(9)">delete</button></td>
//         </tr>
//         <tr>
//             <td>10</td>
//             <td>Ahmed</td>
//             <td><button onclick=" myFunction(10)">delete</button></td>
//         </tr>
            
//     </table>

// Question 4

{/* <img width="100%" src='https://icdn2.digitaltrends.com/image/digitaltrends/dt-geneva-bugatti-la-voiture-noire-1200x630-c-ar1.91.jpg' onmouseout="src='https://icdn2.digitaltrends.com/image/digitaltrends/dt-geneva-bugatti-la-voiture-noire-1200x630-c-ar1.91.jpg'" onmouseover="src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg'" */}

// Question 5

// var increase = 0;
// function myFunction() {
//    increase += 1;
//     document.getElementById("demo").innerHTML = increase;
// }

// function myFunctions() {
//    increase -= 1;
//     document.getElementById("demo").innerHTML =increase;
// }

{/* <p id="demo">0</p>
<button onclick="myFunction()">increase</button>
<button onclick="myFunctions()">decrease</button>
</body>
</html> */}


// chap 40 to 52

// Question 1
// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//    alert("Email address required.");
//    }
//    }
//    <form onSubmit="checkAddress('email');">
//     Email:
//     <input type="text" id="email">
//     <input type="submit" value="Submit">
//     </form

// Question 2
// function readmore(){
//     var readmore=document.getElementById("readmores").innerHTML
//     var para=document.getElementById("text")
//     para.innerHTML=readmore
// }

// <p id="readmores">An atom is the smallest constituent unit of ordinary matter that constitutes a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across.</p>
//     <p id="text">An atom is the smallest constituent unit of ordinary matter that constitutes a chemical element.<a href="javascript:void(0);" onclick="readmore()">readmore</a> </p>

// Question 3

// chapter 52 - 57

// Question 1

// function showImage(click){
//   var  modalImage=document.getElementById("modalImage")
//   modalImage.src=click.src
// }

// chapter 58 - 67

// Question 1


   1 // var a=document.getElementById("main-content");
   2 // console.log(a.childNodes[0])
    // var b=document.getElementsByClassName("render")
   //   var p=console.log(b.firstChild)
    // var show= p.innerHTML
    3// var puts=document.getElementById('FirstName').value ;
    // puts.value
   4 // var puts=document.getElementById('lastName').value ;
    // puts.value
    5// var puts=document.getElementById('email').value ;
    // puts.value

    