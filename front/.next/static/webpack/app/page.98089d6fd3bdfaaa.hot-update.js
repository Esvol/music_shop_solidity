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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.provider) && currentConnection.signer) {\n                setCurrentBalance();\n            }\n        })();\n    }, []);\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentBalance(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 148,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 160,\n                columnNumber: 23\n            }, this),\n            transcationError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                message: _getRpcErrorMEssage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 164,\n                columnNumber: 11\n            }, this),\n            currentBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You balance: \",\n                    ethers__WEBPACK_IMPORTED_MODULE_8__.formatEther(currentBalance),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 173,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LMFtU4IWNXX/T0EqwcIzfBDUXAM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQzs7WUFFRyxFQUFDL0IsOEJBQUFBLHdDQUFBQSxrQkFBbUJHLE1BQU0sbUJBQ3hCLDhEQUFDdkIsaUVBQWFBO2dCQUNab0QsZUFBZTVCO2dCQUNmaEIsY0FBY0E7Z0JBQ2Q2QyxTQUFTVjs7Ozs7O1lBS2R2QixDQUFBQSw4QkFBQUEsd0NBQUFBLGtCQUFtQkcsTUFBTSxtQkFDeEIsOERBQUMrQjs7b0JBQUU7b0JBQWVsQyxrQkFBa0JHLE1BQU0sQ0FBQ2dDLE9BQU87Ozs7Ozs7WUFHbkQ3Qyw2QkFBZSw4REFBQ1QsZ0ZBQTRCQTtnQkFBQ3VELFFBQVE5Qzs7Ozs7O1lBR3BEK0Msa0NBQ0UsOERBQUN2RCwyRUFBdUJBO2dCQUN0QmdELFNBQVNRLG9CQUFvQjlDO2dCQUM3QnlDLFNBQVNUOzs7Ozs7WUFNYjlCLGdDQUNFLDhEQUFDd0M7O29CQUFFO29CQUFjeEQsK0NBQWtCLENBQUNnQjtvQkFBZ0I7Ozs7Ozs7Ozs7Ozs7QUFPOUQ7R0FoSndCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHtldGhlcnN9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBNdXNpY1Nob3BfX2ZhY3RvcnkgfSBmcm9tIFwiQC90eXBlY2hhaW5cIjtcbmltcG9ydCB0eXBlIHtNdXNpY1Nob3B9IGZyb20gJ0AvdHlwZWNoYWluJ1xuaW1wb3J0IHR5cGUgeyBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9XYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSBcIjB4NTM5XCI7XG5jb25zdCBNVVNJQ19TSE9QX0FERFJFU1MgPSBcIjB4NWZiZGIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzZjY0MmY2NDE4MGFhM1wiO1xuXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxudHlwZSBDdXJyZW50Q29ubmVjdGlvblByb3BzID0ge1xuICBwcm92aWRlcjogQnJvd3NlclByb3ZpZGVyIHwgdW5kZWZpbmVkO1xuICBzaG9wOiBNdXNpY1Nob3AgfCB1bmRlZmluZWQ7XG4gIHNpZ25lcjogZXRoZXJzLkpzb25ScGNTaWduZXIgfCB1bmRlZmluZWQ7XG59O1xuXG50eXBlIEFsYnVtUHJvcHMgPSB7XG4gIGluZGV4OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICB1aWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHF1YW50aXR5OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmV0d29ya0Vycm9yLCBzZXROZXR3b3JrRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdHhCZWluZ1NlbnQsIHNldFR4QmVpbmdTZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9uRXJyb3IsIHNldFRyYW5zYWN0aW9uRXJyb3JdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbY3VycmVudEJhbGFuY2UsIHNldEN1cnJlbnRCYWxhbmNlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGU8QWxidW1Qcm9wc1tdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50Q29ubmVjdGlvbiwgc2V0Q3VycmVudENvbm5lY3Rpb25dID1cbiAgICB1c2VTdGF0ZTxDdXJyZW50Q29ubmVjdGlvblByb3BzPigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRDb25uZWN0aW9uPy5wcm92aWRlciAmJiBjdXJyZW50Q29ubmVjdGlvbi5zaWduZXIpe1xuICAgICAgICAgIHNldEN1cnJlbnRCYWxhbmNlKFxuICAgICAgICAgICAgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgIH0sIFtdKVxuXG4gIGNvbnN0IF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIVwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCEoYXdhaXQgX2NoZWNrTmV0d29yaygpKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcblxuICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKHNlbGVjdGVkQWNjb3VudCkpO1xuICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXG4gICAgICBcImFjY291bnRDaGFuZ2VkXCIsXG4gICAgICBhc3luYyhbbmV3QWNjb3VudF06IFtuZXdBY2NvdW50OiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmKG5ld0FjY291bnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcmV0dXJuIF9yZXNldFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhuZXdBY2NvdW50KSk7XG4gICAgICB9XG4gICAgKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChbX25ldHdvcmtJZF06IGFueSkgPT4ge1xuICAgICAgX3Jlc2V0U3RhdGUoKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBfaW5pdGlhbGl6ZSA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoc2VsZWN0ZWRBY2NvdW50KTtcblxuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIC4uLmN1cnJlbnRDb25uZWN0aW9uLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICBzaWduZXIsXG4gICAgICBzaG9wOiBNdXNpY1Nob3BfX2ZhY3RvcnkuY29ubmVjdChNVVNJQ19TSE9QX0FERFJFU1MsIHNpZ25lcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX3Jlc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0VHhCZWluZ1NlbnQodW5kZWZpbmVkKTtcbiAgICBzZXRDdXJyZW50QmFsYW5jZSh1bmRlZmluZWQpO1xuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIHByb3ZpZGVyOiB1bmRlZmluZWQsXG4gICAgICBzaWduZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNob3A6IHVuZGVmaW5lZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yID0gKCkgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2dldFJwY0Vycm9yTWVzc2FnZSA9IChlcnJvcjogYW55KTogc3RyaW5nID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICBpZihlcnJvci5kYXRhKXtcbiAgICAgIHJldHVybiBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHt0eEJlaW5nU2VudCAmJiA8V2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSB0eEhhc2g9e3R4QmVpbmdTZW50fSAvPn1cblxuICAgICAge1xuICAgICAgICB0cmFuc2NhdGlvbkVycm9yICYmIChcbiAgICAgICAgICA8VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgXG4gICAgICAgICAgICBtZXNzYWdlPXtfZ2V0UnBjRXJyb3JNRXNzYWdlKHRyYW5zYWN0aW9uRXJyb3IpfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBjdXJyZW50QmFsYW5jZSAmJiAoXG4gICAgICAgICAgPHA+WW91IGJhbGFuY2U6IHtldGhlcnMuZm9ybWF0RXRoZXIoY3VycmVudEJhbGFuY2UpfSBFVEg8L3A+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIk11c2ljU2hvcF9fZmFjdG9yeSIsIkNvbm5lY3RXYWxsZXQiLCJXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIiwiVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJ0eEJlaW5nU2VudCIsInNldFR4QmVpbmdTZW50IiwidHJhbnNhY3Rpb25FcnJvciIsInNldFRyYW5zYWN0aW9uRXJyb3IiLCJjdXJyZW50QmFsYW5jZSIsInNldEN1cnJlbnRCYWxhbmNlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJhbGJ1bXMiLCJzZXRBbGJ1bXMiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJfY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiX2NoZWNrTmV0d29yayIsInNlbGVjdGVkQWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJfaW5pdGlhbGl6ZSIsImdldEFkZHJlc3MiLCJvbiIsIm5ld0FjY291bnQiLCJfcmVzZXRTdGF0ZSIsIl9uZXR3b3JrSWQiLCJCcm93c2VyUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJzaG9wIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsIl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciIsIl9nZXRScGNFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsIm1haW4iLCJjb25uZWN0V2FsbGV0IiwiZGlzbWlzcyIsInAiLCJhZGRyZXNzIiwidHhIYXNoIiwidHJhbnNjYXRpb25FcnJvciIsIl9nZXRScGNFcnJvck1Fc3NhZ2UiLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});