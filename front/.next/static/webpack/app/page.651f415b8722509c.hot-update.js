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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 132,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 141,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 144,\n                columnNumber: 23\n            }, this),\n            transcationError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                message: _getRpcErrorMEssage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6T4k3G2eDu0SYOcZ+uFCGQpnsu0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1IsZ0ZBQTRCQTtnQkFBQ29ELFFBQVE1Qzs7Ozs7O1lBR3BENkMsa0NBQ0UsOERBQUNwRCwyRUFBdUJBO2dCQUN0QnFELFNBQVNDLG9CQUFvQjdDO2dCQUM3QnVDLFNBQVNQOzs7Ozs7Ozs7Ozs7QUFRckI7R0ExSHdCckM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgTXVzaWNTaG9wX19mYWN0b3J5IH0gZnJvbSBcIkAvdHlwZWNoYWluXCI7XG5pbXBvcnQgdHlwZSB7TXVzaWNTaG9wfSBmcm9tICdAL3R5cGVjaGFpbidcbmltcG9ydCB0eXBlIHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhBUkRIQVRfTkVUV09SS19JRCA9IFwiMHg1MzlcIjtcbmNvbnN0IE1VU0lDX1NIT1BfQUREUkVTUyA9IFwiMHg1ZmJkYjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNmNjQyZjY0MTgwYWEzXCI7XG5cbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG50eXBlIEN1cnJlbnRDb25uZWN0aW9uUHJvcHMgPSB7XG4gIHByb3ZpZGVyOiBCcm93c2VyUHJvdmlkZXIgfCB1bmRlZmluZWQ7XG4gIHNob3A6IE11c2ljU2hvcCB8IHVuZGVmaW5lZDtcbiAgc2lnbmVyOiBldGhlcnMuSnNvblJwY1NpZ25lciB8IHVuZGVmaW5lZDtcbn07XG5cbnR5cGUgQWxidW1Qcm9wcyA9IHtcbiAgaW5kZXg6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHVpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgcXVhbnRpdHk6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZXR3b3JrRXJyb3IsIHNldE5ldHdvcmtFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0eEJlaW5nU2VudCwgc2V0VHhCZWluZ1NlbnRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25FcnJvciwgc2V0VHJhbnNhY3Rpb25FcnJvcl0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtjdXJyZW50QmFsYW5jZSwgc2V0Q3VycmVudEJhbGFuY2VdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbaXNPd25lciwgc2V0SXNPd25lcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFthbGJ1bXMsIHNldEFsYnVtc10gPSB1c2VTdGF0ZTxBbGJ1bVByb3BzW10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRDb25uZWN0aW9uLCBzZXRDdXJyZW50Q29ubmVjdGlvbl0gPVxuICAgIHVzZVN0YXRlPEN1cnJlbnRDb25uZWN0aW9uUHJvcHM+KCk7XG5cbiAgY29uc3QgX2Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpe1xuICAgICAgc2V0TmV0d29ya0Vycm9yKFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2shXCIpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIShhd2FpdCBfY2hlY2tOZXR3b3JrKCkpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRBY2NvdW50XSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJcbiAgICB9KVxuXG4gICAgYXdhaXQgX2luaXRpYWxpemUoZXRoZXJzLmdldEFkZHJlc3Moc2VsZWN0ZWRBY2NvdW50KSk7XG4gIFxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcbiAgICAgIFwiYWNjb3VudENoYW5nZWRcIixcbiAgICAgIGFzeW5jKFtuZXdBY2NvdW50XTogW25ld0FjY291bnQ6IHN0cmluZ10pID0+IHtcbiAgICAgICAgaWYobmV3QWNjb3VudCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICByZXR1cm4gX3Jlc2V0U3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKG5ld0FjY291bnQpKTtcbiAgICAgIH1cbiAgICApXG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJjaGFpbkNoYW5nZWRcIiwgKFtfbmV0d29ya0lkXTogYW55KSA9PiB7XG4gICAgICBfcmVzZXRTdGF0ZSgpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IF9pbml0aWFsaXplID0gYXN5bmMgKHNlbGVjdGVkQWNjb3VudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcihzZWxlY3RlZEFjY291bnQpO1xuXG4gICAgc2V0Q3VycmVudENvbm5lY3Rpb24oe1xuICAgICAgLi4uY3VycmVudENvbm5lY3Rpb24sXG4gICAgICBwcm92aWRlcixcbiAgICAgIHNpZ25lcixcbiAgICAgIHNob3A6IE11c2ljU2hvcF9fZmFjdG9yeS5jb25uZWN0KE1VU0lDX1NIT1BfQUREUkVTUywgc2lnbmVyKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBfcmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKTtcbiAgICBzZXRUeEJlaW5nU2VudCh1bmRlZmluZWQpO1xuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIHByb3ZpZGVyOiB1bmRlZmluZWQsXG4gICAgICBzaWduZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNob3A6IHVuZGVmaW5lZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yID0gKCkgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2dldFJwY0Vycm9yTWVzc2FnZSA9IChlcnJvcjogYW55KTogc3RyaW5nID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHt0eEJlaW5nU2VudCAmJiA8V2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSB0eEhhc2g9e3R4QmVpbmdTZW50fSAvPn1cblxuICAgICAge1xuICAgICAgICB0cmFuc2NhdGlvbkVycm9yICYmIChcbiAgICAgICAgICA8VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgXG4gICAgICAgICAgICBtZXNzYWdlPXtfZ2V0UnBjRXJyb3JNRXNzYWdlKHRyYW5zYWN0aW9uRXJyb3IpfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIk11c2ljU2hvcF9fZmFjdG9yeSIsIkNvbm5lY3RXYWxsZXQiLCJXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIiwiVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UiLCJ1c2VTdGF0ZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJ0eEJlaW5nU2VudCIsInNldFR4QmVpbmdTZW50IiwidHJhbnNhY3Rpb25FcnJvciIsInNldFRyYW5zYWN0aW9uRXJyb3IiLCJjdXJyZW50QmFsYW5jZSIsInNldEN1cnJlbnRCYWxhbmNlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJhbGJ1bXMiLCJzZXRBbGJ1bXMiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwiX2Nvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIl9jaGVja05ldHdvcmsiLCJzZWxlY3RlZEFjY291bnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiX2luaXRpYWxpemUiLCJnZXRBZGRyZXNzIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwicHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaG9wIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsIl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciIsIl9nZXRScGNFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY29ubmVjdFdhbGxldCIsImRpc21pc3MiLCJwIiwiYWRkcmVzcyIsInR4SGFzaCIsInRyYW5zY2F0aW9uRXJyb3IiLCJtZXNzYWdlIiwiX2dldFJwY0Vycm9yTUVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});