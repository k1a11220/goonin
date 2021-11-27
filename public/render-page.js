/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/cache.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloCache": () => (/* binding */ ApolloCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        this.performTransaction(options.update, optimisticId);
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/common.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingFieldError": () => (/* binding */ MissingFieldError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");

var MissingFieldError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/entityStore.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityStore": () => (/* binding */ EntityStore),
/* harmony export */   "maybeDependOnExistenceOfEntity": () => (/* binding */ maybeDependOnExistenceOfEntity),
/* harmony export */   "supportsResultCaching": () => (/* binding */ supportsResultCaching)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");







var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
var EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(objOrIdOrRef);
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(older))
            older = older.__ref;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dataId === "string", "store.merge expects a string ID") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dataId === "string", 1);
        var merged = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.makeReference)(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)(fieldValue), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.isReference)(obj)) {
                    found_1[obj.__ref] = true;
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isNonNullObject)(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());

var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? (0,optimism__WEBPACK_IMPORTED_MODULE_1__.dep)() : null;
        this.keyMaker = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.fieldNameFromStoreName)(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpers_js__WEBPACK_IMPORTED_MODULE_7__.hasOwn.call(this.data, dataId) ? (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(EntityStore));
var Stump = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return (0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}
//# sourceMappingURL=entityStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/helpers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "defaultDataIdFromObject": () => (/* binding */ defaultDataIdFromObject),
/* harmony export */   "normalizeConfig": () => (/* binding */ normalizeConfig),
/* harmony export */   "shouldCanonizeResults": () => (/* binding */ shouldCanonizeResults),
/* harmony export */   "getTypenameFromStoreObject": () => (/* binding */ getTypenameFromStoreObject),
/* harmony export */   "TypeOrFieldNameRegExp": () => (/* binding */ TypeOrFieldNameRegExp),
/* harmony export */   "fieldNameFromStoreName": () => (/* binding */ fieldNameFromStoreName),
/* harmony export */   "selectionSetMatchesResult": () => (/* binding */ selectionSetMatchesResult),
/* harmony export */   "storeValueIsStoreObject": () => (/* binding */ storeValueIsStoreObject),
/* harmony export */   "makeProcessedFieldsMerger": () => (/* binding */ makeProcessedFieldsMerger)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");

var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return __typename + ":" + ((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.compact)(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference)(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(result)) {
        return Array.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isField)(field) && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.shouldInclude)(field, variables)) {
                    var key = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.resultKeyNameFromField)(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value) &&
        !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference)(value) &&
        !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.DeepMerger;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryCache": () => (/* binding */ InMemoryCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./readFromStore.js */ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./writeToStore.js */ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");














var InMemoryCache = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_3__.makeVar;
        _this.txCount = 0;
        _this.config = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.normalizeConfig)(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_5__.Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_6__.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_7__.StoreWriter(this, this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_8__.StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.shouldCanonizeResults)(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
        }));
        this.maybeBroadcastWatch = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.supportsResultCaching)(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_9__.canonicalStringify)({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof _core_types_common_js__WEBPACK_IMPORTED_MODULE_10__.MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__.hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_3__.recallCache)(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_3__.forgetCache)(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        _object_canon_js__WEBPACK_IMPORTED_MODULE_9__.canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.isReference)(object) ? object.__ref :
            this.policies.identify(object)[0];
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__.hasOwn.call(options, "id")) {
                return false;
            }
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        _object_canon_js__WEBPACK_IMPORTED_MODULE_9__.canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_3__.forgetCache)(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.addTypenameToDocument)(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_13__.ApolloCache));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/object-canon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/object-canon.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectCanon": () => (/* binding */ ObjectCanon),
/* harmony export */   "canonicalStringify": () => (/* binding */ canonicalStringify)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");




function shallowCopy(value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
        return Array.isArray(value)
            ? value.slice(0)
            : (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakSet ? WeakSet : Set)();
        this.pool = new _wry_trie__WEBPACK_IMPORTED_MODULE_1__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());

var canonicalStringify = Object.assign(function (value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap ? WeakMap : Map)();
}
//# sourceMappingURL=object-canon.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/policies.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Policies": () => (/* binding */ Policies)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");







_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getStoreKeyName.setStringify(_object_canon_js__WEBPACK_IMPORTED_MODULE_3__.canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.argumentsObjectFromField)(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ dataIdFromObject: _helpers_js__WEBPACK_IMPORTED_MODULE_5__.defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
        var typename = selectionSet && fragmentMap
            ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getTypenameFromResult)(object, selectionSet, fragmentMap)
            : object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var context = {
            typename: typename,
            selectionSet: selectionSet,
            fragmentMap: fragmentMap,
        };
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!old || old === which, "Cannot change root " + which + " __typename more than once") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!old || old === which, 2);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(_helpers_js__WEBPACK_IMPORTED_MODULE_5__.TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Inferring subtype " + typename + " of supertype " + supertype);
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.selectionSetMatchesResult)(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.storeKeyNameFromField)(fieldSpec.field, fieldSpec.variables)
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getStoreKeyName)(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__.cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function (fieldNameOrOptions, from) {
            var options;
            if (typeof fieldNameOrOptions === "string") {
                options = {
                    fieldName: fieldNameOrOptions,
                    from: arguments.length > 1 ? from : objectOrReference,
                };
            }
            else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isNonNullObject)(fieldNameOrOptions)) {
                options = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, fieldNameOrOptions);
                if (!_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(fieldNameOrOptions, "from")) {
                    options.from = objectOrReference;
                }
            }
            else {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Unexpected readField arguments: " + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.stringifyForDisplay)(Array.from(arguments)));
                return;
            }
            if (__DEV__ && options.from === void 0) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Undefined 'from' passed to readField with arguments " + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.stringifyForDisplay)(Array.from(arguments)));
            }
            if (void 0 === options.variables) {
                options.variables = variables;
            }
            return policies.readField(options, context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (Array.isArray(existing) || Array.isArray(incoming)) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Cannot automatically merge arrays") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(3);
        }
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isNonNullObject)(existing) &&
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isNonNullObject)(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(existing) &&
                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(incoming)) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, existing), incoming);
            }
        }
        return incoming;
    };
}
function keyArgsFnFromSpecifier(specifier) {
    return function (args, context) {
        return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
    };
}
function keyFieldsFnFromSpecifier(specifier) {
    var trie = new _wry_trie__WEBPACK_IMPORTED_MODULE_1__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.canUseWeakMap);
    return function (object, context) {
        var aliasMap;
        if (context.selectionSet && context.fragmentMap) {
            var info = trie.lookupArray([
                context.selectionSet,
                context.fragmentMap,
            ]);
            aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
        }
        var keyObject = context.keyObject =
            computeKeyObject(object, specifier, true, aliasMap);
        return context.typename + ":" + JSON.stringify(keyObject);
    };
}
function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function (selectionSet) {
        selectionSet.selections.forEach(function (selection) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isField)(selection)) {
                if (selection.alias) {
                    var responseKey = selection.alias.value;
                    var storeKey = selection.name.value;
                    if (storeKey !== responseKey) {
                        var aliases = map.aliases || (map.aliases = Object.create(null));
                        aliases[storeKey] = responseKey;
                    }
                }
                if (selection.selectionSet) {
                    var subsets = map.subsets || (map.subsets = Object.create(null));
                    subsets[selection.name.value] =
                        makeAliasMap(selection.selectionSet, fragmentMap);
                }
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.getFragmentFromSelection)(selection, fragmentMap);
                if (fragment) {
                    workQueue.add(fragment.selectionSet);
                }
            }
        });
    });
    return map;
}
function computeKeyObject(response, specifier, strict, aliasMap) {
    var keyObj = Object.create(null);
    var lastResponseKey;
    var lastActualKey;
    specifier.forEach(function (s) {
        if (Array.isArray(s)) {
            if (typeof lastActualKey === "string" &&
                typeof lastResponseKey === "string") {
                var subsets = aliasMap && aliasMap.subsets;
                var subset = subsets && subsets[lastActualKey];
                keyObj[lastActualKey] =
                    computeKeyObject(response[lastResponseKey], s, strict, subset);
            }
        }
        else {
            var aliases = aliasMap && aliasMap.aliases;
            var responseName = aliases && aliases[s] || s;
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(response, responseName)) {
                keyObj[lastActualKey = s] = response[lastResponseKey = responseName];
            }
            else {
                __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!strict, "Missing field '" + responseName + "' while computing key fields") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!strict, 4);
                lastResponseKey = lastActualKey = void 0;
            }
        }
    });
    return keyObj;
}
//# sourceMappingURL=policies.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheSlot": () => (/* binding */ cacheSlot),
/* harmony export */   "forgetCache": () => (/* binding */ forgetCache),
/* harmony export */   "recallCache": () => (/* binding */ recallCache),
/* harmony export */   "makeVar": () => (/* binding */ makeVar)
/* harmony export */ });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");


