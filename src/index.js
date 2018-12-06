// Entry Point for the Application

// Babel polyfill to convert ES6 code in runtime
// require('@babel/polyfill');

// Set Environment Variables
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

// Run Server
require("./server/server");
