import {Application, Assets} from 'pixi.js';
(async () =>
{
    const app = new Application();

    await app.init({background: '#1099bb', resizeTo: window});

    document.body.appendChild(app.canvas);

    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
    const corgi = new Sprite(texture)
    app.stage.addChild(corgi);
    corgi.anchor.set(0.5);
    corgi.x = app.screen.width / 2;
    corgi.y = app.screen.height / 2;
})();
