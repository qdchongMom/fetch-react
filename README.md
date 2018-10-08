# Fetch + React lab

### Prerequisite knowledge
- React
- Getting data using `fetch()`
- API keys 
- How to load environment variables from .env (see [create-react-app documentation on this](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env))
- How to `.gitignore` secrets (such as your API keys)

### Getting started
- Fork and clone repo
- `cd fetch-react-lab`
- Get an NewsAPI API key [here](https://newsapi.org/s/hacker-news-api) (Click on the 'Get API key' button on the top right)
- In your browser, make a GET request for the following URL: `https://newsapi.org/v2/everything?sources=hacker-news&apiKey=REPLACE_WITH_YOUR_API_KEY` (you should see a JSON response with news articles)
- Create a new file in the project directory and name it `.env.local`. Place the following snippet in the file:

```
REACT_APP_NEWSAPI_API_KEY=REPLACE_WITH_YOUR_API_KEY
```
  - Note: Because this `.env.local` file contains secrets, it is listed in `.gitignore` and will not be committed in `git`

- Run `npm start` (If you have started the application before you save the API key into `.env.local`, you need to stop the application and start it again so that the API key in `.env.local` is loaded).

### Tasks
- In `NewsFeed.js#componentDidMount()`, start by making a GET request to the defined URL using `fetch()`. Here's a short snippet to get your started. You can also use `async/await` syntax if you like.

```javascript
fetch(URL)
  .then(response => {
    return response.json();
  })
  .then(responseBody => console.log(responseBody))
```

- In `NewsFeed.js#componentDidMount()`, call `setState` to store the articles returned from the fetch request in the state object of the `NewsFeed` component.

- Incrementally flesh out the data in `this.state.articles`. Try to create new components (e.g. an `Article` component) as you see fit. 

- Bonus: implement the following features in your app
  - allow users to upvote / downvote articles  
