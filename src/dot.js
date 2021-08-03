export default class Dot {

    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("img_dot");
        this.width = 6;
        this.height = 6;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeedX = 7;
        this.speedX = 0;
        this.maxSpeedY = 7;
        this.speedY = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight / 2 - this.height / 2
        }
    }

    draw(ctx) {
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }    

    moveLeft() {
        this.speedX = -this.maxSpeedX;
    }

    moveRight() {
        this.speedX = this.maxSpeedX;
    }

    moveUp() {
        this.speedY = this.maxSpeedY;
    }    
    
    moveDown() {
        this.speedY = -this.maxSpeedY;
    }

    stop() {
        this.speedX = 0;
        this.speedY = 0;
    }

    update(deltaTime) {

        if (!deltaTime) return;

        this.position.x += this.speedX;
            if (this.position.x < 0) this.position.x = 0;
            if (this.position.x + this.width > this.gameWidth)
                this.position.x = this.gameWidth - this.width;

        this.position.y += this.speedY;
            if (this.position.y < 0) this.position.y = 0; 
            if (this.position.y + this.height > this.gameHeight)
                this.position.y = this.gameHeight - this.height;            
    }

}
