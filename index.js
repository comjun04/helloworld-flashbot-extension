const Extension = require('../../src/structures/Extension')

class HelloWorldExtension extends Extension {
  constructor(client) {
    super(client, {
      name: 'helloworld',
      description: 'A simple hello world extension'
    })
 }

  init() {
    this._logger.log('Hello World to you!')
  }

  destroy() {}
}

module.exports = HelloWorldExtension
