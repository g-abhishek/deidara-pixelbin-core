import axios from 'axios';

require('../modules/es.symbol');

require('../modules/es.symbol.description');

require('../modules/es.symbol.async-iterator');

require('../modules/es.symbol.has-instance');

require('../modules/es.symbol.is-concat-spreadable');

require('../modules/es.symbol.iterator');

require('../modules/es.symbol.match');

require('../modules/es.symbol.match-all');

require('../modules/es.symbol.replace');

require('../modules/es.symbol.search');

require('../modules/es.symbol.species');

require('../modules/es.symbol.split');

require('../modules/es.symbol.to-primitive');

require('../modules/es.symbol.to-string-tag');

require('../modules/es.symbol.unscopables');

require('../modules/es.error.cause');

require('../modules/es.error.to-string');

require('../modules/es.aggregate-error');

require('../modules/es.aggregate-error.cause');

require('../modules/es.array.at');

require('../modules/es.array.concat');

require('../modules/es.array.copy-within');

require('../modules/es.array.every');

require('../modules/es.array.fill');

require('../modules/es.array.filter');

require('../modules/es.array.find');

require('../modules/es.array.find-index');

require('../modules/es.array.flat');

require('../modules/es.array.flat-map');

require('../modules/es.array.for-each');

require('../modules/es.array.from');

require('../modules/es.array.includes');

require('../modules/es.array.index-of');

require('../modules/es.array.is-array');

require('../modules/es.array.iterator');

require('../modules/es.array.join');

require('../modules/es.array.last-index-of');

require('../modules/es.array.map');

require('../modules/es.array.of');

require('../modules/es.array.reduce');

require('../modules/es.array.reduce-right');

require('../modules/es.array.reverse');

require('../modules/es.array.slice');

require('../modules/es.array.some');

require('../modules/es.array.sort');

require('../modules/es.array.species');

require('../modules/es.array.splice');

require('../modules/es.array.unscopables.flat');

require('../modules/es.array.unscopables.flat-map');

require('../modules/es.array-buffer.constructor');

require('../modules/es.array-buffer.is-view');

require('../modules/es.array-buffer.slice');

require('../modules/es.data-view');

require('../modules/es.date.get-year');

require('../modules/es.date.now');

require('../modules/es.date.set-year');

require('../modules/es.date.to-gmt-string');

require('../modules/es.date.to-iso-string');

require('../modules/es.date.to-json');

require('../modules/es.date.to-primitive');

require('../modules/es.date.to-string');

require('../modules/es.escape');

require('../modules/es.function.bind');

require('../modules/es.function.has-instance');

require('../modules/es.function.name');

require('../modules/es.global-this');

require('../modules/es.json.stringify');

require('../modules/es.json.to-string-tag');

require('../modules/es.map');

require('../modules/es.math.acosh');

require('../modules/es.math.asinh');

require('../modules/es.math.atanh');

require('../modules/es.math.cbrt');

require('../modules/es.math.clz32');

require('../modules/es.math.cosh');

require('../modules/es.math.expm1');

require('../modules/es.math.fround');

require('../modules/es.math.hypot');

require('../modules/es.math.imul');

require('../modules/es.math.log10');

require('../modules/es.math.log1p');

require('../modules/es.math.log2');

require('../modules/es.math.sign');

require('../modules/es.math.sinh');

require('../modules/es.math.tanh');

require('../modules/es.math.to-string-tag');

require('../modules/es.math.trunc');

require('../modules/es.number.constructor');

require('../modules/es.number.epsilon');

require('../modules/es.number.is-finite');

require('../modules/es.number.is-integer');

require('../modules/es.number.is-nan');

require('../modules/es.number.is-safe-integer');

require('../modules/es.number.max-safe-integer');

require('../modules/es.number.min-safe-integer');

require('../modules/es.number.parse-float');

require('../modules/es.number.parse-int');

require('../modules/es.number.to-exponential');

