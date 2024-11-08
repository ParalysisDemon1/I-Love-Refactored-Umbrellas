
var textarea = document.getElementById("input");
textarea.value = "";
var list = document.getElementById("list");
function addItem() {
  var text = textarea.value;
if(text == ""){
  return
}
  var listItem = document.createElement("li");
  listItem.textContent = text;

  list.appendChild(listItem);

  textarea.value = "";
}
document.getElementById("enter").addEventListener("click", addItem);