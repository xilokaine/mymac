let canvas = document.getElementById('space_invader')
let ctx = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight


repere()
//forme()
//circle()
//drawShape(ctx, 120, 90)
//protection()
//text()
image()



function forme(){
    ctx.save()
    ctx.fillStyle="#206BA4"
    ctx.lineWidth=10;
    ctx.lineJoin='round';
    ctx.beginPath()
    ctx.moveTo(10, 10);
    ctx.lineTo(250, 250)
    
    
    ctx.lineTo(560, 150)
    ctx.closePath();
    
    ctx.fill()
    
    ctx.stroke()
    
    ctx.restore()
    
}


function image(){
    
    ctx.save()
    
    let img = new Image();
    img.src = "./img/allship.png";
    //img.src = "./img/sprite_animation.png";
    
    x=0
    load = () =>{
        requestAnimationFrame(load)
        x+=1
        frameWidth = 1344/8
        frameHeight = 264
        column = 0
        
        // img.onload = (()=>{
        //     ctx.drawImage(img, column*frameWidth, 0, frameWidth, frameHeight, x, 50, frameWidth, frameHeight);
        // })

        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        repere()
 
        if (x > 300){
            column = 1
        } 
        if (x > 600){
            column = 2
        }

        if (x > 100){
            column = 7
        }
        //onsole.log(x)

        if (x === canvas.width){
            x=0
        }
        ctx.fillStyle = "rgba(255,0,0,0.6)"
        ctx.fillRect(10,10,100,100)

        ctx.beginPath()
        degres = 100
        ctx.arc(100,100, 100, 0, degres*Math.PI/180, false)
        ctx.stroke()

        ctx.fillRect(500,10,100,100)
        ctx.drawImage(img, column*frameWidth, 0, frameWidth, frameHeight, x, 600, frameWidth, frameHeight);
    }
    
    load()
    

    ctx.restore()
    
}

function protection(){
    ctx.save()
    ctx.fillRect(20,420,150,50)
    ctx.restore()
}


function text(){
    ctx.save()
    ctx.font = "30px impact"
    ctx.fillStyle = "rgba(255,0,0,0.5)"
    ctx.strokeText("Begin", 20, 150, 200);
    ctx.fillText("Begin", 20, 150, 200);
    ctx.fillText("Begin", 20, 250, 200);
    
    ctx.restore()
}





function drawShape(ctx, xoff, yoff) {
    ctx.save()
    ctx.beginPath();
    ctx.lineWidth = 14
    ctx.strokeStyle = "rgba(255,0,0, 0.9)"
    ctx.moveTo(158 + xoff, 194 + yoff);
    ctx.bezierCurveTo(580 + xoff, 70 + yoff, -59 + xoff, 34 + yoff, 302 + xoff, 195 + yoff);
    ctx.stroke();
    ctx.restore()
}

function circle (){
    ctx.save()
    
    ctx.lineWidth = 10
    ctx.strokeStyle = "#C40"
    ctx.fillStyle = "rgba(10,255,0,0.7)"
    ctx.beginPath();
    degres = 140
    ctx.arc(450,150,50,0,degres * (Math.PI/180));
    ctx.stroke()
    ctx.fill()
    ctx.restore()
}




function repere(){
    ctx.save()
    ctx.fillStyle="#fff"
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.lineWidth=1;
    ctx.strokeStyle='#abdced';
    
    //ctx.moveTo(10, 10);
    for (i=0;i<10000;i+=10){
        if (i%100 === 0){
            ctx.lineWidth=3;
        }else{
            ctx.lineWidth=1;
        }
        ctx.beginPath();
        ctx.lineTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke()
    }
    
    for (i=0;i<10000;i+=10){
        if (i%100 === 0){
            ctx.lineWidth=3;
        }else{
            ctx.lineWidth=1;
        }
        ctx.beginPath();
        ctx.lineTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke()
    }
    
    ctx.restore()
    
}
