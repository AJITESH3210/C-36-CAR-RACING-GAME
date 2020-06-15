class Form {
  constructor() {
    this.imput = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    
    
    this.input.position(130, 160);
    this.buttonbutton.position(250, 200);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.update()
      player.updateCount(playerCount);
      player.index = playerCount;
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }
}
