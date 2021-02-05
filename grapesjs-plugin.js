"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _default = grapesjs.plugins.add('my-plugin-name', (editor, options) => {
    /*
    * Here you should rely on GrapesJS APIs, so check 'API Reference' for more info
    * For example, you could do something like this to add some new command:
    *
    * editor.Commands.add(...);
    */
    console.log(options);
});

exports.default = _default;