"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectBasicClone = void 0;
const is_primitive_1 = require("../../check/is-primitive.cjs");
/**
 * @category Object Basic
 * @name objectBasicClone
 * @description Creates a deep clone of a given value using the structured clone algorithm.
 * Do not throw errors if structured cloning is not possible.
 * In case of failure returns the same variable.
 * You can check it with ```Object.is(originalVariable, clonedVariable)```.
 * Requires: NodeJS v17.0.0, Firefox v94.
 * @template {ValueType}
 * @param {unknown} value The object to be cloned. This can be any structured-clonable type.
 * @param {TransferableObjectType[]=} transfer An array of transferable objects in value that will be moved rather than cloned to the returned object.
 * @returns {ValueType} The returned value is a deep copy of the original value.
 * @since 0.3.20
 */
function objectBasicClone(value, transfer) {
    if (is_primitive_1.checkIsPrimitive(value)) {
        return value;
    }
    if ("structuredClone" in globalThis) {
        try {
            let cloned;
            if (transfer) {
                cloned = globalThis.structuredClone(value, { transfer });
            }
            else {
                cloned = globalThis.structuredClone(value);
            }
            return cloned;
        }
        catch (_dataCloneError) {
            //
        }
    }
    return value;
}
exports.objectBasicClone = objectBasicClone;
