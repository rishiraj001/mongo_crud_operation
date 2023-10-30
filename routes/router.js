const express = require('express')
const router = express.Router();
const bookController = require('../controllers/bookController')

router.get('/', (req,res) => {
    res.send("Its Ok")
})

router.post('/create', bookController.create);
router.get('/readAll', bookController.read);
router.get('/byId', bookController.readOne);
router.put('/update', bookController.update);
router.post('/delete', bookController.delete);

module.exports = router;