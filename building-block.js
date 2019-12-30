// Events and Arrays are both collections.

// Iterator and Observer are similar

// Iterator pattern - pull values out, when they are needed.
/*
> var iterator = [1,2,3].iterator(); 
> console.log(iterator.next()); 
> { value: 1, done: false }
> console.log(iterator.next());
> { value: 2, done: false }
> ....
> console.log(iterator.next());
> { done: true }
*/

// Observer pattern - pushes values out, when they are happening.
// Producer and consumer.
// Observable === Collection + Time - a collection that arrives over time.