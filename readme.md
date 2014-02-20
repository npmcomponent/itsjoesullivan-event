*This repository is a mirror of the [component](http://component.io) module [itsjoesullivan/event](http://github.com/itsjoesullivan/event). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/itsjoesullivan-event`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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