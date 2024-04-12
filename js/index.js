var map = [];

let newElement;
let poistion;

// modify map
let boardHeight = 27;
let boardWidth = 19;
let amountCells = boardWidth * boardHeight; 
let board = document.getElementById("board");


for (let index = 0; index < amountCells; index++) {
    
    newElement = document.createElement("button");
    // assigning the id
    newElement.className = "cell";
    newElement.id = index;
    map.push(0)
    // creating the cells inside the board
    board.insertAdjacentElement("afterbegin", newElement);

    // Setting the atribute onclick in the buttons
    let element = document.querySelector('button');
    element.setAttribute("onclick", "getId(this)");

}


// we get the id of the element
function getId(btn){
    // alert(btn.id)
    position = Number(btn.id);
    // console.log(Number(position));
    if (map[position] == 3) {
        map[position] = 0;
        // if we don't app the img, the selector is still working
        document.getElementById(btn.id).style.backgroundImage = "";
    } else if (map[position] == 0){
        map[position] = 1;
        document.getElementById(btn.id).style.backgroundImage = "url('assets/imgs/dungeon-path.jpg')";
    } else if (map[position] == 1){
        map[position] = 2;
        document.getElementById(btn.id).style.backgroundImage = "url('assets/imgs/dungeon-player.jpg')";
    } else if (map[position] == 2){
        map[position] = 3;
        document.getElementById(btn.id).style.backgroundImage = "url('assets/imgs/dungeon-exit.jpg')";
    }
    // console.log(map[poistion])
    // console.log(map);

}

function generate() {
    console.log(map)
    document.getElementById("map").value =  map ;
}

let element;
function draw(){
    var mapValues = document.getElementById("map").value;
    map = mapValues.split(",");
    // console.log(newMap);
    for (let index = -1; index < map.length; index++) {
        if (map[index] == 0){
            document.getElementById(index).style.backgroundImage = "url('assets/imgs/dungeon-unselected.jpg')";;
        } else if (map[index] == 1){
            document.getElementById(index).style.backgroundImage = "url('assets/imgs/dungeon-path.jpg')";
        }
    }
}

function erase(){
    for (let index = 0; index < map.length; index++) {
        if (map[index] != 0){
            // console.log(map[index]);
            document.getElementById(index).style.backgroundImage = "url('assets/imgs/dungeon-unselected.jpg')";;
        } 
    }
}

function copy(id) {
    var content = document.getElementById(id);
    content.select()
    document.execCommand("Copy")
}
