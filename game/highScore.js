var highScoreState = {
    create: function() {

        game.add.sprite(0, 0, 'bgMenuHigh_HowToPlay');

        var playButton = game.add.button(game.world.centerX - 200, 580, 'playButton' , this.playClick,this,0,1,0);
        var highScoreButton = game.add.button(game.world.centerX - 65, 580, 'scoreButton',this.highScoreClick,this,0,1,0);
        var howToPlayButton = game.add.button(game.world.centerX + 70, 580, 'howToPlayButton',this.howToPlayClick,this,0,1,0);

        highScoreText = game.add.text(180, 300, 'Twój najwyższy wynik: 0', { fontSize: '32px', fill: '#000' });
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

        highScoreText.text = 'Twój najwyższy wynik to: ' + localStorage.highScore;
        if(localStorage.highScore === null){

            localStorage.highScore = score;
        }
        else if(score > localStorage.highScore){

            localStorage.highScore = score;
        }
    },

};