const userService = require("../services/userServices");
const { validationResult } = require("express-validator");
const ErrorHandler = require("../handlers/errorHandlers");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ErrorHandler.badRequest("Ошибка при валидации", errors.array())
        );
      }

      const { email, password, name, family, login } = req.body;
      const user = await userService.registration(
        email,
        password,
        name,
        family,
        login
      );
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000, //1d
        httpOnly: true, //только для чтения фронтом
      });
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ErrorHandler.badRequest("Ошибка при валидации", errors.array())
        );
      }

      const { email, password } = req.body;
      const user = await userService.login(email, password);
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL); // после клика по ссылке переводем юзверя на главную страницу
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const user = await userService.refresh(refreshToken);
      res.cookie("refreshToken", user.refreshToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const { user } = req;
      const { name, family, login } = req.body;
      const changeUser = await userService.change(user.id, name, family, login);

      return res.json(changeUser);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
