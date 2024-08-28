function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Events = /*#__PURE__*/ (function () {
  function Events() {
    _classCallCheck(this, Events);
    /**
     * registered events
     */
    _defineProperty(this, "_events", void 0);
    this._events = {};
  }

  /**
   * register event
   */
  return _createClass(Events, [
    {
      key: "on",
      value: function on(eventName, callback) {
        /**
         * create an array if the event has not been registered
         */
        if (this._events[eventName]) {
          this._events[eventName].push(callback);
        } else {
          this._events[eventName] = [callback];
        }
        return this;
      },

      /**
       * unregister event
       */
    },
    {
      key: "off",
      value: function off(eventName, callback) {
        var events = this._events[eventName];

        /**
         * early return if there is no event or callback
         */
        if (!events || !events.length) return this;

        /**
         * clear all callback of event if argument callback is not been passed
         */
        if (!callback) {
          this._events[eventName] = [];
          return this;
        }

        /**
         * find specific callback and remove it
         */
        var eventIdx = events.findIndex(function (cb) {
          return cb === callback;
        });
        if (eventIdx >= 0) {
          events.splice(eventIdx, 1);
        }
        return this;
      },
    },
    {
      key: "emit",
      value: function emit(eventName) {
        var events = this._events[eventName];

        /**
         * early return if there is no callback
         */
        if (!events || !events.length) return this;
        for (
          var _len = arguments.length,
            args = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        for (var i = 0; i < events.length; i++) {
          events[i].apply(this, args);
        }
        return this;
      },

      /**
       * register an event，and can be emit once
       */
    },
    {
      key: "once",
      value: function once(eventName, callback) {
        function on() {
          // @ts-ignore
          this.off(eventName, callback);
          // @ts-ignore
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }
          callback.apply(this, args);
        }
        this.on(eventName, on);
        return this;
      },
    },
  ]);
})();

export default new Events();
