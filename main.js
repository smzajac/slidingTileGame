// let emptyButton = document.getElementById('emptyButton').value
// console.log(emptyButton);

let toAdd = document.getElementById("gameContainer");


let buttons = document.getElementsByClassName("switch");

// for (var i = 0; i < 16; i++) {
//   var newTile = document.createElement("div");
//   newTile.id = "tile" + [i];
//   newTile.classname = "switch";
//   toAdd.appendChild(newTile)
// }
//
// document.appendChild(toAdd);

let shuffle = function() {

  console.log("everyday im shufflin");
}



let swapper = function() {

      let x = parseInt(this.style.left);
      let y = parseInt(this.style.top);
      let blankY = parseInt(blankTile.style.top);
      let blankX = parseInt(blankTile.style.left);

      let distanceX = (blankX - x);
      let distanceY =  (blankY - y);
      console.log('blankX ' + blankX);
      console.log('blankY ' + blankY);
      console.log("clicked X " + x);
      console.log("clicked Y " + y);
      console.log('distance X ' + distanceX);
      console.log('distance Y ' + distanceY);

  if ((distanceX === -100 && distanceY === 0) || (distanceX === 100 && distanceY === 0) || (distanceX === 0 && distanceY === 100) || (distanceX === 0 && distanceY === -100)) {

      let positionx = this.style.left;
      let positiony = this.style.top;
      // let positionXblank = blankTile.style.left;
      // let positionYblank = blankTile.style.top;

      this.style.left = blankTile.style.left;
      this.style.top = blankTile.style.top

      blankTile.style.top = positiony;
      blankTile.style.left = positionx;


    // console.log("Blank Tile Orientation " + positionXblank + " Blank Tile Orientation " + positionYblank );
    // console.log("Left Orientation " + this.style.left);
    // console.log("Top Orientation " + this.style.top);
    // console.log(this.id);
  }
}

row = [0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
col = [0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];

for(var i=1; i < 16; i++){

  //  var col=i%4;
	//  var row=Math.floor(i/4);
   var newDiv = document.createElement('div');
   newDiv.id = 'tile'+i;
   newDiv.className = 'tile';
   newDiv.innerHTML = i;
   newDiv.style.left = col[i]*100 + "px";
	 newDiv.style.top = row[i]*100 + "px";
   newDiv.onclick = swapper;
   toAdd.appendChild(newDiv);
  //  boardTiles[row][col]=div;
}


  var blankTile = document.createElement('div');
      blankTile.id = 'blankTile';
      blankTile.className = 'tile';
      blankTile.style.left = 400 + "px";
      blankTile.style.top = 400 + "px";
      blankTile.onclick = swapper;
      toAdd.appendChild(blankTile);



      // blankTile.onclick = function() { alert('blah'); };








// gameContainer.innerHTML= `
// <div>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button">1</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="2">2</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="3">3</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="4">4</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="5">5</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="6">6</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="7">7</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="8">8</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="9">9</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="10">10</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="11">11</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="12">12</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="13">13</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="14">14</button>
//   <button onclick="moveBlock(this.value)" class="switch" type="button" name="button" value="15">15</button>
//   <button onclick="moveBlock(this.value)" id="emptyButton" class="switch" type="button" name="button" value="empty"> </button>
//
// </div>
// `;


// buttons[0].offsetTop = 350;
// gameContainer.appendChild(game);

function moveBlock(e) {
  if(e === "empty"){
      // document.getElementById('emptyButton').style.position = "absolute";
      // document.getElementById('emptyButton').style.top = 100;
      // document.getElementById('emptyButton').style.left = 100;
    console.log("lock-target")
  }

  buttons[0].offsetTop = 350;
  console.log(buttons[0].offsetTop);

  for (var i = 0; i < buttons.length; i++) {


  }

};




for (var i = 0; i < buttons.length; i++) {
  console.log("Button " + buttons[i].value + " Top Offset " + buttons[i].offsetTop)
  console.log("Button " + buttons[i].value + " Bottom Offset " + buttons[i].offsetLeft)
};
