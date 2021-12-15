# JavaScript LRU Cache

This project is an implemented LRUcache module written in native Javascript. To implement the LRUcache I use a linear list data structure. 
This makes the module more efficient over time. 

## Whats LRU Cache?

LRU cache stand for Least Recently Used Cache, which evicts least recently used entry. As Cache purpose is to provide fast and efficient way of retrieving data.
It need to meet certain requirement:

-  Cache needs to have some bounds to limit memory usages
-  Cache Insert and Lookup operation should be fast, preferably O(1) time
-  A cache should have efficient algorithm to evict the entry when it have reached its memory limit

## How LRU cache works

This cache algorithm keeps recently used items near the top of cache. Whenever a new item is accessed, the LRU places it at the top of the cache. When the cache limit has been reached, items that have been accessed less recently will be removed starting from the bottom of the cache

## About the project and examples

In this project I decided to test the operation of the module on the execution of mathematical functions and functions of work with strings. 

For example: 
There is a function that finds a factorial of a number. It is passed as a parameter in the method of memoize LRUCache. A number factorial function computes the result and caches it.
In case of repeated operation with the same data, the function searches in the cache and returns the result.

Similar actions performed with the Fibonacci function and string compression.

```
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


