export default class Tabs {
  constructor(container, content) {
    this.element = container;
    this.tabsContent = content;
    this.tabsCards = this.element.querySelectorAll(".card");
    this.tabsContentList = this.tabsContent.querySelectorAll(".menu-option");
  }

  init() {
    this.element.addEventListener("click", (e) => {
      this.toggleContents(e);
      this.toggleTabs(e);
    });
  }
  toggleTabs(e) {
    if (e.target.classList.contains("masked-ref")) {
      this.tabsCards.forEach((card) => {
        card.classList.remove("active");
      });
      const parentNode = e.target.parentNode;
      parentNode.classList.add("active");
    }
  }
  toggleContents(e) {
    const dataTarget = e.target.getAttribute("data-tab");
    if (dataTarget) {
      this.tabsContentList.forEach((element) => {
        element.classList.remove("active");
      });
      const selectedContent = this.tabsContent.querySelector(`#${dataTarget}`);
      selectedContent.classList.add("active");
    }
  }
}
