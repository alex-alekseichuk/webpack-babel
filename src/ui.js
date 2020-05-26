/**
 * UI code
 */
'use strict';

import "core-js/stable";
import "regenerator-runtime/runtime";

const app = require('./app');

(async () => {
  const result = await app();
  console.log(`Result: ${result}`);
})();
