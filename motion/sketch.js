let first = function(a) {
  const threshold = 50;
  let capture;
  let prevFrame;

  a.setup = function() {
    a.createCanvas(440, 338);
    a.pixelDensity(1);
    capture = a.createCapture(a.VIDEO);
    capture.size(a.width, a.height);
    capture.hide();
    prevFrame = a.createImage(capture.width, capture.height, a.RGB);
  };

  a.draw = function() {
    a.image(prevFrame, 0, 0);
    a.loadPixels();
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

        let diffs = a.dist(r1, g1, b1, r2, g2, b2);

        if (diffs > threshold) {
          a.pixels[arr + 3] = 255;
        } else {
          a.pixels[arr] = 255;
          a.pixels[arr + 1] = 255;
          a.pixels[arr + 2] = 255;
          a.pixels[arr + 3] = 255;
        }
      }
    }
    a.updatePixels();
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
  };
};
let myp5 = new p5(first, "canvas1");

let second = function(b) {
  const threshold = 50;
  let capture;
  let prevFrame;

  b.setup = function() {
    b.createCanvas(450, 338);
    b.pixelDensity(1);
    capture = b.createCapture(b.VIDEO);
    capture.size(b.width, b.height);
    capture.hide();
    prevFrame = b.createImage(capture.width, capture.height, b.RGB);
  };

  b.draw = function() {
    b.image(prevFrame, 0, 0);
    b.loadPixels();
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

        let diffs = b.dist(r1, g1, b1, r2, g2, b2);

        if (diffs > threshold) {
          b.pixels[arr + 3] = 255;
        } else {
          b.pixels[arr] = 255;
          b.pixels[arr + 1] = 255;
          b.pixels[arr + 2] = 255;
          b.pixels[arr + 3] = 255;
        }
      }
    }
    b.updatePixels();
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
    b.filter("INVERT");
  };
};
let myp5too = new p5(second, "canvas2");
