class HomeController {
  index(req, res) {
    res.json({
      msg: 'tudo certo',
    });
  }
}

export default new HomeController();
