"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.provider) && currentConnection.signer) {\n                setCurrentBalance((await currentConnection.provider.getBalance(currentConnection.signer.address)).toString());\n            }\n        })();\n    }, [\n        currentConnection,\n        txBeingSent\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.shop) && currentConnection.signer) {\n                setIsOwner(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(await currentConnection.shop.owner()) === await currentConnection.signer.getAddress());\n            }\n        })();\n    }, [\n        currentConnection\n    ]);\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_2__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentBalance(undefined);\n        setIsOwner(false);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    const _handleAddAlbum = async (event)=>{\n        event.preventDefault();\n        if (!(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.shop)) {\n            return false;\n        }\n        const shop = currentConnection.shop;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 177,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 189,\n                columnNumber: 23\n            }, this),\n            transactionError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                message: _getRpcErrorMessage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 193,\n                columnNumber: 11\n            }, this),\n            currentBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You balance: \",\n                    ethers__WEBPACK_IMPORTED_MODULE_8__.formatEther(currentBalance),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 202,\n                columnNumber: 11\n            }, this),\n            isOwner && !txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: _handleAddAlbum,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add album\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 208,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Title:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumTitle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 212,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 210,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Price:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumPrice\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 217,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 215,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Qty:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumQty\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 222,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 220,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 225,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 207,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 174,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OnD79TCfQdInUiTnZPM51nshNd4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDZCQUNYLDhEQUFDc0Q7Z0JBQUtDLFVBQVVWOztrQ0FDZCw4REFBQ1c7a0NBQUc7Ozs7OztrQ0FFSiw4REFBQ0M7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUcxQiw4REFBQ0g7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUcxQiw4REFBQ0g7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUcxQiw4REFBQ0Y7d0JBQU1DLE1BQUs7d0JBQVNFLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQW5Nd0JoRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgTXVzaWNTaG9wX19mYWN0b3J5IH0gZnJvbSBcIkAvdHlwZWNoYWluXCI7XG5pbXBvcnQgdHlwZSB7TXVzaWNTaG9wfSBmcm9tICdAL3R5cGVjaGFpbidcbmltcG9ydCB0eXBlIHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VcIjtcblxuY29uc3QgSEFSREhBVF9ORVRXT1JLX0lEID0gXCIweDUzOVwiO1xuY29uc3QgTVVTSUNfU0hPUF9BRERSRVNTID0gXCIweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTNcIjtcblxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbnR5cGUgQ3VycmVudENvbm5lY3Rpb25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IEJyb3dzZXJQcm92aWRlciB8IHVuZGVmaW5lZDtcbiAgc2hvcDogTXVzaWNTaG9wIHwgdW5kZWZpbmVkO1xuICBzaWduZXI6IGV0aGVycy5Kc29uUnBjU2lnbmVyIHwgdW5kZWZpbmVkO1xufTtcblxudHlwZSBBbGJ1bVByb3BzID0ge1xuICBpbmRleDogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgdWlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICBxdWFudGl0eTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ldHdvcmtFcnJvciwgc2V0TmV0d29ya0Vycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3R4QmVpbmdTZW50LCBzZXRUeEJlaW5nU2VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbkVycm9yLCBzZXRUcmFuc2FjdGlvbkVycm9yXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2N1cnJlbnRCYWxhbmNlLCBzZXRDdXJyZW50QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FsYnVtcywgc2V0QWxidW1zXSA9IHVzZVN0YXRlPEFsYnVtUHJvcHNbXT4oW10pO1xuICBjb25zdCBbY3VycmVudENvbm5lY3Rpb24sIHNldEN1cnJlbnRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPEN1cnJlbnRDb25uZWN0aW9uUHJvcHM+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYoY3VycmVudENvbm5lY3Rpb24/LnByb3ZpZGVyICYmIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lcil7XG4gICAgICAgIHNldEN1cnJlbnRCYWxhbmNlKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGF3YWl0IGN1cnJlbnRDb25uZWN0aW9uLnByb3ZpZGVyLmdldEJhbGFuY2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKS50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW2N1cnJlbnRDb25uZWN0aW9uLCB0eEJlaW5nU2VudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRDb25uZWN0aW9uPy5zaG9wICYmIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lcil7XG4gICAgICAgIHNldElzT3duZXIoXG4gICAgICAgICAgZXRoZXJzLmdldEFkZHJlc3MoXG4gICAgICAgICAgICBhd2FpdCBjdXJyZW50Q29ubmVjdGlvbi5zaG9wLm93bmVyKClcbiAgICAgICAgICApID09PSBhd2FpdCBjdXJyZW50Q29ubmVjdGlvbi5zaWduZXIuZ2V0QWRkcmVzcygpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW2N1cnJlbnRDb25uZWN0aW9uXSlcblxuICBjb25zdCBfY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICBpZih3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCl7XG4gICAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzayFcIik7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighKGF3YWl0IF9jaGVja05ldHdvcmsoKSkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY291bnRdID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIlxuICAgIH0pXG5cbiAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhzZWxlY3RlZEFjY291bnQpKTtcbiAgXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFxuICAgICAgXCJhY2NvdW50Q2hhbmdlZFwiLFxuICAgICAgYXN5bmMoW25ld0FjY291bnRdOiBbbmV3QWNjb3VudDogc3RyaW5nXSkgPT4ge1xuICAgICAgICBpZihuZXdBY2NvdW50ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgIHJldHVybiBfcmVzZXRTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgX2luaXRpYWxpemUoZXRoZXJzLmdldEFkZHJlc3MobmV3QWNjb3VudCkpO1xuICAgICAgfVxuICAgIClcblxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcImNoYWluQ2hhbmdlZFwiLCAoW19uZXR3b3JrSWRdOiBhbnkpID0+IHtcbiAgICAgIF9yZXNldFN0YXRlKCk7XG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgX2luaXRpYWxpemUgPSBhc3luYyAoc2VsZWN0ZWRBY2NvdW50OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKHNlbGVjdGVkQWNjb3VudCk7XG5cbiAgICBzZXRDdXJyZW50Q29ubmVjdGlvbih7XG4gICAgICAuLi5jdXJyZW50Q29ubmVjdGlvbixcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgc2lnbmVyLFxuICAgICAgc2hvcDogTXVzaWNTaG9wX19mYWN0b3J5LmNvbm5lY3QoTVVTSUNfU0hPUF9BRERSRVNTLCBzaWduZXIpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IF9yZXNldFN0YXRlID0gKCkgPT4ge1xuICAgIHNldE5ldHdvcmtFcnJvcih1bmRlZmluZWQpO1xuICAgIHNldFR4QmVpbmdTZW50KHVuZGVmaW5lZCk7XG4gICAgc2V0Q3VycmVudEJhbGFuY2UodW5kZWZpbmVkKTtcbiAgICBzZXRJc093bmVyKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50Q29ubmVjdGlvbih7XG4gICAgICBwcm92aWRlcjogdW5kZWZpbmVkLFxuICAgICAgc2lnbmVyOiB1bmRlZmluZWQsXG4gICAgICBzaG9wOiB1bmRlZmluZWQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IF9jaGVja05ldHdvcmsgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgY2hvc2VuQ2hhaW5JZCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfY2hhaW5JZFwiLFxuICAgIH0pXG4gIFxuICAgIGlmKGNob3NlbkNoYWluSWQgPT09IEhBUkRIQVRfTkVUV09SS19JRCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgY29ubmVjdCB0byBIYXJkaGF0IG5ldHdvcmsgKGxvY2FsaG9zdDo4NTQ1KSFcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NOZXR3b3JrRXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZClcbiAgfVxuXG4gIGNvbnN0IF9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvbkVycm9yKHVuZGVmaW5lZClcbiAgfVxuXG4gIGNvbnN0IF9nZXRScGNFcnJvck1lc3NhZ2UgPSAoZXJyb3I6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgaWYoZXJyb3IuZGF0YSl7XG4gICAgICByZXR1cm4gZXJyb3IuZGF0YS5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgY29uc3QgX2hhbmRsZUFkZEFsYnVtID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZighY3VycmVudENvbm5lY3Rpb24/LnNob3Ape1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3AgPSBjdXJyZW50Q29ubmVjdGlvbi5zaG9wO1xuICAgIFxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHt0eEJlaW5nU2VudCAmJiA8V2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSB0eEhhc2g9e3R4QmVpbmdTZW50fSAvPn1cblxuICAgICAge1xuICAgICAgICB0cmFuc2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgICA8VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgXG4gICAgICAgICAgICBtZXNzYWdlPXtfZ2V0UnBjRXJyb3JNZXNzYWdlKHRyYW5zYWN0aW9uRXJyb3IpfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBjdXJyZW50QmFsYW5jZSAmJiAoXG4gICAgICAgICAgPHA+WW91IGJhbGFuY2U6IHtldGhlcnMuZm9ybWF0RXRoZXIoY3VycmVudEJhbGFuY2UpfSBFVEg8L3A+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge2lzT3duZXIgJiYgIXR4QmVpbmdTZW50ICYmIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e19oYW5kbGVBZGRBbGJ1bX0+XG4gICAgICAgICAgPGgyPkFkZCBhbGJ1bTwvaDI+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGJ1bVRpdGxlXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUHJpY2U6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWxidW1QcmljZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFF0eTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGJ1bVF0eVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQhXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiTXVzaWNTaG9wX19mYWN0b3J5IiwiQ29ubmVjdFdhbGxldCIsIldhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UiLCJUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJ0eEJlaW5nU2VudCIsInNldFR4QmVpbmdTZW50IiwidHJhbnNhY3Rpb25FcnJvciIsInNldFRyYW5zYWN0aW9uRXJyb3IiLCJjdXJyZW50QmFsYW5jZSIsInNldEN1cnJlbnRCYWxhbmNlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJhbGJ1bXMiLCJzZXRBbGJ1bXMiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRCYWxhbmNlIiwiYWRkcmVzcyIsInRvU3RyaW5nIiwic2hvcCIsImdldEFkZHJlc3MiLCJvd25lciIsIl9jb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ1bmRlZmluZWQiLCJfY2hlY2tOZXR3b3JrIiwic2VsZWN0ZWRBY2NvdW50IiwicmVxdWVzdCIsIm1ldGhvZCIsIl9pbml0aWFsaXplIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwiQnJvd3NlclByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsIl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciIsIl9nZXRScGNFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsIl9oYW5kbGVBZGRBbGJ1bSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtYWluIiwiY29ubmVjdFdhbGxldCIsImRpc21pc3MiLCJwIiwidHhIYXNoIiwiZm9ybWF0RXRoZXIiLCJmb3JtIiwib25TdWJtaXQiLCJoMiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});