require('../modules/es.number.to-fixed');

require('../modules/es.number.to-precision');

require('../modules/es.object.assign');

require('../modules/es.object.create');

require('../modules/es.object.define-getter');

require('../modules/es.object.define-properties');

require('../modules/es.object.define-property');

require('../modules/es.object.define-setter');

require('../modules/es.object.entries');

require('../modules/es.object.freeze');

require('../modules/es.object.from-entries');

require('../modules/es.object.get-own-property-descriptor');

require('../modules/es.object.get-own-property-descriptors');

require('../modules/es.object.get-own-property-names');

require('../modules/es.object.get-prototype-of');

require('../modules/es.object.has-own');

require('../modules/es.object.is');

require('../modules/es.object.is-extensible');

require('../modules/es.object.is-frozen');

require('../modules/es.object.is-sealed');

require('../modules/es.object.keys');

require('../modules/es.object.lookup-getter');

require('../modules/es.object.lookup-setter');

require('../modules/es.object.prevent-extensions');

require('../modules/es.object.seal');

require('../modules/es.object.set-prototype-of');

require('../modules/es.object.to-string');

require('../modules/es.object.values');

require('../modules/es.parse-float');

require('../modules/es.parse-int');

require('../modules/es.promise');

require('../modules/es.promise.all-settled');

require('../modules/es.promise.any');

require('../modules/es.promise.finally');

require('../modules/es.reflect.apply');

require('../modules/es.reflect.construct');

require('../modules/es.reflect.define-property');

require('../modules/es.reflect.delete-property');

require('../modules/es.reflect.get');

require('../modules/es.reflect.get-own-property-descriptor');

require('../modules/es.reflect.get-prototype-of');

require('../modules/es.reflect.has');

require('../modules/es.reflect.is-extensible');

require('../modules/es.reflect.own-keys');

require('../modules/es.reflect.prevent-extensions');

require('../modules/es.reflect.set');

require('../modules/es.reflect.set-prototype-of');

require('../modules/es.reflect.to-string-tag');

require('../modules/es.regexp.constructor');

require('../modules/es.regexp.dot-all');

require('../modules/es.regexp.exec');

require('../modules/es.regexp.flags');

require('../modules/es.regexp.sticky');

require('../modules/es.regexp.test');

require('../modules/es.regexp.to-string');

require('../modules/es.set');

require('../modules/es.string.at-alternative');

require('../modules/es.string.code-point-at');

require('../modules/es.string.ends-with');

require('../modules/es.string.from-code-point');

require('../modules/es.string.includes');

require('../modules/es.string.iterator');

require('../modules/es.string.match');

require('../modules/es.string.match-all');

require('../modules/es.string.pad-end');

require('../modules/es.string.pad-start');

require('../modules/es.string.raw');

require('../modules/es.string.repeat');

require('../modules/es.string.replace');

require('../modules/es.string.replace-all');

require('../modules/es.string.search');

require('../modules/es.string.split');

require('../modules/es.string.starts-with');

require('../modules/es.string.substr');

require('../modules/es.string.trim');

require('../modules/es.string.trim-end');

require('../modules/es.string.trim-start');

require('../modules/es.string.anchor');

require('../modules/es.string.big');

require('../modules/es.string.blink');

require('../modules/es.string.bold');

require('../modules/es.string.fixed');

require('../modules/es.string.fontcolor');

require('../modules/es.string.fontsize');

require('../modules/es.string.italics');

require('../modules/es.string.link');

require('../modules/es.string.small');

require('../modules/es.string.strike');

require('../modules/es.string.sub');

require('../modules/es.string.sup');

require('../modules/es.typed-array.float32-array');

require('../modules/es.typed-array.float64-array');

require('../modules/es.typed-array.int8-array');

require('../modules/es.typed-array.int16-array');

require('../modules/es.typed-array.int32-array');

require('../modules/es.typed-array.uint8-array');

