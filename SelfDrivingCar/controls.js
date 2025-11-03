//To remember which keys are being pressed,

// And to let your car use that info (like: is the driver pressing ↑ or ↓?

//that remembers, acts, and belongs to each car individually.


class Controls{
    
  constructor ()
  {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;


       this.#addKeyboardListeners();
  }

      #addKeyboardListeners(){
           document.onkeydown = (event) =>{
               switch(event.key) 
               {
                 case "ArrowLeft":
                     this.left = true
                     break;
                 case "ArrowRight":
                      this.right = true;
                      break;    
                 case "ArrowUp":
                     this.forward= true;
                     break;
                 case "ArrowDown":
                      this.reverse= true;
                 
               }
                  
           }   



           document.onkeyup = (event) =>{
               switch(event.key) 
               {
                 case "ArrowLeft":
                     this.left = false
                     break;
                 case "ArrowRight":
                      this.right = false;
                      break;    
                 case "ArrowUp":
                     this.forward= false;
                     break;
                 case "ArrowDown":
                      this.reverse= false;
                      break;
               }
             
           }  


      }
              

}

