const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = require('./swagger/swaggerOptions');
const index = require('./routes/index');
const example = require('./routes/example');

const isDeveloping = process.env.NODE_ENV !== 'production';
const PORT = config.get('PORT') || '3000';
const FRONT_PORT = config.get('FRONT_PORT') || '8081';

const app = express();
const router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Setup API Routes
router.use('/', index);
router.use('/example', example);

app.use('/api', router);

// Setup Frontend to either use Webpack or serve the bundle
if (isDeveloping) {
  // Only using Webpack when developing
  /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
  /* eslint global-require:  */
  const Webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../webpack.config');

  // Enable Automatic refresh
  webpackConfig.entry.unshift(`webpack-dev-server/client?http://localhost:${FRONT_PORT}`);

  // Setup Webpack Dev Server
  console.log(webpackConfig)
  const compiler = Webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    stats: {
      colors: true,
      progress: true,
    },
  });

  server.listen(FRONT_PORT, () => {
    console.log(`Frontend listening at http://localhost:${FRONT_PORT}`);
  });

  app.use('/', (req, res) => {
    res.send('Hello from the backend! Use the /api endpoint');
  });
} else {
  app.use('/', express.static(path.resolve(path.join(__dirname, '/../client'))));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '/../client/index.html')));
  });
}

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
