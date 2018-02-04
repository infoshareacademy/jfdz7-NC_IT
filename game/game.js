var game = new Phaser.Game(800, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('bground', 'assets/bground.jpg');
    game.load.image('groundCenter', 'assets/tiles/grassHalfMid.png');
    game.load.image('groundCenterFat', 'assets/tiles/grassMid.png');
    game.load.image('groundRight', 'assets/tiles/grassHalfRight.png');
    game.load.image('groundLeft', 'assets/tiles/grassHalfLeft.png');
    game.load.spritesheet('dude', 'assets/player/spritesheet.png', 34, 50, 11);

}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'bground');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.

   function createGround() {
        for (var i = 0; i <= 800; i += 70) {
            var ground = platforms.create(i, game.world.height - 124, 'groundCenterFat');
            ground.body.immovable = true;
        }
        return ground;
    }
    createGround();

   function createLedge(x, y, z) {
       for (var i = 70; i <= 70*(z-1); i += 70) {
           var ledgeCenter = platforms.create(x+i, y, 'groundCenter');
           ledgeCenter.body.immovable = true;
       }
       var ledgeRight = platforms.create(x+i, y, 'groundRight');
       var ledgeLeft = platforms.create(x, y, 'groundLeft');
       ledgeRight.body.immovable = true;
       ledgeLeft.body.immovable = true;
   }
    createLedge(520,100,3);
    createLedge(0,100,4);
    createLedge(310,200,6);
    createLedge(0,300,4);
    createLedge(600,350,3);
    createLedge(200,400,4);
    createLedge(0,500,2);
    createLedge(520,500,3);
    createLedge(300,500,1);

    player = game.add.sprite(300, game.world.height - 200, 'dude');

    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 0, true);
    player.animations.add('right', [5, 6, 7, 8], 0, true);
    cursors = game.input.keyboard.createCursorKeys();




}
function update() {
    var hitPlatform = game.physics.arcade.collide(player, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -950;
    }

}