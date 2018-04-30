const app = new PIXI.Application({
  transparent: true
});
document.body.appendChild(app.view);
PIXI.loader.add('bcd', './bcd.jpg').load((loader, resources) => {
  let c = new Charm(PIXI);
  const bcd = new PIXI.Sprite(resources.bcd.texture);
  bcd.x = 0;
  bcd.y = 0;
  app.stage.addChild(bcd);
  c.slide(
    bcd, //A sprite
    400, //The x position where the movement should end
    0,   //The y position where the movement should end
    100, //How long the movement should last, in frames
    'smoothstep', // Tween type
    true, // YoYo
  )
  app.ticker.add(() => {
    c.update();
  });
});