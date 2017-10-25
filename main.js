let toAdd = document.getElementById("gameContainer");
let buttons = document.getElementsByClassName("switch");

let org = [];

let shuffle = function() {

  let picker = org.slice();
  // let blankTileLocation = picker[15].tile;
  // console.log(blankTileLocation);

  for (var x = 0; x < 400; x++) {

    let randomDirection = Math.ceil(Math.random() * 4);
    let positionXblank = parseInt(blankTile.style.left);
    let positionYblank = parseInt(blankTile.style.top);
    // console.log(randomDirection);

    if (randomDirection === 1) {

      for (var i = 0; i < org.length; i++) {
        let topChecker = picker[i].y;
        let sideChecker = picker[i].x;


        let distanceX = (positionXblank - sideChecker);
        let distanceY = (positionYblank - topChecker);
        // console.log("distance X " + distanceX);
        // console.log("distance Y " + distanceY);

        if ((distanceX === 0 && distanceY === 100)) {
          j = i + 1
          let swapItem = picker[i];
          let blankTile = picker[15];
          picker[i] = blankTile;
          picker[15] = swapItem;
            document.getElementById("gameContainer").childNodes[j].style.top = positionYblank + 'px';
            document.getElementById("gameContainer").childNodes[j].style.left = positionXblank + 'px';
            document.getElementById("blankTile").style.top = picker[i].y + 'px';
            document.getElementById("blankTile").style.left = picker[i].x + 'px';
            // console.log("hit 1");
        }
      }
    }
    else if (randomDirection === 2) {

      for (var i = 0; i < org.length; i++) {
        let topChecker = picker[i].y;
        let sideChecker = picker[i].x;

        let distanceX = (positionXblank - sideChecker);
        let distanceY = (positionYblank - topChecker);
        // console.log("distance X " + distanceX);
        // console.log("distance Y " + distanceY);

        if ((distanceX === 100 && distanceY === 0)) {
          j = i + 1
          let swapItem = picker[i];
          let blankTile = picker[15];
          picker[i] = blankTile;
          picker[15] = swapItem;
            document.getElementById("gameContainer").childNodes[j].style.top = positionYblank + 'px';
            document.getElementById("gameContainer").childNodes[j].style.left = positionXblank + 'px';
            document.getElementById("blankTile").style.top = picker[i].y + 'px';
            document.getElementById("blankTile").style.left = picker[i].x + 'px';
            // console.log("hit 2");
        }
      }
    }
    else if (randomDirection === 3) {

      for (var i = 0; i < org.length; i++) {
        let topChecker = picker[i].y;
        let sideChecker = picker[i].x;

        let distanceX = (positionXblank - sideChecker);
        let distanceY = (positionYblank - topChecker);


        if ((distanceX === -100 && distanceY === 0)) {
          j = i + 1
          let swapItem = picker[i];
          let blankTile = picker[15];
          picker[i] = blankTile;
          picker[15] = swapItem;
            document.getElementById("gameContainer").childNodes[j].style.top = positionYblank + 'px';
            document.getElementById("gameContainer").childNodes[j].style.left = positionXblank + 'px';
            document.getElementById("blankTile").style.top = picker[i].y + 'px';
            document.getElementById("blankTile").style.left = picker[i].x + 'px';
            // console.log("hit 3");
        }
      }
    }
    else if (randomDirection === 4) {

      for (var i = 0; i < org.length; i++) {
        let topChecker = picker[i].y;
        let sideChecker = picker[i].x;

        let distanceX = (positionXblank - sideChecker);
        let distanceY = (positionYblank - topChecker);


        if ((distanceX === 0 && distanceY === -100)) {
          j = i + 1
          let swapItem = picker[i];
          let blankTile = picker[15];
          picker[i] = blankTile;
          picker[15] = swapItem;
            document.getElementById("gameContainer").childNodes[j].style.top = positionYblank + 'px';
            document.getElementById("gameContainer").childNodes[j].style.left = positionXblank + 'px';
            document.getElementById("blankTile").style.top = picker[i].y + 'px';
            document.getElementById("blankTile").style.left = picker[i].x + 'px';
            // console.log("hit 4");
        }
      }
    }
  }

  console.log(picker);

  }




let hover = function(){
  let x = parseInt(this.style.left);
  let y = parseInt(this.style.top);
  let blankY = parseInt(blankTile.style.top);
  let blankX = parseInt(blankTile.style.left);
  let distanceX = (blankX - x);
  let distanceY =  (blankY - y);


    if ((distanceX === -100 && distanceY === 0)) {
      //left
      document.body.style.cursor = 'e-resize';
    }else if ((distanceX === 0 && distanceY === 100)) {
      //down
      document.body.style.cursor = 'n-resize';
    }else if((distanceX === 0 && distanceY === -100)){
      //up
      document.body.style.cursor = 's-resize';
    }else if((distanceX === 100 && distanceY === 0)){
      //right
      document.body.style.cursor = 'w-resize';
    }
    else{
      document.body.style.cursor = 'default';
    }

}


let swapper = function() {

      let x = parseInt(this.style.left);
      let y = parseInt(this.style.top);
      let blankY = parseInt(blankTile.style.top);
      let blankX = parseInt(blankTile.style.left);

      let distanceX = (blankX - x);
      let distanceY =  (blankY - y);

  if ((distanceX === -100 && distanceY === 0) || (distanceX === 100 && distanceY === 0) || (distanceX === 0 && distanceY === 100) || (distanceX === 0 && distanceY === -100)) {

      let positionx = this.style.left;
      let positiony = this.style.top;
      let positionXblank = blankTile.style.left;
      let positionYblank = blankTile.style.top;
      // let xAnimator = this.style.left;
      // let yAnimator = this.style.top;


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
  //  newDiv.addEventListener("swap", false); //useless
   toAdd.appendChild(newDiv);
   newDiv.style.backgroundPosition = picCol[i]*100 + "px" + ' ' + picRow[i]*100 + "px";
   newDiv.style.backgroundImage = 'url("cat.jpg")';
   newDiv.addEventListener("mouseover", hover)
   org.push({tile: newDiv.id, x: col[i]*100, y: row[i]*100});
  //  boardTiles[row][col]=div;
}

  var blankTile = document.createElement('div');
      blankTile.id = 'blankTile';
      blankTile.className = 'tile';
      blankTile.style.left = 400 + "px";
      blankTile.style.top = 400 + "px";
      blankTile.onclick = swapper;
      toAdd.appendChild(blankTile);
      org.push({tile: blankTile.id, x: 400, y: 400})

      console.log(org);
