// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

function newImage(path, left, bottom) {
    let newCharacter = document.createElement('img')
    newCharacter.src = path
    newCharacter.style.position = 'fixed'
    newCharacter.style.left = left
    newCharacter.style.bottom = bottom
    return newCharacter;
}

let greenCharacterpath = 'assets/green-character.gif';
let greenCharacterleft = '100px';
let greenCharacterbottom = '100px';
let greenCharacter = newImage(greenCharacterpath, greenCharacterleft, greenCharacterbottom);
document.body.append(greenCharacter)

let pineTreePath = 'assets/pine-tree.png';
let pineTreeleft = '450px';
let pineTreebottom = '200px';
let pineTree = newImage(pineTreePath, pineTreeleft, pineTreebottom);
document.body.append(pineTree)

swordPath = 'assets/sword.png'
swordLeft = '500px'
swordBottom = '405px'
let sword = newImage(swordPath, swordLeft, swordBottom);
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

sword.addEventListener('dbclick', function(){
    sword.remove()
})



