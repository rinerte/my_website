"use strict"

export const GAME = new function(){
    let GameOverEvent = new Event("GameOver", {bubbles:true, cancelable: true});
    let GAME = this;
    let lastSpawned = Date.now(), spawnInterval;
    let canvas, context;
    let height, width;
    let objects = [];
    let objects_count = 0;
    let down_keys = [];
    let enemyImage, playerImage, bulletImage;
    let player;
    let reloadTimer = 0;

    let scoreLabel,score =0;

    let GameOver = false;

    const enemy_ai = (object) =>{

        if(object.y>450){
            object.destroy();
            return;
        }

        object.y+=object.speed;
        let timeNow = Date.now();
        object.acceleration = object.power/object.mass;

        if(object.power<object.maxPower) object.power+=object.powerAcceleration * (timeNow - object.lastProcessedTime);

        object.speed += object.acceleration*(timeNow - object.lastProcessedTime);
        object.lastProcessedTime = timeNow;

        if(object.intersect(player)){
            player.destroy();
            GAME.EndGame();
        }
    };

    const fire = (x,y) =>{
                if (reloadTimer > 30){
                    GAME.NewObject('bullet',x,y,6,30,bulletImage,bullet_controller);
                    reloadTimer = 0;
                };
            };

    const bullet_controller = (object) =>{
        
        let now = Date.now();
        object.y -= 300*((now-object.lastProcessedTime)/1000);
        object.lastProcessedTime = Date.now();
        if(object.y+object.height <0){
            object.destroy();
            return;
        }
        

        for(let i = 0;i<objects.length;i++){
            if(object.intersect(objects[i])){
                if(objects[i].type=='enemy'){
                    objects[i].destroy();
                    object.destroy();
                    score++;
                }
                break;
            }
        }
    };
    const player_controller = (object) =>{
        
        let timeNow = Date.now();

        if(GAME.Key('KeyA')){
            if(object.x>0){
                object.x-=object.secondSpeed*((timeNow-object.lastProcessedTime)/1000);
            } else{
                object.x =0;
            }
        }
            
        if(GAME.Key('KeyD')){
            if(object.x<width-object.width){
                object.x+=object.secondSpeed*((timeNow-object.lastProcessedTime)/1000);
            } else{
                object.x = width-object.width;
            }
        }
        
        if(GAME.Key('Space')){
            fire(object.x+26, object.y);
        }
        object.lastProcessedTime = Date.now();
    };

    class GameObject{
        constructor(type,x,y,width,height,imageBitmap, updateFunction){
            this.type = type;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

            
            this.speed =0;
            this.mass = 10000;
            this.power = 0;
            this.acceleration = 0;
            this.maxPower = 1000;
            this.powerAcceleration = 0.01;

            this.secondSpeed = 350;

            this.maxSpeed = 10;

            this.lastProcessedTime = Date.now();
            this.id = objects_count++;
            this.image = imageBitmap;
            this._update = updateFunction;
            objects.push(this);
            this.Destroyed = false;
        }
        update(){
            if(this._update)
            this._update(this);
        }
        draw(){
            context.drawImage(this.image,this.x,this.y);
        }
        destroy(){
            this.Destroyed = true;
        }
        intersect(object){
            return !((this.x+this.width<object.x)||(this.x>object.x+object.width)||(this.y+this.height<object.y)||(this.y>object.y+object.height));
        }
    }
    GAME.NewObject = (type,x,y,w,h,image, update) => {
        if (image instanceof ImageBitmap) {
            return new GameObject(type,x, y, w, h, image, update);
        } else {
            throw new Error('The image argument is not an ImageBitmap');
        }
    };
    GAME.UpdateBackground = () =>{
        context.clearRect(0,0,width,height);
        scoreLabel.innerHTML = score;
        reloadTimer++;
    };
    GAME.EndGame = ()=>{
        context.clearRect(0,0,width,height);
        document.dispatchEvent(GameOverEvent);
        GameOver = true;
    };
    GAME.Restart = () =>{
        objects.splice(0,objects.length);
        objects_count = 0;
        reloadTimer = 0;
        GameOver = false;
        score =0;
        player = GAME.NewObject('player', width/2-30, height-75, 60, 50, playerImage, player_controller);
        
        GAME.Update();
    };

    GAME.Update = ()=>{
        if(!GameOver){
            GAME.UpdateBackground();
                for(let i=objects.length-1; i>=0; i--){
                    if(objects[i].Destroyed){
                        objects.splice(i,1);
                        continue;
                    }
                    objects[i].update();
                    objects[i].draw();
                }
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                  }

                if(objects.length<10){
                    if(Date.now()-lastSpawned>spawnInterval){
                        GAME.SpawnEnemy(getRandomInt(width-45),-45);
                    }
                };
                requestAnimationFrame(GAME.Update);
        }                
    };

    GAME.Key = (key) =>{
                return down_keys[key];
            };

    GAME.SpawnEnemy = (x,y)=>{
        GAME.NewObject('enemy',x,y,45,45, enemyImage, enemy_ai);
        lastSpawned = Date.now();
    };

    GAME.Start = (W,H, playerImg, enemyImg, bulletImg)=>{
        canvas = document.getElementById('cnv');
        context  = canvas.getContext('2d');
        scoreLabel = document.getElementById('score');
        playerImage = playerImg;
        enemyImage = enemyImg;
        bulletImage = bulletImg;
        width = W;
        height = H;
        canvas.width = W;
        canvas.height = H;

        window.addEventListener('keydown', (e)=>{
            down_keys[e.code] = true;
        });
        window.addEventListener('keyup', (e)=>{
            delete down_keys[e.code];
        });

        spawnInterval = 1000;

        player = GAME.NewObject('player', width/2-30, height-75, 60, 50, playerImage, player_controller);
        GAME.Update();
};
};