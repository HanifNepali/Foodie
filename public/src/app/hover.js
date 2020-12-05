export default class Bghover {
  constructor(container, content) {
    this.element = container;
    this.tabsContainer = content;
    this.cards = this.tabsContainer.querySelectorAll(".card");
    this.figures = this.element.querySelectorAll("figure");
  }

  init() {
    this.cards.forEach((card) =>
      card.addEventListener("mouseenter", (e) => {
        this.toggleVisibility(e);
      })
    );
  }
  toggleVisibility(e) {
    const dataTarget = e.target.getAttribute("data-img");
    if (dataTarget) {
      this.figures.forEach((element) => {
        element.classList.remove("active");
      });
      const selectedFigure = this.element.querySelector(`#${dataTarget}`);
      selectedFigure.classList.add("active");
    }
  }
}
