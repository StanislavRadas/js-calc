// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

router.get('/', function (req, res) {
  res.render('calc', {
    name: 'calc',
    component: [],
    title: 'Calc',
    data: {
      
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
