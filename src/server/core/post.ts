import { Devvit } from '@devvit/public-api';
import { context } from '@devvit/server';
import { reddit } from '@devvit/reddit';

export const createPost = async () => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitPost({
    userGeneratedContent: {
      text: 'Hello there! This is a post from a Devvit app',
    },
    subredditName: subredditName,
    title: 'New Post',
    preview: Devvit.createElement('blocks', {
      height: 'tall',
      children: [
        Devvit.createElement('vstack', {
          height: '100%',
          width: '100%',
          backgroundColor: '#ffbf0b',
        }),
      ],
    }),
  });
};
