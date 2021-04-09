"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberZeroPad = void 0;
/**
 * @name numberZeroPad
 * @description Pad a number with leading zeros and zeroes after the decimal point.
 * @throws {RangeError|TypeError}
 * @param {Number|String} numberToPad
 * @param {Number} [leadingLength=0]
 * @param {Number=} decimalLength
 * @returns {String}
 * @since 0.1.39
 * @example
 * ```javascript
 * numberZeroPad("0.0001", 3); // ➜ '000.0001'
 * ```
 * @example
 * ```javascript
 * numberZeroPad("1", 3, 2); // ➜ '001.00'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(5.123, 4); // ➜ '0005.123'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(1234567.89, 4, 3); // ➜ '1234567.890'
 * ```
 */
function numberZeroPad(numberToPad, leadingLength = 0, decimalLength) {
    if (!Number.isInteger(leadingLength)) {
        throw new TypeError(`The leading length should be an integer. [${leadingLength}] given.`);
    }
    if (leadingLength < 0) {
        throw new RangeError(`The leading length should not be a negative value. [${leadingLength}] given.`);
    }
    if (!Number.isSafeInteger(leadingLength)) {
        throw new RangeError(`The leading length should not be a safe integer. [${leadingLength}] given.`);
    }
    if (decimalLength !== undefined) {
        if (!Number.isInteger(decimalLength)) {
            throw new TypeError(`The decimal length should be an integer. [${decimalLength}] given.`);
        }
        if (decimalLength < 0) {
            throw new RangeError(`The decimal length should not be a negative value. [${decimalLength}] given.`);
        }
        if (!Number.isSafeInteger(decimalLength)) {
            throw new RangeError(`The decimal length should not be a safe integer. [${decimalLength}] given.`);
        }
    }
    const asString = String(numberToPad);
    const asInteger = Number.parseInt(asString, 10);
    if (Number.isNaN(asInteger) || !Number.isFinite(asInteger)) {
        throw new TypeError(`The number to pad should be a valid number. [${asString}] given.`);
    }
    let decimalPortion = String(Number.parseFloat(asString));
    if (decimalPortion.includes(".")) {
        decimalPortion = decimalPortion.split(".").pop();
    }
    else {
        decimalPortion = "";
    }
    if (decimalLength !== undefined && decimalPortion.length !== decimalLength) {
        if (decimalPortion.length > decimalLength) {
            decimalPortion = decimalPortion.substring(0, decimalLength);
        }
        else {
            decimalPortion = decimalPortion.padEnd(decimalLength, "0");
        }
    }
    let padded = String(asInteger).padStart(leadingLength, "0");
    if (decimalPortion.length) {
        padded = `${padded}.${decimalPortion}`;
    }
    return padded;
}
exports.numberZeroPad = numberZeroPad;