require('../modules/es.typed-array.uint8-clamped-array');

require('../modules/es.typed-array.uint16-array');

require('../modules/es.typed-array.uint32-array');

require('../modules/es.typed-array.at');

require('../modules/es.typed-array.copy-within');

require('../modules/es.typed-array.every');

require('../modules/es.typed-array.fill');

require('../modules/es.typed-array.filter');

require('../modules/es.typed-array.find');

require('../modules/es.typed-array.find-index');

require('../modules/es.typed-array.for-each');

require('../modules/es.typed-array.from');

require('../modules/es.typed-array.includes');

require('../modules/es.typed-array.index-of');

require('../modules/es.typed-array.iterator');

require('../modules/es.typed-array.join');

require('../modules/es.typed-array.last-index-of');

require('../modules/es.typed-array.map');

require('../modules/es.typed-array.of');

require('../modules/es.typed-array.reduce');

require('../modules/es.typed-array.reduce-right');

require('../modules/es.typed-array.reverse');

require('../modules/es.typed-array.set');

require('../modules/es.typed-array.slice');

require('../modules/es.typed-array.some');

require('../modules/es.typed-array.sort');

require('../modules/es.typed-array.subarray');

require('../modules/es.typed-array.to-locale-string');

require('../modules/es.typed-array.to-string');

require('../modules/es.unescape');

require('../modules/es.weak-map');

require('../modules/es.weak-set');

require('../modules/web.atob');

require('../modules/web.btoa');

require('../modules/web.dom-collections.for-each');

require('../modules/web.dom-collections.iterator');

require('../modules/web.dom-exception.constructor');

require('../modules/web.dom-exception.stack');

require('../modules/web.dom-exception.to-string-tag');

require('../modules/web.immediate');

require('../modules/web.queue-microtask');

require('../modules/web.structured-clone');

require('../modules/web.timers');

require('../modules/web.url');

require('../modules/web.url.to-json');

require('../modules/web.url-search-params');

module.exports = require('../internals/path');

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/**
 * class to create a Image object
 */
class Image {
  /**
   * @param {String} _imageUri path of image
   * @param {String} _cloudName cloud name
   * @param {String} _zone cloud zone
   */
  constructor(_imageUri, _cloudName, _zone) {
    this.imageUri = _imageUri;
    this.cloudName = _cloudName;
    this.zone = _zone;
    this.transformation = [];
    this.host = "https://cdn.pixelbin.io";
  }
  /**
   * Set transformation to be performed on Image.
   * @param {Transformation} transformation Image transformation
   * returns Image
   */


  setTransformation(transformation) {
    this.transformation = transformation.getTransformation();
    return this;
  }
  /**
   * Get Transformation CDN link
   * @param {Transformation} transformation Image transformation
   * returns String
   */


  getUrl() {
    let operations = this.transformation.join("~").replace(/ /g, "") || "original";
    return `${this.host}/${this.cloudName}/${this.zone ? `${this.zone}/` : ""}${operations}/${this.imageUri}`;
  }

}

class PDKInvalidUrlError extends Error {
  constructor(message) {
    super(message);
    this.name = "PDKInvalidUrlError";
  }

}

class PDKIllegalArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = "PDKIllegalArgumentError";
  }

}

/**
 * class to create a Transformation object
 */

class Transformation {
  /**
   * @param {Transformation} _transformation
   */
  constructor(_transformation) {
    this._transformation = _transformation || [];
  }
  /**
   * provides functionality to append transformation.
   * @param {Transformation} transformation.
   * returns Transformation
   */


  pipe(transformation) {
    if (transformation instanceof Transformation) {
      return new Transformation([...this._transformation, ...transformation.getTransformation()]);
    }

    throw new Error("Argument Should Be Instance of Transformation");
  }
  /**
   * provides functionality to get all transformation.
   * returns Transformation list
   */


