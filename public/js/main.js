
// GLOBAL

const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const rands = () => Math.random() < 0.5 ? -1 : 1;

(() => {

  // VARIABLES

  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');
  const mouse = {};
  mouse.x = 0;
  mouse.y = 0;
  mouse.down = false;

  const demo = () => {

    // START DEMO

    const partHandler = new PartHandler([]);
    
    for (let i = 0; i < 1000; i++) {
      partHandler.add(new Part(
        randint(0, canvas.width),
        randint(0, canvas.height),
        randint(1, 5),
        Math.random() * Math.PI * 2,
        1
      ));
    }

    // ANIMATION LOOP

    const loop = () => {

      // TICK

      partHandler.tick();

      // CLEAR

      c.fillStyle = 'rgba(0, 0, 0, 0.05)';
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