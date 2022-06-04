
(() => {

  // LOCAL VARIABLES

  const c = canvas.getContext('2d');

  const demo = () => {

    const partHandler = new PartHandler([]);

    // THE LOOP

    const loop = () => {

      // TICK

      partHandler.tick();

      // CLEAR

      c.fillStyle = `rgba(0, 0, 0, ${globalAlpha})`;
      c.fillRect(0, 0, canvas.width, canvas.height);

      // DRAW

      partHandler.draw(c);

      requestAnimationFrame(loop);
    };
    
    requestAnimationFrame(loop);
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