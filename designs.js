// Select color input
const color=document.querySelector("#colorPicker");
// Select size input
const size= document.querySelector("sizePicker");
const table=document.querySelector("pixelCanvas");

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid()
});

//makeGrid()
function makeGrid() {
  table.innerHTML="";
  let height=document.querySelector('#inputHeight").value;
  let width=document.querySelector('#inputWidth").value;
// Your code goes here!

}
