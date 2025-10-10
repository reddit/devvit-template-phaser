import { context, reddit } from '@devvit/web/server';

export const createPost = async () => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitCustomPost({
    splash: {
      // Splash screen customization
      appDisplayName: '<% name %>',
      backgroundUri: 'default-splash.png',
      buttonLabel: 'Start Playing',
      description: 'An exciting interactive experience',
      entryUri: 'index.html',
      heading: 'Welcome to the Game!',
      appIconUri: 'default-icon.png',
    },
    postData: {
      gameState: 'initial',
      score: 0,
    },
    subredditName: subredditName,
    title: '<% name %>',
  });
};
