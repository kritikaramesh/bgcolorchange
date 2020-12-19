var color = ["#fcf876","#595b83","#c060a1","#a8dda8","#e5c5b5","#f08a5d","#ff414d","#28df99","#d2e603"];
document.body.style.background = "#f8e4b7";
document.querySelector("#btn").addEventListener("click",function(){
  var colorIndex = parseInt(Math.random() * color.length);
  document.querySelector("em").textContent = color[colorIndex];
  document.body.style.background = color[colorIndex];
});
