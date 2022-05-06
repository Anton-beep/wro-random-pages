window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = 'resources/default_field.png'; 
    ctx.drawImage(img, 10, 10);
  };