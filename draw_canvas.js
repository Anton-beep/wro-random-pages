let MARKERS_POSITIONS = {
  0: [439, 365],
  1: [1854, 365],
  2: [1854, 729],
  3: [439, 729]
}

let MARKER_SIZE = [30, 30];

let WASH_CUBES_POSITIONS = {
  0: [406, 276],
  1: [1888, 276],
  2: [1888, 817],
  3: [406, 817]
}

let WASH_CUBE_SIZE = [30, 30];

let FRAMES_POSITIONS = {
  0: [1019, 988],
  1: [1123, 988],
  2: [1227, 988]
}

let FRAMES_SIZE = [78, 78];

let FIELD_POSITION = [10, 10];

function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = default_field;
  img.src = 'resources/default_field.png';
  ctx.drawImage(img, FIELD_POSITION[0], FIELD_POSITION[1]);

  // markers
  let markers_col = ["green", "green", "white", "white"];
  shuffle(markers_col);
  for (let i = 0; i < markers_col.length; i++) {
    if (markers_col[i] == "green") {
      ctx.fillStyle = "green";
      ctx.fillRect(MARKERS_POSITIONS[i][0] + FIELD_POSITION[0], MARKERS_POSITIONS[i][1] + FIELD_POSITION[1], MARKER_SIZE[0], MARKER_SIZE[1]);
    }
    else {
      ctx.fillStyle = "white";
      ctx.fillRect(MARKERS_POSITIONS[i][0] + FIELD_POSITION[0], MARKERS_POSITIONS[i][1] + FIELD_POSITION[1], MARKER_SIZE[0], MARKER_SIZE[1]);
    }
  }

  // wash cubes
  let wash_cubes = ["red", "yellow", "black", "null"];
  shuffle(wash_cubes);
  for (let i = 0; i < wash_cubes.length; i++) {
    if (wash_cubes[i] == "red") {
      ctx.fillStyle = "red";
      ctx.fillRect(WASH_CUBES_POSITIONS[i][0] + FIELD_POSITION[0], WASH_CUBES_POSITIONS[i][1] + FIELD_POSITION[1], WASH_CUBE_SIZE[0], WASH_CUBE_SIZE[1]);
    }
    else if (wash_cubes[i] == "yellow") {
      ctx.fillStyle = "yellow";
      ctx.fillRect(WASH_CUBES_POSITIONS[i][0] + FIELD_POSITION[0], WASH_CUBES_POSITIONS[i][1] + FIELD_POSITION[1], WASH_CUBE_SIZE[0], WASH_CUBE_SIZE[1]);
    }
    else if (wash_cubes[i] == "black") {
      ctx.fillStyle = "black";
      ctx.fillRect(WASH_CUBES_POSITIONS[i][0] + FIELD_POSITION[0], WASH_CUBES_POSITIONS[i][1] + FIELD_POSITION[1], WASH_CUBE_SIZE[0], WASH_CUBE_SIZE[1]);
    }
  }

  //frames
  let frames = ["red", "yellow", "black"];
  shuffle(frames);
  for (let i = 0; i < frames.length; i++) {
    if (frames[i] == "red") {
      ctx.fillStyle = "red"
      ctx.fillRect(FRAMES_POSITIONS[i][0] + FIELD_POSITION[0], FRAMES_POSITIONS[i][1] + FIELD_POSITION[1], FRAMES_SIZE[0], FRAMES_SIZE[1]);
    }
    else if (frames[i] == "yellow") {
      ctx.fillStyle = "yellow";
      ctx.fillRect(FRAMES_POSITIONS[i][0] + FIELD_POSITION[0], FRAMES_POSITIONS[i][1] + FIELD_POSITION[1], FRAMES_SIZE[0], FRAMES_SIZE[1]);

    }
    else if (frames[i] == "black") {
      ctx.fillStyle = "black";
      ctx.fillRect(FRAMES_POSITIONS[i][0] + FIELD_POSITION[0], FRAMES_POSITIONS[i][1] + FIELD_POSITION[1], FRAMES_SIZE[0], FRAMES_SIZE[1]);
    }
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

window.onload = () => draw();