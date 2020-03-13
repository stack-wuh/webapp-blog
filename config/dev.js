const isH5  = process.env.CLIENT_ENV === 'h5'
const HOST  = '"https://api.wuh.site"'

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST:   isH5 ? '"/api"' : HOST
  },
  mini: {},
  h5: {}
}
