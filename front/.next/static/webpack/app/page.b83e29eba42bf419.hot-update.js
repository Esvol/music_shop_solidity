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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 136,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 23\n            }, this),\n            transcationError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                message: _getRpcErrorMEssage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 152,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"6T4k3G2eDu0SYOcZ+uFCGQpnsu0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQW1Ca0IsTUFBTSxtQkFDeEIsOERBQUNnQjs7b0JBQUU7b0JBQWVsQyxrQkFBa0JrQixNQUFNLENBQUNpQixPQUFPOzs7Ozs7O1lBR25EN0MsNkJBQWUsOERBQUNSLGdGQUE0QkE7Z0JBQUNzRCxRQUFROUM7Ozs7OztZQUdwRCtDLGtDQUNFLDhEQUFDdEQsMkVBQXVCQTtnQkFDdEIrQyxTQUFTUSxvQkFBb0I5QztnQkFDN0J5QyxTQUFTVDs7Ozs7Ozs7Ozs7O0FBUXJCO0dBOUh3QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQge2V0aGVyc30gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IE11c2ljU2hvcF9fZmFjdG9yeSB9IGZyb20gXCJAL3R5cGVjaGFpblwiO1xuaW1wb3J0IHR5cGUge011c2ljU2hvcH0gZnJvbSAnQC90eXBlY2hhaW4nXG5pbXBvcnQgdHlwZSB7IEJyb3dzZXJQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcblxuaW1wb3J0IENvbm5lY3RXYWxsZXQgZnJvbSBcIkAvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0XCI7XG5pbXBvcnQgV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSBmcm9tIFwiQC9jb21wb25lbnRzL1dhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2VcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSBmcm9tIFwiQC9jb21wb25lbnRzL1RyYW5zYWN0aW9uRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSBcIjB4NTM5XCI7XG5jb25zdCBNVVNJQ19TSE9QX0FERFJFU1MgPSBcIjB4NWZiZGIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzZjY0MmY2NDE4MGFhM1wiO1xuXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxudHlwZSBDdXJyZW50Q29ubmVjdGlvblByb3BzID0ge1xuICBwcm92aWRlcjogQnJvd3NlclByb3ZpZGVyIHwgdW5kZWZpbmVkO1xuICBzaG9wOiBNdXNpY1Nob3AgfCB1bmRlZmluZWQ7XG4gIHNpZ25lcjogZXRoZXJzLkpzb25ScGNTaWduZXIgfCB1bmRlZmluZWQ7XG59O1xuXG50eXBlIEFsYnVtUHJvcHMgPSB7XG4gIGluZGV4OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICB1aWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHF1YW50aXR5OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmV0d29ya0Vycm9yLCBzZXROZXR3b3JrRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdHhCZWluZ1NlbnQsIHNldFR4QmVpbmdTZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9uRXJyb3IsIHNldFRyYW5zYWN0aW9uRXJyb3JdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbY3VycmVudEJhbGFuY2UsIHNldEN1cnJlbnRCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGU8QWxidW1Qcm9wc1tdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50Q29ubmVjdGlvbiwgc2V0Q3VycmVudENvbm5lY3Rpb25dID1cbiAgICB1c2VTdGF0ZTxDdXJyZW50Q29ubmVjdGlvblByb3BzPigpO1xuXG4gIGNvbnN0IF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIVwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCEoYXdhaXQgX2NoZWNrTmV0d29yaygpKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcblxuICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKHNlbGVjdGVkQWNjb3VudCkpO1xuICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXG4gICAgICBcImFjY291bnRDaGFuZ2VkXCIsXG4gICAgICBhc3luYyhbbmV3QWNjb3VudF06IFtuZXdBY2NvdW50OiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmKG5ld0FjY291bnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcmV0dXJuIF9yZXNldFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhuZXdBY2NvdW50KSk7XG4gICAgICB9XG4gICAgKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChbX25ldHdvcmtJZF06IGFueSkgPT4ge1xuICAgICAgX3Jlc2V0U3RhdGUoKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBfaW5pdGlhbGl6ZSA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoc2VsZWN0ZWRBY2NvdW50KTtcblxuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIC4uLmN1cnJlbnRDb25uZWN0aW9uLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICBzaWduZXIsXG4gICAgICBzaG9wOiBNdXNpY1Nob3BfX2ZhY3RvcnkuY29ubmVjdChNVVNJQ19TSE9QX0FERFJFU1MsIHNpZ25lcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX3Jlc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0VHhCZWluZ1NlbnQodW5kZWZpbmVkKTtcbiAgICBzZXRDdXJyZW50Q29ubmVjdGlvbih7XG4gICAgICBwcm92aWRlcjogdW5kZWZpbmVkLFxuICAgICAgc2lnbmVyOiB1bmRlZmluZWQsXG4gICAgICBzaG9wOiB1bmRlZmluZWQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IF9jaGVja05ldHdvcmsgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgY2hvc2VuQ2hhaW5JZCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfY2hhaW5JZFwiLFxuICAgIH0pXG4gIFxuICAgIGlmKGNob3NlbkNoYWluSWQgPT09IEhBUkRIQVRfTkVUV09SS19JRCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgY29ubmVjdCB0byBIYXJkaGF0IG5ldHdvcmsgKGxvY2FsaG9zdDo4NTQ1KSFcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NOZXR3b3JrRXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZClcbiAgfVxuXG4gIGNvbnN0IF9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciA9ICgpID0+IHtcbiAgICBzZXRUcmFuc2FjdGlvbkVycm9yKHVuZGVmaW5lZClcbiAgfVxuXG4gIGNvbnN0IF9nZXRScGNFcnJvck1lc3NhZ2UgPSAoZXJyb3I6IGFueSk6IHN0cmluZyA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGlmKGVycm9yLmRhdGEpe1xuICAgICAgcmV0dXJuIGVycm9yLmRhdGEubWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7XG4gICAgICAgICFjdXJyZW50Q29ubmVjdGlvbj8uc2lnbmVyICYmIChcbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCBcbiAgICAgICAgICAgIGNvbm5lY3RXYWxsZXQ9e19jb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgbmV0d29ya0Vycm9yPXtuZXR3b3JrRXJyb3J9XG4gICAgICAgICAgICBkaXNtaXNzPXtfZGlzbWlzc05ldHdvcmtFcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHtjdXJyZW50Q29ubmVjdGlvbj8uc2lnbmVyICYmIChcbiAgICAgICAgPHA+WW91ciBhZGRyZXNzOiB7Y3VycmVudENvbm5lY3Rpb24uc2lnbmVyLmFkZHJlc3N9PC9wPlxuICAgICAgKX1cblxuICAgICAge3R4QmVpbmdTZW50ICYmIDxXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIHR4SGFzaD17dHhCZWluZ1NlbnR9IC8+fVxuXG4gICAgICB7XG4gICAgICAgIHRyYW5zY2F0aW9uRXJyb3IgJiYgKFxuICAgICAgICAgIDxUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSBcbiAgICAgICAgICAgIG1lc3NhZ2U9e19nZXRScGNFcnJvck1Fc3NhZ2UodHJhbnNhY3Rpb25FcnJvcil9XG4gICAgICAgICAgICBkaXNtaXNzPXtfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiTXVzaWNTaG9wX19mYWN0b3J5IiwiQ29ubmVjdFdhbGxldCIsIldhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UiLCJUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSIsInVzZVN0YXRlIiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiTVVTSUNfU0hPUF9BRERSRVNTIiwiSG9tZSIsIm5ldHdvcmtFcnJvciIsInNldE5ldHdvcmtFcnJvciIsInR4QmVpbmdTZW50Iiwic2V0VHhCZWluZ1NlbnQiLCJ0cmFuc2FjdGlvbkVycm9yIiwic2V0VHJhbnNhY3Rpb25FcnJvciIsImN1cnJlbnRCYWxhbmNlIiwic2V0Q3VycmVudEJhbGFuY2UiLCJpc093bmVyIiwic2V0SXNPd25lciIsImFsYnVtcyIsInNldEFsYnVtcyIsImN1cnJlbnRDb25uZWN0aW9uIiwic2V0Q3VycmVudENvbm5lY3Rpb24iLCJfY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiX2NoZWNrTmV0d29yayIsInNlbGVjdGVkQWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJfaW5pdGlhbGl6ZSIsImdldEFkZHJlc3MiLCJvbiIsIm5ld0FjY291bnQiLCJfcmVzZXRTdGF0ZSIsIl9uZXR3b3JrSWQiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsInNob3AiLCJjb25uZWN0IiwiY2hvc2VuQ2hhaW5JZCIsIl9kaXNtaXNzTmV0d29ya0Vycm9yIiwiX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yIiwiX2dldFJwY0Vycm9yTWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwibWFpbiIsImNvbm5lY3RXYWxsZXQiLCJkaXNtaXNzIiwicCIsImFkZHJlc3MiLCJ0eEhhc2giLCJ0cmFuc2NhdGlvbkVycm9yIiwiX2dldFJwY0Vycm9yTUVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});