const userService = require('../services/userServices');

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, name, family, login } = req.body;
      const user = await userService.registration(
        email,
        password,
        name,
        family,
        login
      );
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000, //1d
        httpOnly: true, //только для чтения фронтом
      });
      return res.json(user);
    } catch (e) {
      console.error(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(user);
    } catch (e) {
      console.error(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      console.error(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL); // после клика по ссылке переводем юзверя на главную страницу
    } catch (e) {
      console.error(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const user = await userService.refresh(refreshToken);
      res.cookie('refreshToken', user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(user);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new UserController();