var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: (0,optimism__WEBPACK_IMPORTED_MODULE_0__.dep)(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}
//# sourceMappingURL=reactiveVars.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/readFromStore.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreReader": () => (/* binding */ StoreReader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");








;
function missingFromInvariant(err, context) {
    return new _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__.MissingFieldError(err.message, context.path.slice(), context.query, context.variables);
}
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.canUseWeakMap ? WeakMap : Map)();
        this.config = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.compact)(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.shouldCanonizeResults)(config),
        });
        this.canon = config.canon || new _object_canon_js__WEBPACK_IMPORTED_MODULE_6__.ObjectCanon;
        this.executeSelectionSet = (0,optimism__WEBPACK_IMPORTED_MODULE_1__.wrap)(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_8__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_8__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(selectionSet, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = (0,optimism__WEBPACK_IMPORTED_MODULE_1__.wrap)(function (options) {
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_8__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_8__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new _object_canon_js__WEBPACK_IMPORTED_MODULE_6__.ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.getQueryDefinition)(query))), variables);
        var rootRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.makeReference)(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.getMainDefinition)(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_6__.canonicalStringify)(variables),
                canonizeResults: canonizeResults,
                fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.createFragmentMap)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.getFragmentDefinitions)(query)),
                path: [],
            },
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            throw execResult.missing[0];
        }
        return {
            result: execResult.result,
            missing: execResult.missing,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_8__.supportsResultCaching)(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: [missingFromInvariant(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Dangling reference to missing " + objectOrReference.__ref + " object") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(5), context)],
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var objectsToMerge = [];
        var finalResult = { result: null };
        var typename = store.getFieldValue(objectOrReference, "__typename");
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function getMissing() {
            return finalResult.missing || (finalResult.missing = []);
        }
        function handleMissing(result) {
            var _a;
            if (result.missing)
                (_a = getMissing()).push.apply(_a, result.missing);
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_12__.shouldInclude)(selection, variables))
                return;
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isField)(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.resultKeyNameFromField)(selection);
                context.path.push(resultName);
                if (fieldValue === void 0) {
                    if (!_utilities_index_js__WEBPACK_IMPORTED_MODULE_13__.addTypenameToDocument.added(selection)) {
                        getMissing().push(missingFromInvariant(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Can't find field '" + selection.name.value + "' on " + ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(objectOrReference)
                            ? objectOrReference.__ref + " object"
                            : "object " + JSON.stringify(objectOrReference, null, 2))) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(6), context));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }));
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }));
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
                }
                (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.path.pop() === resultName);
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.getFragmentFromSelection)(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var merged = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_14__.mergeDeepArray)(objectsToMerge);
        finalResult.result = context.canonizeResults
            ? this.canon.admit(merged)
            : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_15__.maybeDeepFreeze)(merged);
        this.knownResults.set(finalResult.result, selectionSet);
        return finalResult;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.path.pop() === i);
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            context.path.push(i);
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.path.pop() === i);
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());

function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_16__.isNonNullObject)(value)) {
                __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(value), "Missing selection set for object of type " + (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.getTypenameFromStoreObject)(store, value) + " returned for query field " + field.name.value) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.isReference)(value), 7);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/writeToStore.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreWriter": () => (/* binding */ StoreWriter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");






;
var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getOperationDefinition)(query);
        var merger = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.makeProcessedFieldsMerger)();
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultValues)(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_5__.canonicalStringify)(variables),
            fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.createFragmentMap)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentDefinitions)(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(ref)) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Could not identify object " + JSON.stringify(result)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(8);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var fields = _a.fields, mergeTree = _a.mergeTree, selections = _a.selections;
            var entityRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.makeReference)(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, fields, context);
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(applied)) {
                    return;
                }
                fields = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1.has((0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.fieldNameFromStoreName)(storeFieldName));
                };
                var fieldsWithSelectionSets_1 = new Set();
                selections.forEach(function (selection) {
                    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isField)(selection) && selection.selectionSet) {
                        fieldsWithSelectionSets_1.add(selection.name.value);
                    }
                });
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(fields).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, fields, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, fields);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var _b = policies.identify(result, selectionSet, context.fragmentMap), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if ("string" === typeof dataId) {
            var sets = context.written[dataId] || (context.written[dataId] = []);
            var ref = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.makeReference)(dataId);
            if (sets.indexOf(selectionSet) >= 0)
                return ref;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
                return ref;
            }
        }
        var incomingFields = Object.create(null);
        if (keyObject) {
            incomingFields = context.merge(incomingFields, keyObject);
        }
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.getTypenameFromResult)(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incomingFields.__typename = typename;
        }
        var selections = new Set(selectionSet.selections);
        selections.forEach(function (selection) {
            var _a;
            if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.shouldInclude)(selection, context.variables))
                return;
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isField)(selection)) {
                var resultFieldKey = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.resultKeyNameFromField)(selection);
                var value = result[resultFieldKey];
                var wasClientOnly = context.clientOnly;
                context.clientOnly = wasClientOnly || !!(selection.directives &&
                    selection.directives.some(function (d) { return d.name.value === "client"; }));
                if (value !== void 0) {
                    var storeFieldName = policies.getStoreFieldName({
                        typename: typename,
                        fieldName: selection.name.value,
                        field: selection,
                        variables: context.variables,
                    });
                    var childTree = getChildMergeTree(mergeTree, storeFieldName);
                    var incomingValue = _this.processFieldValue(value, selection, context, childTree);
                    var childTypename = void 0;
                    if (selection.selectionSet) {
                        childTypename = context.store.getFieldValue(incomingValue, "__typename");
                        if (!childTypename && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(incomingValue)) {
                            var info = context.incomingById.get(incomingValue.__ref);
                            childTypename = info && info.fields.__typename;
                        }
                    }
                    var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);
                    if (merge) {
                        childTree.info = {
                            field: selection,
                            typename: typename,
                            merge: merge,
                        };
                    }
                    else {
                        maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                    }
                    incomingFields = context.merge(incomingFields, (_a = {},
                        _a[storeFieldName] = incomingValue,
                        _a));
                }
                else if (!context.clientOnly &&
                    !_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.addTypenameToDocument.added(selection)) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error(("Missing field '" + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.resultKeyNameFromField)(selection) + "' while writing result " + JSON.stringify(result, null, 2)).substring(0, 1000));
                }
                context.clientOnly = wasClientOnly;
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getFragmentFromSelection)(selection, context.fragmentMap);
                if (fragment &&
                    policies.fragmentMatches(fragment, typename, result, context.variables)) {
                    fragment.selectionSet.selections.forEach(selections.add, selections);
                }
            }
        });
        if ("string" === typeof dataId) {
            var previous = context.incomingById.get(dataId);
            if (previous) {
                previous.fields = context.merge(previous.fields, incomingFields);
                previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
                previous.selections.forEach(selections.add, selections);
                previous.selections = selections;
            }
            else {
                context.incomingById.set(dataId, {
                    fields: incomingFields,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    selections: selections,
                });
            }
            return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.makeReference)(dataId);
        }
        return incomingFields;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.cloneDeep)(value) : value;
        }
        if (Array.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(incoming)) {
            var e_1 = (!Array.isArray(incoming) &&
                ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(existing) || (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.storeValueIsStoreObject)(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return Array.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (Array.isArray(i_1) ? i_1.slice(0) : (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());

var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.isReference)(existing))
        return;
    if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.fieldNameFromStoreName)(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ApolloClient.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/ApolloClient.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeOptions": () => (/* binding */ mergeOptions),
/* harmony export */   "ApolloClient": () => (/* binding */ ApolloClient)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../version.js */ "./node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony import */ var _QueryManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QueryManager.js */ "./node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");








var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.compact)(defaults, options, options.variables && {
        variables: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, defaults.variables), options.variables),
    });
}
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new _link_http_index_js__WEBPACK_IMPORTED_MODULE_3__.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : _link_core_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(9);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_5__.version;
        this.localState = new _LocalState_js__WEBPACK_IMPORTED_MODULE_6__.LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new _QueryManager_js__WEBPACK_IMPORTED_MODULE_7__.QueryManager({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 10);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_8__.execute)(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error " + error);
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/LocalState.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/LocalState.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalState": () => (/* binding */ LocalState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");





