import "./styles/main.scss";

import { Tabs, bgCover, Hover } from "./app/main";

const tabs = document.querySelector(".menu-tabs__items");
const tabsContent = document.querySelector(".menu-tabs__options");
const imagesCollection = document.querySelector(".images-collection");

bgCover();

const tabsObj = new Tabs(tabs, tabsContent);
tabsObj.init();

const hoverObj = new Hover(imagesCollection, tabs);
hoverObj.init();
