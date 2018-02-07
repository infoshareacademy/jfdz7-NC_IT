var loadState = {

    preload: function() {
        game.load.image('bground', 'assets/bground.jpg');
        game.load.image('groundCenter', 'assets/tiles/grassHalfMid.png');
        game.load.image('groundCenterFat', 'assets/tiles/grassMid.png');
        game.load.image('groundRight', 'assets/tiles/grassHalfRight.png');
        game.load.image('groundLeft', 'assets/tiles/grassHalfLeft.png');
        game.load.image('gem', 'assets/items/gemBlue.png');
        game.load.image('cloud-1', 'assets/items/cloud-2.png');
        game.load.image('cloud-2', 'assets/items/cloud-1.png');
        game.load.spritesheet('dude', 'assets/player/spritesheet.png', 30, 50, 16);
        game.load.spritesheet('enemy', 'assets/enemy/spritesheet.png', 83, 50, 12);
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