var playState = {

    create: function () {

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

        function killGem(player, gem) {
            gem.kill();
        }

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
    }
};