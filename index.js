let chooseElememnt;

const move = function (element) {
  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElememnt = element;

      document.onmousemove = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        chooseElememnt.style.left = x - 50 + "px";
        chooseElememnt.style.top = y - 50 + "px";
        console.log(chooseElememnt);
      };
    });
  });
  document.onmouseup = function (e) {
    chooseElememnt = null;
  };
};

//secondpart
const imgBox = document.querySelector(".img");
const boxs = document.getElementsByClassName("box");

// event listener for dragable elements imgbox
imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("dragstend");
  e.target.className = "img";
});

for (box of boxs) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover");
  });
  box.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
    console.log("dragenter");
  });
  box.addEventListener("dragleave", (e) => {
    e.target.className = "box";
    console.log("dragleave");
  });
  box.addEventListener("drop", (e) => {
    e.target.append(imgBox);
    console.log("drop");
  });
}
