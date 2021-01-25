"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetValue = void 0;
const isObjectLike_1 = require("../check/isObjectLike");
const map_1 = require("../is/map");
const set_1 = require("../is/set");
const weakMap_1 = require("../is/weakMap");
const weakSet_1 = require("../is/weakSet");
function objectSetValue(object, key, value) {
    if (isObjectLike_1.checkIsObjectLike(object) === false) {
        return object;
    }
    if (map_1.isMap(object) || weakMap_1.isWeakMap(object)) {
        object.set(key, value);
    }
    if (set_1.isSet(object) || weakSet_1.isWeakSet(object)) {
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
exports.objectSetValue = objectSetValue;
