const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/activate/:link', userController.activate); // активация акк по ссылке
router.get('/refresh', userController.refresh); // перезапись, отправляем refresh получаем access и refresh tokens

module.exports = router;
