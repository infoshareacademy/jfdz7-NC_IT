var loadState = {

    preload: function() {
        game.load.image('bground', 'assets/bground.jpg');
        game.load.image('groundCenter', 'assets/tiles/grassHalfMid.png');
        game.load.image('groundCenterFat', 'assets/tiles/grassMid.png');
        game.load.image('groundRight', 'assets/tiles/grassHalfRight.png');
        game.load.image('groundLeft', 'assets/tiles/grassHalfLeft.png');
        game.load.spritesheet('dude', 'assets/player/spritesheet.png', 30, 50, 16);
        game.load.image('bgMenu', 'assets/menu/bg_menu.png');
        game.load.image('bgMenuHigh_HowToPlay', 'assets/menu/bg_HighandHowToPlay.png');
        game.load.spritesheet('playButton', 'assets/menu/playButton.png', 110, 110);
        game.load.spritesheet('scoreButton', 'assets/menu/highScoreButton.png', 110, 110);
        game.load.spritesheet('howToPlayButton', 'assets/menu/howToPlayButton.png', 110, 110);

    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }

};