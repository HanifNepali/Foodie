export default () => {
  const body = document.querySelector("body");
  body.querySelectorAll(".bg-cover").forEach((el) => {
    const holder = el;
    const image = holder.querySelector("img");
    const imageSrc = image.getAttribute("src");
    holder.setAttribute("style", `background-image: url("${imageSrc}")`);
  });
};
