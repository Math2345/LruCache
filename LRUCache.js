class LRUCache {

    constructor(limit) {
        this.tail = null;
        this.head = null;
        this.cache = {};
        this.length = 0;
        this.limit = limit;
    }

    /**
     * This method takes a callback function and returns the result of the function’s calculation depending on the condition.
     * When a function is first performed it returns a result and it is cached. If the calculation is repeated, the result is taken from the cache
     * @param fn
     * @returns {function(*=): (*)}
     */

    memoize(fn) {

        return (key) => {
            if (!this.cache[key]) {

                let result = fn(key);
                this.#set(key, result);

                console.log(this.cache);

                return result;

            } else {
                console.log(this.cache);
                console.log('The value taken from the cache ', this.#get(key));
                return this.#get(key);
            }
        }
    }

    /**
     * key pair and value are inserted at the top of the list
     *
     * @param key
     * @param value
     */

    #set(key, value) {

        this.#checkSize(key);

        if (!this.head) {
            // вставка самого первого элемента в списке
            this.head = this.tail = new Node(key, value);

        } else {
            // вставка элемента в начало списка
            const currentNode = new Node(key, value, this.head);
            this.head.prev = currentNode;
            this.head = currentNode;
        }

        if (!this.cache[key]) {

            this.cache[key] = this.head;
            this.length++;

        }
    }

    /**
     *  Returns the value with the given key in the cache or or error message  if none was found
     *
     * @param key
     * @returns {*}
     */

    #get(key) {
        if (this.cache[key]) {
            const value = this.cache[key].value;

            this.#remove(key);

            this.#set(key, value);

            return value;
        }

        console.log('Element not found by key');
    }

    /**
     * this method is removed value by key
     *
     * @param key
     */
    #remove(key) {
        const node = this.cache[key];

        if (node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next !== null) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        this.length--;
        delete this.cache[key];
    }

    /**
     * this method verifies the size of the cache. If you cache an item that is longer than the length of the cache,
     * the most recent element in the cache is removed
     *
     * @param key
     */
    #checkSize(key) {
        if (this.length + 1 > this.limit && !this.cache[key]) {
            this.#remove(this.tail.key);
        }
    }
}

class Node {

    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

}

module.exports = LRUCache;

