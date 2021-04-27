class HomeController {
  async index(req, res) {
    res.json({
      msg: 'hello for api',
    });
  }
}

export default new HomeController();
