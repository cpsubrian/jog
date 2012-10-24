
var Jog = require('../');

describe('Jog', function(){
  it('should expose .RedisStore', function(){
    Jog.should.have.property('RedisStore');
  })

  it('should expose .FileStore', function(){
    Jog.should.have.property('FileStore');
  })

  describe('when invoked as a regular function', function(){
    it('should return a Jog', function(){
      Jog().should.be.an.instanceof(Jog);
    })
  })

  describe('#write(level, type, attrs)', function(){
    it('should .add() to the store', function(done){
      var store = {
        add: function(obj){
          obj.level.should.equal('info');
          obj.timestamp.should.be.a('number');
          obj.type.should.equal('something happened');
          done();
        }
      };

      var log = new Jog(store);
      log.info('something happened');
    })

    it('should replace named tokens', function (done) {
      var store = {
        add: function(obj) {
          obj.type.should.equal('Hello Tobi!');
          done();
        }
      };

      var log = new Jog(store);
      log.info(':greeting :name.first!', {
        greeting: 'Hello',
        name: {
          first: 'Tobi'
        }
      });
    })
  })

  describe('#ns(obj)', function(){
    it('should return a Jog', function(done){
      var store = {
        add: function(obj){
          obj.vid.should.equal('abc');
          obj.uid.should.equal('tobi');
          obj.level.should.equal('info');
          obj.timestamp.should.be.a('number');
          obj.type.should.equal('something happened');
          done();
        }
      };

      var log = new Jog(store);
      var orig = log;
      log = log.ns({ vid: 'abc' }).ns({ uid: 'tobi' });
      log.should.not.equal(orig);
      log.info('something happened');
    })
  })
})