var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.hasDirectives)(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.removeClientSetsFromDocument)(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables), data.exportedVariables)); })];
                }
                return [2, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql__WEBPACK_IMPORTED_MODULE_5__.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.buildQueryFromSelectionSet)(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                mainDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getMainDefinition)(document);
                fragments = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.getFragmentDefinitions)(document);
                fragmentMap = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.createFragmentMap)(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.shouldInclude)(selection, variables)) {
                            return [2];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isField)(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.resultKeyNameFromField)(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.isInlineFragment)(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named " + selection.name.value) : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 11);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeepArray)(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.resultKeyNameFromField)(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(_cache_index_js__WEBPACK_IMPORTED_MODULE_9__.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.argumentsObjectFromField)(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

//# sourceMappingURL=LocalState.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/core/ObservableQuery.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservableQuery": () => (/* binding */ ObservableQuery),
/* harmony export */   "logMissingFieldErrors": () => (/* binding */ logMissingFieldErrors),
/* harmony export */   "applyNextFetchPolicy": () => (/* binding */ applyNextFetchPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");





var assign = Object.assign, hasOwnProperty = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getOperationDefinition)(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
        var result = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, lastResult), { loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        var shouldReturnCachedData = lastResult || (fetchPolicy !== 'network-only' &&
            fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'standby');
        if (shouldReturnCachedData &&
            !this.queryManager.transform(this.options.query).hasForcedResolvers) {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                if (result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
                    result.loading = false;
                }
                delete result.partial;
            }
            else if (fetchPolicy !== "no-cache") {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !this.last || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.last.result, newResult);
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || (0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else if (fetchPolicy !== 'cache-and-network') {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty.call(variables, "variables")) {
            var queryDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getQueryDefinition)(this.options.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Called refetch(" + JSON.stringify(variables) + ") for query " + (((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef)) + ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?");
            }
        }
        if (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (fetchMoreOptions.query ? fetchMoreOptions : (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options), fetchMoreOptions), { variables: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if (__DEV__ &&
                    !warnedAboutUpdateQuery) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.initialFetchPolicy,
            variables: variables,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 'Attempted to start a polling query without a polling interval.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 12);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!(0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
            ;
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(newResult), variables: variables });
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.isNonEmptyArray)(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var options = useDisposableConcast
            ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.compact)(this.options, newOptions)
            : assign(this.options, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_7__.compact)(newOptions));
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !newOptions.fetchPolicy &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(newOptions.variables, oldVariables)) {
                options.fetchPolicy = this.initialFetchPolicy;
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer, true);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        if (this.getLastError() || this.isDifferentFromLastResult(result)) {
            this.updateLastResult(result, variables);
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.iterateObserversSafely)(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_8__.iterateObserversSafely)(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.Observable));

(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.fixObservableSubclass)(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.isNonEmptyArray)(missing)) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("Missing cache result fields: " + missing.map(function (m) { return m.path.join('.'); }).join(', '), missing);
    }
}
function applyNextFetchPolicy(options) {
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) {
        options.fetchPolicy = typeof nextFetchPolicy === "function"
            ? nextFetchPolicy.call(options, fetchPolicy)
            : nextFetchPolicy;
    }
}
//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryInfo.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryInfo": () => (/* binding */ QueryInfo),
/* harmony export */   "shouldWriteResult": () => (/* binding */ shouldWriteResult)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");




;
var destructiveMethodCounts = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.variables, query.variables)) {
            networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.setVariables;
        }
        if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                if (_this.getDiff().fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    oq.reobserve();
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if ((0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.isNetworkRequestInFlight)(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(variables, lastWrite.variables) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isNonEmptyArray)(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());

function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.graphQLResultHasError)(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}
//# sourceMappingURL=QueryInfo.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryManager.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryManager": () => (/* binding */ QueryManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QueryInfo.js */ "./node_modules/@apollo/client/core/QueryInfo.js");











var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_3__.LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('QueryManager stopped while query was in flight') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(13));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, _e = _a.fetchPolicy, fetchPolicy = _e === void 0 ? 'network-only' : _e, keepRootFields = _a.keepRootFields, context = _a.context;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 14);
                        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 15);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_f.sent());
                        _f.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(self.getObservableFromLink(mutation, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(result) && errorPolicy === 'none') {
                                        throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                                            graphQLErrors: result.errors,
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError ? err : new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && (0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.shouldWriteResult)(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getOperationName)(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result), { data: diff.result });
                            }
                        }
                        update(cache, result, {
                            context: mutation.context,
                            variables: mutation.variables,
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.removeConnectionDirectiveFromDocument)(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.hasClientExports)(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getOperationDefinition)(transformed)),
                asQuery: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo(this);
        var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_12__.ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 16);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 17);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 18);
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 19);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Store reset while query was in flight (not completed in link chain)') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(20));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_14__.isDocumentNode)(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_15__.isNonNullObject)(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_16__.makeUniqueId)("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_12__.ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { fetchPolicy: "network-only" }),
                });
                (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Unknown query " + (typeof nameOrDoc === "string" ? "named " : "") + JSON.stringify(nameOrDoc, null, 2) + " requested in refetchQueries options.include array");
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if ((0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.shouldWriteResult)(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__.graphQLResultHasError)(result)) {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_9__.getOperationName)(serverQuery) || void 0,
                context: this.prepareContext((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = (0,_cache_index_js__WEBPACK_IMPORTED_MODULE_18__.canonicalStringify)(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Concast([
                        (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_20__.execute)(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Concast([
                    (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_20__.execute)(link, operation)
                ]);
            }
        }
        else {
            observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Concast([
                _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__.asyncMap)(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_21__.isNonEmptyArray)(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = (0,_errors_index_js__WEBPACK_IMPORTED_MODULE_7__.isApolloError)(networkError)
                ? networkError
                : new _errors_index_js__WEBPACK_IMPORTED_MODULE_7__.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_19__.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () {
            _this.fetchCancelFns.delete(queryId);
            (0,_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_12__.applyNextFetchPolicy)(options);
        });
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_16__.makeUniqueId)("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return false;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(data, {})) {
                (0,_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_12__.logMissingFieldErrors)(diff.missing);
            }
            var fromData = function (data) { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_17__.Observable.of((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ data: data, loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_13__.isNetworkRequestInFlight)(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_8__.QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/core/networkStatus.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkStatus": () => (/* binding */ NetworkStatus),
/* harmony export */   "isNetworkRequestInFlight": () => (/* binding */ isNetworkRequestInFlight)
/* harmony export */ });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/errors/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/errors/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isApolloError": () => (/* binding */ isApolloError),
/* harmony export */   "ApolloError": () => (/* binding */ ApolloError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");



function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.graphQLErrors) || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/ApolloLink.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloLink": () => (/* binding */ ApolloLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/transformOperation.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/validateOperation.js");




function passthrough(op, forward) {
    return (forward ? forward(op) : _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.createOperation)(operation.context, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.transformOperation)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.validateOperation)(operation)))) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
                }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('request is not implemented') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(21);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

//# sourceMappingURL=ApolloLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/execute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/execute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ execute)
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.execute;
//# sourceMappingURL=execute.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/HttpLink.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLink": () => (/* binding */ HttpLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");



var HttpLink = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, (0,_createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloLink));

//# sourceMappingURL=HttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/checkFetcher.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFetcher": () => (/* binding */ checkFetcher)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(22);
    }
};
//# sourceMappingURL=checkFetcher.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createHttpLink.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHttpLink": () => (/* binding */ createHttpLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/fromError.js");














