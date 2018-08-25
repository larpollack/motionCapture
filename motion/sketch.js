const threshold = 50;
let capture;
let prevFrame;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  prevFrame = createImage(capture.width, capture.height, RGB);
}

function draw() {
  image(prevFrame, 0, 0);
  loadPixels();
  capture.loadPixels();
  prevFrame.loadPixels();
  for (let i = 0; i < capture.width; i++) {
    for (let j = 0; j < capture.height; j++) {
      let arr = (i + j * capture.width) * 4;
      let r1 = prevFrame.pixels[arr];
      let g1 = prevFrame.pixels[arr + 1];
      let b1 = prevFrame.pixels[arr + 2];

      let r2 = capture.pixels[arr];
      let g2 = capture.pixels[arr + 1];
      let b2 = capture.pixels[arr + 2];

      let diffs = dist(r1, g1, b1, r2, g2, b2);

      if (diffs > threshold) {
        pixels[arr + 3] = 255;
      } else {
        pixels[arr] = 255;
        pixels[arr + 1] = 255;
        pixels[arr + 2] = 255;
        pixels[arr + 3] = 255;
      }
    }
  }
  updatePixels();
  prevFrame.copy(
    capture,
    0,
    0,
    capture.width,
    capture.height,
    0,
    0,
    capture.width,
    capture.height
  );
}
