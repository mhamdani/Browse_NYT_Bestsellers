const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('/ (NYT browser homepage)', () => {
    it('should load without error', done => {
      nightmare.goto('https://mhamdani.github.io/Browse_NYT_Bestsellers/')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})
