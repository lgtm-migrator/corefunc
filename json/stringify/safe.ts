function serializer(replacer?: (this: any, key: string, value: any) => any, cycleReplacerArg?) {
  const keys = [];
  const stack = [];
  let cycleReplacer = cycleReplacerArg;
  if (cycleReplacer === null) {
    cycleReplacer = function cr(key, value) {
      if (stack[0] === value) {
        return "[Circular ~]";
      }
      return `[Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`;
    };
  }
  return function (key: string, value: any) {
    let result = value;
    if (stack.length > 0) {
      const thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (stack.indexOf(result) !== -1) {
        result = cycleReplacer.call(this, key, result);
      }
    } else {
      stack.push(result);
    }
    return replacer === null ? result : replacer.call(this, key, result);
  };
}

/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
export default function jsonStringifySafe(
  object: any,
  replacer?: (this: any, key: string, value: any) => any,
  spaces?: string | number,
  cycleReplacer?: (key: string, value: any) => any,
): string {
  return JSON.stringify(object, serializer(replacer, cycleReplacer), spaces);
}