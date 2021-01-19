"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isObjectLike_1 = require("../check/isObjectLike");
const map_1 = require("../is/map");
const set_1 = require("../is/set");
const weakMap_1 = require("../is/weakMap");
const weakSet_1 = require("../is/weakSet");
function objectSetValue(object, key, value) {
    if (isObjectLike_1.default(object) === false) {
        return object;
    }
    if (map_1.default(object) || weakMap_1.default(object)) {
        object.set(key, value);
    }
    if (set_1.default(object) || weakSet_1.default(object)) {
        if (arguments.length > 2) {
            object.add(value);
        }
        else {
            object.add(key);
        }
    }
    else {
        object[key] = value;
    }
    return object;
}
exports.default = objectSetValue;