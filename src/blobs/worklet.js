class RainbowBlobs {
  static get inputProperties() {
    return [
      "--blobs",
    ];
  }

  paint(ctx, { width, height }, props) {
    const blobCount = props.get('--blobs');

    ctx.fillStyle = 'rgb(300, 300, 300)';
    ctx.fillRect(0, 0, width, height);
  
    for (let i = 0; i < blobCount; i += 1) {
      const path = blobs.canvasPath(
        {
            seed: Math.random(),
            extraPoints: 16,
            randomness: 2,
            size: 128,
        },
        {
            offsetX: 16,
            offsetY: 32,
        },
      );
      ctx.stroke(path);

      // const radius = RainbowBlobs.getColor(4, 60);
      // const [x, y] = RainbowBlobs.getRandomPoint(width + 1, height + 1);
      // const [r, g, b] = RainbowBlobs.makeColor();
      // const radgrad = ctx.createRadialGradient(
      //                   x,
      //                   y,
      //                   0,
      //                   x + (radius / 4),
      //                   y + (radius / 4),
      //                   radius
      // );
      // radgrad.addColorStop(0, '#ffffff');
      // radgrad.addColorStop(0.99, `rgba(${r}, ${g}, ${b}, 1)`);
      // radgrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      // ctx.fillStyle = radgrad;


      ctx.fillRect(0, 0, width, height);
    }
  }
}

registerPaint("rainbow-blobs", RainbowBlobs);
