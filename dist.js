#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/exifr/dist/full.umd.js
var require_full_umd = __commonJS({
  "node_modules/exifr/dist/full.umd.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? t(exports2) : "function" == typeof define && define.amd ? define("exifr", ["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).exifr = {});
    })(exports2, (function(e) {
      "use strict";
      var t = "undefined" != typeof self ? self : global;
      const i = "undefined" != typeof navigator, n = i && "undefined" == typeof HTMLImageElement, s = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node), r = t.Buffer, a = t.BigInt, o = !!r, l = (e2) => e2;
      function h(e2, t2 = l) {
        if (s) try {
          return "function" == typeof require ? Promise.resolve(t2(require(e2))) : import(
            /* webpackIgnore: true */
            e2
          ).then(t2);
        } catch (t3) {
          console.warn(`Couldn't load ${e2}`);
        }
      }
      let u = t.fetch;
      const c = (e2) => u = e2;
      if (!t.fetch) {
        const e2 = h("http", ((e3) => e3)), t2 = h("https", ((e3) => e3)), i2 = (n2, { headers: s2 } = {}) => new Promise((async (r2, a2) => {
          let { port: o2, hostname: l2, pathname: h2, protocol: u2, search: c2 } = new URL(n2);
          const f2 = { method: "GET", hostname: l2, path: encodeURI(h2) + c2, headers: s2 };
          "" !== o2 && (f2.port = Number(o2));
          const d2 = ("https:" === u2 ? await t2 : await e2).request(f2, ((e3) => {
            if (301 === e3.statusCode || 302 === e3.statusCode) {
              let t3 = new URL(e3.headers.location, n2).toString();
              return i2(t3, { headers: s2 }).then(r2).catch(a2);
            }
            r2({ status: e3.statusCode, arrayBuffer: () => new Promise(((t3) => {
              let i3 = [];
              e3.on("data", ((e4) => i3.push(e4))), e3.on("end", (() => t3(Buffer.concat(i3))));
            })) });
          }));
          d2.on("error", a2), d2.end();
        }));
        c(i2);
      }
      function f(e2, t2, i2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
      }
      const d = (e2) => g(e2) ? void 0 : e2, p = (e2) => void 0 !== e2;
      function g(e2) {
        return void 0 === e2 || (e2 instanceof Map ? 0 === e2.size : 0 === Object.values(e2).filter(p).length);
      }
      function m(e2) {
        let t2 = new Error(e2);
        throw delete t2.stack, t2;
      }
      function S(e2) {
        return "" === (e2 = (function(e3) {
          for (; e3.endsWith("\0"); ) e3 = e3.slice(0, -1);
          return e3;
        })(e2).trim()) ? void 0 : e2;
      }
      function C(e2) {
        let t2 = (function(e3) {
          let t3 = 0;
          return e3.ifd0.enabled && (t3 += 1024), e3.exif.enabled && (t3 += 2048), e3.makerNote && (t3 += 2048), e3.userComment && (t3 += 1024), e3.gps.enabled && (t3 += 512), e3.interop.enabled && (t3 += 100), e3.ifd1.enabled && (t3 += 1024), t3 + 2048;
        })(e2);
        return e2.jfif.enabled && (t2 += 50), e2.xmp.enabled && (t2 += 2e4), e2.iptc.enabled && (t2 += 14e3), e2.icc.enabled && (t2 += 6e3), t2;
      }
      const y = (e2) => String.fromCharCode.apply(null, e2), b = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
      function P(e2) {
        return b ? b.decode(e2) : o ? Buffer.from(e2).toString("utf8") : decodeURIComponent(escape(y(e2)));
      }
      class I {
        static from(e2, t2) {
          return e2 instanceof this && e2.le === t2 ? e2 : new I(e2, void 0, void 0, t2);
        }
        constructor(e2, t2 = 0, i2, n2) {
          if ("boolean" == typeof n2 && (this.le = n2), Array.isArray(e2) && (e2 = new Uint8Array(e2)), 0 === e2) this.byteOffset = 0, this.byteLength = 0;
          else if (e2 instanceof ArrayBuffer) {
            void 0 === i2 && (i2 = e2.byteLength - t2);
            let n3 = new DataView(e2, t2, i2);
            this._swapDataView(n3);
          } else if (e2 instanceof Uint8Array || e2 instanceof DataView || e2 instanceof I) {
            void 0 === i2 && (i2 = e2.byteLength - t2), (t2 += e2.byteOffset) + i2 > e2.byteOffset + e2.byteLength && m("Creating view outside of available memory in ArrayBuffer");
            let n3 = new DataView(e2.buffer, t2, i2);
            this._swapDataView(n3);
          } else if ("number" == typeof e2) {
            let t3 = new DataView(new ArrayBuffer(e2));
            this._swapDataView(t3);
          } else m("Invalid input argument for BufferView: " + e2);
        }
        _swapArrayBuffer(e2) {
          this._swapDataView(new DataView(e2));
        }
        _swapBuffer(e2) {
          this._swapDataView(new DataView(e2.buffer, e2.byteOffset, e2.byteLength));
        }
        _swapDataView(e2) {
          this.dataView = e2, this.buffer = e2.buffer, this.byteOffset = e2.byteOffset, this.byteLength = e2.byteLength;
        }
        _lengthToEnd(e2) {
          return this.byteLength - e2;
        }
        set(e2, t2, i2 = I) {
          return e2 instanceof DataView || e2 instanceof I ? e2 = new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength) : e2 instanceof ArrayBuffer && (e2 = new Uint8Array(e2)), e2 instanceof Uint8Array || m("BufferView.set(): Invalid data argument."), this.toUint8().set(e2, t2), new i2(this, t2, e2.byteLength);
        }
        subarray(e2, t2) {
          return t2 = t2 || this._lengthToEnd(e2), new I(this, e2, t2);
        }
        toUint8() {
          return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        getUint8Array(e2, t2) {
          return new Uint8Array(this.buffer, this.byteOffset + e2, t2);
        }
        getString(e2 = 0, t2 = this.byteLength) {
          return P(this.getUint8Array(e2, t2));
        }
        getLatin1String(e2 = 0, t2 = this.byteLength) {
          let i2 = this.getUint8Array(e2, t2);
          return y(i2);
        }
        getUnicodeString(e2 = 0, t2 = this.byteLength) {
          const i2 = [];
          for (let n2 = 0; n2 < t2 && e2 + n2 < this.byteLength; n2 += 2) i2.push(this.getUint16(e2 + n2));
          return y(i2);
        }
        getInt8(e2) {
          return this.dataView.getInt8(e2);
        }
        getUint8(e2) {
          return this.dataView.getUint8(e2);
        }
        getInt16(e2, t2 = this.le) {
          return this.dataView.getInt16(e2, t2);
        }
        getInt32(e2, t2 = this.le) {
          return this.dataView.getInt32(e2, t2);
        }
        getUint16(e2, t2 = this.le) {
          return this.dataView.getUint16(e2, t2);
        }
        getUint32(e2, t2 = this.le) {
          return this.dataView.getUint32(e2, t2);
        }
        getFloat32(e2, t2 = this.le) {
          return this.dataView.getFloat32(e2, t2);
        }
        getFloat64(e2, t2 = this.le) {
          return this.dataView.getFloat64(e2, t2);
        }
        getFloat(e2, t2 = this.le) {
          return this.dataView.getFloat32(e2, t2);
        }
        getDouble(e2, t2 = this.le) {
          return this.dataView.getFloat64(e2, t2);
        }
        getUintBytes(e2, t2, i2) {
          switch (t2) {
            case 1:
              return this.getUint8(e2, i2);
            case 2:
              return this.getUint16(e2, i2);
            case 4:
              return this.getUint32(e2, i2);
            case 8:
              return this.getUint64 && this.getUint64(e2, i2);
          }
        }
        getUint(e2, t2, i2) {
          switch (t2) {
            case 8:
              return this.getUint8(e2, i2);
            case 16:
              return this.getUint16(e2, i2);
            case 32:
              return this.getUint32(e2, i2);
            case 64:
              return this.getUint64 && this.getUint64(e2, i2);
          }
        }
        toString(e2) {
          return this.dataView.toString(e2, this.constructor.name);
        }
        ensureChunk() {
        }
      }
      function k(e2, t2) {
        m(`${e2} '${t2}' was not loaded, try using full build of exifr.`);
      }
      class w extends Map {
        constructor(e2) {
          super(), this.kind = e2;
        }
        get(e2, t2) {
          return this.has(e2) || k(this.kind, e2), t2 && (e2 in t2 || (function(e3, t3) {
            m(`Unknown ${e3} '${t3}'.`);
          })(this.kind, e2), t2[e2].enabled || k(this.kind, e2)), super.get(e2);
        }
        keyList() {
          return Array.from(this.keys());
        }
      }
      var T = new w("file parser"), A = new w("segment parser"), D = new w("file reader");
      const O = "Invalid input argument";
      function x(e2, t2) {
        return "string" == typeof e2 ? v(e2, t2) : i && !n && e2 instanceof HTMLImageElement ? v(e2.src, t2) : e2 instanceof Uint8Array || e2 instanceof ArrayBuffer || e2 instanceof DataView ? new I(e2) : i && e2 instanceof Blob ? M(e2, t2, "blob", U) : void m(O);
      }
      function v(e2, t2) {
        return (n2 = e2).startsWith("data:") || n2.length > 1e4 ? R(e2, t2, "base64") : s && e2.includes("://") ? M(e2, t2, "url", L) : s ? R(e2, t2, "fs") : i ? M(e2, t2, "url", L) : void m(O);
        var n2;
      }
      async function M(e2, t2, i2, n2) {
        return D.has(i2) ? R(e2, t2, i2) : n2 ? (async function(e3, t3) {
          let i3 = await t3(e3);
          return new I(i3);
        })(e2, n2) : void m(`Parser ${i2} is not loaded`);
      }
      async function R(e2, t2, i2) {
        let n2 = new (D.get(i2))(e2, t2);
        return await n2.read(), n2;
      }
      const L = (e2) => u(e2).then(((e3) => e3.arrayBuffer())), U = (e2) => new Promise(((t2, i2) => {
        let n2 = new FileReader();
        n2.onloadend = () => t2(n2.result || new ArrayBuffer()), n2.onerror = i2, n2.readAsArrayBuffer(e2);
      }));
      class F extends Map {
        get tagKeys() {
          return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
        }
        get tagValues() {
          return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
        }
      }
      function B(e2, t2, i2) {
        let n2 = new F();
        for (let [e3, t3] of i2) n2.set(e3, t3);
        if (Array.isArray(t2)) for (let i3 of t2) e2.set(i3, n2);
        else e2.set(t2, n2);
        return n2;
      }
      function E(e2, t2, i2) {
        let n2, s2 = e2.get(t2);
        for (n2 of i2) s2.set(n2[0], n2[1]);
      }
      const N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), z = 37500, H = 37510, j = 700, W = 33723, K = 34675, X = 34665, _ = 34853, Y = 40965, $ = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], J = ["jfif", "xmp", "icc", "iptc", "ihdr"], q = ["tiff", ...J], Q = ["ifd0", "ifd1", "exif", "gps", "interop"], Z = [...q, ...Q], ee = ["makerNote", "userComment"], te = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], ie = [...te, "sanitize", "mergeOutput", "silentErrors"];
      class ne {
        get translate() {
          return this.translateKeys || this.translateValues || this.reviveValues;
        }
      }
      class se extends ne {
        get needed() {
          return this.enabled || this.deps.size > 0;
        }
        constructor(e2, t2, i2, n2) {
          if (super(), f(this, "enabled", false), f(this, "skip", /* @__PURE__ */ new Set()), f(this, "pick", /* @__PURE__ */ new Set()), f(this, "deps", /* @__PURE__ */ new Set()), f(this, "translateKeys", false), f(this, "translateValues", false), f(this, "reviveValues", false), this.key = e2, this.enabled = t2, this.parse = this.enabled, this.applyInheritables(n2), this.canBeFiltered = Q.includes(e2), this.canBeFiltered && (this.dict = N.get(e2)), void 0 !== i2) if (Array.isArray(i2)) this.parse = this.enabled = true, this.canBeFiltered && i2.length > 0 && this.translateTagSet(i2, this.pick);
          else if ("object" == typeof i2) {
            if (this.enabled = true, this.parse = false !== i2.parse, this.canBeFiltered) {
              let { pick: e3, skip: t3 } = i2;
              e3 && e3.length > 0 && this.translateTagSet(e3, this.pick), t3 && t3.length > 0 && this.translateTagSet(t3, this.skip);
            }
            this.applyInheritables(i2);
          } else true === i2 || false === i2 ? this.parse = this.enabled = i2 : m(`Invalid options argument: ${i2}`);
        }
        applyInheritables(e2) {
          let t2, i2;
          for (t2 of te) i2 = e2[t2], void 0 !== i2 && (this[t2] = i2);
        }
        translateTagSet(e2, t2) {
          if (this.dict) {
            let i2, n2, { tagKeys: s2, tagValues: r2 } = this.dict;
            for (i2 of e2) "string" == typeof i2 ? (n2 = r2.indexOf(i2), -1 === n2 && (n2 = s2.indexOf(Number(i2))), -1 !== n2 && t2.add(Number(s2[n2]))) : t2.add(i2);
          } else for (let i2 of e2) t2.add(i2);
        }
        finalizeFilters() {
          !this.enabled && this.deps.size > 0 ? (this.enabled = true, ue(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ue(this.pick, this.deps);
        }
      }
      var re = { jfif: false, tiff: true, xmp: false, icc: false, iptc: false, ifd0: true, ifd1: false, exif: true, gps: true, interop: false, ihdr: void 0, makerNote: false, userComment: false, multiSegment: false, skip: [], pick: [], translateKeys: true, translateValues: true, reviveValues: true, sanitize: true, mergeOutput: true, silentErrors: true, chunked: true, firstChunkSize: void 0, firstChunkSizeNode: 512, firstChunkSizeBrowser: 65536, chunkSize: 65536, chunkLimit: 5 }, ae = /* @__PURE__ */ new Map();
      class oe extends ne {
        static useCached(e2) {
          let t2 = ae.get(e2);
          return void 0 !== t2 || (t2 = new this(e2), ae.set(e2, t2)), t2;
        }
        constructor(e2) {
          super(), true === e2 ? this.setupFromTrue() : void 0 === e2 ? this.setupFromUndefined() : Array.isArray(e2) ? this.setupFromArray(e2) : "object" == typeof e2 ? this.setupFromObject(e2) : m(`Invalid options argument ${e2}`), void 0 === this.firstChunkSize && (this.firstChunkSize = i ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = false), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
        }
        setupFromUndefined() {
          let e2;
          for (e2 of $) this[e2] = re[e2];
          for (e2 of ie) this[e2] = re[e2];
          for (e2 of ee) this[e2] = re[e2];
          for (e2 of Z) this[e2] = new se(e2, re[e2], void 0, this);
        }
        setupFromTrue() {
          let e2;
          for (e2 of $) this[e2] = re[e2];
          for (e2 of ie) this[e2] = re[e2];
          for (e2 of ee) this[e2] = true;
          for (e2 of Z) this[e2] = new se(e2, true, void 0, this);
        }
        setupFromArray(e2) {
          let t2;
          for (t2 of $) this[t2] = re[t2];
          for (t2 of ie) this[t2] = re[t2];
          for (t2 of ee) this[t2] = re[t2];
          for (t2 of Z) this[t2] = new se(t2, false, void 0, this);
          this.setupGlobalFilters(e2, void 0, Q);
        }
        setupFromObject(e2) {
          let t2;
          for (t2 of (Q.ifd0 = Q.ifd0 || Q.image, Q.ifd1 = Q.ifd1 || Q.thumbnail, Object.assign(this, e2), $)) this[t2] = he(e2[t2], re[t2]);
          for (t2 of ie) this[t2] = he(e2[t2], re[t2]);
          for (t2 of ee) this[t2] = he(e2[t2], re[t2]);
          for (t2 of q) this[t2] = new se(t2, re[t2], e2[t2], this);
          for (t2 of Q) this[t2] = new se(t2, re[t2], e2[t2], this.tiff);
          this.setupGlobalFilters(e2.pick, e2.skip, Q, Z), true === e2.tiff ? this.batchEnableWithBool(Q, true) : false === e2.tiff ? this.batchEnableWithUserValue(Q, e2) : Array.isArray(e2.tiff) ? this.setupGlobalFilters(e2.tiff, void 0, Q) : "object" == typeof e2.tiff && this.setupGlobalFilters(e2.tiff.pick, e2.tiff.skip, Q);
        }
        batchEnableWithBool(e2, t2) {
          for (let i2 of e2) this[i2].enabled = t2;
        }
        batchEnableWithUserValue(e2, t2) {
          for (let i2 of e2) {
            let e3 = t2[i2];
            this[i2].enabled = false !== e3 && void 0 !== e3;
          }
        }
        setupGlobalFilters(e2, t2, i2, n2 = i2) {
          if (e2 && e2.length) {
            for (let e3 of n2) this[e3].enabled = false;
            let t3 = le(e2, i2);
            for (let [e3, i3] of t3) ue(this[e3].pick, i3), this[e3].enabled = true;
          } else if (t2 && t2.length) {
            let e3 = le(t2, i2);
            for (let [t3, i3] of e3) ue(this[t3].skip, i3);
          }
        }
        filterNestedSegmentTags() {
          let { ifd0: e2, exif: t2, xmp: i2, iptc: n2, icc: s2 } = this;
          this.makerNote ? t2.deps.add(z) : t2.skip.add(z), this.userComment ? t2.deps.add(H) : t2.skip.add(H), i2.enabled || e2.skip.add(j), n2.enabled || e2.skip.add(W), s2.enabled || e2.skip.add(K);
        }
        traverseTiffDependencyTree() {
          let { ifd0: e2, exif: t2, gps: i2, interop: n2 } = this;
          n2.needed && (t2.deps.add(Y), e2.deps.add(Y)), t2.needed && e2.deps.add(X), i2.needed && e2.deps.add(_), this.tiff.enabled = Q.some(((e3) => true === this[e3].enabled)) || this.makerNote || this.userComment;
          for (let e3 of Q) this[e3].finalizeFilters();
        }
        get onlyTiff() {
          return !J.map(((e2) => this[e2].enabled)).some(((e2) => true === e2)) && this.tiff.enabled;
        }
        checkLoadedPlugins() {
          for (let e2 of q) this[e2].enabled && !A.has(e2) && k("segment parser", e2);
        }
      }
      function le(e2, t2) {
        let i2, n2, s2, r2, a2 = [];
        for (s2 of t2) {
          for (r2 of (i2 = N.get(s2), n2 = [], i2)) (e2.includes(r2[0]) || e2.includes(r2[1])) && n2.push(r2[0]);
          n2.length && a2.push([s2, n2]);
        }
        return a2;
      }
      function he(e2, t2) {
        return void 0 !== e2 ? e2 : void 0 !== t2 ? t2 : void 0;
      }
      function ue(e2, t2) {
        for (let i2 of t2) e2.add(i2);
      }
      f(oe, "default", re);
      class ce {
        constructor(e2) {
          f(this, "parsers", {}), f(this, "output", {}), f(this, "errors", []), f(this, "pushToErrors", ((e3) => this.errors.push(e3))), this.options = oe.useCached(e2);
        }
        async read(e2) {
          this.file = await x(e2, this.options);
        }
        setup() {
          if (this.fileParser) return;
          let { file: e2 } = this, t2 = e2.getUint16(0);
          for (let [i2, n2] of T) if (n2.canHandle(e2, t2)) return this.fileParser = new n2(this.options, this.file, this.parsers), e2[i2] = true;
          this.file.close && this.file.close(), m("Unknown file format");
        }
        async parse() {
          let { output: e2, errors: t2 } = this;
          return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t2.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t2.length > 0 && (e2.errors = t2), d(e2);
        }
        async executeParsers() {
          let { output: e2 } = this;
          await this.fileParser.parse();
          let t2 = Object.values(this.parsers).map((async (t3) => {
            let i2 = await t3.parse();
            t3.assignToOutput(e2, i2);
          }));
          this.options.silentErrors && (t2 = t2.map(((e3) => e3.catch(this.pushToErrors)))), await Promise.all(t2);
        }
        async extractThumbnail() {
          this.setup();
          let { options: e2, file: t2 } = this, i2 = A.get("tiff", e2);
          var n2;
          if (t2.tiff ? n2 = { start: 0, type: "tiff" } : t2.jpeg && (n2 = await this.fileParser.getOrFindSegment("tiff")), void 0 === n2) return;
          let s2 = await this.fileParser.ensureSegmentChunk(n2), r2 = this.parsers.tiff = new i2(s2, e2, t2), a2 = await r2.extractThumbnail();
          return t2.close && t2.close(), a2;
        }
      }
      async function fe(e2, t2) {
        let i2 = new ce(t2);
        return await i2.read(e2), i2.parse();
      }
      var de = Object.freeze({ __proto__: null, parse: fe, Exifr: ce, fileParsers: T, segmentParsers: A, fileReaders: D, tagKeys: N, tagValues: G, tagRevivers: V, createDictionary: B, extendDictionary: E, fetchUrlAsArrayBuffer: L, readBlobAsArrayBuffer: U, chunkedProps: $, otherSegments: J, segments: q, tiffBlocks: Q, segmentsAndBlocks: Z, tiffExtractables: ee, inheritables: te, allFormatters: ie, Options: oe });
      class pe {
        constructor(e2, t2, i2) {
          f(this, "errors", []), f(this, "ensureSegmentChunk", (async (e3) => {
            let t3 = e3.start, i3 = e3.size || 65536;
            if (this.file.chunked) if (this.file.available(t3, i3)) e3.chunk = this.file.subarray(t3, i3);
            else try {
              e3.chunk = await this.file.readChunk(t3, i3);
            } catch (t4) {
              m(`Couldn't read segment: ${JSON.stringify(e3)}. ${t4.message}`);
            }
            else this.file.byteLength > t3 + i3 ? e3.chunk = this.file.subarray(t3, i3) : void 0 === e3.size ? e3.chunk = this.file.subarray(t3) : m("Segment unreachable: " + JSON.stringify(e3));
            return e3.chunk;
          })), this.extendOptions && this.extendOptions(e2), this.options = e2, this.file = t2, this.parsers = i2;
        }
        injectSegment(e2, t2) {
          this.options[e2].enabled && this.createParser(e2, t2);
        }
        createParser(e2, t2) {
          let i2 = new (A.get(e2))(t2, this.options, this.file);
          return this.parsers[e2] = i2;
        }
        createParsers(e2) {
          for (let t2 of e2) {
            let { type: e3, chunk: i2 } = t2, n2 = this.options[e3];
            if (n2 && n2.enabled) {
              let t3 = this.parsers[e3];
              t3 && t3.append || t3 || this.createParser(e3, i2);
            }
          }
        }
        async readSegments(e2) {
          let t2 = e2.map(this.ensureSegmentChunk);
          await Promise.all(t2);
        }
      }
      class ge {
        static findPosition(e2, t2) {
          let i2 = e2.getUint16(t2 + 2) + 2, n2 = "function" == typeof this.headerLength ? this.headerLength(e2, t2, i2) : this.headerLength, s2 = t2 + n2, r2 = i2 - n2;
          return { offset: t2, length: i2, headerLength: n2, start: s2, size: r2, end: s2 + r2 };
        }
        static parse(e2, t2 = {}) {
          return new this(e2, new oe({ [this.type]: t2 }), e2).parse();
        }
        normalizeInput(e2) {
          return e2 instanceof I ? e2 : new I(e2);
        }
        constructor(e2, t2 = {}, i2) {
          f(this, "errors", []), f(this, "raw", /* @__PURE__ */ new Map()), f(this, "handleError", ((e3) => {
            if (!this.options.silentErrors) throw e3;
            this.errors.push(e3.message);
          })), this.chunk = this.normalizeInput(e2), this.file = i2, this.type = this.constructor.type, this.globalOptions = this.options = t2, this.localOptions = t2[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
        }
        translate() {
          this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
        }
        get output() {
          return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
        }
        translateBlock(e2, t2) {
          let i2 = V.get(t2), n2 = G.get(t2), s2 = N.get(t2), r2 = this.options[t2], a2 = r2.reviveValues && !!i2, o2 = r2.translateValues && !!n2, l2 = r2.translateKeys && !!s2, h2 = {};
          for (let [t3, r3] of e2) a2 && i2.has(t3) ? r3 = i2.get(t3)(r3) : o2 && n2.has(t3) && (r3 = this.translateValue(r3, n2.get(t3))), l2 && s2.has(t3) && (t3 = s2.get(t3) || t3), h2[t3] = r3;
          return h2;
        }
        translateValue(e2, t2) {
          return t2[e2] || t2.DEFAULT || e2;
        }
        assignToOutput(e2, t2) {
          this.assignObjectToOutput(e2, this.constructor.type, t2);
        }
        assignObjectToOutput(e2, t2, i2) {
          if (this.globalOptions.mergeOutput) return Object.assign(e2, i2);
          e2[t2] ? Object.assign(e2[t2], i2) : e2[t2] = i2;
        }
      }
      f(ge, "headerLength", 4), f(ge, "type", void 0), f(ge, "multiSegment", false), f(ge, "canHandle", (() => false));
      function me(e2) {
        return 192 === e2 || 194 === e2 || 196 === e2 || 219 === e2 || 221 === e2 || 218 === e2 || 254 === e2;
      }
      function Se(e2) {
        return e2 >= 224 && e2 <= 239;
      }
      function Ce(e2, t2, i2) {
        for (let [n2, s2] of A) if (s2.canHandle(e2, t2, i2)) return n2;
      }
      class ye extends pe {
        constructor(...e2) {
          super(...e2), f(this, "appSegments", []), f(this, "jpegSegments", []), f(this, "unknownSegments", []);
        }
        static canHandle(e2, t2) {
          return 65496 === t2;
        }
        async parse() {
          await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
        }
        setupSegmentFinderArgs(e2) {
          true === e2 ? (this.findAll = true, this.wanted = new Set(A.keyList())) : (e2 = void 0 === e2 ? A.keyList().filter(((e3) => this.options[e3].enabled)) : e2.filter(((e3) => this.options[e3].enabled && A.has(e3))), this.findAll = false, this.remaining = new Set(e2), this.wanted = new Set(e2)), this.unfinishedMultiSegment = false;
        }
        async findAppSegments(e2 = 0, t2) {
          this.setupSegmentFinderArgs(t2);
          let { file: i2, findAll: n2, wanted: s2, remaining: r2 } = this;
          if (!n2 && this.file.chunked && (n2 = Array.from(s2).some(((e3) => {
            let t3 = A.get(e3), i3 = this.options[e3];
            return t3.multiSegment && i3.multiSegment;
          })), n2 && await this.file.readWhole()), e2 = this.findAppSegmentsInRange(e2, i2.byteLength), !this.options.onlyTiff && i2.chunked) {
            let t3 = false;
            for (; r2.size > 0 && !t3 && (i2.canReadNextChunk || this.unfinishedMultiSegment); ) {
              let { nextChunkOffset: n3 } = i2, s3 = this.appSegments.some(((e3) => !this.file.available(e3.offset || e3.start, e3.length || e3.size)));
              if (t3 = e2 > n3 && !s3 ? !await i2.readNextChunk(e2) : !await i2.readNextChunk(n3), void 0 === (e2 = this.findAppSegmentsInRange(e2, i2.byteLength))) return;
            }
          }
        }
        findAppSegmentsInRange(e2, t2) {
          t2 -= 2;
          let i2, n2, s2, r2, a2, o2, { file: l2, findAll: h2, wanted: u2, remaining: c2, options: f2 } = this;
          for (; e2 < t2; e2++) if (255 === l2.getUint8(e2)) {
            if (i2 = l2.getUint8(e2 + 1), Se(i2)) {
              if (n2 = l2.getUint16(e2 + 2), s2 = Ce(l2, e2, n2), s2 && u2.has(s2) && (r2 = A.get(s2), a2 = r2.findPosition(l2, e2), o2 = f2[s2], a2.type = s2, this.appSegments.push(a2), !h2 && (r2.multiSegment && o2.multiSegment ? (this.unfinishedMultiSegment = a2.chunkNumber < a2.chunkCount, this.unfinishedMultiSegment || c2.delete(s2)) : c2.delete(s2), 0 === c2.size))) break;
              f2.recordUnknownSegments && (a2 = ge.findPosition(l2, e2), a2.marker = i2, this.unknownSegments.push(a2)), e2 += n2 + 1;
            } else if (me(i2)) {
              if (n2 = l2.getUint16(e2 + 2), 218 === i2 && false !== f2.stopAfterSos) return;
              f2.recordJpegSegments && this.jpegSegments.push({ offset: e2, length: n2, marker: i2 }), e2 += n2 + 1;
            }
          }
          return e2;
        }
        mergeMultiSegments() {
          if (!this.appSegments.some(((e3) => e3.multiSegment))) return;
          let e2 = (function(e3, t2) {
            let i2, n2, s2, r2 = /* @__PURE__ */ new Map();
            for (let a2 = 0; a2 < e3.length; a2++) i2 = e3[a2], n2 = i2[t2], r2.has(n2) ? s2 = r2.get(n2) : r2.set(n2, s2 = []), s2.push(i2);
            return Array.from(r2);
          })(this.appSegments, "type");
          this.mergedAppSegments = e2.map((([e3, t2]) => {
            let i2 = A.get(e3, this.options);
            if (i2.handleMultiSegments) {
              return { type: e3, chunk: i2.handleMultiSegments(t2) };
            }
            return t2[0];
          }));
        }
        getSegment(e2) {
          return this.appSegments.find(((t2) => t2.type === e2));
        }
        async getOrFindSegment(e2) {
          let t2 = this.getSegment(e2);
          return void 0 === t2 && (await this.findAppSegments(0, [e2]), t2 = this.getSegment(e2)), t2;
        }
      }
      f(ye, "type", "jpeg"), T.set("jpeg", ye);
      const be = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
      class Pe extends ge {
        parseHeader() {
          var e2 = this.chunk.getUint16();
          18761 === e2 ? this.le = true : 19789 === e2 && (this.le = false), this.chunk.le = this.le, this.headerParsed = true;
        }
        parseTags(e2, t2, i2 = /* @__PURE__ */ new Map()) {
          let { pick: n2, skip: s2 } = this.options[t2];
          n2 = new Set(n2);
          let r2 = n2.size > 0, a2 = 0 === s2.size, o2 = this.chunk.getUint16(e2);
          e2 += 2;
          for (let l2 = 0; l2 < o2; l2++) {
            let o3 = this.chunk.getUint16(e2);
            if (r2) {
              if (n2.has(o3) && (i2.set(o3, this.parseTag(e2, o3, t2)), n2.delete(o3), 0 === n2.size)) break;
            } else !a2 && s2.has(o3) || i2.set(o3, this.parseTag(e2, o3, t2));
            e2 += 12;
          }
          return i2;
        }
        parseTag(e2, t2, i2) {
          let { chunk: n2 } = this, s2 = n2.getUint16(e2 + 2), r2 = n2.getUint32(e2 + 4), a2 = be[s2];
          if (a2 * r2 <= 4 ? e2 += 8 : e2 = n2.getUint32(e2 + 8), (s2 < 1 || s2 > 13) && m(`Invalid TIFF value type. block: ${i2.toUpperCase()}, tag: ${t2.toString(16)}, type: ${s2}, offset ${e2}`), e2 > n2.byteLength && m(`Invalid TIFF value offset. block: ${i2.toUpperCase()}, tag: ${t2.toString(16)}, type: ${s2}, offset ${e2} is outside of chunk size ${n2.byteLength}`), 1 === s2) return n2.getUint8Array(e2, r2);
          if (2 === s2) return S(n2.getString(e2, r2));
          if (7 === s2) return n2.getUint8Array(e2, r2);
          if (1 === r2) return this.parseTagValue(s2, e2);
          {
            let t3 = new ((function(e3) {
              switch (e3) {
                case 1:
                  return Uint8Array;
                case 3:
                  return Uint16Array;
                case 4:
                  return Uint32Array;
                case 5:
                  return Array;
                case 6:
                  return Int8Array;
                case 8:
                  return Int16Array;
                case 9:
                  return Int32Array;
                case 10:
                  return Array;
                case 11:
                  return Float32Array;
                case 12:
                  return Float64Array;
                default:
                  return Array;
              }
            })(s2))(r2), i3 = a2;
            for (let n3 = 0; n3 < r2; n3++) t3[n3] = this.parseTagValue(s2, e2), e2 += i3;
            return t3;
          }
        }
        parseTagValue(e2, t2) {
          let { chunk: i2 } = this;
          switch (e2) {
            case 1:
              return i2.getUint8(t2);
            case 3:
              return i2.getUint16(t2);
            case 4:
              return i2.getUint32(t2);
            case 5:
              return i2.getUint32(t2) / i2.getUint32(t2 + 4);
            case 6:
              return i2.getInt8(t2);
            case 8:
              return i2.getInt16(t2);
            case 9:
              return i2.getInt32(t2);
            case 10:
              return i2.getInt32(t2) / i2.getInt32(t2 + 4);
            case 11:
              return i2.getFloat(t2);
            case 12:
              return i2.getDouble(t2);
            case 13:
              return i2.getUint32(t2);
            default:
              m(`Invalid tiff type ${e2}`);
          }
        }
      }
      class Ie extends Pe {
        static canHandle(e2, t2) {
          return 225 === e2.getUint8(t2 + 1) && 1165519206 === e2.getUint32(t2 + 4) && 0 === e2.getUint16(t2 + 8);
        }
        async parse() {
          this.parseHeader();
          let { options: e2 } = this;
          return e2.ifd0.enabled && await this.parseIfd0Block(), e2.exif.enabled && await this.safeParse("parseExifBlock"), e2.gps.enabled && await this.safeParse("parseGpsBlock"), e2.interop.enabled && await this.safeParse("parseInteropBlock"), e2.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
        }
        safeParse(e2) {
          let t2 = this[e2]();
          return void 0 !== t2.catch && (t2 = t2.catch(this.handleError)), t2;
        }
        findIfd0Offset() {
          void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
        }
        findIfd1Offset() {
          if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e2 = this.chunk.getUint16(this.ifd0Offset), t2 = this.ifd0Offset + 2 + 12 * e2;
            this.ifd1Offset = this.chunk.getUint32(t2);
          }
        }
        parseBlock(e2, t2) {
          let i2 = /* @__PURE__ */ new Map();
          return this[t2] = i2, this.parseTags(e2, t2, i2), i2;
        }
        async parseIfd0Block() {
          if (this.ifd0) return;
          let { file: e2 } = this;
          this.findIfd0Offset(), this.ifd0Offset < 8 && m("Malformed EXIF data"), !e2.chunked && this.ifd0Offset > e2.byteLength && m(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e2.byteLength}`), e2.tiff && await e2.ensureChunk(this.ifd0Offset, C(this.options));
          let t2 = this.parseBlock(this.ifd0Offset, "ifd0");
          return 0 !== t2.size ? (this.exifOffset = t2.get(X), this.interopOffset = t2.get(Y), this.gpsOffset = t2.get(_), this.xmp = t2.get(j), this.iptc = t2.get(W), this.icc = t2.get(K), this.options.sanitize && (t2.delete(X), t2.delete(Y), t2.delete(_), t2.delete(j), t2.delete(W), t2.delete(K)), t2) : void 0;
        }
        async parseExifBlock() {
          if (this.exif) return;
          if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
          this.file.tiff && await this.file.ensureChunk(this.exifOffset, C(this.options));
          let e2 = this.parseBlock(this.exifOffset, "exif");
          return this.interopOffset || (this.interopOffset = e2.get(Y)), this.makerNote = e2.get(z), this.userComment = e2.get(H), this.options.sanitize && (e2.delete(Y), e2.delete(z), e2.delete(H)), this.unpack(e2, 41728), this.unpack(e2, 41729), e2;
        }
        unpack(e2, t2) {
          let i2 = e2.get(t2);
          i2 && 1 === i2.length && e2.set(t2, i2[0]);
        }
        async parseGpsBlock() {
          if (this.gps) return;
          if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
          let e2 = this.parseBlock(this.gpsOffset, "gps");
          return e2 && e2.has(2) && e2.has(4) && (e2.set("latitude", ke(...e2.get(2), e2.get(1))), e2.set("longitude", ke(...e2.get(4), e2.get(3)))), e2;
        }
        async parseInteropBlock() {
          if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
        }
        async parseThumbnailBlock(e2 = false) {
          if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e2)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = true), this.ifd1;
        }
        async extractThumbnail() {
          if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(true), void 0 === this.ifd1) return;
          let e2 = this.ifd1.get(513), t2 = this.ifd1.get(514);
          return this.chunk.getUint8Array(e2, t2);
        }
        get image() {
          return this.ifd0;
        }
        get thumbnail() {
          return this.ifd1;
        }
        createOutput() {
          let e2, t2, i2, n2 = {};
          for (t2 of Q) if (e2 = this[t2], !g(e2)) if (i2 = this.canTranslate ? this.translateBlock(e2, t2) : Object.fromEntries(e2), this.options.mergeOutput) {
            if ("ifd1" === t2) continue;
            Object.assign(n2, i2);
          } else n2[t2] = i2;
          return this.makerNote && (n2.makerNote = this.makerNote), this.userComment && (n2.userComment = this.userComment), n2;
        }
        assignToOutput(e2, t2) {
          if (this.globalOptions.mergeOutput) Object.assign(e2, t2);
          else for (let [i2, n2] of Object.entries(t2)) this.assignObjectToOutput(e2, i2, n2);
        }
      }
      function ke(e2, t2, i2, n2) {
        var s2 = e2 + t2 / 60 + i2 / 3600;
        return "S" !== n2 && "W" !== n2 || (s2 *= -1), s2;
      }
      f(Ie, "type", "tiff"), f(Ie, "headerLength", 10), A.set("tiff", Ie);
      var we = Object.freeze({ __proto__: null, default: de, Exifr: ce, fileParsers: T, segmentParsers: A, fileReaders: D, tagKeys: N, tagValues: G, tagRevivers: V, createDictionary: B, extendDictionary: E, fetchUrlAsArrayBuffer: L, readBlobAsArrayBuffer: U, chunkedProps: $, otherSegments: J, segments: q, tiffBlocks: Q, segmentsAndBlocks: Z, tiffExtractables: ee, inheritables: te, allFormatters: ie, Options: oe, parse: fe });
      const Te = { ifd0: false, ifd1: false, exif: false, gps: false, interop: false, sanitize: false, reviveValues: true, translateKeys: false, translateValues: false, mergeOutput: false }, Ae = Object.assign({}, Te, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] });
      async function De(e2) {
        let t2 = new ce(Ae);
        await t2.read(e2);
        let i2 = await t2.parse();
        if (i2 && i2.gps) {
          let { latitude: e3, longitude: t3 } = i2.gps;
          return { latitude: e3, longitude: t3 };
        }
      }
      const Oe = Object.assign({}, Te, { tiff: false, ifd1: true, mergeOutput: false });
      async function xe(e2) {
        let t2 = new ce(Oe);
        await t2.read(e2);
        let i2 = await t2.extractThumbnail();
        return i2 && o ? r.from(i2) : i2;
      }
      async function ve(e2) {
        let t2 = await this.thumbnail(e2);
        if (void 0 !== t2) {
          let e3 = new Blob([t2]);
          return URL.createObjectURL(e3);
        }
      }
      const Me = Object.assign({}, Te, { firstChunkSize: 4e4, ifd0: [274] });
      async function Re(e2) {
        let t2 = new ce(Me);
        await t2.read(e2);
        let i2 = await t2.parse();
        if (i2 && i2.ifd0) return i2.ifd0[274];
      }
      const Le = Object.freeze({ 1: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 0, rad: 0 }, 2: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 0, rad: 0 }, 3: { dimensionSwapped: false, scaleX: 1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 4: { dimensionSwapped: false, scaleX: -1, scaleY: 1, deg: 180, rad: 180 * Math.PI / 180 }, 5: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 90, rad: 90 * Math.PI / 180 }, 6: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 90, rad: 90 * Math.PI / 180 }, 7: { dimensionSwapped: true, scaleX: 1, scaleY: -1, deg: 270, rad: 270 * Math.PI / 180 }, 8: { dimensionSwapped: true, scaleX: 1, scaleY: 1, deg: 270, rad: 270 * Math.PI / 180 } });
      if (e.rotateCanvas = true, e.rotateCss = true, "object" == typeof navigator) {
        let t2 = navigator.userAgent;
        if (t2.includes("iPad") || t2.includes("iPhone")) {
          let i2 = t2.match(/OS (\d+)_(\d+)/);
          if (i2) {
            let [, t3, n2] = i2, s2 = Number(t3) + 0.1 * Number(n2);
            e.rotateCanvas = s2 < 13.4, e.rotateCss = false;
          }
        } else if (t2.includes("OS X 10")) {
          let [, i2] = t2.match(/OS X 10[_.](\d+)/);
          e.rotateCanvas = e.rotateCss = Number(i2) < 15;
        }
        if (t2.includes("Chrome/")) {
          let [, i2] = t2.match(/Chrome\/(\d+)/);
          e.rotateCanvas = e.rotateCss = Number(i2) < 81;
        } else if (t2.includes("Firefox/")) {
          let [, i2] = t2.match(/Firefox\/(\d+)/);
          e.rotateCanvas = e.rotateCss = Number(i2) < 77;
        }
      }
      async function Ue(t2) {
        let i2 = await Re(t2);
        return Object.assign({ canvas: e.rotateCanvas, css: e.rotateCss }, Le[i2]);
      }
      class Fe extends I {
        constructor(...e2) {
          super(...e2), f(this, "ranges", new Be()), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
        }
        _tryExtend(e2, t2, i2) {
          if (0 === e2 && 0 === this.byteLength && i2) {
            let e3 = new DataView(i2.buffer || i2, i2.byteOffset, i2.byteLength);
            this._swapDataView(e3);
          } else {
            let i3 = e2 + t2;
            if (i3 > this.byteLength) {
              let { dataView: e3 } = this._extend(i3);
              this._swapDataView(e3);
            }
          }
        }
        _extend(e2) {
          let t2;
          t2 = o ? r.allocUnsafe(e2) : new Uint8Array(e2);
          let i2 = new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
          return t2.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), { uintView: t2, dataView: i2 };
        }
        subarray(e2, t2, i2 = false) {
          return t2 = t2 || this._lengthToEnd(e2), i2 && this._tryExtend(e2, t2), this.ranges.add(e2, t2), super.subarray(e2, t2);
        }
        set(e2, t2, i2 = false) {
          i2 && this._tryExtend(t2, e2.byteLength, e2);
          let n2 = super.set(e2, t2);
          return this.ranges.add(t2, n2.byteLength), n2;
        }
        async ensureChunk(e2, t2) {
          this.chunked && (this.ranges.available(e2, t2) || await this.readChunk(e2, t2));
        }
        available(e2, t2) {
          return this.ranges.available(e2, t2);
        }
      }
      class Be {
        constructor() {
          f(this, "list", []);
        }
        get length() {
          return this.list.length;
        }
        add(e2, t2, i2 = 0) {
          let n2 = e2 + t2, s2 = this.list.filter(((t3) => Ee(e2, t3.offset, n2) || Ee(e2, t3.end, n2)));
          if (s2.length > 0) {
            e2 = Math.min(e2, ...s2.map(((e3) => e3.offset))), n2 = Math.max(n2, ...s2.map(((e3) => e3.end))), t2 = n2 - e2;
            let i3 = s2.shift();
            i3.offset = e2, i3.length = t2, i3.end = n2, this.list = this.list.filter(((e3) => !s2.includes(e3)));
          } else this.list.push({ offset: e2, length: t2, end: n2 });
        }
        available(e2, t2) {
          let i2 = e2 + t2;
          return this.list.some(((t3) => t3.offset <= e2 && i2 <= t3.end));
        }
      }
      function Ee(e2, t2, i2) {
        return e2 <= t2 && t2 <= i2;
      }
      class Ne extends Fe {
        constructor(e2, t2) {
          super(0), f(this, "chunksRead", 0), this.input = e2, this.options = t2;
        }
        async readWhole() {
          this.chunked = false, await this.readChunk(this.nextChunkOffset);
        }
        async readChunked() {
          this.chunked = true, await this.readChunk(0, this.options.firstChunkSize);
        }
        async readNextChunk(e2 = this.nextChunkOffset) {
          if (this.fullyRead) return this.chunksRead++, false;
          let t2 = this.options.chunkSize, i2 = await this.readChunk(e2, t2);
          return !!i2 && i2.byteLength === t2;
        }
        async readChunk(e2, t2) {
          if (this.chunksRead++, 0 !== (t2 = this.safeWrapAddress(e2, t2))) return this._readChunk(e2, t2);
        }
        safeWrapAddress(e2, t2) {
          return void 0 !== this.size && e2 + t2 > this.size ? Math.max(0, this.size - e2) : t2;
        }
        get nextChunkOffset() {
          if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
        }
        get canReadNextChunk() {
          return this.chunksRead < this.options.chunkLimit;
        }
        get fullyRead() {
          return void 0 !== this.size && this.nextChunkOffset === this.size;
        }
        read() {
          return this.options.chunked ? this.readChunked() : this.readWhole();
        }
        close() {
        }
      }
      D.set("blob", class extends Ne {
        async readWhole() {
          this.chunked = false;
          let e2 = await U(this.input);
          this._swapArrayBuffer(e2);
        }
        readChunked() {
          return this.chunked = true, this.size = this.input.size, super.readChunked();
        }
        async _readChunk(e2, t2) {
          let i2 = t2 ? e2 + t2 : void 0, n2 = this.input.slice(e2, i2), s2 = await U(n2);
          return this.set(s2, e2, true);
        }
      });
      var Ge = Object.freeze({ __proto__: null, default: we, Exifr: ce, fileParsers: T, segmentParsers: A, fileReaders: D, tagKeys: N, tagValues: G, tagRevivers: V, createDictionary: B, extendDictionary: E, fetchUrlAsArrayBuffer: L, readBlobAsArrayBuffer: U, chunkedProps: $, otherSegments: J, segments: q, tiffBlocks: Q, segmentsAndBlocks: Z, tiffExtractables: ee, inheritables: te, allFormatters: ie, Options: oe, parse: fe, gpsOnlyOptions: Ae, gps: De, thumbnailOnlyOptions: Oe, thumbnail: xe, thumbnailUrl: ve, orientationOnlyOptions: Me, orientation: Re, rotations: Le, get rotateCanvas() {
        return e.rotateCanvas;
      }, get rotateCss() {
        return e.rotateCss;
      }, rotation: Ue });
      D.set("url", class extends Ne {
        async readWhole() {
          this.chunked = false;
          let e2 = await L(this.input);
          e2 instanceof ArrayBuffer ? this._swapArrayBuffer(e2) : e2 instanceof Uint8Array && this._swapBuffer(e2);
        }
        async _readChunk(e2, t2) {
          let i2 = t2 ? e2 + t2 - 1 : void 0, n2 = this.options.httpHeaders || {};
          (e2 || i2) && (n2.range = `bytes=${[e2, i2].join("-")}`);
          let s2 = await u(this.input, { headers: n2 }), r2 = await s2.arrayBuffer(), a2 = r2.byteLength;
          if (416 !== s2.status) return a2 !== t2 && (this.size = e2 + a2), this.set(r2, e2, true);
        }
      });
      I.prototype.getUint64 = function(e2) {
        let t2 = this.getUint32(e2), i2 = this.getUint32(e2 + 4);
        return t2 < 1048575 ? t2 << 32 | i2 : void 0 !== typeof a ? (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), a(t2) << a(32) | a(i2)) : void m("Trying to read 64b value but JS can only handle 53b numbers.");
      };
      class Ve extends pe {
        parseBoxes(e2 = 0) {
          let t2 = [];
          for (; e2 < this.file.byteLength - 4; ) {
            let i2 = this.parseBoxHead(e2);
            if (t2.push(i2), 0 === i2.length) break;
            e2 += i2.length;
          }
          return t2;
        }
        parseSubBoxes(e2) {
          e2.boxes = this.parseBoxes(e2.start);
        }
        findBox(e2, t2) {
          return void 0 === e2.boxes && this.parseSubBoxes(e2), e2.boxes.find(((e3) => e3.kind === t2));
        }
        parseBoxHead(e2) {
          let t2 = this.file.getUint32(e2), i2 = this.file.getString(e2 + 4, 4), n2 = e2 + 8;
          return 1 === t2 && (t2 = this.file.getUint64(e2 + 8), n2 += 8), { offset: e2, length: t2, kind: i2, start: n2 };
        }
        parseBoxFullHead(e2) {
          if (void 0 !== e2.version) return;
          let t2 = this.file.getUint32(e2.start);
          e2.version = t2 >> 24, e2.start += 4;
        }
      }
      class ze extends Ve {
        static canHandle(e2, t2) {
          if (0 !== t2) return false;
          let i2 = e2.getUint16(2);
          if (i2 > 50) return false;
          let n2 = 16, s2 = [];
          for (; n2 < i2; ) s2.push(e2.getString(n2, 4)), n2 += 4;
          return s2.includes(this.type);
        }
        async parse() {
          let e2 = this.file.getUint32(0), t2 = this.parseBoxHead(e2);
          for (; "meta" !== t2.kind; ) e2 += t2.length, await this.file.ensureChunk(e2, 16), t2 = this.parseBoxHead(e2);
          await this.file.ensureChunk(t2.offset, t2.length), this.parseBoxFullHead(t2), this.parseSubBoxes(t2), this.options.icc.enabled && await this.findIcc(t2), this.options.tiff.enabled && await this.findExif(t2);
        }
        async registerSegment(e2, t2, i2) {
          await this.file.ensureChunk(t2, i2);
          let n2 = this.file.subarray(t2, i2);
          this.createParser(e2, n2);
        }
        async findIcc(e2) {
          let t2 = this.findBox(e2, "iprp");
          if (void 0 === t2) return;
          let i2 = this.findBox(t2, "ipco");
          if (void 0 === i2) return;
          let n2 = this.findBox(i2, "colr");
          void 0 !== n2 && await this.registerSegment("icc", n2.offset + 12, n2.length);
        }
        async findExif(e2) {
          let t2 = this.findBox(e2, "iinf");
          if (void 0 === t2) return;
          let i2 = this.findBox(e2, "iloc");
          if (void 0 === i2) return;
          let n2 = this.findExifLocIdInIinf(t2), s2 = this.findExtentInIloc(i2, n2);
          if (void 0 === s2) return;
          let [r2, a2] = s2;
          await this.file.ensureChunk(r2, a2);
          let o2 = 4 + this.file.getUint32(r2);
          r2 += o2, a2 -= o2, await this.registerSegment("tiff", r2, a2);
        }
        findExifLocIdInIinf(e2) {
          this.parseBoxFullHead(e2);
          let t2, i2, n2, s2, r2 = e2.start, a2 = this.file.getUint16(r2);
          for (r2 += 2; a2--; ) {
            if (t2 = this.parseBoxHead(r2), this.parseBoxFullHead(t2), i2 = t2.start, t2.version >= 2 && (n2 = 3 === t2.version ? 4 : 2, s2 = this.file.getString(i2 + n2 + 2, 4), "Exif" === s2)) return this.file.getUintBytes(i2, n2);
            r2 += t2.length;
          }
        }
        get8bits(e2) {
          let t2 = this.file.getUint8(e2);
          return [t2 >> 4, 15 & t2];
        }
        findExtentInIloc(e2, t2) {
          this.parseBoxFullHead(e2);
          let i2 = e2.start, [n2, s2] = this.get8bits(i2++), [r2, a2] = this.get8bits(i2++), o2 = 2 === e2.version ? 4 : 2, l2 = 1 === e2.version || 2 === e2.version ? 2 : 0, h2 = a2 + n2 + s2, u2 = 2 === e2.version ? 4 : 2, c2 = this.file.getUintBytes(i2, u2);
          for (i2 += u2; c2--; ) {
            let e3 = this.file.getUintBytes(i2, o2);
            i2 += o2 + l2 + 2 + r2;
            let u3 = this.file.getUint16(i2);
            if (i2 += 2, e3 === t2) return u3 > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [this.file.getUintBytes(i2 + a2, n2), this.file.getUintBytes(i2 + a2 + n2, s2)];
            i2 += u3 * h2;
          }
        }
      }
      class He extends ze {
      }
      f(He, "type", "heic");
      class je extends ze {
      }
      f(je, "type", "avif"), T.set("heic", He), T.set("avif", je), B(N, ["ifd0", "ifd1"], [[256, "ImageWidth"], [257, "ImageHeight"], [258, "BitsPerSample"], [259, "Compression"], [262, "PhotometricInterpretation"], [270, "ImageDescription"], [271, "Make"], [272, "Model"], [273, "StripOffsets"], [274, "Orientation"], [277, "SamplesPerPixel"], [278, "RowsPerStrip"], [279, "StripByteCounts"], [282, "XResolution"], [283, "YResolution"], [284, "PlanarConfiguration"], [296, "ResolutionUnit"], [301, "TransferFunction"], [305, "Software"], [306, "ModifyDate"], [315, "Artist"], [316, "HostComputer"], [317, "Predictor"], [318, "WhitePoint"], [319, "PrimaryChromaticities"], [513, "ThumbnailOffset"], [514, "ThumbnailLength"], [529, "YCbCrCoefficients"], [530, "YCbCrSubSampling"], [531, "YCbCrPositioning"], [532, "ReferenceBlackWhite"], [700, "ApplicationNotes"], [33432, "Copyright"], [33723, "IPTC"], [34665, "ExifIFD"], [34675, "ICC"], [34853, "GpsIFD"], [330, "SubIFD"], [40965, "InteropIFD"], [40091, "XPTitle"], [40092, "XPComment"], [40093, "XPAuthor"], [40094, "XPKeywords"], [40095, "XPSubject"]]), B(N, "exif", [[33434, "ExposureTime"], [33437, "FNumber"], [34850, "ExposureProgram"], [34852, "SpectralSensitivity"], [34855, "ISO"], [34858, "TimeZoneOffset"], [34859, "SelfTimerMode"], [34864, "SensitivityType"], [34865, "StandardOutputSensitivity"], [34866, "RecommendedExposureIndex"], [34867, "ISOSpeed"], [34868, "ISOSpeedLatitudeyyy"], [34869, "ISOSpeedLatitudezzz"], [36864, "ExifVersion"], [36867, "DateTimeOriginal"], [36868, "CreateDate"], [36873, "GooglePlusUploadCode"], [36880, "OffsetTime"], [36881, "OffsetTimeOriginal"], [36882, "OffsetTimeDigitized"], [37121, "ComponentsConfiguration"], [37122, "CompressedBitsPerPixel"], [37377, "ShutterSpeedValue"], [37378, "ApertureValue"], [37379, "BrightnessValue"], [37380, "ExposureCompensation"], [37381, "MaxApertureValue"], [37382, "SubjectDistance"], [37383, "MeteringMode"], [37384, "LightSource"], [37385, "Flash"], [37386, "FocalLength"], [37393, "ImageNumber"], [37394, "SecurityClassification"], [37395, "ImageHistory"], [37396, "SubjectArea"], [37500, "MakerNote"], [37510, "UserComment"], [37520, "SubSecTime"], [37521, "SubSecTimeOriginal"], [37522, "SubSecTimeDigitized"], [37888, "AmbientTemperature"], [37889, "Humidity"], [37890, "Pressure"], [37891, "WaterDepth"], [37892, "Acceleration"], [37893, "CameraElevationAngle"], [40960, "FlashpixVersion"], [40961, "ColorSpace"], [40962, "ExifImageWidth"], [40963, "ExifImageHeight"], [40964, "RelatedSoundFile"], [41483, "FlashEnergy"], [41486, "FocalPlaneXResolution"], [41487, "FocalPlaneYResolution"], [41488, "FocalPlaneResolutionUnit"], [41492, "SubjectLocation"], [41493, "ExposureIndex"], [41495, "SensingMethod"], [41728, "FileSource"], [41729, "SceneType"], [41730, "CFAPattern"], [41985, "CustomRendered"], [41986, "ExposureMode"], [41987, "WhiteBalance"], [41988, "DigitalZoomRatio"], [41989, "FocalLengthIn35mmFormat"], [41990, "SceneCaptureType"], [41991, "GainControl"], [41992, "Contrast"], [41993, "Saturation"], [41994, "Sharpness"], [41996, "SubjectDistanceRange"], [42016, "ImageUniqueID"], [42032, "OwnerName"], [42033, "SerialNumber"], [42034, "LensInfo"], [42035, "LensMake"], [42036, "LensModel"], [42037, "LensSerialNumber"], [42080, "CompositeImage"], [42081, "CompositeImageCount"], [42082, "CompositeImageExposureTimes"], [42240, "Gamma"], [59932, "Padding"], [59933, "OffsetSchema"], [65e3, "OwnerName"], [65001, "SerialNumber"], [65002, "Lens"], [65100, "RawFile"], [65101, "Converter"], [65102, "WhiteBalance"], [65105, "Exposure"], [65106, "Shadows"], [65107, "Brightness"], [65108, "Contrast"], [65109, "Saturation"], [65110, "Sharpness"], [65111, "Smoothness"], [65112, "MoireFilter"], [40965, "InteropIFD"]]), B(N, "gps", [[0, "GPSVersionID"], [1, "GPSLatitudeRef"], [2, "GPSLatitude"], [3, "GPSLongitudeRef"], [4, "GPSLongitude"], [5, "GPSAltitudeRef"], [6, "GPSAltitude"], [7, "GPSTimeStamp"], [8, "GPSSatellites"], [9, "GPSStatus"], [10, "GPSMeasureMode"], [11, "GPSDOP"], [12, "GPSSpeedRef"], [13, "GPSSpeed"], [14, "GPSTrackRef"], [15, "GPSTrack"], [16, "GPSImgDirectionRef"], [17, "GPSImgDirection"], [18, "GPSMapDatum"], [19, "GPSDestLatitudeRef"], [20, "GPSDestLatitude"], [21, "GPSDestLongitudeRef"], [22, "GPSDestLongitude"], [23, "GPSDestBearingRef"], [24, "GPSDestBearing"], [25, "GPSDestDistanceRef"], [26, "GPSDestDistance"], [27, "GPSProcessingMethod"], [28, "GPSAreaInformation"], [29, "GPSDateStamp"], [30, "GPSDifferential"], [31, "GPSHPositioningError"]]), B(G, ["ifd0", "ifd1"], [[274, { 1: "Horizontal (normal)", 2: "Mirror horizontal", 3: "Rotate 180", 4: "Mirror vertical", 5: "Mirror horizontal and rotate 270 CW", 6: "Rotate 90 CW", 7: "Mirror horizontal and rotate 90 CW", 8: "Rotate 270 CW" }], [296, { 1: "None", 2: "inches", 3: "cm" }]]);
      let We = B(G, "exif", [[34850, { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }], [37121, { 0: "-", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" }], [37383, { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }], [37384, { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }], [37385, { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }], [41495, { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }], [41728, { 1: "Film Scanner", 2: "Reflection Print Scanner", 3: "Digital Camera" }], [41729, { 1: "Directly photographed" }], [41985, { 0: "Normal", 1: "Custom", 2: "HDR (no original saved)", 3: "HDR (original saved)", 4: "Original (for HDR)", 6: "Panorama", 7: "Portrait HDR", 8: "Portrait" }], [41986, { 0: "Auto", 1: "Manual", 2: "Auto bracket" }], [41987, { 0: "Auto", 1: "Manual" }], [41990, { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night", 4: "Other" }], [41991, { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }], [41996, { 0: "Unknown", 1: "Macro", 2: "Close", 3: "Distant" }], [42080, { 0: "Unknown", 1: "Not a Composite Image", 2: "General Composite Image", 3: "Composite Image Captured While Shooting" }]]);
      const Ke = { 1: "No absolute unit of measurement", 2: "Inch", 3: "Centimeter" };
      We.set(37392, Ke), We.set(41488, Ke);
      const Xe = { 0: "Normal", 1: "Low", 2: "High" };
      function _e(e2) {
        return "object" == typeof e2 && void 0 !== e2.length ? e2[0] : e2;
      }
      function Ye(e2) {
        let t2 = Array.from(e2).slice(1);
        return t2[1] > 15 && (t2 = t2.map(((e3) => String.fromCharCode(e3)))), "0" !== t2[2] && 0 !== t2[2] || t2.pop(), t2.join(".");
      }
      function $e(e2) {
        if ("string" == typeof e2) {
          var [t2, i2, n2, s2, r2, a2] = e2.trim().split(/[-: ]/g).map(Number), o2 = new Date(t2, i2 - 1, n2);
          return Number.isNaN(s2) || Number.isNaN(r2) || Number.isNaN(a2) || (o2.setHours(s2), o2.setMinutes(r2), o2.setSeconds(a2)), Number.isNaN(+o2) ? e2 : o2;
        }
      }
      function Je(e2) {
        if ("string" == typeof e2) return e2;
        let t2 = [];
        if (0 === e2[1] && 0 === e2[e2.length - 1]) for (let i2 = 0; i2 < e2.length; i2 += 2) t2.push(qe(e2[i2 + 1], e2[i2]));
        else for (let i2 = 0; i2 < e2.length; i2 += 2) t2.push(qe(e2[i2], e2[i2 + 1]));
        return S(String.fromCodePoint(...t2));
      }
      function qe(e2, t2) {
        return e2 << 8 | t2;
      }
      We.set(41992, Xe), We.set(41993, Xe), We.set(41994, Xe), B(V, ["ifd0", "ifd1"], [[50827, function(e2) {
        return "string" != typeof e2 ? P(e2) : e2;
      }], [306, $e], [40091, Je], [40092, Je], [40093, Je], [40094, Je], [40095, Je]]), B(V, "exif", [[40960, Ye], [36864, Ye], [36867, $e], [36868, $e], [40962, _e], [40963, _e]]), B(V, "gps", [[0, (e2) => Array.from(e2).join(".")], [7, (e2) => Array.from(e2).join(":")]]);
      const Qe = "http://ns.adobe.com/", Ze = "http://ns.adobe.com/xmp/extension/";
      class et extends ge {
        static canHandle(e2, t2) {
          return 225 === e2.getUint8(t2 + 1) && 1752462448 === e2.getUint32(t2 + 4) && e2.getString(t2 + 4, Qe.length) === Qe;
        }
        static headerLength(e2, t2) {
          return e2.getString(t2 + 4, Ze.length) === Ze ? 79 : 4 + "http://ns.adobe.com/xap/1.0/".length + 1;
        }
        static findPosition(e2, t2) {
          let i2 = super.findPosition(e2, t2);
          return i2.multiSegment = i2.extended = 79 === i2.headerLength, i2.multiSegment ? (i2.chunkCount = e2.getUint8(t2 + 72), i2.chunkNumber = e2.getUint8(t2 + 76), 0 !== e2.getUint8(t2 + 77) && i2.chunkNumber++) : (i2.chunkCount = 1 / 0, i2.chunkNumber = -1), i2;
        }
        static handleMultiSegments(e2) {
          return e2.map(((e3) => e3.chunk.getString())).join("");
        }
        normalizeInput(e2) {
          return "string" == typeof e2 ? e2 : I.from(e2).getString();
        }
        parse(e2 = this.chunk) {
          if (!this.localOptions.parse) return e2;
          e2 = (function(e3) {
            let t3 = {}, i3 = {};
            for (let e4 of ut) t3[e4] = [], i3[e4] = 0;
            return e3.replace(ct, ((e4, n3, s2) => {
              if ("<" === n3) {
                let n4 = ++i3[s2];
                return t3[s2].push(n4), `${e4}#${n4}`;
              }
              return `${e4}#${t3[s2].pop()}`;
            }));
          })(e2);
          let t2 = nt.findAll(e2, "rdf", "Description");
          0 === t2.length && t2.push(new nt("rdf", "Description", void 0, e2));
          let i2, n2 = {};
          for (let e3 of t2) for (let t3 of e3.properties) i2 = ot(t3.ns, n2), st(t3, i2);
          return (function(e3) {
            let t3;
            for (let i3 in e3) t3 = e3[i3] = d(e3[i3]), void 0 === t3 && delete e3[i3];
            return d(e3);
          })(n2);
        }
        assignToOutput(e2, t2) {
          if (this.localOptions.parse) for (let [i2, n2] of Object.entries(t2)) switch (i2) {
            case "tiff":
              this.assignObjectToOutput(e2, "ifd0", n2);
              break;
            case "exif":
              this.assignObjectToOutput(e2, "exif", n2);
              break;
            case "xmlns":
              break;
            default:
              this.assignObjectToOutput(e2, i2, n2);
          }
          else e2.xmp = t2;
        }
      }
      f(et, "type", "xmp"), f(et, "multiSegment", true), A.set("xmp", et);
      class tt {
        static findAll(e2) {
          return lt(e2, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(tt.unpackMatch);
        }
        static unpackMatch(e2) {
          let t2 = e2[1], i2 = e2[2], n2 = e2[3].slice(1, -1);
          return n2 = ht(n2), new tt(t2, i2, n2);
        }
        constructor(e2, t2, i2) {
          this.ns = e2, this.name = t2, this.value = i2;
        }
        serialize() {
          return this.value;
        }
      }
      const it = "[\\w\\d-]+";
      class nt {
        static findAll(e2, t2, i2) {
          if (void 0 !== t2 || void 0 !== i2) {
            t2 = t2 || it, i2 = i2 || it;
            var n2 = new RegExp(`<(${t2}):(${i2})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
          } else n2 = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
          return lt(e2, n2).map(nt.unpackMatch);
        }
        static unpackMatch(e2) {
          let t2 = e2[1], i2 = e2[2], n2 = e2[4], s2 = e2[8];
          return new nt(t2, i2, n2, s2);
        }
        constructor(e2, t2, i2, n2) {
          this.ns = e2, this.name = t2, this.attrString = i2, this.innerXml = n2, this.attrs = tt.findAll(i2), this.children = nt.findAll(n2), this.value = 0 === this.children.length ? ht(n2) : void 0, this.properties = [...this.attrs, ...this.children];
        }
        get isPrimitive() {
          return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
        }
        get isListContainer() {
          return 1 === this.children.length && this.children[0].isList;
        }
        get isList() {
          let { ns: e2, name: t2 } = this;
          return "rdf" === e2 && ("Seq" === t2 || "Bag" === t2 || "Alt" === t2);
        }
        get isListItem() {
          return "rdf" === this.ns && "li" === this.name;
        }
        serialize() {
          if (0 === this.properties.length && void 0 === this.value) return;
          if (this.isPrimitive) return this.value;
          if (this.isListContainer) return this.children[0].serialize();
          if (this.isList) return at(this.children.map(rt));
          if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
          let e2 = {};
          for (let t2 of this.properties) st(t2, e2);
          return void 0 !== this.value && (e2.value = this.value), d(e2);
        }
      }
      function st(e2, t2) {
        let i2 = e2.serialize();
        void 0 !== i2 && (t2[e2.name] = i2);
      }
      var rt = (e2) => e2.serialize(), at = (e2) => 1 === e2.length ? e2[0] : e2, ot = (e2, t2) => t2[e2] ? t2[e2] : t2[e2] = {};
      function lt(e2, t2) {
        let i2, n2 = [];
        if (!e2) return n2;
        for (; null !== (i2 = t2.exec(e2)); ) n2.push(i2);
        return n2;
      }
      function ht(e2) {
        if ((function(e3) {
          return null == e3 || "null" === e3 || "undefined" === e3 || "" === e3 || "" === e3.trim();
        })(e2)) return;
        let t2 = Number(e2);
        if (!Number.isNaN(t2)) return t2;
        let i2 = e2.toLowerCase();
        return "true" === i2 || "false" !== i2 && e2.trim();
      }
      const ut = ["rdf:li", "rdf:Seq", "rdf:Bag", "rdf:Alt", "rdf:Description"], ct = new RegExp(`(<|\\/)(${ut.join("|")})`, "g");
      var ft = Object.freeze({ __proto__: null, default: Ge, Exifr: ce, fileParsers: T, segmentParsers: A, fileReaders: D, tagKeys: N, tagValues: G, tagRevivers: V, createDictionary: B, extendDictionary: E, fetchUrlAsArrayBuffer: L, readBlobAsArrayBuffer: U, chunkedProps: $, otherSegments: J, segments: q, tiffBlocks: Q, segmentsAndBlocks: Z, tiffExtractables: ee, inheritables: te, allFormatters: ie, Options: oe, parse: fe, gpsOnlyOptions: Ae, gps: De, thumbnailOnlyOptions: Oe, thumbnail: xe, thumbnailUrl: ve, orientationOnlyOptions: Me, orientation: Re, rotations: Le, get rotateCanvas() {
        return e.rotateCanvas;
      }, get rotateCss() {
        return e.rotateCss;
      }, rotation: Ue });
      const dt = ["xmp", "icc", "iptc", "tiff"], pt = () => {
      };
      async function gt(e2, t2, i2) {
        let n2 = i2[e2];
        return n2.enabled = true, n2.parse = true, A.get(e2).parse(t2, n2);
      }
      let mt = h("fs", ((e2) => e2.promises));
      D.set("fs", class extends Ne {
        async readWhole() {
          this.chunked = false, this.fs = await mt;
          let e2 = await this.fs.readFile(this.input);
          this._swapBuffer(e2);
        }
        async readChunked() {
          this.chunked = true, this.fs = await mt, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
        }
        async open() {
          void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
        }
        async _readChunk(e2, t2) {
          void 0 === this.fh && await this.open(), e2 + t2 > this.size && (t2 = this.size - e2);
          var i2 = this.subarray(e2, t2, true);
          return await this.fh.read(i2.dataView, 0, t2, e2), i2;
        }
        async close() {
          if (this.fh) {
            let e2 = this.fh;
            this.fh = void 0, await e2.close();
          }
        }
      });
      D.set("base64", class extends Ne {
        constructor(...e2) {
          super(...e2), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
        }
        async _readChunk(e2, t2) {
          let i2, n2, s2 = this.input;
          void 0 === e2 ? (e2 = 0, i2 = 0, n2 = 0) : (i2 = 4 * Math.floor(e2 / 3), n2 = e2 - i2 / 4 * 3), void 0 === t2 && (t2 = this.size);
          let a2 = e2 + t2, l2 = i2 + 4 * Math.ceil(a2 / 3);
          s2 = s2.slice(i2, l2);
          let h2 = Math.min(t2, this.size - e2);
          if (o) {
            let t3 = r.from(s2, "base64").slice(n2, n2 + h2);
            return this.set(t3, e2, true);
          }
          {
            let t3 = this.subarray(e2, h2, true), i3 = atob(s2), r2 = t3.toUint8();
            for (let e3 = 0; e3 < h2; e3++) r2[e3] = i3.charCodeAt(n2 + e3);
            return t3;
          }
        }
      });
      class St extends pe {
        static canHandle(e2, t2) {
          return 18761 === t2 || 19789 === t2;
        }
        extendOptions(e2) {
          let { ifd0: t2, xmp: i2, iptc: n2, icc: s2 } = e2;
          i2.enabled && t2.deps.add(j), n2.enabled && t2.deps.add(W), s2.enabled && t2.deps.add(K), t2.finalizeFilters();
        }
        async parse() {
          let { tiff: e2, xmp: t2, iptc: i2, icc: n2 } = this.options;
          if (e2.enabled || t2.enabled || i2.enabled || n2.enabled) {
            let e3 = Math.max(C(this.options), this.options.chunkSize);
            await this.file.ensureChunk(0, e3), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
          }
        }
        adaptTiffPropAsSegment(e2) {
          if (this.parsers.tiff[e2]) {
            let t2 = this.parsers.tiff[e2];
            this.injectSegment(e2, t2);
          }
        }
      }
      f(St, "type", "tiff"), T.set("tiff", St);
      let Ct = h("zlib");
      const yt = "XML:com.adobe.xmp", bt = "ihdr", Pt = "iccp", It = "text", kt = "itxt", wt = [bt, Pt, It, kt, "exif"];
      class Tt extends pe {
        constructor(...e2) {
          super(...e2), f(this, "catchError", ((e3) => this.errors.push(e3))), f(this, "metaChunks", []), f(this, "unknownChunks", []);
        }
        static canHandle(e2, t2) {
          return 35152 === t2 && 2303741511 === e2.getUint32(0) && 218765834 === e2.getUint32(4);
        }
        async parse() {
          let { file: e2 } = this;
          await this.findPngChunksInRange("\x89PNG\r\n\n".length, e2.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
        }
        async findPngChunksInRange(e2, t2) {
          let { file: i2 } = this;
          for (; e2 < t2; ) {
            let t3 = i2.getUint32(e2), n2 = i2.getUint32(e2 + 4), s2 = i2.getString(e2 + 4, 4).toLowerCase(), r2 = t3 + 4 + 4 + 4, a2 = { type: s2, offset: e2, length: r2, start: e2 + 4 + 4, size: t3, marker: n2 };
            wt.includes(s2) ? this.metaChunks.push(a2) : this.unknownChunks.push(a2), e2 += r2;
          }
        }
        parseTextChunks() {
          let e2 = this.metaChunks.filter(((e3) => e3.type === It));
          for (let t2 of e2) {
            let [e3, i2] = this.file.getString(t2.start, t2.size).split("\0");
            this.injectKeyValToIhdr(e3, i2);
          }
        }
        injectKeyValToIhdr(e2, t2) {
          let i2 = this.parsers.ihdr;
          i2 && i2.raw.set(e2, t2);
        }
        findIhdr() {
          let e2 = this.metaChunks.find(((e3) => e3.type === bt));
          e2 && false !== this.options.ihdr.enabled && this.createParser(bt, e2.chunk);
        }
        async findExif() {
          let e2 = this.metaChunks.find(((e3) => "exif" === e3.type));
          e2 && this.injectSegment("tiff", e2.chunk);
        }
        async findXmp() {
          let e2 = this.metaChunks.filter(((e3) => e3.type === kt));
          for (let t2 of e2) {
            t2.chunk.getString(0, yt.length) === yt && this.injectSegment("xmp", t2.chunk);
          }
        }
        async findIcc() {
          let e2 = this.metaChunks.find(((e3) => e3.type === Pt));
          if (!e2) return;
          let { chunk: t2 } = e2, i2 = t2.getUint8Array(0, 81), n2 = 0;
          for (; n2 < 80 && 0 !== i2[n2]; ) n2++;
          let r2 = n2 + 2, a2 = t2.getString(0, n2);
          if (this.injectKeyValToIhdr("ProfileName", a2), s) {
            let e3 = await Ct, i3 = t2.getUint8Array(r2);
            i3 = e3.inflateSync(i3), this.injectSegment("icc", i3);
          }
        }
      }
      f(Tt, "type", "png"), T.set("png", Tt), B(N, "interop", [[1, "InteropIndex"], [2, "InteropVersion"], [4096, "RelatedImageFileFormat"], [4097, "RelatedImageWidth"], [4098, "RelatedImageHeight"]]), E(N, "ifd0", [[11, "ProcessingSoftware"], [254, "SubfileType"], [255, "OldSubfileType"], [263, "Thresholding"], [264, "CellWidth"], [265, "CellLength"], [266, "FillOrder"], [269, "DocumentName"], [280, "MinSampleValue"], [281, "MaxSampleValue"], [285, "PageName"], [286, "XPosition"], [287, "YPosition"], [290, "GrayResponseUnit"], [297, "PageNumber"], [321, "HalftoneHints"], [322, "TileWidth"], [323, "TileLength"], [332, "InkSet"], [337, "TargetPrinter"], [18246, "Rating"], [18249, "RatingPercent"], [33550, "PixelScale"], [34264, "ModelTransform"], [34377, "PhotoshopSettings"], [50706, "DNGVersion"], [50707, "DNGBackwardVersion"], [50708, "UniqueCameraModel"], [50709, "LocalizedCameraModel"], [50736, "DNGLensInfo"], [50739, "ShadowScale"], [50740, "DNGPrivateData"], [33920, "IntergraphMatrix"], [33922, "ModelTiePoint"], [34118, "SEMInfo"], [34735, "GeoTiffDirectory"], [34736, "GeoTiffDoubleParams"], [34737, "GeoTiffAsciiParams"], [50341, "PrintIM"], [50721, "ColorMatrix1"], [50722, "ColorMatrix2"], [50723, "CameraCalibration1"], [50724, "CameraCalibration2"], [50725, "ReductionMatrix1"], [50726, "ReductionMatrix2"], [50727, "AnalogBalance"], [50728, "AsShotNeutral"], [50729, "AsShotWhiteXY"], [50730, "BaselineExposure"], [50731, "BaselineNoise"], [50732, "BaselineSharpness"], [50734, "LinearResponseLimit"], [50735, "CameraSerialNumber"], [50741, "MakerNoteSafety"], [50778, "CalibrationIlluminant1"], [50779, "CalibrationIlluminant2"], [50781, "RawDataUniqueID"], [50827, "OriginalRawFileName"], [50828, "OriginalRawFileData"], [50831, "AsShotICCProfile"], [50832, "AsShotPreProfileMatrix"], [50833, "CurrentICCProfile"], [50834, "CurrentPreProfileMatrix"], [50879, "ColorimetricReference"], [50885, "SRawType"], [50898, "PanasonicTitle"], [50899, "PanasonicTitle2"], [50931, "CameraCalibrationSig"], [50932, "ProfileCalibrationSig"], [50933, "ProfileIFD"], [50934, "AsShotProfileName"], [50936, "ProfileName"], [50937, "ProfileHueSatMapDims"], [50938, "ProfileHueSatMapData1"], [50939, "ProfileHueSatMapData2"], [50940, "ProfileToneCurve"], [50941, "ProfileEmbedPolicy"], [50942, "ProfileCopyright"], [50964, "ForwardMatrix1"], [50965, "ForwardMatrix2"], [50966, "PreviewApplicationName"], [50967, "PreviewApplicationVersion"], [50968, "PreviewSettingsName"], [50969, "PreviewSettingsDigest"], [50970, "PreviewColorSpace"], [50971, "PreviewDateTime"], [50972, "RawImageDigest"], [50973, "OriginalRawFileDigest"], [50981, "ProfileLookTableDims"], [50982, "ProfileLookTableData"], [51043, "TimeCodes"], [51044, "FrameRate"], [51058, "TStop"], [51081, "ReelName"], [51089, "OriginalDefaultFinalSize"], [51090, "OriginalBestQualitySize"], [51091, "OriginalDefaultCropSize"], [51105, "CameraLabel"], [51107, "ProfileHueSatMapEncoding"], [51108, "ProfileLookTableEncoding"], [51109, "BaselineExposureOffset"], [51110, "DefaultBlackRender"], [51111, "NewRawImageDigest"], [51112, "RawToPreviewGain"]]);
      let At = [[273, "StripOffsets"], [279, "StripByteCounts"], [288, "FreeOffsets"], [289, "FreeByteCounts"], [291, "GrayResponseCurve"], [292, "T4Options"], [293, "T6Options"], [300, "ColorResponseUnit"], [320, "ColorMap"], [324, "TileOffsets"], [325, "TileByteCounts"], [326, "BadFaxLines"], [327, "CleanFaxData"], [328, "ConsecutiveBadFaxLines"], [330, "SubIFD"], [333, "InkNames"], [334, "NumberofInks"], [336, "DotRange"], [338, "ExtraSamples"], [339, "SampleFormat"], [340, "SMinSampleValue"], [341, "SMaxSampleValue"], [342, "TransferRange"], [343, "ClipPath"], [344, "XClipPathUnits"], [345, "YClipPathUnits"], [346, "Indexed"], [347, "JPEGTables"], [351, "OPIProxy"], [400, "GlobalParametersIFD"], [401, "ProfileType"], [402, "FaxProfile"], [403, "CodingMethods"], [404, "VersionYear"], [405, "ModeNumber"], [433, "Decode"], [434, "DefaultImageColor"], [435, "T82Options"], [437, "JPEGTables"], [512, "JPEGProc"], [515, "JPEGRestartInterval"], [517, "JPEGLosslessPredictors"], [518, "JPEGPointTransforms"], [519, "JPEGQTables"], [520, "JPEGDCTables"], [521, "JPEGACTables"], [559, "StripRowCounts"], [999, "USPTOMiscellaneous"], [18247, "XP_DIP_XML"], [18248, "StitchInfo"], [28672, "SonyRawFileType"], [28688, "SonyToneCurve"], [28721, "VignettingCorrection"], [28722, "VignettingCorrParams"], [28724, "ChromaticAberrationCorrection"], [28725, "ChromaticAberrationCorrParams"], [28726, "DistortionCorrection"], [28727, "DistortionCorrParams"], [29895, "SonyCropTopLeft"], [29896, "SonyCropSize"], [32781, "ImageID"], [32931, "WangTag1"], [32932, "WangAnnotation"], [32933, "WangTag3"], [32934, "WangTag4"], [32953, "ImageReferencePoints"], [32954, "RegionXformTackPoint"], [32955, "WarpQuadrilateral"], [32956, "AffineTransformMat"], [32995, "Matteing"], [32996, "DataType"], [32997, "ImageDepth"], [32998, "TileDepth"], [33300, "ImageFullWidth"], [33301, "ImageFullHeight"], [33302, "TextureFormat"], [33303, "WrapModes"], [33304, "FovCot"], [33305, "MatrixWorldToScreen"], [33306, "MatrixWorldToCamera"], [33405, "Model2"], [33421, "CFARepeatPatternDim"], [33422, "CFAPattern2"], [33423, "BatteryLevel"], [33424, "KodakIFD"], [33445, "MDFileTag"], [33446, "MDScalePixel"], [33447, "MDColorTable"], [33448, "MDLabName"], [33449, "MDSampleInfo"], [33450, "MDPrepDate"], [33451, "MDPrepTime"], [33452, "MDFileUnits"], [33589, "AdventScale"], [33590, "AdventRevision"], [33628, "UIC1Tag"], [33629, "UIC2Tag"], [33630, "UIC3Tag"], [33631, "UIC4Tag"], [33918, "IntergraphPacketData"], [33919, "IntergraphFlagRegisters"], [33921, "INGRReserved"], [34016, "Site"], [34017, "ColorSequence"], [34018, "IT8Header"], [34019, "RasterPadding"], [34020, "BitsPerRunLength"], [34021, "BitsPerExtendedRunLength"], [34022, "ColorTable"], [34023, "ImageColorIndicator"], [34024, "BackgroundColorIndicator"], [34025, "ImageColorValue"], [34026, "BackgroundColorValue"], [34027, "PixelIntensityRange"], [34028, "TransparencyIndicator"], [34029, "ColorCharacterization"], [34030, "HCUsage"], [34031, "TrapIndicator"], [34032, "CMYKEquivalent"], [34152, "AFCP_IPTC"], [34232, "PixelMagicJBIGOptions"], [34263, "JPLCartoIFD"], [34306, "WB_GRGBLevels"], [34310, "LeafData"], [34687, "TIFF_FXExtensions"], [34688, "MultiProfiles"], [34689, "SharedData"], [34690, "T88Options"], [34732, "ImageLayer"], [34750, "JBIGOptions"], [34856, "Opto-ElectricConvFactor"], [34857, "Interlace"], [34908, "FaxRecvParams"], [34909, "FaxSubAddress"], [34910, "FaxRecvTime"], [34929, "FedexEDR"], [34954, "LeafSubIFD"], [37387, "FlashEnergy"], [37388, "SpatialFrequencyResponse"], [37389, "Noise"], [37390, "FocalPlaneXResolution"], [37391, "FocalPlaneYResolution"], [37392, "FocalPlaneResolutionUnit"], [37397, "ExposureIndex"], [37398, "TIFF-EPStandardID"], [37399, "SensingMethod"], [37434, "CIP3DataFile"], [37435, "CIP3Sheet"], [37436, "CIP3Side"], [37439, "StoNits"], [37679, "MSDocumentText"], [37680, "MSPropertySetStorage"], [37681, "MSDocumentTextPosition"], [37724, "ImageSourceData"], [40965, "InteropIFD"], [40976, "SamsungRawPointersOffset"], [40977, "SamsungRawPointersLength"], [41217, "SamsungRawByteOrder"], [41218, "SamsungRawUnknown"], [41484, "SpatialFrequencyResponse"], [41485, "Noise"], [41489, "ImageNumber"], [41490, "SecurityClassification"], [41491, "ImageHistory"], [41494, "TIFF-EPStandardID"], [41995, "DeviceSettingDescription"], [42112, "GDALMetadata"], [42113, "GDALNoData"], [44992, "ExpandSoftware"], [44993, "ExpandLens"], [44994, "ExpandFilm"], [44995, "ExpandFilterLens"], [44996, "ExpandScanner"], [44997, "ExpandFlashLamp"], [46275, "HasselbladRawImage"], [48129, "PixelFormat"], [48130, "Transformation"], [48131, "Uncompressed"], [48132, "ImageType"], [48256, "ImageWidth"], [48257, "ImageHeight"], [48258, "WidthResolution"], [48259, "HeightResolution"], [48320, "ImageOffset"], [48321, "ImageByteCount"], [48322, "AlphaOffset"], [48323, "AlphaByteCount"], [48324, "ImageDataDiscard"], [48325, "AlphaDataDiscard"], [50215, "OceScanjobDesc"], [50216, "OceApplicationSelector"], [50217, "OceIDNumber"], [50218, "OceImageLogic"], [50255, "Annotations"], [50459, "HasselbladExif"], [50547, "OriginalFileName"], [50560, "USPTOOriginalContentType"], [50656, "CR2CFAPattern"], [50710, "CFAPlaneColor"], [50711, "CFALayout"], [50712, "LinearizationTable"], [50713, "BlackLevelRepeatDim"], [50714, "BlackLevel"], [50715, "BlackLevelDeltaH"], [50716, "BlackLevelDeltaV"], [50717, "WhiteLevel"], [50718, "DefaultScale"], [50719, "DefaultCropOrigin"], [50720, "DefaultCropSize"], [50733, "BayerGreenSplit"], [50737, "ChromaBlurRadius"], [50738, "AntiAliasStrength"], [50752, "RawImageSegmentation"], [50780, "BestQualityScale"], [50784, "AliasLayerMetadata"], [50829, "ActiveArea"], [50830, "MaskedAreas"], [50935, "NoiseReductionApplied"], [50974, "SubTileBlockSize"], [50975, "RowInterleaveFactor"], [51008, "OpcodeList1"], [51009, "OpcodeList2"], [51022, "OpcodeList3"], [51041, "NoiseProfile"], [51114, "CacheVersion"], [51125, "DefaultUserCrop"], [51157, "NikonNEFInfo"], [65024, "KdcIFD"]];
      E(N, "ifd0", At), E(N, "exif", At), B(G, "gps", [[23, { M: "Magnetic North", T: "True North" }], [25, { K: "Kilometers", M: "Miles", N: "Nautical Miles" }]]);
      class Dt extends ge {
        static canHandle(e2, t2) {
          return 224 === e2.getUint8(t2 + 1) && 1246120262 === e2.getUint32(t2 + 4) && 0 === e2.getUint8(t2 + 8);
        }
        parse() {
          return this.parseTags(), this.translate(), this.output;
        }
        parseTags() {
          this.raw = /* @__PURE__ */ new Map([[0, this.chunk.getUint16(0)], [2, this.chunk.getUint8(2)], [3, this.chunk.getUint16(3)], [5, this.chunk.getUint16(5)], [7, this.chunk.getUint8(7)], [8, this.chunk.getUint8(8)]]);
        }
      }
      f(Dt, "type", "jfif"), f(Dt, "headerLength", 9), A.set("jfif", Dt), B(N, "jfif", [[0, "JFIFVersion"], [2, "ResolutionUnit"], [3, "XResolution"], [5, "YResolution"], [7, "ThumbnailWidth"], [8, "ThumbnailHeight"]]);
      class Ot extends ge {
        parse() {
          return this.parseTags(), this.translate(), this.output;
        }
        parseTags() {
          this.raw = new Map([[0, this.chunk.getUint32(0)], [4, this.chunk.getUint32(4)], [8, this.chunk.getUint8(8)], [9, this.chunk.getUint8(9)], [10, this.chunk.getUint8(10)], [11, this.chunk.getUint8(11)], [12, this.chunk.getUint8(12)], ...Array.from(this.raw)]);
        }
      }
      f(Ot, "type", "ihdr"), A.set("ihdr", Ot), B(N, "ihdr", [[0, "ImageWidth"], [4, "ImageHeight"], [8, "BitDepth"], [9, "ColorType"], [10, "Compression"], [11, "Filter"], [12, "Interlace"]]), B(G, "ihdr", [[9, { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha", DEFAULT: "Unknown" }], [10, { 0: "Deflate/Inflate", DEFAULT: "Unknown" }], [11, { 0: "Adaptive", DEFAULT: "Unknown" }], [12, { 0: "Noninterlaced", 1: "Adam7 Interlace", DEFAULT: "Unknown" }]]);
      const xt = "\0\0\0\0";
      class vt extends ge {
        static canHandle(e2, t2) {
          return 226 === e2.getUint8(t2 + 1) && 1229144927 === e2.getUint32(t2 + 4);
        }
        static findPosition(e2, t2) {
          let i2 = super.findPosition(e2, t2);
          return i2.chunkNumber = e2.getUint8(t2 + 16), i2.chunkCount = e2.getUint8(t2 + 17), i2.multiSegment = i2.chunkCount > 1, i2;
        }
        static handleMultiSegments(e2) {
          return (function(e3) {
            let t2 = (function(e4) {
              let t3 = e4[0].constructor, i2 = 0;
              for (let t4 of e4) i2 += t4.length;
              let n2 = new t3(i2), s2 = 0;
              for (let t4 of e4) n2.set(t4, s2), s2 += t4.length;
              return n2;
            })(e3.map(((e4) => e4.chunk.toUint8())));
            return new I(t2);
          })(e2);
        }
        parse() {
          return this.raw = /* @__PURE__ */ new Map(), this.parseHeader(), this.parseTags(), this.translate(), this.output;
        }
        parseHeader() {
          let { raw: e2 } = this;
          this.chunk.byteLength < 84 && m("ICC header is too short");
          for (let [t2, i2] of Object.entries(Mt)) {
            t2 = parseInt(t2, 10);
            let n2 = i2(this.chunk, t2);
            n2 !== xt && e2.set(t2, n2);
          }
        }
        parseTags() {
          let e2, t2, i2, n2, s2, { raw: r2 } = this, a2 = this.chunk.getUint32(128), o2 = 132, l2 = this.chunk.byteLength;
          for (; a2--; ) {
            if (e2 = this.chunk.getString(o2, 4), t2 = this.chunk.getUint32(o2 + 4), i2 = this.chunk.getUint32(o2 + 8), n2 = this.chunk.getString(t2, 4), t2 + i2 > l2) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
            s2 = this.parseTag(n2, t2, i2), void 0 !== s2 && s2 !== xt && r2.set(e2, s2), o2 += 12;
          }
        }
        parseTag(e2, t2, i2) {
          switch (e2) {
            case "desc":
              return this.parseDesc(t2);
            case "mluc":
              return this.parseMluc(t2);
            case "text":
              return this.parseText(t2, i2);
            case "sig ":
              return this.parseSig(t2);
          }
          if (!(t2 + i2 > this.chunk.byteLength)) return this.chunk.getUint8Array(t2, i2);
        }
        parseDesc(e2) {
          let t2 = this.chunk.getUint32(e2 + 8) - 1;
          return S(this.chunk.getString(e2 + 12, t2));
        }
        parseText(e2, t2) {
          return S(this.chunk.getString(e2 + 8, t2 - 8));
        }
        parseSig(e2) {
          return S(this.chunk.getString(e2 + 8, 4));
        }
        parseMluc(e2) {
          let { chunk: t2 } = this, i2 = t2.getUint32(e2 + 8), n2 = t2.getUint32(e2 + 12), s2 = e2 + 16, r2 = [];
          for (let a2 = 0; a2 < i2; a2++) {
            let i3 = t2.getString(s2 + 0, 2), a3 = t2.getString(s2 + 2, 2), o2 = t2.getUint32(s2 + 4), l2 = t2.getUint32(s2 + 8) + e2, h2 = S(t2.getUnicodeString(l2, o2));
            r2.push({ lang: i3, country: a3, text: h2 }), s2 += n2;
          }
          return 1 === i2 ? r2[0].text : r2;
        }
        translateValue(e2, t2) {
          return "string" == typeof e2 ? t2[e2] || t2[e2.toLowerCase()] || e2 : t2[e2] || e2;
        }
      }
      f(vt, "type", "icc"), f(vt, "multiSegment", true), f(vt, "headerLength", 18);
      const Mt = { 4: Rt, 8: function(e2, t2) {
        return [e2.getUint8(t2), e2.getUint8(t2 + 1) >> 4, e2.getUint8(t2 + 1) % 16].map(((e3) => e3.toString(10))).join(".");
      }, 12: Rt, 16: Rt, 20: Rt, 24: function(e2, t2) {
        const i2 = e2.getUint16(t2), n2 = e2.getUint16(t2 + 2) - 1, s2 = e2.getUint16(t2 + 4), r2 = e2.getUint16(t2 + 6), a2 = e2.getUint16(t2 + 8), o2 = e2.getUint16(t2 + 10);
        return new Date(Date.UTC(i2, n2, s2, r2, a2, o2));
      }, 36: Rt, 40: Rt, 48: Rt, 52: Rt, 64: (e2, t2) => e2.getUint32(t2), 80: Rt };
      function Rt(e2, t2) {
        return S(e2.getString(t2, 4));
      }
      A.set("icc", vt), B(N, "icc", [[4, "ProfileCMMType"], [8, "ProfileVersion"], [12, "ProfileClass"], [16, "ColorSpaceData"], [20, "ProfileConnectionSpace"], [24, "ProfileDateTime"], [36, "ProfileFileSignature"], [40, "PrimaryPlatform"], [44, "CMMFlags"], [48, "DeviceManufacturer"], [52, "DeviceModel"], [56, "DeviceAttributes"], [64, "RenderingIntent"], [68, "ConnectionSpaceIlluminant"], [80, "ProfileCreator"], [84, "ProfileID"], ["Header", "ProfileHeader"], ["MS00", "WCSProfiles"], ["bTRC", "BlueTRC"], ["bXYZ", "BlueMatrixColumn"], ["bfd", "UCRBG"], ["bkpt", "MediaBlackPoint"], ["calt", "CalibrationDateTime"], ["chad", "ChromaticAdaptation"], ["chrm", "Chromaticity"], ["ciis", "ColorimetricIntentImageState"], ["clot", "ColorantTableOut"], ["clro", "ColorantOrder"], ["clrt", "ColorantTable"], ["cprt", "ProfileCopyright"], ["crdi", "CRDInfo"], ["desc", "ProfileDescription"], ["devs", "DeviceSettings"], ["dmdd", "DeviceModelDesc"], ["dmnd", "DeviceMfgDesc"], ["dscm", "ProfileDescriptionML"], ["fpce", "FocalPlaneColorimetryEstimates"], ["gTRC", "GreenTRC"], ["gXYZ", "GreenMatrixColumn"], ["gamt", "Gamut"], ["kTRC", "GrayTRC"], ["lumi", "Luminance"], ["meas", "Measurement"], ["meta", "Metadata"], ["mmod", "MakeAndModel"], ["ncl2", "NamedColor2"], ["ncol", "NamedColor"], ["ndin", "NativeDisplayInfo"], ["pre0", "Preview0"], ["pre1", "Preview1"], ["pre2", "Preview2"], ["ps2i", "PS2RenderingIntent"], ["ps2s", "PostScript2CSA"], ["psd0", "PostScript2CRD0"], ["psd1", "PostScript2CRD1"], ["psd2", "PostScript2CRD2"], ["psd3", "PostScript2CRD3"], ["pseq", "ProfileSequenceDesc"], ["psid", "ProfileSequenceIdentifier"], ["psvm", "PS2CRDVMSize"], ["rTRC", "RedTRC"], ["rXYZ", "RedMatrixColumn"], ["resp", "OutputResponse"], ["rhoc", "ReflectionHardcopyOrigColorimetry"], ["rig0", "PerceptualRenderingIntentGamut"], ["rig2", "SaturationRenderingIntentGamut"], ["rpoc", "ReflectionPrintOutputColorimetry"], ["sape", "SceneAppearanceEstimates"], ["scoe", "SceneColorimetryEstimates"], ["scrd", "ScreeningDesc"], ["scrn", "Screening"], ["targ", "CharTarget"], ["tech", "Technology"], ["vcgt", "VideoCardGamma"], ["view", "ViewingConditions"], ["vued", "ViewingCondDesc"], ["wtpt", "MediaWhitePoint"]]);
      const Lt = { "4d2p": "Erdt Systems", AAMA: "Aamazing Technologies", ACER: "Acer", ACLT: "Acolyte Color Research", ACTI: "Actix Sytems", ADAR: "Adara Technology", ADBE: "Adobe", ADI: "ADI Systems", AGFA: "Agfa Graphics", ALMD: "Alps Electric", ALPS: "Alps Electric", ALWN: "Alwan Color Expertise", AMTI: "Amiable Technologies", AOC: "AOC International", APAG: "Apago", APPL: "Apple Computer", AST: "AST", "AT&T": "AT&T", BAEL: "BARBIERI electronic", BRCO: "Barco NV", BRKP: "Breakpoint", BROT: "Brother", BULL: "Bull", BUS: "Bus Computer Systems", "C-IT": "C-Itoh", CAMR: "Intel", CANO: "Canon", CARR: "Carroll Touch", CASI: "Casio", CBUS: "Colorbus PL", CEL: "Crossfield", CELx: "Crossfield", CGS: "CGS Publishing Technologies International", CHM: "Rochester Robotics", CIGL: "Colour Imaging Group, London", CITI: "Citizen", CL00: "Candela", CLIQ: "Color IQ", CMCO: "Chromaco", CMiX: "CHROMiX", COLO: "Colorgraphic Communications", COMP: "Compaq", COMp: "Compeq/Focus Technology", CONR: "Conrac Display Products", CORD: "Cordata Technologies", CPQ: "Compaq", CPRO: "ColorPro", CRN: "Cornerstone", CTX: "CTX International", CVIS: "ColorVision", CWC: "Fujitsu Laboratories", DARI: "Darius Technology", DATA: "Dataproducts", DCP: "Dry Creek Photo", DCRC: "Digital Contents Resource Center, Chung-Ang University", DELL: "Dell Computer", DIC: "Dainippon Ink and Chemicals", DICO: "Diconix", DIGI: "Digital", "DL&C": "Digital Light & Color", DPLG: "Doppelganger", DS: "Dainippon Screen", DSOL: "DOOSOL", DUPN: "DuPont", EPSO: "Epson", ESKO: "Esko-Graphics", ETRI: "Electronics and Telecommunications Research Institute", EVER: "Everex Systems", EXAC: "ExactCODE", Eizo: "Eizo", FALC: "Falco Data Products", FF: "Fuji Photo Film", FFEI: "FujiFilm Electronic Imaging", FNRD: "Fnord Software", FORA: "Fora", FORE: "Forefront Technology", FP: "Fujitsu", FPA: "WayTech Development", FUJI: "Fujitsu", FX: "Fuji Xerox", GCC: "GCC Technologies", GGSL: "Global Graphics Software", GMB: "Gretagmacbeth", GMG: "GMG", GOLD: "GoldStar Technology", GOOG: "Google", GPRT: "Giantprint", GTMB: "Gretagmacbeth", GVC: "WayTech Development", GW2K: "Sony", HCI: "HCI", HDM: "Heidelberger Druckmaschinen", HERM: "Hermes", HITA: "Hitachi America", HP: "Hewlett-Packard", HTC: "Hitachi", HiTi: "HiTi Digital", IBM: "IBM", IDNT: "Scitex", IEC: "Hewlett-Packard", IIYA: "Iiyama North America", IKEG: "Ikegami Electronics", IMAG: "Image Systems", IMI: "Ingram Micro", INTC: "Intel", INTL: "N/A (INTL)", INTR: "Intra Electronics", IOCO: "Iocomm International Technology", IPS: "InfoPrint Solutions Company", IRIS: "Scitex", ISL: "Ichikawa Soft Laboratory", ITNL: "N/A (ITNL)", IVM: "IVM", IWAT: "Iwatsu Electric", Idnt: "Scitex", Inca: "Inca Digital Printers", Iris: "Scitex", JPEG: "Joint Photographic Experts Group", JSFT: "Jetsoft Development", JVC: "JVC Information Products", KART: "Scitex", KFC: "KFC Computek Components", KLH: "KLH Computers", KMHD: "Konica Minolta", KNCA: "Konica", KODA: "Kodak", KYOC: "Kyocera", Kart: "Scitex", LCAG: "Leica", LCCD: "Leeds Colour", LDAK: "Left Dakota", LEAD: "Leading Technology", LEXM: "Lexmark International", LINK: "Link Computer", LINO: "Linotronic", LITE: "Lite-On", Leaf: "Leaf", Lino: "Linotronic", MAGC: "Mag Computronic", MAGI: "MAG Innovision", MANN: "Mannesmann", MICN: "Micron Technology", MICR: "Microtek", MICV: "Microvitec", MINO: "Minolta", MITS: "Mitsubishi Electronics America", MITs: "Mitsuba", MNLT: "Minolta", MODG: "Modgraph", MONI: "Monitronix", MONS: "Monaco Systems", MORS: "Morse Technology", MOTI: "Motive Systems", MSFT: "Microsoft", MUTO: "MUTOH INDUSTRIES", Mits: "Mitsubishi Electric", NANA: "NANAO", NEC: "NEC", NEXP: "NexPress Solutions", NISS: "Nissei Sangyo America", NKON: "Nikon", NONE: "none", OCE: "Oce Technologies", OCEC: "OceColor", OKI: "Oki", OKID: "Okidata", OKIP: "Okidata", OLIV: "Olivetti", OLYM: "Olympus", ONYX: "Onyx Graphics", OPTI: "Optiquest", PACK: "Packard Bell", PANA: "Matsushita Electric Industrial", PANT: "Pantone", PBN: "Packard Bell", PFU: "PFU", PHIL: "Philips Consumer Electronics", PNTX: "HOYA", POne: "Phase One A/S", PREM: "Premier Computer Innovations", PRIN: "Princeton Graphic Systems", PRIP: "Princeton Publishing Labs", QLUX: "Hong Kong", QMS: "QMS", QPCD: "QPcard AB", QUAD: "QuadLaser", QUME: "Qume", RADI: "Radius", RDDx: "Integrated Color Solutions", RDG: "Roland DG", REDM: "REDMS Group", RELI: "Relisys", RGMS: "Rolf Gierling Multitools", RICO: "Ricoh", RNLD: "Edmund Ronald", ROYA: "Royal", RPC: "Ricoh Printing Systems", RTL: "Royal Information Electronics", SAMP: "Sampo", SAMS: "Samsung", SANT: "Jaime Santana Pomares", SCIT: "Scitex", SCRN: "Dainippon Screen", SDP: "Scitex", SEC: "Samsung", SEIK: "Seiko Instruments", SEIk: "Seikosha", SGUY: "ScanGuy.com", SHAR: "Sharp Laboratories", SICC: "International Color Consortium", SONY: "Sony", SPCL: "SpectraCal", STAR: "Star", STC: "Sampo Technology", Scit: "Scitex", Sdp: "Scitex", Sony: "Sony", TALO: "Talon Technology", TAND: "Tandy", TATU: "Tatung", TAXA: "TAXAN America", TDS: "Tokyo Denshi Sekei", TECO: "TECO Information Systems", TEGR: "Tegra", TEKT: "Tektronix", TI: "Texas Instruments", TMKR: "TypeMaker", TOSB: "Toshiba", TOSH: "Toshiba", TOTK: "TOTOKU ELECTRIC", TRIU: "Triumph", TSBT: "Toshiba", TTX: "TTX Computer Products", TVM: "TVM Professional Monitor", TW: "TW Casper", ULSX: "Ulead Systems", UNIS: "Unisys", UTZF: "Utz Fehlau & Sohn", VARI: "Varityper", VIEW: "Viewsonic", VISL: "Visual communication", VIVO: "Vivo Mobile Communication", WANG: "Wang", WLBR: "Wilbur Imaging", WTG2: "Ware To Go", WYSE: "WYSE Technology", XERX: "Xerox", XRIT: "X-Rite", ZRAN: "Zoran", Zebr: "Zebra Technologies", appl: "Apple Computer", bICC: "basICColor", berg: "bergdesign", ceyd: "Integrated Color Solutions", clsp: "MacDermid ColorSpan", ds: "Dainippon Screen", dupn: "DuPont", ffei: "FujiFilm Electronic Imaging", flux: "FluxData", iris: "Scitex", kart: "Scitex", lcms: "Little CMS", lino: "Linotronic", none: "none", ob4d: "Erdt Systems", obic: "Medigraph", quby: "Qubyx Sarl", scit: "Scitex", scrn: "Dainippon Screen", sdp: "Scitex", siwi: "SIWI GRAFIKA", yxym: "YxyMaster" }, Ut = { scnr: "Scanner", mntr: "Monitor", prtr: "Printer", link: "Device Link", abst: "Abstract", spac: "Color Space Conversion Profile", nmcl: "Named Color", cenc: "ColorEncodingSpace profile", mid: "MultiplexIdentification profile", mlnk: "MultiplexLink profile", mvis: "MultiplexVisualization profile", nkpf: "Nikon Input Device Profile (NON-STANDARD!)" };
      B(G, "icc", [[4, Lt], [12, Ut], [40, Object.assign({}, Lt, Ut)], [48, Lt], [80, Lt], [64, { 0: "Perceptual", 1: "Relative Colorimetric", 2: "Saturation", 3: "Absolute Colorimetric" }], ["tech", { amd: "Active Matrix Display", crt: "Cathode Ray Tube Display", kpcd: "Photo CD", pmd: "Passive Matrix Display", dcam: "Digital Camera", dcpj: "Digital Cinema Projector", dmpc: "Digital Motion Picture Camera", dsub: "Dye Sublimation Printer", epho: "Electrophotographic Printer", esta: "Electrostatic Printer", flex: "Flexography", fprn: "Film Writer", fscn: "Film Scanner", grav: "Gravure", ijet: "Ink Jet Printer", imgs: "Photo Image Setter", mpfr: "Motion Picture Film Recorder", mpfs: "Motion Picture Film Scanner", offs: "Offset Lithography", pjtv: "Projection Television", rpho: "Photographic Paper Printer", rscn: "Reflective Scanner", silk: "Silkscreen", twax: "Thermal Wax Printer", vidc: "Video Camera", vidm: "Video Monitor" }]]);
      class Ft extends ge {
        static canHandle(e2, t2, i2) {
          return 237 === e2.getUint8(t2 + 1) && "Photoshop" === e2.getString(t2 + 4, 9) && void 0 !== this.containsIptc8bim(e2, t2, i2);
        }
        static headerLength(e2, t2, i2) {
          let n2, s2 = this.containsIptc8bim(e2, t2, i2);
          if (void 0 !== s2) return n2 = e2.getUint8(t2 + s2 + 7), n2 % 2 != 0 && (n2 += 1), 0 === n2 && (n2 = 4), s2 + 8 + n2;
        }
        static containsIptc8bim(e2, t2, i2) {
          for (let n2 = 0; n2 < i2; n2++) if (this.isIptcSegmentHead(e2, t2 + n2)) return n2;
        }
        static isIptcSegmentHead(e2, t2) {
          return 56 === e2.getUint8(t2) && 943868237 === e2.getUint32(t2) && 1028 === e2.getUint16(t2 + 4);
        }
        parse() {
          let { raw: e2 } = this, t2 = this.chunk.byteLength - 1, i2 = false;
          for (let n2 = 0; n2 < t2; n2++) if (28 === this.chunk.getUint8(n2) && 2 === this.chunk.getUint8(n2 + 1)) {
            i2 = true;
            let t3 = this.chunk.getUint16(n2 + 3), s2 = this.chunk.getUint8(n2 + 2), r2 = this.chunk.getLatin1String(n2 + 5, t3);
            e2.set(s2, this.pluralizeValue(e2.get(s2), r2)), n2 += 4 + t3;
          } else if (i2) break;
          return this.translate(), this.output;
        }
        pluralizeValue(e2, t2) {
          return void 0 !== e2 ? e2 instanceof Array ? (e2.push(t2), e2) : [e2, t2] : t2;
        }
      }
      f(Ft, "type", "iptc"), f(Ft, "translateValues", false), f(Ft, "reviveValues", false), A.set("iptc", Ft), B(N, "iptc", [[0, "ApplicationRecordVersion"], [3, "ObjectTypeReference"], [4, "ObjectAttributeReference"], [5, "ObjectName"], [7, "EditStatus"], [8, "EditorialUpdate"], [10, "Urgency"], [12, "SubjectReference"], [15, "Category"], [20, "SupplementalCategories"], [22, "FixtureIdentifier"], [25, "Keywords"], [26, "ContentLocationCode"], [27, "ContentLocationName"], [30, "ReleaseDate"], [35, "ReleaseTime"], [37, "ExpirationDate"], [38, "ExpirationTime"], [40, "SpecialInstructions"], [42, "ActionAdvised"], [45, "ReferenceService"], [47, "ReferenceDate"], [50, "ReferenceNumber"], [55, "DateCreated"], [60, "TimeCreated"], [62, "DigitalCreationDate"], [63, "DigitalCreationTime"], [65, "OriginatingProgram"], [70, "ProgramVersion"], [75, "ObjectCycle"], [80, "Byline"], [85, "BylineTitle"], [90, "City"], [92, "Sublocation"], [95, "State"], [100, "CountryCode"], [101, "Country"], [103, "OriginalTransmissionReference"], [105, "Headline"], [110, "Credit"], [115, "Source"], [116, "CopyrightNotice"], [118, "Contact"], [120, "Caption"], [121, "LocalCaption"], [122, "Writer"], [125, "RasterizedCaption"], [130, "ImageType"], [131, "ImageOrientation"], [135, "LanguageIdentifier"], [150, "AudioType"], [151, "AudioSamplingRate"], [152, "AudioSamplingResolution"], [153, "AudioDuration"], [154, "AudioOutcue"], [184, "JobID"], [185, "MasterDocumentID"], [186, "ShortDocumentID"], [187, "UniqueDocumentID"], [188, "OwnerID"], [200, "ObjectPreviewFileFormat"], [201, "ObjectPreviewFileVersion"], [202, "ObjectPreviewData"], [221, "Prefs"], [225, "ClassifyState"], [228, "SimilarityIndex"], [230, "DocumentNotes"], [231, "DocumentHistory"], [232, "ExifCameraInfo"], [255, "CatalogSets"]]), B(G, "iptc", [[10, { 0: "0 (reserved)", 1: "1 (most urgent)", 2: "2", 3: "3", 4: "4", 5: "5 (normal urgency)", 6: "6", 7: "7", 8: "8 (least urgent)", 9: "9 (user-defined priority)" }], [75, { a: "Morning", b: "Both Morning and Evening", p: "Evening" }], [131, { L: "Landscape", P: "Portrait", S: "Square" }]]), e.Exifr = ce, e.Options = oe, e.allFormatters = ie, e.chunkedProps = $, e.createDictionary = B, e.default = ft, e.extendDictionary = E, e.fetchUrlAsArrayBuffer = L, e.fileParsers = T, e.fileReaders = D, e.gps = De, e.gpsOnlyOptions = Ae, e.inheritables = te, e.orientation = Re, e.orientationOnlyOptions = Me, e.otherSegments = J, e.parse = fe, e.readBlobAsArrayBuffer = U, e.rotation = Ue, e.rotations = Le, e.segmentParsers = A, e.segments = q, e.segmentsAndBlocks = Z, e.sidecar = async function(e2, t2, i2) {
        let n2 = new oe(t2);
        n2.chunked = false, void 0 === i2 && "string" == typeof e2 && (i2 = (function(e3) {
          let t3 = e3.toLowerCase().split(".").pop();
          if (/* @__PURE__ */ (function(e4) {
            return "exif" === e4 || "tiff" === e4 || "tif" === e4;
          })(t3)) return "tiff";
          if (dt.includes(t3)) return t3;
        })(e2));
        let s2 = await x(e2, n2);
        if (i2) {
          if (dt.includes(i2)) return gt(i2, s2, n2);
          m("Invalid segment type");
        } else {
          if ((function(e3) {
            let t3 = e3.getString(0, 50).trim();
            return t3.includes("<?xpacket") || t3.includes("<x:");
          })(s2)) return gt("xmp", s2, n2);
          for (let [e3] of A) {
            if (!dt.includes(e3)) continue;
            let t3 = await gt(e3, s2, n2).catch(pt);
            if (t3) return t3;
          }
          m("Unknown file format");
        }
      }, e.tagKeys = N, e.tagRevivers = V, e.tagValues = G, e.thumbnail = xe, e.thumbnailOnlyOptions = Oe, e.thumbnailUrl = ve, e.tiffBlocks = Q, e.tiffExtractables = ee, Object.defineProperty(e, "__esModule", { value: true });
    }));
  }
});

// app.mjs
var import_promises = __toESM(require("node:fs/promises"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var import_exifr = __toESM(require_full_umd(), 1);
var import_node_console = __toESM(require("node:console"), 1);
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
var folderPath = process.argv[2];
var SNARKS = [
  "Ugh, another blurry selfie? Moving it anyway...",
  "Wow, look at you being organized for once.",
  "This photo is a masterpiece. Just kidding, it's mediocre.",
  "Is this a cat photo? Of course it is.",
  "I've seen better lighting in a cave.",
  "Moving this to a folder where you'll forget it exists.",
  "Hard drive space is crying right now.",
  "I'm a genius trapped in a photo-organizer's body.",
  "If I had eyes, I'd be rolling them right now.",
  "Do you actually *need* 14 copies of this?"
];
var getRandomSnark = () => SNARKS[Math.floor(Math.random() * SNARKS.length)];
if (!folderPath) {
  import_node_console.default.error(`PAM BONDI:  "Listen, I need a folder path. I'm not a psychic. Provide a directory!"`);
  process.exit(1);
}
async function main() {
  const cleanPath = import_node_path.default.resolve(folderPath);
  import_node_console.default.log(`
\u26D3\uFE0F  PAM BONDI: "I'm here to scrub your files...`);
  import_node_console.default.log(`   Feel free to start a war with Iran or something while I work."
`);
  import_node_console.default.log(`\u{1F50D} Scouring the filth in: ${cleanPath}
`);
  try {
    const files = await import_promises.default.readdir(cleanPath);
    let count = 0;
    for (const file of files) {
      const oldPath = import_node_path.default.join(cleanPath, file);
      const stats = await import_promises.default.stat(oldPath);
      if (stats.isDirectory() || file.startsWith(".")) continue;
      await sleep(500);
      import_node_console.default.log(` \u203A [${file}] ${getRandomSnark()}`);
      const fileDate = await getPhotoInfo(oldPath);
      const relativeFolder = buildDateFolders(fileDate);
      const targetFolder = import_node_path.default.join(cleanPath, relativeFolder);
      await createFolder(targetFolder);
      const newPath = import_node_path.default.join(targetFolder, file);
      await moveFile(oldPath, newPath);
      count++;
    }
    if (count > 0) {
      import_node_console.default.log(`
\u2728 DONE. I moved ${count} files. Now go away.
`);
    } else {
      import_node_console.default.log(`
\u{1F644} I found nothing. You wasted my time.
`);
    }
  } catch (err) {
    import_node_console.default.error("\n\u{1F4A5} Critical Failure:", err.message);
  }
}
async function createFolder(folder) {
  try {
    await import_promises.default.mkdir(folder, { recursive: true });
  } catch (err) {
    import_node_console.default.error(`Can't create folder retard: ${folder}`, err.message);
  }
}
async function moveFile(oldPath, newPath) {
  try {
    await import_promises.default.rename(oldPath, newPath);
  } catch (err) {
    if (err.code === "EXDEV") {
      try {
        await import_promises.default.copyFile(oldPath, newPath);
        await import_promises.default.unlink(oldPath);
      } catch (copyErr) {
        import_node_console.default.error(`Copy/Delete failed for ${oldPath}:`, copyErr.message);
      }
    } else {
      import_node_console.default.error("Cant move file idiot!", err.message);
    }
  }
}
async function getPhotoInfo(filePath) {
  try {
    const exif = await import_exifr.default.parse(filePath);
    if (exif && exif.DateTimeOriginal) {
      return new Date(exif.DateTimeOriginal);
    }
  } catch (error) {
    import_node_console.default.error("No EXIF data for:", filePath);
  }
  const stats = await import_promises.default.stat(filePath);
  return stats.mtime;
}
function buildDateFolders(date) {
  const validDate = date instanceof Date && !isNaN(date) ? date : /* @__PURE__ */ new Date();
  const year = validDate.getFullYear().toString();
  const month = `${year}-${String(validDate.getMonth() + 1).padStart(2, "0")}`;
  const day = `${month}-${String(validDate.getDate()).padStart(2, "0")}`;
  return import_node_path.default.join(year, month, day);
}
main();
