var Events = require('./index');
var expect = require('chai').expect;

describe('Events', function() {

	var events;

	beforeEach(function() {
		events = new Events();
	})

	it('exists', function() {
		expect(typeof Events).equal('function');
	});

	it('has on', function() {
		expect(typeof events.on).equal('function');
	});

	it('has trigger', function() {
		expect(typeof events.on).equal('function');
	});

	describe('trigger', function() {
		it('returns self with no events present', function() {
			var ev = events.trigger('hi');
			expect(ev).equal(events);
		});
	});

	describe('on', function() {

	  it('creates this.events', function() {
	  	expect(typeof events.events).equal('undefined');
	  	events.on('hi',function() {});
	  	expect(typeof events.events).equal('object');
	  });

	  it('creates this.events[name]', function() {

	  	events.on('hi', function() {});
	  	expect(typeof events.events['hi']).equal('object');

	  });

	  it('adds a function to the queue', function() {

	  	var fn = function() {};

	  	events.on('hi', fn);

	  	expect(events.events['hi'][0]).equal(fn);

	  });

	});

	describe('trigger', function() {

		var a, b;

		beforeEach(function() {
			events = new Events();

			a = false;
			b = false;

			events.on('hi', function() {
				a = true;
			});

			events.on('hi', function() {
				b = true;
			});

		});

		it('triggers each function', function() {

			expect(a).equal(false);
			expect(b).equal(false);

			events.trigger('hi');

			expect(a).equal(true);
			expect(b).equal(true);

		});

		it('respects bound _this_\'s', function() {

			var ev = new Events();

			var c = {};
			var d;

			var fn = function() { d = this; };

			ev.on('trigger', fn.bind(c));

			ev.trigger('trigger');

			expect(d).equal(c);

		});

		it('treats self as this by default', function() {

			var ev = new Events();

			var c = {};
			var d;

			var fn = function() { d = this; };

			ev.on('trigger', fn);

			ev.trigger('trigger');

			expect(d).equal(ev);

		});

		describe('inheritance', function() {

			it('works smoothly the really normal way', function() {

				var Obj = function() {};
				Obj.prototype = new Events();

				var obj = new Obj();

				var response = false;

				obj.on('yo', function() {
					response = true;
				});

				obj.trigger('yo');

				expect(response).equal(true);

			});

			it('works when used in the constructor', function() {

				var ready = false;

				var Obj = function() {
					this.on('ready', function() {
						ready = true;
					});
				};


				Obj.prototype = new Events();

				var obj = new Obj();
				obj.trigger('ready');
			 expect(ready).equal(true);

			});

			it('works w extend-style inheritance', function() {

				var extend = function(subj,obj) {
					for(var i in obj) {
						subj[i] = obj[i];
					}
				};

				var obj = {};

				extend(obj,new Events());

				var a = false;

				obj.on('switch', function() { a = true; });

				obj.trigger('switch');

				expect(a).equal(true);

			});

			

		});

		it('applies arguments', function() {

			var a = false, b = false;

			events.on('hello', function(arg1,arg2) {
				a = arg1;
				b = arg2;
			});

			events.trigger('hello','a','b');

			expect(a).equal('a');
			expect(b).equal('b');

		});

	});

	

});

//Respects bound functions

//Uses self as this otherwise

//Can handle non-functions

