var howToPlayState = {
    create: function() {

        game.add.sprite(0, 0, 'bgMenuHigh_HowToPlay');

        var playButton = game.add.button(game.world.centerX - 200, 580, 'playButton' , this.playClick,this,0,1,0);
        var highScoreButton = game.add.button(game.world.centerX - 65, 580, 'scoreButton',this.highScoreClick,this,0,1,0);
        var howToPlayButton = game.add.button(game.world.centerX + 70, 580, 'howToPlayButton',this.howToPlayClick,this,0,1,0);

        tutorialText1 = game.add.text(50, 250, 'Cześć !', { fontSize: '25px', fill: '#000' });
        tutorialText2 = game.add.text(50, 300, 'W mały świecie naszego Ziomka rozsypały się promocje!\n Pomóż mu zebrać wszystkie! \n Uważaj na nietoperze które je pilnują.\n Każdy zebrany muchomorek odejmuje 6 punktów. \n Żadnego z nich nie dotknij (tracisz 1 życie)! \n Sterowanie strzałkami na klawiaturze. \n POWODZENIA !', { fontSize: '25px', fill: '#000' });
   },
    playClick: function () {
        game.state.start('play');
    },
    highScoreClick: function () {
        game.state.start('highScore');
    },
    howToPlayClick: function () {
        game.state.start('howToPlay');
    },
    update: function() {
    },

};