var backupFetch = (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _b = linkOptions.includeUnusedVariables, includeUnusedVariables = _b === void 0 ? false : _b, requestOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        (0,_checkFetcher_js__WEBPACK_IMPORTED_MODULE_2__.checkFetcher)(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new _core_index_js__WEBPACK_IMPORTED_MODULE_3__.ApolloLink(function (operation) {
        var chosenURI = (0,_selectURI_js__WEBPACK_IMPORTED_MODULE_4__.selectURI)(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = (0,_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_5__.selectHttpOptionsAndBody)(operation, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_5__.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            (0,graphql__WEBPACK_IMPORTED_MODULE_6__.visit)(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = (0,_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_7__.createSignalIfSupported)(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = (0,_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__.rewriteURIForGET)(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.fromError)(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_10__.serializeFetchParameter)(body, 'Payload');
            }
            catch (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.fromError)(parseError);
            }
        }
        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.Observable(function (observer) {
            var currentFetch = preferredFetch || (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then((0,_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_12__.parseAndCheckHttpResponse)(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
//# sourceMappingURL=createHttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createSignalIfSupported.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSignalIfSupported": () => (/* binding */ createSignalIfSupported)
/* harmony export */ });
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
//# sourceMappingURL=createSignalIfSupported.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAndCheckHttpResponse": () => (/* binding */ parseAndCheckHttpResponse)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.throwServerError)(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.throwServerError)(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }); };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/rewriteURIForGET.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rewriteURIForGET": () => (/* binding */ rewriteURIForGET)
/* harmony export */ });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
//# sourceMappingURL=rewriteURIForGET.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fallbackHttpConfig": () => (/* binding */ fallbackHttpConfig),
/* harmony export */   "selectHttpOptionsAndBody": () => (/* binding */ selectHttpOptionsAndBody)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/printer.mjs");


var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), config.options), { headers: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.print)(query);
    return {
        options: options,
        body: body,
    };
};
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectURI.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectURI": () => (/* binding */ selectURI)
/* harmony export */ });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};
//# sourceMappingURL=selectURI.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/serializeFetchParameter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeFetchParameter": () => (/* binding */ serializeFetchParameter)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Network request failed. " + label + " is not serializable: " + e.message) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(23);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/createOperation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOperation": () => (/* binding */ createOperation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");

function createOperation(starting, operation) {
    var context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next(context));
        }
        else {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next);
        }
    };
    var getContext = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}
//# sourceMappingURL=createOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromError.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromError": () => (/* binding */ fromError)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/zen-observable-ts/module.js");

function fromError(errorValue) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        observer.error(errorValue);
    });
}
//# sourceMappingURL=fromError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/throwServerError.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwServerError": () => (/* binding */ throwServerError)
/* harmony export */ });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
//# sourceMappingURL=throwServerError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/transformOperation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformOperation": () => (/* binding */ transformOperation)
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.getOperationName)(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}
//# sourceMappingURL=transformOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/validateOperation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateOperation": () => (/* binding */ validateOperation)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("illegal argument: " + key) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(26);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApolloContext": () => (/* binding */ getApolloContext),
/* harmony export */   "resetApolloContext": () => (/* binding */ getApolloContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");


var contextKey = _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = react__WEBPACK_IMPORTED_MODULE_0__.createContext[contextKey];
    if (!context) {
        Object.defineProperty(react__WEBPACK_IMPORTED_MODULE_0__.createContext, contextKey, {
            value: context = react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

//# sourceMappingURL=ApolloContext.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloProvider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloProvider": () => (/* binding */ ApolloProvider)
/* harmony export */ });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = (0,_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)();
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : (0,_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(context.client, 28);
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(ApolloContext.Provider, { value: context }, children));
    });
};
//# sourceMappingURL=ApolloProvider.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/arrays.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNonEmptyArray": () => (/* binding */ isNonEmptyArray)
/* harmony export */ });
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/canUse.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseWeakMap": () => (/* binding */ canUseWeakMap),
/* harmony export */   "canUseWeakSet": () => (/* binding */ canUseWeakSet),
/* harmony export */   "canUseSymbol": () => (/* binding */ canUseSymbol)
/* harmony export */ });
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
//# sourceMappingURL=canUse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/cloneDeep.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep)
/* harmony export */ });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/compact.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/compact.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": () => (/* binding */ compact)
/* harmony export */ });
function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}
//# sourceMappingURL=compact.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/errorHandling.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphQLResultHasError": () => (/* binding */ graphQLResultHasError)
/* harmony export */ });
function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/filterInPlace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/filterInPlace.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterInPlace": () => (/* binding */ filterInPlace)
/* harmony export */ });
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}
//# sourceMappingURL=filterInPlace.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/makeUniqueId.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUniqueId": () => (/* binding */ makeUniqueId)
/* harmony export */ });
var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return prefix + ":" + count + ":" + Math.random().toString(36).slice(2);
}
//# sourceMappingURL=makeUniqueId.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeDeepFreeze": () => (/* binding */ maybeDeepFreeze)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeDeep.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep),
/* harmony export */   "mergeDeepArray": () => (/* binding */ mergeDeepArray),
/* harmony export */   "DeepMerger": () => (/* binding */ DeepMerger)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = _objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(source) && (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(value) && !this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());

//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/objects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/objects.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNonNullObject": () => (/* binding */ isNonNullObject)
/* harmony export */ });
function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyForDisplay": () => (/* binding */ stringifyForDisplay)
/* harmony export */ });
/* harmony import */ var _makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");

