
(() => {

  // LOCAL VARIABLES

  const c = canvas.getContext('2d');

  const demo = () => {

    // START DEMO

    c.fillStyle = 'red';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'white';
    c.font = '40px monospace';
    c.fillText('Everything works, start the loop lmao', 0, 40);

    const partHandler = new PartHandler([]);

    // THE LOOP

    const loop = () => {

      // TICK

      partHandler.tick();

      // CLEAR

      c.fillStyle = 'rgba(0, 0, 0, 1)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      // DRAW

      partHandler.draw(c);

      requestAnimationFrame(loop);
    };
    
    // requestAnimationFrame(loop);
  };

  // EVENT HANDLERS

  addEventListener('load', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    demo();
  });

  addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });

  addEventListener('keydown', ({keyCode}) => {
    keys[keyCode] = true;
  });

  addEventListener('keyup', ({keyCode}) => {
    keys[keyCode] = false;
  });

  addEventListener('mousemove', ({x, y}) => {
    mouse.x = x;
    mouse.y = y;
  });

  addEventListener('mousedown', () => {
    mouse.down = true;
  });

  addEventListener('mouseup', () => {
    mouse.down = false;
  });

  addEventListener('touchstart', ({touches}) => {
    const t = touches[0];
    mouse.x = t.clientX;
    mouse.y = t.clientY;
    mouse.down = true;
  });

  addEventListener('touchend', () => {
    mouse.down = false;
  });

  addEventListener('touchmove', ({touches}) => {
    const t = touches[0];
    mouse.x = t.clientX;
    mouse.y = t.clientY;
  });

})();