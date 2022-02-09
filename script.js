var level = 1;
var body = document.querySelector('#bodyId');
var box = document.querySelector('#box1');
var boxCSS = window.getComputedStyle(box);
var brownKey = document.querySelector('#bronze-key');
var silverKey = document.querySelector('#silver-key');
var goldKey = document.querySelector('#gold-key');
var win = document.querySelector('#win');
var hint = document.querySelector('#door-hint');
var timer = document.querySelector('#timer-div');
var gameOver = document.querySelector('#gameOver');
var help = document.querySelector('#help');
var left = 0;
var inJumping = false;
var top1 = 630;
var complete = false;
win.style.visibility = 'hidden';
hint.style.visibility = 'hidden';
gameOver.style.visibility = 'hidden';
help.style.visibility = 'hidden';
// -----------------------------------level2---------------------------
var level2 = document.querySelector('#level2');
var skeltonPlayer = document.querySelector('#skelton');
var skeltonCSS = window.getComputedStyle(skeltonPlayer);
var SkLeft = 0;
var SkTop = 45;
var shadowPlayer = document.querySelector('#shadow');
var shadowCSS = window.getComputedStyle(shadowPlayer);
var shLeft = 1200;
var shTop = -542;
var lock1 = document.querySelector('#lock1');
var lock2 = document.querySelector('#lock2');
var lock3 = document.querySelector('#lock3');
var bar1 = true;
var bar2 = true;
var bar3 = true;
var timer1 = document.querySelector('#timer-div1');
var weight = document.querySelector('#moveBox');
var weightCSS = window.getComputedStyle(weight);
level2.style.visibility = 'hidden';
var pos1 = false;
var pos2 = false;
var pos3 = false;
var liftingPlayer = 1;
var skSilverKey = document.querySelector('#skeltonBronzekey');
var skGoldKey = document.querySelector('#skeltonGoldKey');
var shBronzeKey = document.querySelector('#shadowBronzeKey');
var shSilverKey = document.querySelector('#shadowSilverKey');
var shGoldKey = document.querySelector('#shadowGoldKey');
var finalWin = document.querySelector('#finalWin');
finalWin.style.visibility='hidden';
var lock1text = document.querySelector('#lock1text');
var lock2text = document.querySelector('#lock2text');
var skeltonDoor = document.querySelector('#skeltonDoor');
var weighttext = document.querySelector('#weighttext');
var step1 = document.querySelector('#step1');
var step2 = document.querySelector('#step2');
var gameOver1 = document.querySelector('#gameOver1');
lock1text.style.visibility='hidden';
lock2text.style.visibility='hidden';
skeltonDoor.style.visibility='hidden';
weighttext.style.visibility='hidden';
step2.style.visibility='hidden';
gameOver1.style.visibility='hidden';

// win.style.visibility = 'visible';
// brownKey.style.visibility = 'hidden';


function up()
{
    top1 = top1 - 5;
    console.log(boxCSS.marginTop);
    box.style.marginTop = top1+"px";
    box.style.backgroundImage = 'URL(image/Back-Skelton.jpg)';
}
function down()
{
    top1 = top1 + 5;
    console.log(boxCSS.marginTop);
    box.style.marginTop = top1+"px";
    box.style.backgroundImage = 'URL(image/Back-Skelton.jpg)';
}
function right()
{
    left = left+25;
    box.style.marginLeft = left+"px";
    box.style.backgroundImage = 'URL(image/Right-Skelton.jpg)';
}
function left1()
{
    left = left-25;
    box.style.marginLeft = left+"px";
    box.style.backgroundImage = 'URL(image/Left-Skelton.jpg)';
}

