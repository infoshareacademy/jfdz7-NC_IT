var loadState = {

    preload: function() {
        game.load.image('bground', 'assets/bground.jpg');
        game.load.image('groundCenter', 'assets/tiles/grassHalfMid.png');
        game.load.image('groundCenterFat', 'assets/tiles/grassMid.png');
        game.load.image('groundRight', 'assets/tiles/grassHalfRight.png');
        game.load.image('groundLeft', 'assets/tiles/grassHalfLeft.png');
        game.load.spritesheet('dude', 'assets/player/spritesheet.png', 30, 50, 16);

    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }

};