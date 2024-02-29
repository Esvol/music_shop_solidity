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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.provider) && currentConnection.signer) {\n                setCurrentBalance((await currentConnection.provider.getBalance(currentConnection.signer.address)).toString());\n            }\n        })();\n    }, [\n        currentConnection,\n        txBeingSent\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.shop) && currentConnection.signer) {\n                setIsOwner(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(await currentConnection.shop.owner()) === await currentConnection.signer.getAddress());\n            }\n        })();\n    }, [\n        currentConnection\n    ]);\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_2__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentBalance(undefined);\n        setIsOwner(false);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 167,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 176,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 179,\n                columnNumber: 23\n            }, this),\n            transactionError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                message: _getRpcErrorMessage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 183,\n                columnNumber: 11\n            }, this),\n            currentBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You balance: \",\n                    ethers__WEBPACK_IMPORTED_MODULE_8__.formatEther(currentBalance),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 192,\n                columnNumber: 11\n            }, this),\n            isOwner && !txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: _handleAddAlbum,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add album\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 198,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Title:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumTitle\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 202,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 200,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Price:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumPrice\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 207,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 205,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Qty:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"albumQty\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 212,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 210,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 215,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 197,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OnD79TCfQdInUiTnZPM51nshNd4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FHMUIsOERBQUNIOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FHMUIsOERBQUNGO3dCQUFNQyxNQUFLO3dCQUFTRSxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckM7R0F6THdCOUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHtldGhlcnN9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBNdXNpY1Nob3BfX2ZhY3RvcnkgfSBmcm9tIFwiQC90eXBlY2hhaW5cIjtcbmltcG9ydCB0eXBlIHtNdXNpY1Nob3B9IGZyb20gJ0AvdHlwZWNoYWluJ1xuaW1wb3J0IHR5cGUgeyBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9XYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZVwiO1xuXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSBcIjB4NTM5XCI7XG5jb25zdCBNVVNJQ19TSE9QX0FERFJFU1MgPSBcIjB4NWZiZGIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzZjY0MmY2NDE4MGFhM1wiO1xuXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxudHlwZSBDdXJyZW50Q29ubmVjdGlvblByb3BzID0ge1xuICBwcm92aWRlcjogQnJvd3NlclByb3ZpZGVyIHwgdW5kZWZpbmVkO1xuICBzaG9wOiBNdXNpY1Nob3AgfCB1bmRlZmluZWQ7XG4gIHNpZ25lcjogZXRoZXJzLkpzb25ScGNTaWduZXIgfCB1bmRlZmluZWQ7XG59O1xuXG50eXBlIEFsYnVtUHJvcHMgPSB7XG4gIGluZGV4OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICB1aWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHF1YW50aXR5OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmV0d29ya0Vycm9yLCBzZXROZXR3b3JrRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdHhCZWluZ1NlbnQsIHNldFR4QmVpbmdTZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9uRXJyb3IsIHNldFRyYW5zYWN0aW9uRXJyb3JdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbY3VycmVudEJhbGFuY2UsIHNldEN1cnJlbnRCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGU8QWxidW1Qcm9wc1tdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50Q29ubmVjdGlvbiwgc2V0Q3VycmVudENvbm5lY3Rpb25dID0gdXNlU3RhdGU8Q3VycmVudENvbm5lY3Rpb25Qcm9wcz4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZihjdXJyZW50Q29ubmVjdGlvbj8ucHJvdmlkZXIgJiYgY3VycmVudENvbm5lY3Rpb24uc2lnbmVyKXtcbiAgICAgICAgc2V0Q3VycmVudEJhbGFuY2UoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgYXdhaXQgY3VycmVudENvbm5lY3Rpb24ucHJvdmlkZXIuZ2V0QmFsYW5jZShcbiAgICAgICAgICAgICAgY3VycmVudENvbm5lY3Rpb24uc2lnbmVyLmFkZHJlc3NcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbY3VycmVudENvbm5lY3Rpb24sIHR4QmVpbmdTZW50XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudENvbm5lY3Rpb24/LnNob3AgJiYgY3VycmVudENvbm5lY3Rpb24uc2lnbmVyKXtcbiAgICAgICAgc2V0SXNPd25lcihcbiAgICAgICAgICBldGhlcnMuZ2V0QWRkcmVzcyhcbiAgICAgICAgICAgIGF3YWl0IGN1cnJlbnRDb25uZWN0aW9uLnNob3Aub3duZXIoKVxuICAgICAgICAgICkgPT09IGF3YWl0IGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5nZXRBZGRyZXNzKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbY3VycmVudENvbm5lY3Rpb25dKVxuXG4gIGNvbnN0IF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIVwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCEoYXdhaXQgX2NoZWNrTmV0d29yaygpKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcblxuICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKHNlbGVjdGVkQWNjb3VudCkpO1xuICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXG4gICAgICBcImFjY291bnRDaGFuZ2VkXCIsXG4gICAgICBhc3luYyhbbmV3QWNjb3VudF06IFtuZXdBY2NvdW50OiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmKG5ld0FjY291bnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcmV0dXJuIF9yZXNldFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhuZXdBY2NvdW50KSk7XG4gICAgICB9XG4gICAgKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChbX25ldHdvcmtJZF06IGFueSkgPT4ge1xuICAgICAgX3Jlc2V0U3RhdGUoKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBfaW5pdGlhbGl6ZSA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoc2VsZWN0ZWRBY2NvdW50KTtcblxuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIC4uLmN1cnJlbnRDb25uZWN0aW9uLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICBzaWduZXIsXG4gICAgICBzaG9wOiBNdXNpY1Nob3BfX2ZhY3RvcnkuY29ubmVjdChNVVNJQ19TSE9QX0FERFJFU1MsIHNpZ25lcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX3Jlc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0VHhCZWluZ1NlbnQodW5kZWZpbmVkKTtcbiAgICBzZXRDdXJyZW50QmFsYW5jZSh1bmRlZmluZWQpO1xuICAgIHNldElzT3duZXIoZmFsc2UpO1xuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIHByb3ZpZGVyOiB1bmRlZmluZWQsXG4gICAgICBzaWduZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNob3A6IHVuZGVmaW5lZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yID0gKCkgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2dldFJwY0Vycm9yTWVzc2FnZSA9IChlcnJvcjogYW55KTogc3RyaW5nID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICBpZihlcnJvci5kYXRhKXtcbiAgICAgIHJldHVybiBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cblxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHt0eEJlaW5nU2VudCAmJiA8V2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSB0eEhhc2g9e3R4QmVpbmdTZW50fSAvPn1cblxuICAgICAge1xuICAgICAgICB0cmFuc2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgICA8VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgXG4gICAgICAgICAgICBtZXNzYWdlPXtfZ2V0UnBjRXJyb3JNZXNzYWdlKHRyYW5zYWN0aW9uRXJyb3IpfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBjdXJyZW50QmFsYW5jZSAmJiAoXG4gICAgICAgICAgPHA+WW91IGJhbGFuY2U6IHtldGhlcnMuZm9ybWF0RXRoZXIoY3VycmVudEJhbGFuY2UpfSBFVEg8L3A+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge2lzT3duZXIgJiYgIXR4QmVpbmdTZW50ICYmIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e19oYW5kbGVBZGRBbGJ1bX0+XG4gICAgICAgICAgPGgyPkFkZCBhbGJ1bTwvaDI+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBUaXRsZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGJ1bVRpdGxlXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUHJpY2U6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWxidW1QcmljZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFF0eTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGJ1bVF0eVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGQhXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKX1cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZXRoZXJzIiwiTXVzaWNTaG9wX19mYWN0b3J5IiwiQ29ubmVjdFdhbGxldCIsIldhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UiLCJUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJ0eEJlaW5nU2VudCIsInNldFR4QmVpbmdTZW50IiwidHJhbnNhY3Rpb25FcnJvciIsInNldFRyYW5zYWN0aW9uRXJyb3IiLCJjdXJyZW50QmFsYW5jZSIsInNldEN1cnJlbnRCYWxhbmNlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJhbGJ1bXMiLCJzZXRBbGJ1bXMiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRCYWxhbmNlIiwiYWRkcmVzcyIsInRvU3RyaW5nIiwic2hvcCIsImdldEFkZHJlc3MiLCJvd25lciIsIl9jb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ1bmRlZmluZWQiLCJfY2hlY2tOZXR3b3JrIiwic2VsZWN0ZWRBY2NvdW50IiwicmVxdWVzdCIsIm1ldGhvZCIsIl9pbml0aWFsaXplIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwiQnJvd3NlclByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsIl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciIsIl9nZXRScGNFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsIm1haW4iLCJjb25uZWN0V2FsbGV0IiwiZGlzbWlzcyIsInAiLCJ0eEhhc2giLCJmb3JtYXRFdGhlciIsImZvcm0iLCJvblN1Ym1pdCIsIl9oYW5kbGVBZGRBbGJ1bSIsImgyIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});