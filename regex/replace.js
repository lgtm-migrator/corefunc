"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("../array/get/head");
const string_1 = require("../cast/to/string");
const isTraversable_1 = require("../check/isTraversable");
const values_1 = require("../collection/values");
const string_2 = require("../is/string");
/**
 * Replace all occurrences of the search string with the replacement string
 * @param {String} haystack
 * @param {Array|String} needle
 * @param {Array|String} replaceWith
 * @return {String}
 * @example regexReplace('target', 'search', 'replace');
 * @example regexReplace('target', ['search 1', 'searach 2'], 'replace');
 * @example regexReplace('target', ['search 1', 'searach 2'], ['replace 1', 'replace 2']);
 */
function regexReplace(haystack, needle, replaceWith) {
    let sTarget = string_1.default(haystack);
    let sSearch;
    let sReplace;
    if (string_2.default(needle)) {
        sSearch = needle;
    }
    else if (isTraversable_1.default(needle)) {
        sSearch = values_1.default(needle);
    }
    else {
        sSearch = string_1.default(needle);
    }
    if (string_2.default(replaceWith)) {
        sReplace = replaceWith;
    }
    else if (isTraversable_1.default(replaceWith)) {
        sReplace = values_1.default(replaceWith);
    }
    else {
        sReplace = string_1.default(replaceWith);
    }
    if (string_2.default(sSearch) && string_2.default(sReplace)) {
        return sTarget.split(sSearch).join(sReplace);
    }
    if (string_2.default(sSearch)) {
        return sTarget.split(sSearch).join(string_1.default(head_1.arrayGetHead(sReplace)));
    }
    if (string_2.default(sReplace)) {
        sSearch.forEach((srch) => {
            sTarget = sTarget.split(string_1.default(srch)).join(sReplace);
        });
    }
    sSearch.forEach((srch, index) => {
        sTarget = sTarget.split(string_1.default(srch)).join(string_1.default(sReplace[index]));
    });
    return sTarget;
}
exports.default = regexReplace;