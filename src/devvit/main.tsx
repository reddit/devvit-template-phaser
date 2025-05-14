import { Devvit } from '@devvit/public-api';

// Side effect import to bundle the server. The /index is required for server splitting.
import '../server/index';
import { defineConfig } from '@devvit/server';

defineConfig({
  name: 'Phaser Starter',
  description: 'Phaser Starter',
  entry: 'index.html',
  height: 'tall',
  inline: true,
  menu: {
    enable: true,
    label: 'New Phaser Starter Post',
    postTitle: 'Phaser Starter',
  },
});

export default Devvit;