function stringifyForDisplay(value) {
    var undefId = (0,_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__.makeUniqueId)("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}
//# sourceMappingURL=stringifyForDisplay.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/DEV.js":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/DEV.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");


var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(_global_js__WEBPACK_IMPORTED_MODULE_0__.default, GLOBAL_KEY, {
            value: (0,_maybe_js__WEBPACK_IMPORTED_MODULE_1__.maybe)(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return _global_js__WEBPACK_IMPORTED_MODULE_0__.default[GLOBAL_KEY];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDEV());
//# sourceMappingURL=DEV.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/fix-graphql.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTemporaryGlobals": () => (/* binding */ removeTemporaryGlobals)
/* harmony export */ });
/* harmony import */ var ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant/process */ "./node_modules/ts-invariant/process/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/source.mjs");


function removeTemporaryGlobals() {
    return typeof graphql__WEBPACK_IMPORTED_MODULE_1__.Source === "function" ? (0,ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__.remove)() : (0,ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__.remove)();
}
//# sourceMappingURL=fix-graphql.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/global.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return globalThis; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return window; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return self; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return global; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return Function("return this")(); }));
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": () => (/* reexport safe */ _DEV_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "checkDEV": () => (/* binding */ checkDEV),
/* harmony export */   "maybe": () => (/* reexport safe */ _maybe_js__WEBPACK_IMPORTED_MODULE_3__.maybe),
/* harmony export */   "global": () => (/* reexport safe */ _global_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "invariant": () => (/* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant),
/* harmony export */   "InvariantError": () => (/* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError)
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _DEV_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DEV.js */ "./node_modules/@apollo/client/utilities/globals/DEV.js");
/* harmony import */ var _fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fix-graphql.js */ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");



function checkDEV() {
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__.default, _DEV_js__WEBPACK_IMPORTED_MODULE_1__.default) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__.default, 38);
}

(0,_fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__.removeTemporaryGlobals)();



checkDEV();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/maybe.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/maybe.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybe": () => (/* binding */ maybe)
/* harmony export */ });
function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}
//# sourceMappingURL=maybe.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/directives.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldInclude": () => (/* binding */ shouldInclude),
/* harmony export */   "getDirectiveNames": () => (/* binding */ getDirectiveNames),
/* harmony export */   "hasDirectives": () => (/* binding */ hasDirectives),
/* harmony export */   "hasClientExports": () => (/* binding */ hasClientExports),
/* harmony export */   "getInclusionDirectives": () => (/* binding */ getInclusionDirectives)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");


function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, 39);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__.visit)(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, 40);
            var ifArgument = directiveArguments[0];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', 41);
            var ifValue = ifArgument.value;
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 42);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/fragments.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFragmentQueryDocument": () => (/* binding */ getFragmentQueryDocument),
/* harmony export */   "createFragmentMap": () => (/* binding */ createFragmentMap),
/* harmony export */   "getFragmentFromSelection": () => (/* binding */ getFragmentFromSelection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");


function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(43);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, 44);
        actualFragmentName = fragments[0].name.value;
    }
    var query = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, document), { definitions: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named " + selection.name.value + ".") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 45);
            return fragment;
        }
        default:
            return null;
    }
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/getFromAST.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDocument": () => (/* binding */ checkDocument),
/* harmony export */   "getOperationDefinition": () => (/* binding */ getOperationDefinition),
/* harmony export */   "getOperationName": () => (/* binding */ getOperationName),
/* harmony export */   "getFragmentDefinitions": () => (/* binding */ getFragmentDefinitions),
/* harmony export */   "getQueryDefinition": () => (/* binding */ getQueryDefinition),
/* harmony export */   "getFragmentDefinition": () => (/* binding */ getFragmentDefinition),
/* harmony export */   "getMainDefinition": () => (/* binding */ getMainDefinition),
/* harmony export */   "getDefaultValues": () => (/* binding */ getDefaultValues)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");


function checkDocument(doc) {
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', 46);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"") : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(47);
        }
        return definition;
    });
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, 48);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 49);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', 50);
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 51);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : (0,_globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 52);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(53);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__.valueToObjectRepresentation)(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/storeUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeReference": () => (/* binding */ makeReference),
/* harmony export */   "isReference": () => (/* binding */ isReference),
/* harmony export */   "isDocumentNode": () => (/* binding */ isDocumentNode),
/* harmony export */   "valueToObjectRepresentation": () => (/* binding */ valueToObjectRepresentation),
/* harmony export */   "storeKeyNameFromField": () => (/* binding */ storeKeyNameFromField),
/* harmony export */   "getStoreKeyName": () => (/* binding */ getStoreKeyName),
/* harmony export */   "argumentsObjectFromField": () => (/* binding */ argumentsObjectFromField),
/* harmony export */   "resultKeyNameFromField": () => (/* binding */ resultKeyNameFromField),
/* harmony export */   "getTypenameFromResult": () => (/* binding */ getTypenameFromResult),
/* harmony export */   "isField": () => (/* binding */ isField),
/* harmony export */   "isInlineFragment": () => (/* binding */ isInlineFragment)
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.InvariantError(54);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return directives['connection']['key'] + "(" + stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, (0,_fragments_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentFromSelection)(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/transform.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDirectivesFromDocument": () => (/* binding */ removeDirectivesFromDocument),
/* harmony export */   "addTypenameToDocument": () => (/* binding */ addTypenameToDocument),
/* harmony export */   "removeConnectionDirectiveFromDocument": () => (/* binding */ removeConnectionDirectiveFromDocument),
/* harmony export */   "removeArgumentsFromDocument": () => (/* binding */ removeArgumentsFromDocument),
/* harmony export */   "removeFragmentSpreadFromDocument": () => (/* binding */ removeFragmentSpreadFromDocument),
/* harmony export */   "buildQueryFromSelectionSet": () => (/* binding */ buildQueryFromSelectionSet),
/* harmony export */   "removeClientSetsFromDocument": () => (/* binding */ removeClientSetsFromDocument)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/filterInPlace.js */ "./node_modules/@apollo/client/utilities/common/filterInPlace.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");







var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getOperationDefinition)(doc) || (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentDefinition)(doc), (0,_fragments_js__WEBPACK_IMPORTED_MODULE_2__.createFragmentMap)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentDefinitions)(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        (0,_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__.filterInPlace)(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        (0,_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__.filterInPlace)(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { selections: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && _globals_index_js__WEBPACK_IMPORTED_MODULE_0__.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (!!selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!(0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if (((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) || (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isInlineFragment)(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getMainDefinition)(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(document, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Concast.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Concast": () => (/* binding */ Concast)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");




function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.error(new Error("Observable cancelled prematurely"));
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable));

(0,_subclassing_js__WEBPACK_IMPORTED_MODULE_3__.fixObservableSubclass)(Concast);
//# sourceMappingURL=Concast.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/asyncMap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncMap": () => (/* binding */ asyncMap)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");

function asyncMap(observable, mapFn, catchFn) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}
//# sourceMappingURL=asyncMap.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
/*!************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/iteration.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iterateObserversSafely": () => (/* binding */ iterateObserversSafely)
/* harmony export */ });
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
//# sourceMappingURL=iteration.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/subclassing.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/subclassing.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixObservableSubclass": () => (/* binding */ fixObservableSubclass)
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");


function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable });
    }
    if (_common_canUse_js__WEBPACK_IMPORTED_MODULE_1__.canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}
//# sourceMappingURL=subclassing.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/version.js":
/*!************************************************!*\
  !*** ./node_modules/@apollo/client/version.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
var version = '3.4.17';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/history.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate),
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/@wry/context/lib/context.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@wry/context/lib/context.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slot": () => (/* binding */ Slot),
/* harmony export */   "asyncFromGen": () => (/* binding */ asyncFromGen),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "noContext": () => (/* binding */ noContext),
/* harmony export */   "setTimeout": () => (/* binding */ setTimeoutWithContext),
/* harmony export */   "wrapYieldingFiberMethods": () => (/* binding */ wrapYieldingFiberMethods)
/* harmony export */ });
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function () {
    var Slot = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot,
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }
    finally {
        return Slot;
    }
}();

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}


//# sourceMappingURL=context.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@wry/equality/lib/equality.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ equal),
/* harmony export */   "equal": () => (/* binding */ equal)
/* harmony export */ });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            var len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}


//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/trie/lib/trie.esm.js":
/*!************************************************!*\
  !*** ./node_modules/@wry/trie/lib/trie.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trie": () => (/* binding */ Trie)
