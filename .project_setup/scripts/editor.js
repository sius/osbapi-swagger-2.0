var express = require('express')
  , app = express()
  , open = require('open')
  , path = require('path')
  , PORT = process.env.PORT || 3000;

  app
    .use('/api', express.static(path.join(__dirname, '../../api')))
    .use('/', express.static(path.join(__dirname, '../../node_modules/swagger-editor-dist')))
    .listen(PORT, function(err) {
      if (err) {
        console.log(err)
        return 1
      }
      var url = `http:/localhost:${PORT}?url=api/swagger.yaml`
      console.log(`swagger-editor started at ${url}`)
      open(url)
    })