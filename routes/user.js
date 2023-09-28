const { Router } = require('express');

const { usersGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user');

const router = Router();


router.get('/', usersGet);

router.post('/', userPost);

router.put('/:id', userPut);

router.patch('/', userPatch);

router.delete('/', userDelete);

module.exports = router;





