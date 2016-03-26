"use strict";

function showCursorString() {
  return csi + "?25h"
}

function showCursor() {
  process.stdout.write(showCursorString())
}

module.exports = showCursor;
