class DemoVideo{
  constructor(containerElement){
    this.containerElement = containerElement;
    this.backToMenuContainer = containerElement.querySelector(".to-menu");
    this.backToMenuContainer.addEventListener('click', this.backtoMenu);
  }
  backtoMenu() {
    app.demovideo.hide();
    app.menu.show();
  }
  show() {
    document.body.style.backgroundImage = "url('https://imgur.com/dH604Ec')";
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
    document.body.style.backgroundImage = "url('https://imgur.com/PzjvhS0')";
  }
}
