/** Convert a ReactWrapper to a printable string representation.
    @param {ReactWrapper} value The value to format.
    @param {Object} options Formatting options.
    @protected
*/
function formatWrapper(value, _options) {
  return value.name();
}

module.exports = formatWrapper;
