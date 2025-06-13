## Devvit Phaser Starter Experimental

An experimental starter that explores a new way to build applications on Reddit's developer platform.

- [Devvit](https://developers.reddit.com/): A way to build and deploy immersive games on Reddit
- [Vite](https://vite.dev/): For compiling the webView
- [Phaser](https://phaser.io/): 2D game engine
- [Express](https://expressjs.com/): For backend logic
- [Typescript](https://www.typescriptlang.org/): For type safety

## Getting Started

### Prerequisites

> Make sure you have Node 22 downloaded on your machine before running!

1. **Create your project from the template**
   <br /><img src="https://github.com/user-attachments/assets/a234a6d6-42ff-4188-b5b9-79d7573c9300" width="400" />
2. **Set up your new repo**
   <br /><img src="https://github.com/user-attachments/assets/590d7457-4751-461c-896b-a54abcb72022" width="400" />
3. **Clone the repo down to your computer**
   <br /><img src="https://github.com/user-attachments/assets/a09cf721-4605-4c7e-beae-1e7bd665c4fa" width="400" />
4. `cd your-app-name`
5. `npm install`
6. **Make a subreddit**: Make a private subreddit on Reddit.com. This will be where you do your own development. Go to Reddit.com, scroll the left side bar down to communities, and click "Create a community."
7. **Update the name in package.json**: Find the `dev:devvit` command and replace `YOUR_SUBREDDIT_NAME` with the subreddit name you just created.
8. **Update json file**: In devvit.json replace YOUR_APP_NAME with the name of your app. This will be shown to users that play your app.
9. **Upload**: Run `npm run deploy` and go through the prompts
10. **Playtest**: Run `npm run dev` to playtest your application in production by going to your subreddit.
11. **Create Post**: Create a post using the subreddit menu action called "Word Guesser: New Post".

## Commands

- `npm run dev`: Starts a development server where you can develop your application live on Reddit.
- `npm run deploy`: Uploads a new version of your app
- `npm run check`: Type checks, lints, and prettifies your app

## Cursor Integration

This template comes with a pre-configured cursor environment. To get started, [download cursor](https://www.cursor.com/downloads) and enable the `devvit-mcp` when prompted.

## Credits

Thanks to the Phaser team for [providing a great template](https://github.com/phaserjs/template-vite-ts)!
