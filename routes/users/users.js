const { Router } = require('express')
const users = require('../../usesCases/users/users')
const ROUTER = Router()

ROUTER.post('/signup', async (req, res) => {
  try {
    const { body } = req
    console.log('body', body)
    const userCreated = await users.signUp(body)
    res.json({
      success: true,
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      data: {
        message: error.message
      }
    })
  }
})

module.exports = ROUTER