// @ts-nocheck
'use strict';
const BaseManager = require('./BaseManager');
const { Error } = require('../errors');
/**
 * Manages the API methods of a data model along with a collection of instances.
 * @extends {BaseManager}
 * @abstract
 */
class DataManager extends BaseManager {
    constructor(client, holds) {
        super(client);
        /**
         * The data structure belonging to this manager.
         * @name DataManager#holds
         * @type {Function}
         * @private
         * @readonly
         */
        Object.defineProperty(this, 'holds', { value: holds });
    }
    /**
     * The cache of items for this manager.
     * @type {Collection}
     * @abstract
     */
    get cache() {
        throw new Error('NOT_IMPLEMENTED', 'get cache', this.constructor.name);
    }
    /**
     * Resolves a data entry to a data Object.
     * @param {string|Object} idOrInstance The id or instance of something in this Manager
     * @returns {?Object} An instance from this Manager
     */
    resolve(idOrInstance) {
        var _a;
        if (idOrInstance instanceof this.holds)
            return idOrInstance;
        if (typeof idOrInstance === 'string')
            return (_a = this.cache.get(idOrInstance)) !== null && _a !== void 0 ? _a : null;
        return null;
    }
    /**
     * Resolves a data entry to an instance id.
     * @param {string|Object} idOrInstance The id or instance of something in this Manager
     * @returns {?Snowflake}
     */
    resolveId(idOrInstance) {
        if (idOrInstance instanceof this.holds)
            return idOrInstance.id;
        if (typeof idOrInstance === 'string')
            return idOrInstance;
        return null;
    }
    valueOf() {
        return this.cache;
    }
}
module.exports = DataManager;
