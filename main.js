let toAdd = document.getElementById("gameContainer");


let buttons = document.getElementsByClassName("switch");



let shuffle = function() {
  let x = [];
  let y = [];

  let shuffler = [];

  for (var i = 1; i < row.length; i++) {

    let tileOrientationX = parseInt(document.getElementById("gameContainer").childNodes[i].style.left);
    let tileOrientationY = parseInt(document.getElementById("gameContainer").childNodes[i].style.top);
    x.push(tileOrientationX);
    y.push(tileOrientationY);
    shuffler.push({x: tileOrientationX, y: tileOrientationY})
    // let tile = 'tile' + [i];
    // console.log(tileOrientationY + " " + tileOrientationX);
  }

  console.log(shuffler);
  console.log(x , y);

  for (var i = shuffler.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffler[i];
        shuffler[i] = shuffler[j];
        shuffler[j] = temp;
  }
  console.log(shuffler);

  // console.log("everyday im shufflin");

  for (var i = 1; i < x.length; i++) {

    j = [i] - 1

    document.getElementById("gameContainer").childNodes[i].style.top = shuffler[j].y + 'px';
    document.getElementById("gameContainer").childNodes[i].style.left = shuffler[j].x + 'px';
    // tileOrientationY = y[i];
    // tileOrientationX = x[i];
    // tile[i].style.left = y[i] + 'px';
    // blankTile.style.top = 100 + 'px';
    // console.log(tileOrientationY);

  }
  document.getElementById("blankTile").style.top = shuffler[15].y + 'px';
  document.getElementById("blankTile").style.left = shuffler[15].x + 'px';

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

      this.style.left = blankTile.style.left;
      this.style.top = blankTile.style.top

      blankTile.style.top = positiony;
      blankTile.style.left = positionx;

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
