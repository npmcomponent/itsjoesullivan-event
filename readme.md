#Event

Basic events, for when you want to do _.extend(obj,Backbone.Events) but don't need Backbone.

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
		this.on('wakeUp',this.brushTeeth);
	};
	Person.prototype = new Events();
	...
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