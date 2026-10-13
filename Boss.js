/**
 * [TASK 3.1] Final boss (pentagon). Inherits from the Opponent class and
 * moves twice as fast. Everything else (movement, shooting, dying) is reused
 * from Opponent; only the speed and the images are overridden.
 * @extends Opponent
 */
class Boss extends Opponent {
    /**
     * @param game {Game} The instance of the game to which the boss belongs
     */
    constructor (game) {
        super(game);
        this.speed = OPPONENT_SPEED * 2;       // Twice as fast as the triangle
        this.myImage = BOSS_PICTURE;           // Pentagon
        this.myImageDead = BOSS_PICTURE_DEAD;  // Star shown when defeated
        this.image.src = this.myImage;         // Replace the triangle image
    }
}
