const exampleController = () => {
  const get = (req, res) => {
    res.send('GET: Hello from the Example Route !');
  };

  const post = (req, res) => {
    res.send(`POST: Hello ${req.body.name} from the Example Route !`);
  };

  const put = (req, res) => {
    res.send(`POST: Hello ${req.body.name} from the Example Route !`);
  };

  const destroy = (req, res) => {
    res.send(`DELETE: Hello ${req.body.name} from the Example Route !`);
  };

  return {
    get,
    post,
    put,
    destroy,
  };
};

module.exports = exampleController;
