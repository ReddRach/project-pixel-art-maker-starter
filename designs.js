// Select color input
const color=document.querySelector("#colorPicker");
// Select size input
const size=document.querySelector("#sizePicker");
const table=document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid()
});

//makeGrid()
function makeGrid() {
  table.innerHTML="";
  let height=document.querySelector("#inputHeight").value;
  let width=document.querySelector("#inputWidth").value;
// Your code goes here!
  for (let x=0; x<height; x++){
    let rows=document.createElement('tr');
    for (let y=0; y<width; y++){
      let columns=document.createElement('td');
      rows.appendChild(columns);
      columns.addEventListener('click',function(e){
        e.target.style.backgroundColor=color.value;
      });
      table.appendChild(rows);
    }
  }
}
