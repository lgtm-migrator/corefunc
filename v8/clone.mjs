import * as v8 from "v8";

/**
 * @category V8
 * @name v8Clone
 * @description Deep clone object. Note: don't use on objects containing Functions.
 * @param {Object} objectToClone Object to be deep cloned
 * @param {Boolean} [returnOriginalOnError=true]
 * @returns {Object}
 * @throws {Error}
 * @since 0.1.47
 * @deprecated Use `@corefunc/v8/clone` instead
 */
export function v8Clone(objectToClone, returnOriginalOnError = true) {
  if (returnOriginalOnError) {
    try {
      return v8.deserialize(v8.serialize(objectToClone));
    } catch (_error) {
      return objectToClone;
    }
  } else {
    return v8.deserialize(v8.serialize(objectToClone));
  }
}
