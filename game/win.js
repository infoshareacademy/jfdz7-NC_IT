var win = {
    create: function() {

        game.add.sprite(0, 0, 'bgMenuHigh_HowToPlay');

        var playButton = game.add.button(game.world.centerX - 200, 580, 'playButton' , this.playClick,this,0,1,0);
        var highScoreButton = game.add.button(game.world.centerX - 65, 580, 'scoreButton',this.highScoreClick,this,0,1,0);
        var howToPlayButton = game.add.button(game.world.centerX + 70, 580, 'howToPlayButton',this.howToPlayClick,this,0,1,0);

        scoreText = game.add.text(180, 300, 'Koniec gry ! :D Twój wynik: 0', { fontSize: '32px', fill: '#000' });
        highscore = localStorage.highScore
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
        scoreText.text = 'Koniec gry ! :D Twój wynik: ' + score;
        localStorage.highScore = score;
        if(score > localStorage.highScore){

            localStorage.highScore = score;
        }
    },

};