import { context } from '@devvit/server';
import { reddit } from '@devvit/reddit';

export const createPost = async () => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitPost({
    splash: {
      appDisplayName: '<% name %>',
    },
    subredditName: subredditName,
    title: '<% name %>',
  });
};