  getTransformation() {
    return this._transformation;
  }
  /**
   * allows the user to generate a custom transformation with the input parameters.
   * @param {Object} arg - custom transformation
   * @param {string} arg.plugin - transformation plugin
   * @param {string} arg.method - transformation method
   * @param {Array<Object>} arg.values - transformation parameter object
   * @param {string} [arg.values[].key] - transformation parameter key
   * @param {string} [arg.values[].value] - transformation parameter value
   * @param {boolean} [arg.isPreset] - whether the transformation is a preset
   * returns Transformation
   */


  static customTransformation({
    plugin,
    name,
    values = []
  }) {
    if (!(values instanceof Array)) throw new PDKIllegalArgumentError(`Expected values to be an Array. Got ${typeof values} instead`);
    const patternArr = [];

    if (plugin === "p") {
      patternArr.push(`${plugin}:${name}`);
      return new Transformation(patternArr.join(""));
    }

    patternArr.push(`${plugin}.${name}`);
    patternArr.push("(");
    patternArr.push(values.map(({
      key,
      value
    }) => `${key}:${value}`).join(","));
    patternArr.push(")");
    return new Transformation(patternArr.join(""));
  }

}

const version2Regex = /^v[1-2]$/;
const urlWithZone = /^\/([a-zA-Z0-9_-]*)\/([a-zA-Z0-9_-]{6})\/(.+)\/(.*)$/;
const urlWithoutZone = /\/([a-zA-Z0-9_-]*)\/(.+)\/(.*)/;
const zoneSlug = /([a-zA-Z0-9_-]{6})/;

const getUrlParts = function (pixelbinUrl) {
  const {
    protocol,
    host,
    pathname,
    search
  } = new URL(pixelbinUrl);
  const urlDetails = {
    protocol,
    host,
    search,
    version: "v1"
  };
  const parts = pathname.split("/");

  if (version2Regex.test(parts[1])) {
    urlDetails["version"] = parts.splice(1, 1)[0];
  }

  if (parts[1].length < 3) throw new PDKInvalidUrlError("Invalid pixelbin url. Please make sure the url is correct.");

  if (urlWithZone.test(parts.join("/"))) {
    urlDetails["cloudName"] = parts.splice(1, 1)[0];
    urlDetails["zoneSlug"] = parts.splice(1, 1)[0];
    urlDetails["pattern"] = parts.splice(1, 1)[0];
    urlDetails["filePath"] = parts.slice(1).join("/");
  } else if (urlWithoutZone.test(parts.join("/"))) {
    urlDetails["cloudName"] = parts.splice(1, 1)[0];
    urlDetails["pattern"] = parts.splice(1, 1)[0];
    urlDetails["filePath"] = parts.slice(1).join("/");
  } else {
    throw new PDKInvalidUrlError("Invalid pixelbin url. Please make sure the url is correct.");
  }

  return urlDetails;
};

const getUrlFromObj = function (obj, config) {
  if (!obj.baseUrl) obj["baseUrl"] = "https://cdn.pixelbin.io";
  if (!obj.cloudName) throw new PDKIllegalArgumentError("key cloudName should be defined");
  if (!obj.filePath) throw new PDKIllegalArgumentError("key filePath should be defined");
  obj["pattern"] = getPatternFromTransformations(obj["transformations"], config) || "original";
  if (!obj.version || !version2Regex.test(obj.version)) obj.version = "v2";
  if (!obj.zone || !zoneSlug.test(obj.zone)) obj.zone = "";
  const urlKeySorted = ["baseUrl", "version", "cloudName", "zoneSlug", "pattern", "filePath"];
  const urlArr = [];
  urlKeySorted.forEach(key => {
    if (obj[key]) urlArr.push(obj[key]);
  });
  return urlArr.join("/");
};

const getPartsFromUrl = function (url) {
  const parts = getUrlParts(url);
  return {
    baseUrl: `${parts["protocol"]}//${parts["host"]}`,
    filePath: parts["filePath"],
    pattern: parts["pattern"],
    version: parts["version"],
    zone: parts["zoneSlug"],
    cloudName: parts["cloudName"]
  };
};

