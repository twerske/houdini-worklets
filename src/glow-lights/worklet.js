class GlowLights {
  static get inputProperties() {
    return [
      "--lights",
    ];
  }

  static getRandomPoint(width, height) {
    return [
      Math.floor(Math.random() * (width)),
      Math.floor(Math.random() * (height)),
    ];
  }

  static getColor(base, range) {
    return base + Math.floor(Math.random() * range);
  }

  static makeColor() {
    return [
      GlowLights.getColor(0, 256),
      GlowLights.getColor(0, 256),
      GlowLights.getColor(0, 256),
    ];
  }
  
  paint(ctx, { width, height }, props) {
    const lights = props.get('--lights');

    ctx.fillStyle = 'rgb(100, 100, 100)';
    ctx.fillRect(0, 0, width, height);
  
    for (let i = 0; i < lights; i += 1) {
      const radius = GlowLights.getColor(20, 60);
      const [x, y] = GlowLights.getRandomPoint(width + 1, height + 1);
      const [r, g, b] = GlowLights.makeColor();
      const radgrad = ctx.createRadialGradient(
                        x,
                        y,
                        0,
                        x + (radius / 4),
                        y + (radius / 4),
                        radius
      );
      radgrad.addColorStop(0, '#ffffff');
      radgrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = radgrad;
      ctx.fillRect(0, 0, width, height);
    }
  }
}

registerPaint("glow-lights", GlowLights);
