function allowDrop(ev) {
    // console.log("allow drop called,calling preventDefault()");
    ev.preventDefault();
  }
function drag(ev){
    // console.log("drag event occured");
    // console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
  }
function drop(ev) {
    // console.log("drop event done");
    // console.log(ev);
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    // console.log("data is ",data);
    ev.target.appendChild(document.getElementById(data));
}
