let toAdd = document.getElementById("gameContainer");
let buttons = document.getElementsByClassName("switch");


let org = [];


let shuffle = function() {

  let shuffler = [];

  for (var i = 1; i < row.length; i++) {

    let tileOrientationX = parseInt(document.getElementById("gameContainer").childNodes[i].style.left);
    let tileOrientationY = parseInt(document.getElementById("gameContainer").childNodes[i].style.top);
    shuffler.push({x: tileOrientationX, y: tileOrientationY});

  }

  console.log(shuffler);
  console.log(org);

  for (var i = shuffler.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffler[i];
        shuffler[i] = shuffler[j];
        shuffler[j] = temp;
  }
  for (var i = 1; i < shuffler.length; i++) {
    j = [i] - 1
    document.getElementById("gameContainer").childNodes[i].style.top = shuffler[j].y + 'px';
    document.getElementById("gameContainer").childNodes[i].style.left = shuffler[j].x + 'px';
  }
  document.getElementById("blankTile").style.top = shuffler.slice(-1)[0].y + 'px';
  document.getElementById("blankTile").style.left = shuffler.slice(-1)[0].x + 'px';

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
      let positionXblank = blankTile.style.left;
      let positionYblank = blankTile.style.top;
      let xAnimator = this.style.left;
      let yAnimator = this.style.top;

      // let id = setInterval(frame, 5);
      //
      // function frame(){
      //   if (xAnimator == positionXblank){
      //     console.log(positionx);
      //     clearInterval(id);
      //   } else{
      //     pos++
      //     yAnimator = pos + 'px';
      //     xAnimator = pos + 'px';
      //     console.log(positionx);
      //   }
      // };


      this.style.left = positionXblank;
      this.style.top = positionYblank;

      blankTile.style.top = positiony;
      blankTile.style.left = positionx;
  }
}

let reset = function(){
  for (var i = 1; i < org.length; i++) {
    j = [i] - 1
    document.getElementById("gameContainer").childNodes[i].style.top = org[j].y + 'px';
    document.getElementById("gameContainer").childNodes[i].style.left = org[j].x + 'px';
  }
  document.getElementById("blankTile").style.top = org.slice(-1)[0].y + 'px';
  document.getElementById("blankTile").style.left = org.slice(-1)[0].x + 'px';


};

row = [0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];
col = [0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4];
picCol = [0,0,3,2,1,0,3,2,1,0,3,2,1,0,3,2,1];
picRow =[0,0,0,0,0,3,3,3,3,2,2,2,2,1,1,1,1];

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
   newDiv.addEventListener("swap", false);
   toAdd.appendChild(newDiv);
   newDiv.style.backgroundPosition = picCol[i]*100 + "px" + ' ' + picRow[i]*100 + "px";
   newDiv.style.backgroundImage = 'url("cat.jpg")';
   org.push({x: col[i]*100, y: row[i]*100});
  //  boardTiles[row][col]=div;
}

  var blankTile = document.createElement('div');
      blankTile.id = 'blankTile';
      blankTile.className = 'tile';
      blankTile.style.left = 400 + "px";
      blankTile.style.top = 400 + "px";
      blankTile.onclick = swapper;
      toAdd.appendChild(blankTile);
      org.push({x: 400, y: 400})

for (var i = 0; i < buttons.length; i++) {
  console.log("Button " + buttons[i].value + " Top Offset " + buttons[i].offsetTop)
  console.log("Button " + buttons[i].value + " Bottom Offset " + buttons[i].offsetLeft)
};
