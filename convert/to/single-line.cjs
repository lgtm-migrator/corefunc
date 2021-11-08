"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToSingleLine = void 0;
const string_1 = require("../../cast/to/string.cjs");
const is_object_like_1 = require("../../check/is-object-like.cjs");
const is_primitive_1 = require("../../check/is-primitive.cjs");
const string_2 = require("../error/string.cjs");
const string_3 = require("../../is/string.cjs");
const multiline_1 = require("../../regex/is/multiline.cjs");
const camel_1 = require("../../text/case/camel.cjs");
const capitalize_1 = require("../../text/case/capitalize.cjs");
function stringToSingleLine(record) {
  if (multiline_1.regexIsMultiline(record)) {
    record = record.replace(/\r?\n/g, " ");
  }
  record = record.trim();
  if (!record.endsWith(".")) {
    record = `${record}.`;
  }
  return record;
}
function primitiveToSingleLine(record) {
  if (string_3.isString(record)) {
    return stringToSingleLine(record);
  }
  if (record === undefined) {
    return stringToSingleLine("undefined");
  }
  if (record === null) {
    return stringToSingleLine("null");
  }
  return stringToSingleLine(string_1.castToString(record));
}
function arrayToSingleLine(record) {
  return record.map((value) => convertAnyToSingleLine(value)).join(" ");
}
function objectToSingleLine(record, prettify = false) {
  if (record instanceof Error) {
    return string_2.convertErrorToString(record);
  }
  const keys = Object.keys(record);
  let output = "";
  keys.forEach((key) => {
    if (prettify) {
      key = capitalize_1.textCaseCapitalize(camel_1.textCaseCamel(key, true));
    }
    output = `${output}${key}: ${convertAnyToSingleLine(record[key])}`;
    if (!output.endsWith(" ")) {
      output = `${output} `;
    }
  });
  return output;
}
function convertAnyToSingleLine(record, prettify = false) {
  if (is_primitive_1.checkIsPrimitive(record)) {
    return primitiveToSingleLine(record);
  }
  if (Array.isArray(record)) {
    return arrayToSingleLine(record);
  }
  if (is_object_like_1.checkIsObjectLike(record)) {
    return objectToSingleLine(record, prettify);
  }
  return stringToSingleLine(String(record));
}
/**
 * @name convertToSingleLine
 * @category Convert To
 * @description Convert any value to single line string.
 * @summary ```import { convertToSingleLine } from "@corefunc/corefunc/convert/to/single-line";```
 * @param {*} record Any plain value
 * @param {boolean=} [prettify=false]
 * @returns {string} Single line string
 * @since 0.3.10
 */
function convertToSingleLine(record, prettify = false) {
  return convertAnyToSingleLine(record, prettify);
}
exports.convertToSingleLine = convertToSingleLine;
