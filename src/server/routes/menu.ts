import { Hono } from 'hono';
import type { UiResponse } from '@devvit/web/shared';
import { context } from '@devvit/web/server';
import { createPost } from '../core/post';

export const menu = new Hono();

menu.post('/post-create', async (c) => {
  try {
    const post = await createPost();

    return c.json<UiResponse>(
      {
        navigateTo: `https://reddit.com/r/${context.subredditName}/comments/${post.id}`,
      },
      200
    );
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    return c.json<UiResponse>(
      {
        showToast: 'Failed to create post',
      },
      400
    );
  }
});

menu.post('/example-form', async (c) => {
  return c.json<UiResponse>(
    {
      showForm: {
        name: 'exampleForm',
        form: {
          title: 'Example Form',
          fields: [
            {
              type: 'string',
              name: 'message',
              label: 'Message',
            },
          ],
        },
      },
    },
    200
  );
});
