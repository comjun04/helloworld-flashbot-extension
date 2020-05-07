const Extension = require('../../classes/Extension')

class HelloWorldExtension extends Extension {
  constructor(client) {
    super(client, {
      name: 'helloworld',
      description: 'A simple hello world extension'
    })

    this._logger.log('Hello World to you!')
  }
}

module.exports = HelloWorldExtension
