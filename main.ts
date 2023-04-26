let sprite;
let x = 2;
let y = 4;
let enemy_x = randint(0, 4);
let enemy_y =-1;
let score = 0;
let sound = true;
let gamespead = 500;






up();
function up() {
    led.plot(x,y);
}
function left() {
    x = x-1;
    up();
    led.unplot(x+1,y);
}
function right() {
    x= x+1
    up()
    led.unplot(x-1,y)
}
if (sound == true) {
   music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
}

let p=0
basic.forever(function () {






led.unplot(enemy_x,enemy_y)

enemy_y = enemy_y + 1


led.plot(enemy_x,enemy_y)


basic.pause(gamespead)

})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    sound = false;
    if (sound){
        sound = false
    }
})

input.onButtonPressed(Button.A, left);
input.onButtonPressed(Button.B, right);

basic.forever(function () {
    if (x == 5) {
        x = 0;
        up();
    }
    else if (x == -1) {
      x= 4
      up()  
    
   
    }
    else if (enemy_y == 5) {

        basic.clearScreen()
        basic.showNumber(score);
        enemy_y = -1
        enemy_x = randint(0, 4);
       }
    else if (x == enemy_x && y == enemy_y )  {
        score = score +1
        gamespead = gamespead - score / 3
        console.log(gamespead)
        if (gamespead <  300) {
            gamespead = 700
        }
        //basic.showNumber(gamespead)
        enemy_y = -1
        enemy_x = randint(0, 4);
        if (sound == true) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
        }
    
})
