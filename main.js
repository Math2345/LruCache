const LRUCache = require("./LRUCache.js");
const { fact, fib } = require("./functions/math.js");
const { zip } = require("./functions/str.js");



const factCache = new LRUCache(3).memoize(fact);


factCache(5);
factCache(4);
factCache(3);

factCache(7);
factCache(3); // The value taken from the cache

const fibCache = new LRUCache(4).memoize(fib);

fibCache(4);
fibCache(5);
fibCache(6);
fibCache(7);
fibCache(5); // The value taken from the cache

const zipCache = new LRUCache(4).memoize(zip);

zipCache('aaaaBBBBCDD');
zipCache('aaaaBBBBCDD'); // The value taken from the cache
