/* harmony export */ });
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function () { return Object.create(null); };
// Useful for processing arguments objects as well as arrays.
var _a = Array.prototype, forEach = _a.forEach, slice = _a.slice;
var Trie = /** @class */ (function () {
    function Trie(weakness, makeData) {
        if (weakness === void 0) { weakness = true; }
        if (makeData === void 0) { makeData = defaultMakeData; }
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    Trie.prototype.lookupArray = function (array) {
        var node = this;
        forEach.call(array, function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    };
    return Trie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}


//# sourceMappingURL=trie.esm.js.map


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

var _utils = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;
var _excluded = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var newPathName = (0, _parsePath.parsePath)(rewrittenPath).pathname; // Prefech is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      ___loader.enqueue(newPathName);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        _this2._prefetch();
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(prefixedTo).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRunner": () => (/* binding */ apiRunner),
/* harmony export */   "apiRunnerAsync": () => (/* binding */ apiRunnerAsync)
/* harmony export */ });
var plugins = [{
  name: 'gatsby-plugin-apollo',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-apollo/gatsby-ssr */ "./node_modules/gatsby-plugin-apollo/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "uri": "http://localhost:4000/"
  }
}, {
  name: 'gatsby-plugin-gtag',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-gtag/gatsby-ssr */ "./node_modules/gatsby-plugin-gtag/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "G-5NX75K2JR0",
    "head": true,
    "anonymize": true
  }
}, {
  name: 'gatsby-plugin-styled-components',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-styled-components/gatsby-ssr */ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "displayName": true,
    "fileName": true,
    "minify": true,
    "namespace": "",
    "transpileTemplateLiterals": true,
    "topLevelImportPaths": [],
    "pure": false
  }
}, {
  name: 'gatsby-plugin-react-helmet',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  name: 'gatsby-plugin-sitemap',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "output": "/sitemap",
    "createLinkInHead": true,
    "entryLimit": 45000,
    "query": "{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }",
    "excludes": []
  }
}, {
  name: 'gatsby-plugin-manifest',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "icon": "src/images/icon.png",
    "legacy": true,
    "theme_color_in_head": true,
    "cache_busting_mode": "query",
    "crossOrigin": "anonymous",
    "include_favicon": true,
    "cacheDigest": "57fea057a0f0659ee6d6e5502ef48ace"
  }
}, {
  name: 'default-site-plugin',
  plugin: __webpack_require__(/*! ./gatsby-ssr */ "./gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}];
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`;
  }

  throw err;
}

function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  const results = [];
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api];

    if (!apiFn) {
      return;
    }

    try {
      const result = apiFn(args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      } // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4


      if (typeof result !== `undefined`) {
        results.push(result);
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e);
    }
  });
  return results.length ? results : [defaultReturn];
}
async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  const results = [];

  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api];

    if (!apiFn) {
      continue;
    }

    try {
      const result = await apiFn(args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      } // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4


      if (typeof result !== `undefined`) {
        results.push(result);
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e);
    }
  }

  return results.length ? results : [defaultReturn];
}

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", props.htmlAttributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: `body`,
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  headComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  preBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  postBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  const pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__.default)(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0] // Remove search query
  .split(`?`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__.default)(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__.default)(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withPrefix),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.navigate),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.useScrollRestoration),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__.default.enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults)
/* harmony export */ });
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");



/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = path => {
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json`;
};

function doFetch(url, method = `GET`) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404 page and it doesn't exist, we're done
        if (pagePath === `/404.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return Object.assign(loadObj, {
          status: PageResourceStatus.Error
        });
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {};
      const componentChunkPromise = this.loadComponent(componentChunkName).then(component => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = { ...pageResources,
            staticQueryResults
          };
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_1__.default.emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return false;
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner(`onPrefetchPathname`, {
        pathname: pagePath
      });
      this.prefetchTriggered.add(pagePath);
    } // If a plugin has disabled core prefetching, stop now.


    if (this.prefetchDisabled) {
      return false;
    }

    const realPath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(pagePath); // Todo make doPrefetch logic cacheable
    // eslint-disable-next-line consistent-return

    this.doPrefetch(realPath).then(() => {
      if (!this.prefetchCompleted.has(pagePath)) {
        this.apiRunner(`onPostPrefetchPathname`, {
          pathname: pagePath
        });
        this.prefetchCompleted.add(pagePath);
      }
    });
    return true;
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_0__.default)(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_2__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_0__.default)).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path => {
  if (path === undefined) {
    return path;
  }

  if (path === `/`) {
    return `/`;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1);
  }

  return path;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/react-lifecycles-compat.js":
/*!*******************************************!*\
  !*** ./.cache/react-lifecycles-compat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.polyfill = Component => Component;

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./gatsby-ssr.js":
/*!***********************!*\
  !*** ./gatsby-ssr.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

exports.onRenderBody = ({
  setPreBodyComponents
}) => {
  setPreBodyComponents([React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
          (() => {    
            window.__onThemeChange = function() {};      

            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;
              document.body.dataset.theme = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            let preferredTheme

            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)

              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

            darkQuery.addEventListener('change', e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
          })()
        `
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-apollo/gatsby-browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/gatsby-plugin-apollo/gatsby-browser.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapRootElement": () => (/* binding */ wrapRootElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-node.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");



const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(); // eslint-disable-next-line react/prop-types

const wrapRootElement = ({
  element
}, {
  uri,
  headers,
  credentials
}) => {
  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
    fetch: (isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()),
    uri,
    headers,
    credentials,
    cache
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
    client: client
  }, element);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-apollo/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-apollo/gatsby-ssr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapRootElement": () => (/* reexport safe */ _gatsby_browser__WEBPACK_IMPORTED_MODULE_0__.wrapRootElement)
/* harmony export */ });
/* harmony import */ var _gatsby_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gatsby-browser */ "./node_modules/gatsby-plugin-apollo/gatsby-browser.js");


/***/ }),

/***/ "./node_modules/gatsby-plugin-gtag/gatsby-ssr.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-gtag/gatsby-ssr.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var GTAG_SRC = 'https://www.googletagmanager.com/gtag/js';

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;
  var isPluginEnabled = stringToBool(({}).GATSBY_GTAG_DEBUG) || "development" === 'production';

  if (!pluginOptions.trackingId || !isPluginEnabled) {
    return null;
  }

  var anonymize = pluginOptions.anonymize || false;

  var gtagScript = _react2.default.createElement('script', {
    async: true,
    key: 'gatsby-plugin-gtag-gtag-js',
    src: GTAG_SRC + '?id=' + pluginOptions.trackingId
  });

  var scriptStr = '\n    window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID = (\n      \'' + pluginOptions.trackingId + '\'\n    );\n    window.GATSBY_GTAG_PLUGIN_ANONYMIZE = ' + anonymize + ';\n\n    var options = {\n      send_page_view: false\n    };\n    if (' + anonymize + ') {\n      options.anonymize_ip = true;\n    }\n\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    window.gtag = gtag;\n    gtag(\'js\', new Date());\n    gtag(\'config\', \'' + pluginOptions.trackingId + '\', options);\n  ';

  var trackScript = _react2.default.createElement('script', {
    key: 'gatsby-plugin-gtag-inline-script',
    dangerouslySetInnerHTML: {
      __html: scriptStr
    }
  });

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([gtagScript, trackScript]);
};

