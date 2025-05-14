import { Scene } from 'phaser';
import * as Phaser from 'phaser';
import { IncrementResponse, DecrementResponse, InitResponse } from '../../../shared/types/api';

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  count: number = 0;
  countText: Phaser.GameObjects.Text;

  constructor() {
    super('Game');
  }

  create() {
    // Configure camera & background
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x222222);

    // Optional: semi-transparent background image if one has been loaded elsewhere
    this.background = this.add.image(512, 384, 'background').setAlpha(0.25);

    /* -------------------------------------------
     *  UI Elements
     * ------------------------------------------- */

    // Display the current count
    this.countText = this.add
      .text(512, 340, `Count: ${this.count}`, {
        fontFamily: 'Arial Black',
        fontSize: 56,
        color: '#ffd700',
        stroke: '#000000',
        strokeThickness: 10,
      })
      .setOrigin(0.5);

    // Fetch the initial counter value from server and update UI
    void (async () => {
      try {
        const response = await fetch('/api/init');
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = (await response.json()) as InitResponse;
        this.count = data.count;
        this.updateCountText();
      } catch (error) {
        console.error('Failed to fetch initial count:', error);
      }
    })();

    // Button styling helper
    const createButton = (y: number, label: string, color: string, onClick: () => void) => {
      const button = this.add
        .text(512, y, label, {
          fontFamily: 'Arial Black',
          fontSize: 36,
          color: color,
          backgroundColor: '#444444',
          padding: {
            x: 25,
            y: 12,
          } as Phaser.Types.GameObjects.Text.TextPadding,
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => button.setStyle({ backgroundColor: '#555555' }))
        .on('pointerout', () => button.setStyle({ backgroundColor: '#444444' }))
        .on('pointerdown', onClick);
      return button;
    };

    // Increment button
    createButton(430, 'Increment', '#00ff00', async () => {
      try {
        const response = await fetch('/api/increment', { method: 'POST' });
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = (await response.json()) as IncrementResponse;
        this.count = data.count;
        this.updateCountText();
      } catch (error) {
        console.error('Failed to increment count:', error);
      }
    });

    // Decrement button
    createButton(510, 'Decrement', '#ff5555', async () => {
      try {
        const response = await fetch('/api/decrement', { method: 'POST' });
        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = (await response.json()) as DecrementResponse;
        this.count = data.count;
        this.updateCountText();
      } catch (error) {
        console.error('Failed to decrement count:', error);
      }
    });

    // Game Over button – navigates to the GameOver scene
    createButton(590, 'Game Over', '#ffffff', () => {
      this.scene.start('GameOver');
    });

    // No automatic navigation to GameOver – users can stay in this scene.
  }

  updateCountText() {
    this.countText.setText(`Count: ${this.count}`);
  }
}
