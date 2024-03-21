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

treePath = 'assets/tree.png'
treeLeft = '200px'
treeBottom = '300px'
let tree = newImage(treePath, treeLeft, treeBottom);
document.body.append(tree)


pillarPath = 'assets/pillar.png'
pillarLeft = '350px'
pillarBottom = '100px'
let pillar = newImage(pillarPath, pillarLeft, pillarBottom);
document.body.append(pillar)


cratePath = 'assets/crate.png'
crateLeft = '150px'
crateBottom = '200px'
let crate = newImage(cratePath, crateLeft, crateBottom);
document.body.append(crate)


wellPath = 'assets/well.png'
wellLeft = '500px'
wellBottom = '425px'
let well = newImage(wellPath, wellLeft, wellBottom);
document.body.append(well)


function newItem(path, left, bottom) {
    let newIt = document.createElement('img')
    newIt.src = path
    newIt.style.position = 'fixed'
    newIt.style.left = left
    newIt.style.bottom = bottom
    return newIt;
}


shieldPath = 'assets/shield.png'
shieldLeft = '165px'
shieldBottom = '185px'
let shield = newImage(shieldPath, shieldLeft, shieldBottom);
document.body.append(shield)

shield.addEventListener('click', function(){
    shield.remove()
})

staffPath = 'assets/staff.png'
staffLeft = '600px'
staffBottom = '100px'
let staff = newImage(staffPath, staffLeft, staffBottom);
document.body.append(staff)

staff.addEventListener('click', function(){
    staff.remove()
})


