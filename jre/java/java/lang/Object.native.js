/**
 * @override
 * @return {string}
 * @public
 */
Object.prototype.toString = function() {
  return window.String(this.$javaToString());
};

// The import to pull in @defines for jre.
let jre = goog.require('jre');
