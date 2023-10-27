# React ChatGPT Clone

This project is a React-based chat interface that interacts with the OpenAI ChatGPT API. Users can have conversations with the model, and the project includes both the frontend and a Node.js server for API communication.

This project is an exercise from this [`Youtube-Course`](https://www.youtube.com/watch?v=uRQH2CFvedY&t=6940s) from [`freecodecamp`](https://github.com/freeCodeCamp) made by [`Ania Kubow`](https://github.com/kubowania).

## Tech Stack

- **React** - Frontend library for building user interfaces.
- **Node.js** - Server environment for handling API requests.
- **Express** - Web framework for building the server.
- **Cors** - Middleware for handling Cross-Origin Resource Sharing.
- **dotenv** - Module for loading environment variables from a `.env` file.
- **OpenAI GPT-3.5 Turbo** - Powerful language model used for generating responses.
- **Jest** - Testing framework.
- **Nodemon** - Utility for automatically restarting the server during development.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

      `git clone git@github.com:augustinanders/chat-gpt-clone.git`

2. Install project dependencies:

      `npm install`

3. Set up environment variables:

      Create a `.env` file in the root of the project and add your OpenAI API key like this:
      
      `API_KEY = <your-API-key>`

4. Start the frontend:

      `npm run start:frontend` 
    
      This will run the React app in development mode and can be accessed at [http://localhost:3000](http://localhost:3000) in your web browser.

5. Start the backend server:

      `npm run start:backend`
      
      This will start the Node.js server, which will be available at [http://localhost:8000](http://localhost:8000).

## My Key Learnings with this project

- `Node.js and Express`:
  Building the Node.js server with Express helped me learn how to set up a simple backend for handling API requests and serving the React frontend.
- `API Integration`:
  The project involved integrating with external APIs, in this case, the OpenAI GPT-3.5 Turbo API, which provided valuable experience for working with third-party services.
- `API Security`:
  I gained an understanding of the importance of securing my API key and explored various techniques to ensure the security of sensitive information.
- `Environment Variables with dotenv`:
  I learned how to manage sensitive information, such as API keys, by using environment variables and the dotenv module to keep this information secure.




## Resources

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Learn how to use Create React App to bootstrap your React projects.
- [React documentation](https://reactjs.org/) - Explore React's official documentation to master React development.
- [Express.js](https://expressjs.com/) - Dive into Express.js for building web applications with Node.js.
- [OpenAI GPT-3.5 Turbo](https://beta.openai.com/docs/guides/chat) - Understand how to use OpenAI's ChatGPT API for chat-based applications.
- [Jest](https://jestjs.io/) - Explore Jest for JavaScript testing.
- [Nodemon](https://nodemon.io/) - Learn how to use Nodemon to automatically restart your Node.js server during development.



