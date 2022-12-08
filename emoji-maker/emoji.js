
//Select skin card
var skincard = document.getElementById('select-skin-card');


//selecting yellow skin
var yellowskin = document.getElementById('yellow-skin');
//selecting green skin
var greenskin = document.getElementById('green-skin');
//selecting red skin
var redskin = document.getElementById('red-skin');
//selecting right card for skin
var skin = document.getElementById('skin');

yellowskin.addEventListener('click',function() {
    skin.src = '/emoji-maker/assets/skin/yellow.png';
})

greenskin.addEventListener('click',function() {
    skin.src = '/emoji-maker/assets/skin/green.png';
})

redskin.addEventListener('click',function() {
    skin.src = '/emoji-maker/assets/skin/red.png';
})

var nextarrow = document.getElementById('next');
var eyes = document.getElementById('select-eyes-card');
nextarrow.addEventListener('click', function(){
    eyes.style.display='block';
    skincard.style.display='none'

})

//eyes part 
//select eyes
var normaleyes = document.getElementById('eye-normal');
var eyeclosed = document.getElementById('eye-closed');
var eyelong = document.getElementById('eye-long');
var eyelaughing = document.getElementById('eye-laughing');
var eyerolling = document.getElementById('eye-rolling');
var eyewinking = document.getElementById('eye-winking');

//selecting right card for eyes
var righteyecard = document.getElementById('eyes')

normaleyes.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/normal.png';
})

eyeclosed.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/closed.png';
})

eyelong.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/long.png';
})

eyelaughing.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/laughing.png';
})

eyerolling.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/rolling.png';
})

eyewinking.addEventListener('click',function() {
    righteyecard.src = '/emoji-maker/assets/eyes/winking.png';
})

var showmouthcard = document.getElementById('show-mouth-card');
var showskincards = document.getElementById('show-skin-card')

var mouth = document.getElementById('select-mouth-card')

showmouthcard.addEventListener('click', function(){
    eyes.style.display='none'
    mouth.style.display='block';
})

showskincards.addEventListener('click', function(){
    skincard.style.display='block';
    eyes.style.display='none';
})



//mouth 
var mouths = document.getElementById('mouth');
//select mouth card

//select privious slide
var showeyecard = document.getElementById('showeyecard');
//select mouth
var mouthopen = document.getElementById('mouth-open');
var mouthsmiling = document.getElementById('mouth-smiling');
var mouthstraight = document.getElementById('mouth-straight');
var mouthsad = document.getElementById('mouth-sad');
var mouthteeth = document.getElementById('mouth-teeth');

mouthopen.addEventListener('click',function() {
    mouths.src = '/emoji-maker/assets/mouth/open.png';
})
mouthsmiling.addEventListener('click',function() {
    mouths.src = '/emoji-maker/assets/mouth/smiling.png';
})
mouthstraight.addEventListener('click',function() {
    mouths.src = '/emoji-maker/assets/mouth/straight.png';
})
mouthsad.addEventListener('click',function() {
    mouths.src = '/emoji-maker/assets/mouth/sad.png';
})
mouthteeth.addEventListener('click',function() {
    mouths.src = '/emoji-maker/assets/mouth/teeth.png';
})

showeyecard.addEventListener('click', function(){
    eyes.style.display = 'block';
    mouth.style.display = 'none';
})


var finish = document.getElementById('finish')
finish.addEventListener('click', function(){
    mouth.style.display = 'none';
})