import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
  background: GameObjects.Image | null = null;
  logo: GameObjects.Image | null = null;
  title: GameObjects.Text | null = null;

  constructor() {
    super('MainMenu');
  }

  /**
   * Reset cached GameObject references every time the scene starts.
   * The same Scene instance is reused by Phaser, so we must ensure
   * stale (destroyed) objects are cleared out when the scene restarts.
   */
  init(): void {
    this.background = null;
    this.logo = null;
    this.title = null;
  }

  create() {
    this.refreshLayout();

    // Re-calculate positions whenever the game canvas is resized (e.g. orientation change).
    this.scale.on('resize', () => this.refreshLayout());

    this.input.once('pointerdown', () => {
      this.scene.start('Game');
    });
  }

  /**
   * Positions and (lightly) scales all UI elements based on the current game size.
   * Call this from create() and from any resize events.
   */
  private refreshLayout(): void {
    const { width, height } = this.scale;

    // Resize camera to new viewport to prevent black bars
    this.cameras.resize(width, height);

    // Background – stretch to fill the whole canvas
    if (!this.background) {
      this.background = this.add.image(0, 0, 'background').setOrigin(0);
    }
    this.background!.setDisplaySize(width, height);

    // Logo – keep aspect but scale down for very small screens
    const scaleFactor = Math.min(width / 1024, height / 768);

    if (!this.logo) {
      this.logo = this.add.image(0, 0, 'logo');
    }
    this.logo!.setPosition(width / 2, height * 0.38).setScale(scaleFactor);

    // Title text – create once, then scale on resize
    const baseFontSize = 38;
    if (!this.title) {
      this.title = this.add
        .text(0, 0, 'Main Menu', {
          fontFamily: 'Arial Black',
          fontSize: `${baseFontSize}px`,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 8,
          align: 'center',
        })
        .setOrigin(0.5);
    }
    this.title!.setPosition(width / 2, height * 0.6);
    this.title!.setScale(scaleFactor);
  }
}
