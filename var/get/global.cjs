/**
 * @name varGetGlobal
 * @returns {NodeJS.Global|(WorkerGlobalScope & Window)|Window}
 */
module.exports = function varGetGlobal() {
  if (typeof globalThis !== "undefined") {
    // eslint-disable-next-line no-undef
    return globalThis;
  }
  if (typeof self !== "undefined") {
    // eslint-disable-next-line no-undef
    return self;
  }
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-undef
    return window;
  }
  if (typeof global !== "undefined") {
    // eslint-disable-next-line no-undef
    return global;
  }
  try {
    return Function("return this")();
  } catch {
    //
  }
  return undefined;
};
