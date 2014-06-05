var _ = require('lodash');

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


// Corrected: see https://github.com/lodash/lodash/issues/540
// module.exports = _.partialRight(_.merge, _.defaults);
module.exports = _.partialRight(_.merge, function deep(a, b) {
  
  // Ensure dates and arrays are not recursively merged
  if (_.isArray(a) || _.isDate(a)) {
    if (_.isUndefined(a)) return b;
    else return a;
  }
  else return _.merge(a, b, deep);
});