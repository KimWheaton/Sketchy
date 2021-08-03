export default class InputHandler {

    constructor(dot) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 37:
                    dot.moveLeft();
                    break;

                case 40:
                    dot.moveUp();
                    break;     

                case 39:
                    dot.moveRight();  
                    break;  

                case 38:
                    dot.moveDown();
                    break;     

                case 27:
                    game.togglePause();
                    break;    

                case 32:
                    game.start();
                    break;    
            }
        });

        document.addEventListener("keyup", (event) => {
            switch(event.keyCode) {
                case 37:
                    if (dot.speedX < 0) dot.stop();
                    break;
                case 40:
                    if (dot.speedY > 0) dot.stop();
                    break;
                case 39:
                    if (dot.speedX > 0) dot.stop();  
                    break;  
                case 38:
                    if (dot.speedY < 0) dot.stop();  
                    break;      
            }
        });
    }
}