function removeLeadingDash(str) {
  if (str.charAt(0) === "-") {
    return str.substr(1);
  }

  return str;
}

function getParamsList(dSplit, prefix) {
  return removeLeadingDash(dSplit.split("(")[1].replace(")", "").replace(prefix, "")).split(",");
}

function getParamsObject(paramsList) {
  const params = [];
  paramsList.forEach(item => {
    const [param, val] = item.split(":");

    if (param) {
      params.push({
        key: param,
        value: val
      });
    }
  });
  return params.length && params;
}

function txtToOptions(dSplit) {
  // Figure Out Module
  const fullFnName = dSplit.split("(")[0];
  const [pluginId, operationName] = fullFnName.split(".");

  if (pluginId === "p") {
    const params = getParamsObject(getParamsList(dSplit, ""));
    const presetName = params.find(({
      key,
      value
    }) => key === "n");

    if (presetName !== null && presetName !== void 0 && presetName.key) {
      return {
        plugin: pluginId,
        name: presetName.value
      };
    }

    return;
  }

  const values = getParamsObject(getParamsList(dSplit, "."));
  const [plugin, name] = dSplit.split("(")[0].split(".");
  const transformation = {
    values: values,
    plugin,
    name
  };
  if (!transformation.values) delete transformation["values"];
  return transformation;
}

const getTransformationsFromPattern = function (pattern, url, config, flatten = false) {
  if (pattern === "original") {
    return [];
  }

  const dSplit = pattern.split(config.operationSeparator);
  let opts = dSplit.map(x => {
    if (x.startsWith("p:")) {
      const [, presetString] = x.split(":");
      x = `p.apply(n:${presetString})`;
    }

    return txtToOptions(x);
  }).flat(); // Flatten preset sub-lists

  if (flatten) opts = opts.flat();
  return opts;
};

const getObjFromUrl = function (url, config, flatten) {
  const parts = getPartsFromUrl(url);

  try {
    parts.transformations = getTransformationsFromPattern(parts.pattern, url, config, flatten);
  } catch (err) {
    throw new PDKInvalidUrlError("Error Processing url. Please check the url is correct");
  }

  delete parts["pattern"];
  return parts;
};
const getPatternFromTransformations = function (transformationList, config) {
  return transformationList !== null && transformationList !== void 0 && transformationList.length ? transformationList.map(o => {
    if (o.hasOwnProperty("name")) {
      if (o.plugin === "p") {
        return `p:${o.name}`;
      } else {
        o.values = o.values || [];
        const paramsStr = o.values.map(({
          key,
          value
        }) => {
          return `${key}:${value}`;
        }).join(config.parameterSeparator);
        return `${o.plugin}.${o.name}(${paramsStr})`;
      }
    } else {
      return null;
    }
  }).filter(ele => ele) // Remove invalid transforms.
  .join(config.operationSeparator) : null;
};

const config = {
  operationSeparator: "~",
  parameterSeparator: ","
};

const urlToObj = function (url) {
  return getObjFromUrl(url, config, false);
};

const objToUrl = function (obj) {
  return getUrlFromObj(obj, config);
};

async function signedUpload(url, form) {
  return axios.post(url, form).then(res => {
    Promise.resolve(res);
  }).catch(err => {
    return Promise.reject(err);
  });
}
/**
 *
 * @param {File} file
 * @param {Object} signedDetails generated with @pixelbin/core sdk
 * @returns Promise
 */


async function upload(file, signedDetails) {
  // get presigned POST Url for upload
  const {
    url,
    fields
  } = signedDetails;
  if (!url || !Object.keys(fields).length) return Promise.reject(new Error("Please provide the correct object. Refer upload api docs for details."));
  const form = new FormData();
  Object.entries(fields).forEach(([k, v]) => {
    form.append(k, v);
  });
  form.append("file", file);
  return signedUpload(url, form);
}