function stringToBool(s) {
  if (!s) {
    return false;
  }

  var sNorm = s.trim().toLowerCase();

  if (!sNorm.length) {
    return false;
  }

  return sNorm === 'true' || sNorm === '1';
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

exports.favicons = [{
  src: "favicon-32x32.png",
  sizes: "32x32",
  type: "image/png"
}]; // default icons for generating icons

exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */

exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _getManifestPathname = _interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // TODO: remove for v3


var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? "/" : _ref$pathname;
  var localize = _ref2.localize,
      legacy = _ref2.legacy,
      cacheBusting = _ref2.cache_busting_mode,
      cacheDigest = _ref2.cacheDigest,
      icon = _ref2.icon,
      pluginIcons = _ref2.icons,
      insertFaviconLinkTag = _ref2.include_favicon,
      insertMetaTag = _ref2.theme_color_in_head,
      themeColor = _ref2.theme_color,
      _ref2$crossOrigin = _ref2.crossOrigin,
      crossOrigin = _ref2$crossOrigin === void 0 ? "anonymous" : _ref2$crossOrigin; // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.

  var headComponents = [];
  var srcIconExists = !!icon;
  var icons = pluginIcons || _common.defaultIcons;
  var manifestFileName = (0, _getManifestPathname.default)(pathname, localize); // If icons were generated, also add a favicon link.

  if (srcIconExists) {
    if (insertFaviconLinkTag) {
      _common.favicons.forEach(function (favicon) {
        headComponents.push( /*#__PURE__*/React.createElement("link", {
          key: "gatsby-plugin-manifest-icon-link-png",
          rel: "icon",
          href: withPrefix((0, _common.addDigestToPath)(favicon.src, cacheDigest, cacheBusting)),
          type: "image/png"
        }));
      });

      if (icon !== null && icon !== void 0 && icon.endsWith(".svg")) {
        headComponents.push( /*#__PURE__*/React.createElement("link", {
          key: "gatsby-plugin-manifest-icon-link-svg",
          rel: "icon",
          href: withPrefix((0, _common.addDigestToPath)("favicon.svg", cacheDigest, cacheBusting)),
          type: "image/svg+xml"
        }));
      }
    }
  } // Add manifest link tag.


  headComponents.push( /*#__PURE__*/React.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/" + manifestFileName),
    crossOrigin: crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (themeColor && insertMetaTag) {
    headComponents.push( /*#__PURE__*/React.createElement("meta", {
      key: "gatsby-plugin-manifest-meta",
      name: "theme-color",
      content: themeColor
    }));
  }

  if (legacy) {
    icons.forEach(function (icon) {
      headComponents.push( /*#__PURE__*/React.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: withPrefix((0, _common.addDigestToPath)(icon.src, cacheDigest, srcIconExists ? cacheBusting : "none"))
      }));
    });
  }

  setHeadComponents(headComponents);
  return true;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.default = void 0;
/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */

var _default = function _default(pathname, localizedManifests) {
  var defaultFilename = "manifest.webmanifest";

  if (!Array.isArray(localizedManifests)) {
    return defaultFilename;
  }

  var localizedManifest = localizedManifests.find(function (app) {
    return pathname.startsWith(app.start_url);
  });

  if (!localizedManifest) {
    return defaultFilename;
  }

  return "manifest_" + localizedManifest.lang + ".webmanifest";
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _path = __webpack_require__(/*! path */ "path");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // TODO: Remove for v3 - Fix janky path/asset prefixing


var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  var output = pluginOptions.output,
      createLinkInHead = pluginOptions.createLinkInHead;

  if (!createLinkInHead) {
    return;
  }

  setHeadComponents([/*#__PURE__*/React.createElement("link", {
    key: "gatsby-plugin-sitemap",
    rel: "sitemap",
    type: "application/xml",
    href: withPrefix(_path.posix.join(output, "/sitemap-index.xml"))
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

var sheetByPathname = new Map(); // eslint-disable-next-line react/prop-types,react/display-name

exports.wrapRootElement = function (_ref) {
  var element = _ref.element,
      pathname = _ref.pathname;
  var sheet = new _styledComponents.ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, element);
};

exports.onRenderBody = function (_ref2) {
  var setHeadComponents = _ref2.setHeadComponents,
      pathname = _ref2.pathname;
  var sheet = sheetByPathname.get(pathname);

  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "BaseContext": () => (/* binding */ BaseContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./.cache/react-lifecycles-compat.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-node.js":
/*!*********************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-node.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var realFetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/lib/index.mjs");
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/optimism/lib/bundle.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/optimism/lib/bundle.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyTrie": () => (/* reexport safe */ _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie),
/* harmony export */   "asyncFromGen": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.asyncFromGen),
/* harmony export */   "bindContext": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.bind),
/* harmony export */   "noContext": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.noContext),
/* harmony export */   "setTimeout": () => (/* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.setTimeout),
/* harmony export */   "defaultMakeCacheKey": () => (/* binding */ defaultMakeCacheKey),
/* harmony export */   "dep": () => (/* binding */ dep),
/* harmony export */   "wrap": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");





function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache.prototype.getNode = function (key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    };
    Cache.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();

var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var 
// This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function (collection) {
    var array = [];
    collection.forEach(function (item) { return array.push(item); });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function (args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function (parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.forget = function () {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for (var i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true,
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep = depsByKey.get(key);
        if (dep) {
            var m_1 = (entryMethodName &&
                hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep).forEach(function (entry) { return entry[m_1](); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie(typeof WeakMap === "function");
    return function () {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey ||
        makeDefaultMakeCacheKeyFunction();
    var optimistic = function () {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function () { return cache.delete(key); };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function () {
            return cache["map"].size;
        },
        configurable: false,
        enumerable: false,
    });
    function dirtyKey(key) {
        var entry = cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/es/Helmet.js":
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react__WEBPACK_IMPORTED_MODULE_3___default().Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }((react__WEBPACK_IMPORTED_MODULE_3___default().Component)), _class.propTypes = {
        base: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
        defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        defer: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        link: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        noscript: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
        script: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelmetExport);



/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Ue),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ ue),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ce),
/* harmony export */   "StyleSheetManager": () => (/* binding */ me),
/* harmony export */   "ThemeConsumer": () => (/* binding */ ze),
/* harmony export */   "ThemeContext": () => (/* binding */ Be),
/* harmony export */   "ThemeProvider": () => (/* binding */ Le),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Xe),
/* harmony export */   "createGlobalStyle": () => (/* binding */ He),
/* harmony export */   "css": () => (/* binding */ _e),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ $e),
/* harmony export */   "useTheme": () => (/* binding */ Ze),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var _="undefined"!=typeof process&&(({}).REACT_APP_SC_ATTR||({}).SC_ATTR)||"data-styled",C="5.3.0",A="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).REACT_APP_SC_DISABLE_SPEEDY&&""!==({}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==({}).REACT_APP_SC_DISABLE_SPEEDY&&({}).REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).SC_DISABLE_SPEEDY&&""!==({}).SC_DISABLE_SPEEDY?"false"!==({}).SC_DISABLE_SPEEDY&&({}).SC_DISABLE_SPEEDY:"production"!=="development"),P={},O= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},B=function(e,t){T.set(e,t),x.set(t,e)},z="style["+_+'][data-styled-version="5.3.0"]',L=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},F=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),G(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},Y=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(_))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(_,"active"),r.setAttribute("data-styled-version","5.3.0");var s=Y();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A,J={isServer:!A,useCSSOMInjection:!I},Z=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=v({},J,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(_)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=_+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),X=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(X,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!N(n))return!1}return!0}var re=te("5.3.0"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=Q(ee(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=ee(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,se=[":","[",".","#"];function ae(e){var t,n,r,o,i=void 0===e?w:e,s=i.options,a=void 0===s?w:s,c=i.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==se.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),de=(le.Consumer,new Z),he=ae();function pe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ce)||de}function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(le)||he}function me(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],i=t[1],c=pe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(le.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(be(e))return"";if(N(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!be(t[s])&&(g(t[s])?i.push.apply(i,e(t[s],s)):E(t[s])?i.push(Ee(s)+":",t[s],";"):i.push(Ee(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(y(S,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(y(e,n))}var Ce=/invalid hook call/i,Ae=new Set,Ie=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ae.has(n)||(console.warn(n),Ae.add(n))}catch(e){Ce.test(e.message)&&Ae.delete(n)}}},Pe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Oe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function De(e){return e.replace(Oe,"-").replace(Re,"")}var je=function(e){return Q(te(e)>>>0)};function Te(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ke=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ve(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)ke(a)&&Ve(e,s[a],a)}return e}var Be=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),ze=Be.Consumer;function Le(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Be),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Be.Provider,{value:n},e.children):null}var Ge={};function Fe(e,t,n){var o=N(e),s=!Te(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":De(e);Ge[n]=(Ge[n]||0)+1;var r=n+"-"+je("5.3.0"+n+Ge[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return Te(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?De(t.displayName)+"-"+t.componentId:t.componentId||h,_=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var A,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var m=function(e,t,n){void 0===e&&(e=w);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in E(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Pe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Be),a)||w,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),i=fe(),s=t?e.generateAndInjectStyles(w,o,i):e.generateAndInjectStyles(n,o,i);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:0),b=n,N=g.$as||t.$as||g.as||t.as||p,_=Te(N),C=g!==t?v({},t,{},g):t,A={};for(var I in C)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?A.as=C[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,N):!_||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(A[I]=C[I]));return t.style&&g.style!==t.style&&(A.style=v({},t.style,{},g.style)),A.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(N,A)}(A,e,t,P)};return O.displayName=y,(A=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=_,A.componentStyle=I,A.displayName=y,A.shouldForwardProp=C,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=g,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(Te(e)?e:De(b(e)));return Fe(e,v({},o,{attrs:_,componentId:i}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Ie(y,g),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(y,g)),A.toString=function(){return"."+A.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var Ye=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return D(1,String(r));var i=function(){return t(r,o,_e.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Fe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ye[e]=Ye(e)}));var qe=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=_e.apply(void 0,[e].concat(n)),a="sc-global-"+je(JSON.stringify(s)),u=new qe(s,a);function l(e){var t=pe(),n=fe(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Be),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d(u,e,t,o,n),null}function d(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var i=v({},t,{theme:Pe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Ie(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function $e(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=_e.apply(void 0,[e].concat(n)).join(""),i=je(o);return new ve(i,o)}var We=/^\s*<\/[a-z]/i,Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Y();return"<style "+[n&&'nonce="'+n+'"',_+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[_]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(A)return D(3);if(this.sealed)return D(2);this.seal();var t=__webpack_require__(/*! stream */ "stream"),n=(t.Readable,t.Transform),r=e,o=this.instance,i=this._emitSheetCSS,s=new n({transform:function(e,t,n){var r=e.toString(),s=i();if(o.clearTag(),We.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+s+u)}else this.push(s+r);n()}});return r.on("error",(function(e){s.emit("error",e)})),r.pipe(s)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Be),s=e.defaultProps,a=Pe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+b(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Be)},Xe={StyleSheet:Z,masterSheet:de}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"development";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ye);
//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvariantError": () => (/* binding */ InvariantError),
/* harmony export */   "default": () => (/* binding */ invariant$1),
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "setVerbosity": () => (/* binding */ setVerbosity)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ts-invariant/node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;


//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/ts-invariant/node_modules/tslib/tslib.es6.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ts-invariant/node_modules/tslib/tslib.es6.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/ts-invariant/process/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/process/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  maybe(function() { return Function("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}


/***/ }),

/***/ "./node_modules/zen-observable-ts/module.js":
/*!**************************************************!*\
  !*** ./node_modules/zen-observable-ts/module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}




/***/ }),

/***/ "react-dom/server":
/*!******************************************************************************************!*\
  !*** external "/Users/beomsoo/Documents/GitHub/goonin/node_modules/react-dom/server.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/beomsoo/Documents/GitHub/goonin/node_modules/react-dom/server.js");

/***/ }),

/***/ "react":
/*!*************************************************************************************!*\
  !*** external "/Users/beomsoo/Documents/GitHub/goonin/node_modules/react/index.js" ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/beomsoo/Documents/GitHub/goonin/node_modules/react/index.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "./node_modules/graphql/jsutils/defineInspect.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineInspect.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defineInspect)
/* harmony export */ });
/* harmony import */ var _invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");


