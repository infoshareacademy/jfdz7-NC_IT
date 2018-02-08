var playState = {

    create: function () {

        game.add.sprite(0, 0, 'bground');


        platforms = game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;


        function createGround() {
            for (var i = 0; i <= 800; i += 70) {
                var ground = platforms.create(i, game.world.height - 124, 'groundCenterFat');
                ground.body.immovable = true;
            }
            return ground;
        }

        createGround();

        function createLedge(x, y, z) {
            for (var i = 70; i <= 70 * (z - 1); i += 70) {
                var ledgeCenter = platforms.create(x + i, y, 'groundCenter');
                ledgeCenter.body.immovable = true;
            }
            var ledgeRight = platforms.create(x + i, y, 'groundRight');
            var ledgeLeft = platforms.create(x, y, 'groundLeft');
            ledgeRight.body.immovable = true;
            ledgeLeft.body.immovable = true;
        }

        createLedge(520, 100, 3);
        createLedge(0, 100, 4);
        createLedge(310, 200, 6);
        createLedge(0, 300, 4);
        createLedge(600, 350, 3);
        createLedge(200, 400, 4);
        createLedge(0, 500, 2);
        createLedge(520, 500, 3);
        createLedge(300, 500, 1);

        player = game.add.sprite(300, game.world.height - 200, 'dude');


        game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.1;
        player.body.gravity.y = 700;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [8, 9, 10, 11, 12, 13], 17, true);
        player.animations.add('right', [2, 3, 4, 5, 6, 7], 17, true);
        player.animations.add('stop', [14, 15], 3, true);
        cursors = game.input.keyboard.createCursorKeys();

        // ENEMY

            this.enemies = game.add.sprite(700, 150, 'enemy', 1);
            this.enemies.smoothed = false;
            this.enemies.animations.add('center', [6, 5, 4, 3, 2, 1, 7, 9, 10, 11, 12], 15, true);
            this.enemies.movementloop = game.add.tween(this.enemies).to({x: this.enemies.x - 450}, 2200, "Linear", true, 0, -1, true, this.enemies.animations.play('center'));
            game.physics.enable(this.enemies, Phaser.Physics.ARCADE);

            enemies1 = game.add.sprite(190, 350, 'enemy', 1);
            enemies1.smoothed = false;
            enemies1.animations.add('center', [6, 5, 4, 3, 2, 1, 7, 9, 10, 11, 12], 15, true);
            enemies1.movementloop = game.add.tween(enemies1).to({x: enemies1.x + 300}, 2200, "Linear", true, 0, -1, true, enemies1.animations.play('center'));
            game.physics.enable(enemies1, Phaser.Physics.ARCADE);

            enemies2 = game.add.sprite(0, 50, 'enemy', 1);
            enemies2.smoothed = false;
            enemies2.animations.add('center', [6, 5, 4, 3, 2, 1, 7, 9, 10, 11, 12], 15, true);
            enemies2.movementloop = game.add.tween(enemies2).to({x: enemies2.x + 700}, 6000, "Linear", true, 0, -1, true, enemies2.animations.play('center'));
            game.physics.enable(enemies2, Phaser.Physics.ARCADE);

            enemies3 = game.add.sprite(0, 450, 'enemy', 1);
            enemies3.smoothed = false;
            enemies3.animations.add('center', [6, 5, 4, 3, 2, 1, 7, 9, 10, 11, 12], 15, true);
            enemies3.movementloop = game.add.tween(enemies3).to({x: enemies3.x + 150}, 4000, "Linear", true, 0, -1, true, enemies3.animations.play('center'));
            game.physics.enable(enemies3, Phaser.Physics.ARCADE);


        /////////////////

        ////////////////LIFE
        this.livesCounter = 4;
        this.lives = null;
        this.lives = this.add.group();
        var x = 150; // use your values
        var y = 650;

        for (var i = 0; i < 3; i++) {
            var life = this.lives.create(
                x - 100 + 80 * i,
                y,
                'heart'
            );
            life.anchor.setTo(0.5, 0.5);
        }


        ////////////////LIFE

        var cloud1 = game.add.image(220, 46, 'cloud-1');
        cloud1.scale.set(.7);
        cloud1.scale.x *= -1;

        gems = game.add.group();

        gems.enableBody = true;


        for (var i = 0; i < 10; i++) {
            var gem = gems.create(i * 120, 0, 'gem');
            var gem2 = gems.create(i * 150, 100, 'gem');
            var gem3 = gems.create(i * 180, 250, 'gem');
            var gem4 = gems.create(i * 200, 420, 'gem');

            gem.body.gravity.y = 30;
            gem2.body.gravity.y = 30;
            gem3.body.gravity.y = 15;
            gem4.body.gravity.y = 15;

            gem.body.bounce.y = 0.6 + Math.random() * 0.3;
        }

        var cloud2 = game.add.image(680, 23, 'cloud-1');

    },
    update: function () {
        var hitPlatform = game.physics.arcade.collide(player, platforms);
        var gemHitPlatform = game.physics.arcade.collide(gems, platforms);
        var playerKillGem = game.physics.arcade.overlap(player, gems, killGem, null, this);
        game.physics.arcade.collide(player, this.enemies, lostLife,null, this);
        game.physics.arcade.collide(player, enemies1, lostLife,null, this);
        game.physics.arcade.collide(player, enemies2, lostLife,null, this);
        game.physics.arcade.collide(player, enemies3, lostLife,null, this);





            function killGem(player, gem) {
                gem.kill();
            }



            function lostLife () {
                live = this.lives.getFirstAlive();

                if (live) {
                    live.kill();
                }
                this.livesCounter--;

                if (this.livesCounter == 0) {
                    player.kill();
                     // Use your custom function when the player dies
                }}







            player.body.velocity.x = 0;

            if (cursors.left.isDown) {
                //  Move to the left
                player.body.velocity.x = -150;

                player.animations.play('left');
            }
            else if (cursors.right.isDown) {
                //  Move to the right
                player.body.velocity.x = 150;

                player.animations.play('right');
            }
            else {
                //  Stand still
                player.animations.play('stop');
            }

            if (cursors.up.isDown && cursors.right.isDown && player.body.touching.down) {
                player.body.velocity.y = -400;
                player.animations.stop();
                player.frame = 0;
            }
            if (cursors.up.isDown && cursors.right.isDown) {
                player.animations.stop();
                player.frame = 0;
            }
            if (cursors.up.isDown && cursors.left.isDown && player.body.touching.down) {
                player.body.velocity.y = -400;
                player.animations.stop();
                player.frame = 1;
            }
            if (cursors.up.isDown && cursors.left.isDown) {
                player.animations.stop();
                player.frame = 1;
            }
            if (cursors.up.isDown && player.body.touching.down) {
                player.body.velocity.y = -400;
                player.animations.stop();
                player.frame = 0;
            }



},
};