function skeltonLeft()
{
    SkLeft = SkLeft-25;
    skeltonPlayer.style.marginLeft = SkLeft+"px";
    skeltonPlayer.style.backgroundImage = 'URL(image/Left-Skelton2.jpg)';
}
function skeltonRight()
{
    SkLeft = SkLeft+25;
    skeltonPlayer.style.marginLeft = SkLeft+"px";
    skeltonPlayer.style.backgroundImage = 'URL(image/Right-Skelton2.jpg)';
    if(parseInt(shadowCSS.marginTop) == 23 && parseInt(shadowCSS.marginLeft) == 1450 && parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) == 1450)
    {
        if(shBronzeKey.style.visibility == 'hidden' && shGoldKey.style.visibility == 'hidden' && shSilverKey.style.visibility == 'hidden' && skSilverKey.style.visibility == 'hidden' && skGoldKey.style.visibility == 'hidden')
        {
            finalWin.style.visibility='visible';
            document.getElementById('myAudio').pause();
            level2.style.visibility='hidden';
        }    
    }
}
function skeltonUp()
{
    SkTop = SkTop-5;
    skeltonPlayer.style.marginTop = SkTop+"PX";
    skeltonPlayer.style.backgroundImage = 'URL(image/Back-Skelton2.jpg)';
}
function skeltonDown()
{
    SkTop = SkTop+5;
    skeltonPlayer.style.marginTop = SkTop+"px";
    skeltonPlayer.style.backgroundImage = 'URL(image/Back-Skelton2.jpg)';
}

function shadowLeft()
{
    shLeft = shLeft-25;
    shadowPlayer.style.marginLeft = shLeft+"px";
    shadowPlayer.style.backgroundImage = 'URL(image/shadow-left1.jpg)';
}
function shadowRight()
{
    shLeft = shLeft+25;
    shadowPlayer.style.marginLeft = shLeft+"px";
    shadowPlayer.style.backgroundImage = 'URL(image/shadow-right1.jpg)';
    if(parseInt(shadowCSS.marginTop) == 23 && parseInt(shadowCSS.marginLeft) == 1450 && parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) == 1450)
    {
        if(shBronzeKey.style.visibility == 'hidden' && shGoldKey.style.visibility == 'hidden' && shSilverKey.style.visibility == 'hidden' && skSilverKey.style.visibility == 'hidden' && skGoldKey.style.visibility == 'hidden')
        {
            finalWin.style.visibility='visible';
            document.getElementById('myAudio').pause();
            level2.style.visibility='hidden';
        }
    }
}
function shadowUp()
{
    shTop = shTop-5;
    shadowPlayer.style.marginTop = shTop+"PX";
    shadowPlayer.style.backgroundImage = 'URL(image/shadow-back1.jpg)';
}
function shadowDown()
{
    shTop = shTop+5;
    shadowPlayer.style.marginTop = shTop+"px";
    shadowPlayer.style.backgroundImage = 'URL(image/shadow-back1.jpg)';
}

