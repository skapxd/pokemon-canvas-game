import { assets } from "./assets";
export const canvas = () => {
  const WIDTH = 1024;
  const HEIGHT = 576;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  const playerImage = new Image();
  playerImage.src = assets.playerDown;

  const mapImage = new Image();
  mapImage.src = assets.map;
  mapImage.onload = () => {
    // Draw map
    ctx.drawImage(mapImage, -770, -500);

    // Draw player
    ctx.drawImage(
      playerImage,
      WIDTH / 2 - playerImage.width / 2,
      HEIGHT / 2 - playerImage.height / 2
    );
  };

  document.querySelector("#app")?.appendChild(canvas);
};
