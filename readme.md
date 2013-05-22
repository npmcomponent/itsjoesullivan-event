#Event

Basic events, for when you want to do _.extend(obj, Backbone.Events ) but don't need Backbone. Slightly different API and less functionality than Backbone, btw!

##Usage

###Standalone:

```javascript
	var events = new Events();

	events.on('knock', function() { console.log('who\'s there?'); });

	events.trigger('knock');
	// who's there?
```

###Inheritance:

####Traditional

```javascript
	var Person = function() {
		this.on('wake',this.brushTeeth); // 'this' will be Person instance
		this.on('wake',this.brushTeeth.bind(Ralph)); // 'this' will be Ralph
	};
	Person.prototype = new Events();
```

####_.extend()

```javascript
	var me = {};
	_.extend(me, new Events() );
```


##API

###Events.on(name,fn)

Adds listener to that particular event.

###Events.trigger(name,arg1,arg2,...)

Triggers a particular event by name, passing along subsequent arguments.