/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || (0,_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default) {
    classObject.prototype[_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_1__.default] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ devAssert)
/* harmony export */ });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inspect)
/* harmony export */ });
/* harmony import */ var _nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol.mjs */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable flowtype/no-weak-types */

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol_mjs__WEBPACK_IMPORTED_MODULE_0__.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */

// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ( false ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
0 : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (_typeof(value) === 'object' && value !== null) {
    var _value$constructor;

    var className = constructor.prototype[Symbol.toStringTag];
    var valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
    Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;

    if (className === valueClassName) {
      var stringifiedValue = (0,_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(value);
      throw new Error("Cannot use ".concat(className, " \"").concat(stringifiedValue, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/ast.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/language/ast.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "isNode": () => (/* binding */ isNode)
/* harmony export */ });
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");


/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedentBlockStringValue": () => (/* binding */ dedentBlockStringValue),
/* harmony export */   "getBlockStringIndentation": () => (/* binding */ getBlockStringIndentation),
/* harmony export */   "printBlockString": () => (/* binding */ printBlockString)
/* harmony export */ });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "print": () => (/* binding */ print)
/* harmony export */ });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit)(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? (0,_blockString_mjs__WEBPACK_IMPORTED_MODULE_1__.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": () => (/* binding */ Source),
/* harmony export */   "isSource": () => (/* binding */ isSource)
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */
var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, "Body must be a string. Received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */

// eslint-disable-next-line no-redeclare
function isSource(source) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(source, Source);
}


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryDocumentKeys": () => (/* binding */ QueryDocumentKeys),
/* harmony export */   "BREAK": () => (/* binding */ BREAK),
/* harmony export */   "visit": () => (/* binding */ visit),
/* harmony export */   "visitInParallel": () => (/* binding */ visitInParallel),
/* harmony export */   "getVisitFn": () => (/* binding */ getVisitFn)
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!(0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(node)) {
        throw new Error("Invalid AST Node: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if ((0,_ast_mjs__WEBPACK_IMPORTED_MODULE_0__.isNode)(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (skipping[i] == null) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/symbols.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/symbols.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SYMBOL_ITERATOR": () => (/* binding */ SYMBOL_ITERATOR),
/* harmony export */   "SYMBOL_ASYNC_ITERATOR": () => (/* binding */ SYMBOL_ASYNC_ITERATOR),
/* harmony export */   "SYMBOL_TO_STRING_TAG": () => (/* binding */ SYMBOL_TO_STRING_TAG)
/* harmony export */ });
// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var SYMBOL_ITERATOR = typeof Symbol === 'function' && Symbol.iterator != null ? Symbol.iterator : '@@iterator'; // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_ASYNC_ITERATOR = typeof Symbol === 'function' && Symbol.asyncIterator != null ? Symbol.asyncIterator : '@@asyncIterator'; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';


/***/ }),

/***/ "./node_modules/node-fetch/lib/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/node-fetch/lib/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "FetchError": () => (/* binding */ FetchError)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "zlib");






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;
const format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;

const streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;
const resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,
				finishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());
					} else {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetch);



/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");


/* global BROWSER_ESM_ONLY */


 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  pagePath
}) => {
  let headComponents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  let htmlStr;

  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };

  const setBodyProps = props => {
    bodyProps = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = components;
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };

  (0,_api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__.apiRunner)(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath
  });
  (0,_api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__.apiRunner)(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath
  });
  const htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Html, { ...bodyProps,
    body: ``,
    headComponents: headComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      key: "styles",
      rel: "stylesheet",
      href: "/commons.css"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([ true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `framework`,
      src: "/framework.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `commons`,
      src: "/commons.js"
    })].filter(Boolean))
  });
  htmlStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  return htmlStr;
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=render-page.js.map