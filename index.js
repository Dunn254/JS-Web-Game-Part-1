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

let greenCharacter = newImage('assets/green-character.gif', '100px', '100px');
document.body.append(greenCharacter)

let pineTree = newImage('assets/pine-tree.png', '450px', '200px');
document.body.append(pineTree)

let sword = newImage('assets/sword.png', '500px', '405px');
document.body.append(sword)


sword.addEventListener('click', function(){
    sword.remove()
})

sword.addEventListener('dbclick', function(){
    sword.remove()
})

let tree = newImage('assets/tree.png', '200px', '300px');
document.body.append(tree)

let pillar = newImage('assets/pillar.png', '350px', '100px');
document.body.append(pillar)

let crate = newImage('assets/crate.png', '150px', '200px');
document.body.append(crate)

let well = newImage('assets/well.png', '500px', '425px');
document.body.append(well)


function newItem(path, left, bottom) {
    let newIt = document.createElement('img')
    newIt.src = path
    newIt.style.position = 'fixed'
    newIt.style.left = left
    newIt.style.bottom = bottom
    return newIt;
}

let shield = newImage('assets/shield.png', '165px', '185px');
document.body.append(shield)

shield.addEventListener('click', function(){
    shield.remove()
})

let staff = newImage('assets/staff.png', '600px', '100px');
document.body.append(staff)

staff.addEventListener('click', function(){
    staff.remove()
})




// Get window width and height
var w = window.innerWidth;
var h = window.innerHeight;

// Calculate the number of repetitions needed to fill the width
var repetitions = parseInt(w / 100);

// Set background images for the top and bottom sections using a loop
var topBackground = '';
var bottomBackground = '';
for (var i = 0; i < repetitions; i++) {
topBackground += "url('assets/sky.png'), ";
bottomBackground += "url('assets/grass.png'), ";
}

// Remove the trailing comma and space from the background strings
topBackground = topBackground.slice(0, -2);
bottomBackground = bottomBackground.slice(0, -2);

// Create top section div and set its styles
var topSection = document.createElement('div');
topSection.className = 'section top-section';
topSection.style.height = (h / 2) + 'px';
topSection.style.backgroundImage = topBackground;

// Create bottom section div and set its styles
var bottomSection = document.createElement('div');
bottomSection.className = 'section bottom-section';
bottomSection.style.height = (h / 2) + 'px';
bottomSection.style.backgroundImage = bottomBackground;

// Append the sections to the body
document.body.appendChild(topSection);
document.body.appendChild(bottomSection);