function keyCheck(e)
{
    if(level == 1)
    {
        if(e.keyCode === 37)//left
        {
            if(parseInt(boxCSS.marginLeft) > 0)
            {
                if(parseInt(boxCSS.marginTop) == 345 && parseInt(boxCSS.marginLeft) < 680)
                    return;
                if(parseInt(boxCSS.marginLeft) > 320 && parseInt(boxCSS.marginLeft) < 400 && parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginTop) > 470)
                    return;
                if(parseInt(boxCSS.marginLeft) > 1225 && parseInt(boxCSS.marginLeft) < 1325 && parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginTop) > 350 )
                    return;
                if(parseInt(boxCSS.marginLeft) > 660 && parseInt(boxCSS.marginLeft) < 720 && parseInt(boxCSS.marginTop) < 345 && parseInt(boxCSS.marginTop) > 70)
                    return;
                if(parseInt(boxCSS.marginLeft) > 1000 && parseInt(boxCSS.marginLeft) < 1060 && parseInt(boxCSS.marginTop) < 65 && parseInt(boxCSS.marginTop) >= 0)
                    return;
                if(parseInt(boxCSS.marginLeft) < 50 && parseInt(boxCSS.marginTop) == 460)
                    brownKey.style.visibility = 'hidden';
                if(parseInt(boxCSS.marginLeft) < 100 && parseInt(boxCSS.marginTop) == 65)
                {
                    if(brownKey.style.visibility == 'hidden' && silverKey.style.visibility == 'hidden' && goldKey.style.visibility == 'hidden')
                     {
                        win.style.visibility = 'visible';
                        complete = true;
                     }   
                    else
                        hint.style.visibility = 'visible';
                }
                left1();
            }
        }
        if(e.keyCode === 39)//right
        {
            console.log(boxCSS.marginLeft);
            
            if(  parseInt(boxCSS.width)+parseInt(boxCSS.marginLeft) < 1500)
            {
                if(parseInt(boxCSS.marginTop) == 460 && parseInt(boxCSS.marginLeft) > 390)
                    return;
                if(parseInt(boxCSS.marginTop) == 65 && parseInt(boxCSS.marginLeft) > 1050)
                    return;
                if(parseInt(boxCSS.marginLeft) > 320 && parseInt(boxCSS.marginLeft) < 400 && parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginTop) > 470)
                    return;
                if(parseInt(boxCSS.marginLeft) > 1225 && parseInt(boxCSS.marginLeft) < 1325 && parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginTop) > 350 )
                    return;
                if(parseInt(boxCSS.marginLeft) > 660 && parseInt(boxCSS.marginLeft) < 720 && parseInt(boxCSS.marginTop) < 345 && parseInt(boxCSS.marginTop) > 70)
                    return;
                if(parseInt(boxCSS.marginLeft) > 1000 && parseInt(boxCSS.marginLeft) < 1060 && parseInt(boxCSS.marginTop) < 65 && parseInt(boxCSS.marginTop) >= 0)
                    return;
                if(parseInt(boxCSS.marginLeft) > 1400 && parseInt(boxCSS.marginTop) == 345)
                    silverKey.style.visibility = 'hidden';
                if(parseInt(boxCSS.marginLeft) > 1000 && parseInt(boxCSS.marginTop) == 65)
                    goldKey.style.visibility = 'hidden';
                if(parseInt(boxCSS.marginLeft) > 100 && parseInt(boxCSS.marginTop) == 65)
                    hint.style.visibility = 'hidden';
                right();
            }
    
        }
        if(e.keyCode === 38)//up
        {
            if(parseInt(boxCSS.marginLeft) > 320 && parseInt(boxCSS.marginLeft) < 400 && parseInt(boxCSS.marginTop) > 460)
            {
                up();
            }  
            else if(parseInt(boxCSS.marginLeft) > 1225 && parseInt(boxCSS.marginLeft) < 1325 && parseInt(boxCSS.marginTop) > 345)  
            {
                up();
            }
            else if(parseInt(boxCSS.marginLeft) > 660 && parseInt(boxCSS.marginLeft) < 720 && parseInt(boxCSS.marginTop) > 68)  
            {
                up();
            }
            else if(parseInt(boxCSS.marginLeft) > 1000 && parseInt(boxCSS.marginLeft) < 1060 && parseInt(boxCSS.marginTop) > 0)  
            {
                up();
            }
        }
        if(e.keyCode === 40)//down
        {
            if(parseInt(boxCSS.marginTop) == 630)
                return;
            else if(parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginLeft) > 320 && parseInt(boxCSS.marginLeft) < 400)
            {
                down();
            }
            else if(parseInt(boxCSS.marginTop) < 630 && parseInt(boxCSS.marginLeft) > 1225 && parseInt(boxCSS.marginLeft) < 1325)
            {
                down();
            }
            else if(parseInt(boxCSS.marginTop) < 345 && parseInt(boxCSS.marginLeft) > 660 && parseInt(boxCSS.marginLeft) < 720)
            {
                down();
            }
            else if(parseInt(boxCSS.marginTop) < 65 && parseInt(boxCSS.marginLeft) > 1000 && parseInt(boxCSS.marginLeft) < 1060)
            {
                down();
            }
        }
    }
    //--------------------------------------------------------------Level2-----------------------------------------------------------------//

    //-----------Skelton Player ( Player1 )--------------------------//
    else if(level == 2)
    {
        if(e.keyCode === 37)//left arrow
        {
            if(parseInt(skeltonCSS.marginTop) == 45 && parseInt(skeltonCSS.marginLeft) > 0)
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -105 && parseInt(skeltonCSS.marginLeft) > 625)
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -250 && parseInt(skeltonCSS.marginLeft) > 1275) 
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft) > 0) 
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) > 0)
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) > 825 && bar3 == false)
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) > 950 && bar3)
            {
                skeltonLeft();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) < 950 && parseInt(skeltonCSS.marginLeft) > 825 && bar3)
            {
                skeltonLeft();
            }
            
            //display message
            if(parseInt(skeltonCSS.marginTop) == 45 && parseInt(skeltonCSS.marginLeft) == 950 && bar1)
                lock1text.style.visibility='visible';
            else
                lock1text.style.visibility='hidden';
            
            
            
            

            //This is is used for lock no. 1 i.e. bottom level lock
            if(parseInt(skeltonCSS.marginTop)  == -105 && parseInt(skeltonCSS.marginLeft) == 1000)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(parseInt(shadowCSS.marginTop)  == -105-22 && parseInt(shadowCSS.marginLeft) == 1000)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos1 == true)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else 
            {
                bar1 = true;
                lock1.style.visibility='visible';
            }
            //This is is used for lock no. 2 i.e. middle level lock
            if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
                timer1.style.visibility='visible';
            }
            else if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
                timer1.style.visibility='visible';
            }
            else if(weight.style.visibility == 'visible' && pos2 == true)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
                timer1.style.visibility='visible';
            }
            else
            {
                bar2 = true;
                lock2.style.visibility='visible';
                timer1.style.visibility='visible';
            }
            //This is is used for lock no. 3 i.e. top level lock
            if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos3 == true)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else
            {
                bar3 = true;
                lock3.style.visibility='visible';
            }
        }
        if(e.keyCode === 39)//right arrow
        {
            if(parseInt(skeltonCSS.marginTop) == 45 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 925 && bar1)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == 45 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1500 && bar1==false)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -105 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1500)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -250 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1500)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 725)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1000)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1500 && bar3 == false)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 925 && bar3)
            {
                skeltonRight();
            }
            else if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) > 925 && parseInt(skeltonCSS.marginLeft)+parseInt(skeltonCSS.width) < 1500 && bar3)
            {
                skeltonRight();
            }

            //display message
            if(parseInt(skeltonCSS.marginTop) == 45 && parseInt(skeltonCSS.marginLeft) == 875 && bar1)
                lock1text.style.visibility='visible';
            else
                lock1text.style.visibility='hidden';
            
            if(parseInt(skeltonCSS.marginTop) == -520 && parseInt(skeltonCSS.marginLeft) == 1450 && skSilverKey.style.visibility=='visible' || skGoldKey.style.visibility=='visible')
                skeltonDoor.style.visibility='visible';
            else
                skeltonDoor.style.visibility='hidden';

            //This is is used for lock no. 1 i.e. bottom level lock
            if(parseInt(skeltonCSS.marginTop)  == -105 && parseInt(skeltonCSS.marginLeft) == 1000 )
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(parseInt(shadowCSS.marginTop)  == -105-22 && parseInt(shadowCSS.marginLeft) == 1000 )
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos1 == true)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else 
            {
                bar1 = true;
                lock1.style.visibility='visible';
            }
            //This is is used for lock no. 2 i.e. middle level lock
            if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos2 == true)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else
            {
                bar2 = true;
                lock2.style.visibility='visible';
            }
            //This is is used for lock no. 3 i.e. top level lock
            if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos3 == true)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else
            {
                bar3 = true;
                lock3.style.visibility='visible';
            }

            //silver key check
            if(parseInt(skeltonPlayer.style.marginTop) == -105 && parseInt(skeltonPlayer.style.marginLeft) == 1450)
                skSilverKey.style.visibility='hidden';
            
            if(parseInt(skeltonPlayer.style.marginTop) == -520 && parseInt(skeltonPlayer.style.marginLeft) == 1100)
                skGoldKey.style.visibility='hidden';
        }
        if(e.keyCode === 38)//up arrow
        {
            if(parseInt(skeltonCSS.marginTop) <= 45 && parseInt(skeltonCSS.marginTop) > -105 && parseInt(skeltonCSS.marginLeft) > 800 && parseInt(skeltonCSS.marginLeft) < 875)
            {
                skeltonUp();
            }
            else if(parseInt(skeltonCSS.marginTop) <= -105 && parseInt(skeltonCSS.marginTop) > -250 && parseInt(skeltonCSS.marginLeft) > 1250 && parseInt(skeltonCSS.marginLeft) < 1300)
            {
                skeltonUp();
            }
            else if(parseInt(skeltonCSS.marginTop) <= -105 && parseInt(skeltonCSS.marginTop) > -240 && parseInt(skeltonCSS.marginLeft) > 650 && parseInt(skeltonCSS.marginLeft) < 725)
            {
                skeltonUp();
            }
            else if(parseInt(skeltonCSS.marginTop) <= -240 && parseInt(skeltonCSS.marginTop) > -390 && parseInt(skeltonCSS.marginLeft) >= 0 && parseInt(skeltonCSS.marginLeft) < 50)
            {
                if(parseInt(skeltonCSS.marginTop) == -320 && bar2)
                    return;
                skeltonUp();
            }
            else if(parseInt(skeltonCSS.marginTop) <= -390 && parseInt(skeltonCSS.marginTop) > -520 && parseInt(skeltonCSS.marginLeft) > 800 && parseInt(skeltonCSS.marginLeft) < 875)
            {
                skeltonUp();
            }
            //display message
            if(parseInt(skeltonCSS.marginTop) == -320 && parseInt(skeltonCSS.marginLeft) == 0 && bar2)
                lock2text.style.visibility='visible';
            else
                lock2text.style.visibility='hidden';
        }
        if(e.keyCode === 40)//down arrow
        {
            if(parseInt(skeltonCSS.marginTop) < 45 && parseInt(skeltonCSS.marginTop) >= -105 && parseInt(skeltonCSS.marginLeft) > 800 && parseInt(skeltonCSS.marginLeft) < 875)
            {
                skeltonDown();
            }
            else if(parseInt(skeltonCSS.marginTop) < -105 && parseInt(skeltonCSS.marginTop) >= -250 && parseInt(skeltonCSS.marginLeft) > 1250 && parseInt(skeltonCSS.marginLeft) < 1300)
            {
                skeltonDown();
            }
            else if(parseInt(skeltonCSS.marginTop) < -105 && parseInt(skeltonCSS.marginTop) >= -240 && parseInt(skeltonCSS.marginLeft) > 650 && parseInt(skeltonCSS.marginLeft) < 725)
            {
                skeltonDown();
            }
            else if(parseInt(skeltonCSS.marginTop) < -240 && parseInt(skeltonCSS.marginTop) >= -390 && parseInt(skeltonCSS.marginLeft) >= 0 && parseInt(skeltonCSS.marginLeft) < 50)
            {
                if(parseInt(skeltonCSS.marginTop) == -390 && bar2)
                    return;
                skeltonDown();
            }
            else if(parseInt(skeltonCSS.marginTop) < -390 && parseInt(skeltonCSS.marginTop) >= -520 && parseInt(skeltonCSS.marginLeft) > 800 && parseInt(skeltonCSS.marginLeft) < 875)
            {
                skeltonDown();
            }
            if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) == 0 && bar2)
                lock2text.style.visibility='visible';
            else
                lock2text.style.visibility='hidden';
        }

        //-----------------Shadow Player ( Player 2 ) ------------------------//
        if(e.key === 'a')
        {
            if(parseInt(shadowCSS.marginTop) == 45-22 && parseInt(shadowCSS.marginLeft) > 0)
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -105-22 && parseInt(shadowCSS.marginLeft) > 625)
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -250-22 && parseInt(shadowCSS.marginLeft) > 1275) 
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft) > 0) 
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft) > 0)
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft) > 825 && bar3 == false)
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft) > 950 && bar3)
            {
                shadowLeft();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft) < 950 && parseInt(shadowCSS.marginLeft) > 825 && bar3)
            {
                shadowLeft();
            }
            
           

            //This is is used for lock no. 1 i.e. bottom level lock
            if(parseInt(shadowCSS.marginTop)  == -105-22 && parseInt(shadowCSS.marginLeft) == 1000)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop)  == -105 && parseInt(skeltonCSS.marginLeft) == 1000)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos1 == true)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else 
            {
                bar1 = true;
                lock1.style.visibility='visible';
            }
            //This is is used for lock no. 2 i.e. middle level lock
            if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos2 == true)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else
            {
                bar2 = true;
                lock2.style.visibility='visible';
            }
            //This is is used for lock no. 3 i.e. top level lock
            if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos3 == true)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else
            {
                bar3 = true;
                lock3.style.visibility='visible';
            }

            //bronze key check
            if(parseInt(shadowPlayer.style.marginTop) == -542 && parseInt(shadowPlayer.style.marginLeft) == 875)
                shBronzeKey.style.visibility='hidden';
            if(parseInt(shadowCSS.marginTop) == -542 && parseInt(shadowCSS.marginLeft) == 875)
                shBronzeKey.style.visibility='hidden';
            
        } 
        
        if(e.key === 'd')//right 
        {
            if(parseInt(shadowCSS.marginTop) == 45-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 925 && bar1)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == 45-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1500 && bar1==false)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -105-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1500)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -250-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1500)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 725)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1000)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1500 && bar3 == false)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 925 && bar3)
            {
                shadowRight();
            }
            else if(parseInt(shadowCSS.marginTop) == -520-22 && parseInt(shadowCSS.marginLeft) > 925 && parseInt(shadowCSS.marginLeft)+parseInt(shadowCSS.width) < 1500 && bar3)
            {
                shadowRight();
            }
          
            //This is is used for lock no. 1 i.e. bottom level lock
            if(parseInt(shadowCSS.marginTop)  == -105-22 && parseInt(shadowCSS.marginLeft) == 1000 )
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop) == -105 && parseInt(skeltonCSS.marginLeft) == 1000)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos1 == true)
            {
                bar1 = false;
                lock1.style.visibility='hidden';
            }
            else 
            {
                bar1 = true;
                lock1.style.visibility='visible';
            }
            //This is is used for lock no. 2 i.e. middle level lock
            if(parseInt(shadowCSS.marginTop) == -240-22 && parseInt(shadowCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop) == -240 && parseInt(skeltonCSS.marginLeft) == 250)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos2 == true)
            {
                bar2 = false;
                lock2.style.visibility='hidden';
            }
            else
            {
                bar2 = true;
                lock2.style.visibility='visible';
            }
            //This is is used for lock no. 3 i.e. top level lock
            if(parseInt(shadowCSS.marginTop) == -390-22 && parseInt(shadowCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(parseInt(skeltonCSS.marginTop) == -390 && parseInt(skeltonCSS.marginLeft) == 950)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else if(weight.style.visibility == 'visible' && pos3 == true)
            {
                bar3 = false;
                lock3.style.visibility='hidden';
            }
            else
            {
                bar3 = true;
                lock3.style.visibility='visible';
            }

            //bronze key
            if(parseInt(shadowPlayer.style.marginTop) == -542 && parseInt(shadowPlayer.style.marginLeft) == 875)
                shBronzeKey.style.visibility='hidden';
            //silver key 
            if(parseInt(shadowPlayer.style.marginTop) == -272 && parseInt(shadowPlayer.style.marginLeft) == 1400)
                shSilverKey.style.visibility='hidden';
            //gold key
            if(parseInt(shadowPlayer.style.marginTop) == 23 && parseInt(shadowPlayer.style.marginLeft) == 1300)
                shGoldKey.style.visibility='hidden';
        }

        if(e.key === 'w')
        {
            if(parseInt(shadowCSS.marginTop) <= 45-22 && parseInt(shadowCSS.marginTop) > -105-22 && parseInt(shadowCSS.marginLeft) > 800 && parseInt(shadowCSS.marginLeft) < 875)
            {
                shadowUp();
            }
            else if(parseInt(shadowCSS.marginTop) <= -105-22 && parseInt(shadowCSS.marginTop) > -250-22 && parseInt(shadowCSS.marginLeft) > 1250 && parseInt(shadowCSS.marginLeft) < 1300)
            {
                shadowUp();
            }
            else if(parseInt(shadowCSS.marginTop) <= -105-22 && parseInt(shadowCSS.marginTop) > -240-22 && parseInt(shadowCSS.marginLeft) > 650 && parseInt(shadowCSS.marginLeft) < 725)
            {
                shadowUp();
            }
            else if(parseInt(shadowCSS.marginTop) <= -240-22 && parseInt(shadowCSS.marginTop) > -390-22 && parseInt(shadowCSS.marginLeft) >= 0 && parseInt(shadowCSS.marginLeft) < 50)
            {
                if(parseInt(shadowCSS.marginTop) == -320-22 && bar2)
                    return;
                shadowUp();
            }
            else if(parseInt(shadowCSS.marginTop) <= -390-22 && parseInt(shadowCSS.marginTop) > -520-22 && parseInt(shadowCSS.marginLeft) > 800 && parseInt(shadowCSS.marginLeft) < 875)
            {
                shadowUp();
            }
           
        }

        if(e.key === 's')
        {
            if(parseInt(shadowCSS.marginTop) < 45-22 && parseInt(shadowCSS.marginTop) >= -105-22 && parseInt(shadowCSS.marginLeft) > 800 && parseInt(shadowCSS.marginLeft) < 875)
            {
                shadowDown();
            }
            else if(parseInt(shadowCSS.marginTop) < -105-22 && parseInt(shadowCSS.marginTop) >= -250-22 && parseInt(shadowCSS.marginLeft) > 1250 && parseInt(shadowCSS.marginLeft) < 1300)
            {
                shadowDown();
            }
            else if(parseInt(shadowCSS.marginTop) < -105-22 && parseInt(shadowCSS.marginTop) >= -240-22 && parseInt(shadowCSS.marginLeft) > 650 && parseInt(shadowCSS.marginLeft) < 725)
            {
                shadowDown();
            }
            else if(parseInt(shadowCSS.marginTop) < -240-22 && parseInt(shadowCSS.marginTop) >= -390-22 && parseInt(shadowCSS.marginLeft) >= 0 && parseInt(shadowCSS.marginLeft) < 50)
            {
                if(parseInt(shadowCSS.marginTop) == -390-22 && bar2)
                    return;
                shadowDown();
            }
            else if(parseInt(shadowCSS.marginTop) < -390-22 && parseInt(shadowCSS.marginTop) >= -520-22 && parseInt(shadowCSS.marginLeft) > 800 && parseInt(shadowCSS.marginLeft) < 875)
            {
                shadowDown();
            }
           
        }



        //-------------------------Weight Box check -----------------------------------------//
        if(e.key === 'f')
        {
            timer1.style.visibility='visible';
            if(parseInt(skeltonCSS.marginTop) == (parseInt(weightCSS.marginTop)-362) && parseInt(skeltonCSS.marginLeft) == parseInt(weightCSS.marginLeft))
            {
                weight.style.visibility='hidden';
                bar1 = true;
                lock1.style.visibility = 'visible';
                pos1=false;
                pos2=false;
                pos3=false;
                liftingPlayer=1;
            }
            else if(parseInt(shadowCSS.marginTop) == (parseInt(weightCSS.marginTop)-384) && parseInt(shadowCSS.marginLeft) == parseInt(weightCSS.marginLeft))
            {
                weight.style.visibility='hidden';
                bar1 = true;
                lock1.style.visibility = 'visible';
                pos1=false;
                pos2=false;
                pos3=false;
                liftingPlayer=2;
            }
            else if(weight.style.visibility=='hidden')
            {
                if(liftingPlayer == 1)
                {
                    weight.style.marginTop = (parseInt(skeltonCSS.marginTop)+362)+"px";
                    weight.style.marginLeft = skeltonCSS.marginLeft;
                    weight.style.visibility = 'visible';
                    if(parseInt(weightCSS.marginTop) == 257 && parseInt(weightCSS.marginLeft) == 1000)
                        pos1=true;
                    else
                        pos1=false;
                    
                    if(parseInt(weightCSS.marginTop) == 122 && parseInt(weightCSS.marginLeft) == 250)
                        pos2=true;
                    else
                        pos2=false;

                    if(parseInt(weightCSS.marginTop) == -28 && parseInt(weightCSS.marginLeft) == 950)
                        pos3=true;
                    else
                        pos3=false;
                }
                else if(liftingPlayer == 2)
                {
                    weight.style.marginTop = (parseInt(shadowCSS.marginTop)+384)+"px";
                    weight.style.marginLeft = shadowCSS.marginLeft;
                    weight.style.visibility = 'visible';
                    if(parseInt(weightCSS.marginTop) == 257 && parseInt(weightCSS.marginLeft) == 1000)
                        pos1=true;
                    else
                        pos1=false;

                    if(parseInt(weightCSS.marginTop) == 122 && parseInt(weightCSS.marginLeft) == 250)
                        pos2=true;
                    else
                        pos2=false;

                    if(parseInt(weightCSS.marginTop) == -28 && parseInt(weightCSS.marginLeft) == 950)
                        pos3=true;
                    else
                        pos3=false;
                }

            }
            
        }
    }
    
}
function keyCheckUp(e)
{
    if(level==1)
    {
        if(e.keyCode===37 || e.keyCode===38 || e.keyCode===39 || e.keyCode===40)
            box.style.backgroundImage = 'URL(image/skelton.png)';
    }
    else if(level==2)
    {
        if(e.keyCode===37 || e.keyCode===38 || e.keyCode===39 || e.keyCode===40)
            skeltonPlayer.style.backgroundImage = 'URL(image/skelton2.jpg)';
        else if(e.key==='a' || e.key==='s' || e.key==='d' || e.key==='w')
            shadowPlayer.style.backgroundImage = 'URL(image/shadow-front1.jpg)'
    }
    
    
}
function startIt()
{
    document.getElementById("myAudio").play();
	var start = document.getElementById("start");
    start.style.visibility = 'hidden';
    document.addEventListener("keydown",keyCheck);
    document.addEventListener("keyup",keyCheckUp);
    if(level==1)
         startTime(25);
    else if(level == 2)
        next();
}
function startTime(sec)
{
    if(level==1)
    {
        timer.innerHTML="Time: "+sec;
        var mytimer = setInterval(function(){
            
            var timeString=" ";
            if(sec == 0)
            {
                if(complete==false)
                {
                    gameOver.style.visibility = 'visible';
                    document.getElementById("myAudio").pause();
                    var level1 = document.querySelector('#background');
                    level1.style.visibility = 'hidden';
                }
                clearInterval(mytimer);
            }
    
            else
                sec--;
            if(sec < 10)
                timeString = "Time: "+"0"+sec;
            else
                timeString = "Time: "+sec;
            timer.innerHTML=timeString;
        },1000);
    }
    else if(level==2)
    {
        timer1.innerHTML="Time: "+sec;
        var mytimer = setInterval(function(){
            
            var timeString=" ";
            if(sec == 0)
            {
                if(finalWin.style.visibility=='hidden')
                {
                    gameOver1.style.visibility = 'visible';
                    document.getElementById("myAudio").pause();
                    level2.style.visibility = 'hidden';
                }
                clearInterval(mytimer);
            }
    
            else
                sec--;
            if(sec < 10)
                timeString = "Time: "+"0"+sec;
            else
                timeString = "Time: "+sec;
            timer1.innerHTML=timeString;
        },1000);
    }

}
function over()
{
    location.reload();
}
function helpIt()
{
    var start = document.querySelector('#start');
    start.style.visibility = 'hidden';
    help.style.visibility = 'visible';
}
function backIt()
{
    var start = document.querySelector('#start');
    start.style.visibility = 'visible';
    help.style.visibility = 'hidden';
}
function next()
{
    document.getElementById("myAudio").pause();
    var level1 = document.querySelector('#background');
    level1.style.visibility = 'hidden';
    win.style.visibility = 'hidden';
    body.style.backgroundImage = 'URL(image/brickWall.png)';
    level2.style.visibility = 'visible';
    
}
function next1()
{
    step1.style.visibility='hidden';
    step2.style.visibility='visible';
}
function next2()
{
    step2.style.visibility='hidden';
    document.getElementById("myAudio").play();
    level = 2;
    startTime(60);
}
function restart()
{
    level=1;
    level2.style.visibility = 'hidden';
    body.style.backgroundImage = 'URL(image/game-back.png)';
    finalWin.style.visibility = 'hidden';
    var level1 = document.querySelector('#background');
    level1.style.visibility = 'visible';
    location.reload();
    startIt();
}
