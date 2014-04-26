var merge = require('lodash.merge');
var defaults = require('lodash.defaults');
var partialRight = require('lodash.partialright');

/**
 * defaultsDeep
 *
 * Implement a deep version of `_.defaults`.
 *
 * This method is hopefully temporary, until lodash has something
 * similar that can be called in a single method.  For now, it's
 * worth it to use a temporary module for readability.
 * (i.e. I know what `_.defaults` means offhand- not true for `_.partialRight`)
 */
module.exports = partialRight(merge, defaults);