/**
 * Basic Image Library Module
 * @param {integer} height - Height* @param {integer} width - Width* @param {enum} fit - Fit* @param {color} background - Background* @param {enum} position - Position* @param {enum} algorithm - Algorithm
 * returns Transformation
 */

const resize = function (config = {
  height: 0,
  width: 0,
  fit: "cover",
  background: "000000",
  position: "center",
  algorithm: "lanczos3"
}) {
  const paramIdMap = {
    height: "h",
    width: "w",
    fit: "f",
    background: "b",
    position: "p",
    algorithm: "k"
  };
  const params = ["height", "width", "fit", "background", "position", "algorithm"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.resize", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} quality - Quality
 * returns Transformation
 */

const compress = function (config = {
  quality: 80
}) {
  const paramIdMap = {
    quality: "q"
  };
  const params = ["quality"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.compress", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} top - Top* @param {integer} left - Left* @param {integer} bottom - Bottom* @param {integer} right - Right* @param {color} background - Background
 * returns Transformation
 */

const extend = function (config = {
  top: 10,
  left: 10,
  bottom: 10,
  right: 10,
  background: "000000"
}) {
  const paramIdMap = {
    top: "t",
    left: "l",
    bottom: "b",
    right: "r",
    background: "bc"
  };
  const params = ["top", "left", "bottom", "right", "background"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.extend", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} top - Top* @param {integer} left - Left* @param {integer} height - Height* @param {integer} width - Width
 * returns Transformation
 */

const extract = function (config = {
  top: 10,
  left: 10,
  height: 50,
  width: 20
}) {
  const paramIdMap = {
    top: "t",
    left: "l",
    height: "h",
    width: "w"
  };
  const params = ["top", "left", "height", "width"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.extract", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} threshold - Threshold
 * returns Transformation
 */

const trim = function (config = {
  threshold: 10
}) {
  const paramIdMap = {
    threshold: "t"
  };
  const params = ["threshold"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.trim", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} angle - Angle* @param {color} background - Background
 * returns Transformation
 */

const rotate = function (config = {
  angle: 0,
  background: "000000"
}) {
  const paramIdMap = {
    angle: "a",
    background: "b"
  };
  const params = ["angle", "background"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.rotate", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
* Basic Image Library Module

* returns Transformation
*/

const flip = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.flip", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
* Basic Image Library Module

* returns Transformation
*/

const flop = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.flop", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} sigma - Sigma* @param {integer} flat - Flat* @param {integer} jagged - Jagged
 * returns Transformation
 */

const sharpen = function (config = {
  sigma: 1,
  flat: 1,
  jagged: 2
}) {
  const paramIdMap = {
    sigma: "s",
    flat: "f",
    jagged: "j"
  };
  const params = ["sigma", "flat", "jagged"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.sharpen", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} size - Size
 * returns Transformation
 */

const median = function (config = {
  size: 3
}) {
  const paramIdMap = {
    size: "s"
  };
  const params = ["size"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.median", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} sigma - Sigma
 * returns Transformation
 */

const blur = function (config = {
  sigma: 1
}) {
  const paramIdMap = {
    sigma: "s"
  };
  const params = ["sigma"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.blur", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {color} background - Background
 * returns Transformation
 */

const flatten = function (config = {
  background: "000000"
}) {
  const paramIdMap = {
    background: "b"
  };
  const params = ["background"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.flatten", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
* Basic Image Library Module

* returns Transformation
*/

const negate = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.negate", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
* Basic Image Library Module

* returns Transformation
*/

const normalise = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.normalise", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} a - A* @param {integer} b - B
 * returns Transformation
 */

const linear = function (config = {
  a: 1,
  b: 0
}) {
  const paramIdMap = {
    a: "a",
    b: "b"
  };
  const params = ["a", "b"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.linear", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {integer} brightness - Brightness* @param {integer} saturation - Saturation* @param {integer} hue - Hue
 * returns Transformation
 */

const modulate = function (config = {
  brightness: 1,
  saturation: 1,
  hue: 90
}) {
  const paramIdMap = {
    brightness: "b",
    saturation: "s",
    hue: "h"
  };
  const params = ["brightness", "saturation", "hue"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.modulate", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
* Basic Image Library Module

* returns Transformation
*/

const grey = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.grey", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {color} color - Color
 * returns Transformation
 */

const tint = function (config = {
  color: "000000"
}) {
  const paramIdMap = {
    color: "c"
  };
  const params = ["color"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.tint", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {enum} format - Format
 * returns Transformation
 */

const toFormat = function (config = {
  format: "jpeg"
}) {
  const paramIdMap = {
    format: "f"
  };
  const params = ["format"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.toFormat", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * Basic Image Library Module
 * @param {enum} mode - Mode* @param {file} image - Image* @param {color} background - Background* @param {integer} height - Height* @param {integer} width - Width* @param {integer} top - Top* @param {integer} left - Left* @param {enum} gravity - Gravity* @param {enum} blend - Blend* @param {boolean} tile - Tile
 * returns Transformation
 */

const merge = function (config = {
  mode: "overlay",
  image: "",
  background: "00000000",
  height: 0,
  width: 0,
  top: 0,
  left: 0,
  gravity: "center",
  blend: "over",
  tile: false
}) {
  const paramIdMap = {
    mode: "m",
    image: "i",
    background: "bg",
    height: "h",
    width: "w",
    top: "t",
    left: "l",
    gravity: "g",
    blend: "b",
    tile: "r"
  };
  const params = ["mode", "image", "background", "height", "width", "top", "left", "gravity", "blend", "tile"].filter(param => config.hasOwnProperty(param));
  const transformation = ["t.merge", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var Basic = {
  resize,
  compress,
  extend,
  extract,
  trim,
  rotate,
  flip,
  flop,
  sharpen,
  median,
  blur,
  flatten,
  negate,
  normalise,
  linear,
  modulate,
  grey,
  tint,
  toFormat,
  merge
};

var Basic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  resize: resize,
  compress: compress,
  extend: extend,
  extract: extract,
  trim: trim,
  rotate: rotate,
  flip: flip,
  flop: flop,
  sharpen: sharpen,
  median: median,
  blur: blur,
  flatten: flatten,
  negate: negate,
  normalise: normalise,
  linear: linear,
  modulate: modulate,
  grey: grey,
  tint: tint,
  toFormat: toFormat,
  merge: merge,
  'default': Basic
});

/**
* RemoveBG Background Removal Module

* returns Transformation
*/

const bg$1 = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["remove.bg", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var RemoveBG = {
  bg: bg$1
};

var RemoveBG$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bg: bg$1,
  'default': RemoveBG
});

/**
 * EraseBG Background Removal Module
 * @param {enum} industryType - Industry type
 * returns Transformation
 */

const bg = function (config = {
  industryType: "general"
}) {
  const paramIdMap = {
    industryType: "i"
  };
  const params = ["industryType"].filter(param => config.hasOwnProperty(param));
  const transformation = ["erase.bg", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var EraseBG = {
  bg
};

var EraseBG$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bg: bg,
  'default': EraseBG
});

/**
 * Super Resolution Module
 * @param {enum} type - Type
 * returns Transformation
 */

const upscale = function (config = {
  type: "2x"
}) {
  const paramIdMap = {
    type: "t"
  };
  const params = ["type"].filter(param => config.hasOwnProperty(param));
  const transformation = ["sr.upscale", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var SuperResolution = {
  upscale
};

var SuperResolution$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upscale: upscale,
  'default': SuperResolution
});

/**
* Artifact Removal Plugin

* returns Transformation
*/

const remove$1 = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["af.remove", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var ArtifactRemoval = {
  remove: remove$1
};

var ArtifactRemoval$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  remove: remove$1,
  'default': ArtifactRemoval
});

/**
* Watermark Removal Plugin

* returns Transformation
*/

const remove = function (config = {}) {
  const paramIdMap = {};
  const params = [].filter(param => config.hasOwnProperty(param));
  const transformation = ["wm.remove", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var WatermarkRemoval = {
  remove
};

var WatermarkRemoval$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  remove: remove,
  'default': WatermarkRemoval
});

/**
 * AWS Rekognition Plugin
 * @param {integer} maximumLabels - Maximum labels* @param {integer} minimumConfidence - Minimum confidence
 * returns Transformation
 */

const detectLabels$1 = function (config = {
  maximumLabels: 5,
  minimumConfidence: 55
}) {
  const paramIdMap = {
    maximumLabels: "l",
    minimumConfidence: "c"
  };
  const params = ["maximumLabels", "minimumConfidence"].filter(param => config.hasOwnProperty(param));
  const transformation = ["awsRek.detectLabels", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
/**
 * AWS Rekognition Plugin
 * @param {integer} minimumConfidence - Minimum confidence
 * returns Transformation
 */

const moderation = function (config = {
  minimumConfidence: 55
}) {
  const paramIdMap = {
    minimumConfidence: "c"
  };
  const params = ["minimumConfidence"].filter(param => config.hasOwnProperty(param));
  const transformation = ["awsRek.moderation", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var AWSRekognition = {
  detectLabels: detectLabels$1,
  moderation
};

var AWSRekognition$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  detectLabels: detectLabels$1,
  moderation: moderation,
  'default': AWSRekognition
});

/**
 * Google Vision Plugin
 * @param {integer} maximumLabels - Maximum labels
 * returns Transformation
 */

const detectLabels = function (config = {
  maximumLabels: 5
}) {
  const paramIdMap = {
    maximumLabels: "l"
  };
  const params = ["maximumLabels"].filter(param => config.hasOwnProperty(param));
  const transformation = ["googleVis.detectLabels", "("];
  params.map((param, idx) => {
    transformation.push(`${paramIdMap[param]}:${config[param]}`);
    if (idx !== params.length - 1) transformation.push(",");
  });
  transformation.push(")");
  return new Transformation([transformation.join("")]);
};
var GoogleVision = {
  detectLabels
};

var GoogleVision$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  detectLabels: detectLabels,
  'default': GoogleVision
});

/**
 * class to create a Pixelbin object
 */

class Pixelbin {
  /**
   * @param {Object} cloud-details takes detail for cloud name and zone
   */
  constructor({
    cloudName,
    zone
  }) {
    this.cloudName = cloudName;
    this.zone = zone === "default" ? "" : zone || "";
  }
  /**
   * provides image on which transformation can be done.
   * @param {String} imageUri path of image.
   * returns Image
   */


  image(imageUri) {
    return new Image(imageUri, this.cloudName, this.zone);
  }
  /**
   * provides access to url utilities
   * returns Object
   */


  static get utils() {
    return {
      objToUrl,
      urlToObj
    };
  }
  /**
   *
   * @param {File} file
   * @param {Object} signedDetails generated with @pixelbin/core sdk
   * @returns Promise
   */


  static async upload(file, signedDetails) {
    return upload(file, signedDetails);
  }

  static transformations = {
    Basic: Basic$1,
    RemoveBG: RemoveBG$1,
    EraseBG: EraseBG$1,
    SuperResolution: SuperResolution$1,
    ArtifactRemoval: ArtifactRemoval$1,
    WatermarkRemoval: WatermarkRemoval$1,
    AWSRekognition: AWSRekognition$1,
    GoogleVision: GoogleVision$1
  };
  static Transformation = Transformation;
}

export { Transformation, Pixelbin as default };
//# sourceMappingURL=bundle.js.map
