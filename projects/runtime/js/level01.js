var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
             {
                 type : 'sawblade', 
                 x:600, 
                 y:110
                 
             },
             {type : 'sawblade', x:900, y:200},
             {type : 'sawblade', x:300, y:110},
             {type : 'sawblade', x:600, y:100},
             {type : 'sawblade', x:2700, y:10},
             {type : 'sawblade', x:1200, y:10},
             {type : 'sawblade', x:1500, y:100},
             {type : 'sawblade', x:1800, y:100},
             {type : 'sawblade', x:2100, y:100},
             {type : 'sawblade', x:2400, y:110},
             ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 25;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            var obstacleImage = draw.bitmap('img/sawblade.png');
            
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
            game.addGameItem(myObstacle);
        }
        
        for (var i=0; i< levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            createSawBlade(gameItem.x,gameItem.y);
        }
        
       function deathbringer(x,y) {
           var hitZoneSize = 25;
            var damageFromObstacle = 25;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = groundY-y;
            var obstacleImage = draw.bitmap('img/box.png');
            
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
            game.addGameItem(myObstacle);
       }        
 
 function createEnemy(x,y){
        var enemy = game.createGameItem('enemy', 25);
        var redSquare = draw.bitmap("img/pushat.png");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.velocityX = -4;
        enemy.velocityY = 0;
        enemy.health = 25;
        enemy.x = x;
        enemy.y = groundY-y;
        game.addGameItem(enemy);
        console.log("An enemy has been made!");
        enemy.onPlayerCollision = function(){
            console.log('The enemy has hit Halle.');
            game.changeIntegrity(-25);
        };
        enemy.onProjectileCollision = function(){
            console.log('Halle has hit the enemy!');
            game.increaseScore(100);
            enemy.flyTo(400,400);
        };
 }
 
 function createReward(x,y){
     var reward = game.createGameItem('reward', 25);
     game.addGameItem(reward);
     var rewardImg = draw.bitmap("img/Reward.png");
     rewardImg.x = -50;
     rewardImg.y = -50;
     reward.x = x;
     reward.y = groundY-y;
     reward.addChild(rewardImg);
     reward.velocityX = -5;
     reward.velocityY = 0;
     reward.onPlayerCollision = function(){
         console.log('Halle has gained a reward!');
         game.increaseScore(500);
         reward.flyTo(400,400);
     };
 }
 
createEnemy(600,50);
createEnemy(820,80);

createReward(900, 0);
createReward(1000, 120);

        // Dont edit below
    };
    
};




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}