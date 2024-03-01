const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

const userContentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  exercises: [{ name: String, sets: Number, reps: Number, weight: Number, duration: Number }],
  notes: String,
});

const UserContent = mongoose.model('UserContent', userContentSchema);

// POST route to allow users to post their content
app.post('/api/user-content', async (req, res) => {
  const { date, exercises, notes } = req.body;

  try {
    const newContent = new UserContent({ date, exercises, notes });
    const savedContent = await newContent.save();

    res.status(201).json({ message: 'Content posted successfully.', content: savedContent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Call the async function to start the server
  startApolloServer();
