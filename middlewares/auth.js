const jwt = require('../lib/jwt')

function auth (req, res, next) {
  const { authorization: token } = req.headers
  try {
    const tokenDecode = jwt.verify(token)
    const { id, email } = tokenDecode.data
    console.log('tokenDecode', tokenDecode)
    req.user = { id, email }
    console.log('req.user', req.user)
    next()
  } catch (error) {
    res.status(401)
    res.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth