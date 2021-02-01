import { v8Clone } from "../../v8.mjs";

/**
 * @name objectGetProperty
 * @description Gets the value at path of object.
 * @param {Object} object Object to search in
 * @param {String|Array.<String>>} key String key or array of string to form path
 * @param {*=} defaultValue Default value if path is not exists. Does not replace undefined values
 * @returns {*} Value in path or default value
 * @since 0.0.47
 */
export function objectGetProperty(object, key, defaultValue) {
  if (typeof key === "string" && key in object) {
    return object[key];
  }
  let keySet;
  if (typeof key === "string") {
    keySet = key.split(".");
  } else if (Array.isArray(key)) {
    keySet = key;
  } else {
    return defaultValue;
  }
  const length = keySet.length;
  let index = 0;
  let newObject = v8Clone(object);
  let isSet = false;
  while (newObject !== null && index < length) {
    // @ts-ignore
    isSet = keySet[index] in newObject;
    newObject = newObject[keySet[index]];
    index += 1;
  }
  if (index && index === length) {
    if (newObject === undefined) {
      if (isSet) {
        return newObject;
      }
      return defaultValue;
    } else {
      return newObject;
    }
  } else {
    return defaultValue;
  }
}
