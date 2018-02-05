var game = new Phaser.Game(800, 700, Phaser.AUTO, '');

game.state.add('play', playState);
game.state.add('load', loadState);

game.state.start('load');