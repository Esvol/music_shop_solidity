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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.provider) && currentConnection.signer) {\n                setCurrentBalance((await currentConnection.provider.getBalance(currentConnection.signer.address)).toString());\n            }\n        })();\n    }, [\n        currentConnection,\n        txBeingSent\n    ]);\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_2__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentBalance(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 153,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 165,\n                columnNumber: 23\n            }, this),\n            currentBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You balance: \",\n                    ethers__WEBPACK_IMPORTED_MODULE_7__.formatEther(currentBalance),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 178,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 150,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LMFtU4IWNXX/T0EqwcIzfBDUXAM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUdBLE1BQU1HLElBQUksRUFBQztZQUNaLE9BQU9ILE1BQU1HLElBQUksQ0FBQ0MsT0FBTztRQUMzQjtRQUVBLE9BQU9KLE1BQU1JLE9BQU87SUFDdEI7SUFFQSxxQkFDRSw4REFBQ0M7O1lBRUcsRUFBQ2xDLDhCQUFBQSx3Q0FBQUEsa0JBQW1CRyxNQUFNLG1CQUN4Qiw4REFBQ3BCLGlFQUFhQTtnQkFDWm9ELGVBQWU1QjtnQkFDZm5CLGNBQWNBO2dCQUNkZ0QsU0FBU1Y7Ozs7OztZQUtkMUIsQ0FBQUEsOEJBQUFBLHdDQUFBQSxrQkFBbUJHLE1BQU0sbUJBQ3hCLDhEQUFDa0M7O29CQUFFO29CQUFlckMsa0JBQWtCRyxNQUFNLENBQUNFLE9BQU87Ozs7Ozs7WUFHbkRmLDZCQUFlLDhEQUFDTixnRkFBNEJBO2dCQUFDc0QsUUFBUWhEOzs7Ozs7WUFZcERJLGdDQUNFLDhEQUFDMkM7O29CQUFFO29CQUFjeEQsK0NBQWtCLENBQUNhO29CQUFnQjs7Ozs7Ozs7Ozs7OztBQU85RDtHQXBKd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgTXVzaWNTaG9wX19mYWN0b3J5IH0gZnJvbSBcIkAvdHlwZWNoYWluXCI7XG5pbXBvcnQgdHlwZSB7TXVzaWNTaG9wfSBmcm9tICdAL3R5cGVjaGFpbidcbmltcG9ydCB0eXBlIHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VcIjtcblxuY29uc3QgSEFSREhBVF9ORVRXT1JLX0lEID0gXCIweDUzOVwiO1xuY29uc3QgTVVTSUNfU0hPUF9BRERSRVNTID0gXCIweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTNcIjtcblxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbnR5cGUgQ3VycmVudENvbm5lY3Rpb25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IEJyb3dzZXJQcm92aWRlciB8IHVuZGVmaW5lZDtcbiAgc2hvcDogTXVzaWNTaG9wIHwgdW5kZWZpbmVkO1xuICBzaWduZXI6IGV0aGVycy5Kc29uUnBjU2lnbmVyIHwgdW5kZWZpbmVkO1xufTtcblxudHlwZSBBbGJ1bVByb3BzID0ge1xuICBpbmRleDogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgdWlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICBxdWFudGl0eTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ldHdvcmtFcnJvciwgc2V0TmV0d29ya0Vycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3R4QmVpbmdTZW50LCBzZXRUeEJlaW5nU2VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbkVycm9yLCBzZXRUcmFuc2FjdGlvbkVycm9yXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2N1cnJlbnRCYWxhbmNlLCBzZXRDdXJyZW50QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FsYnVtcywgc2V0QWxidW1zXSA9IHVzZVN0YXRlPEFsYnVtUHJvcHNbXT4oW10pO1xuICBjb25zdCBbY3VycmVudENvbm5lY3Rpb24sIHNldEN1cnJlbnRDb25uZWN0aW9uXSA9XG4gICAgdXNlU3RhdGU8Q3VycmVudENvbm5lY3Rpb25Qcm9wcz4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50Q29ubmVjdGlvbj8ucHJvdmlkZXIgJiYgY3VycmVudENvbm5lY3Rpb24uc2lnbmVyKXtcbiAgICAgICAgICBzZXRDdXJyZW50QmFsYW5jZShcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgYXdhaXQgY3VycmVudENvbm5lY3Rpb24ucHJvdmlkZXIuZ2V0QmFsYW5jZShcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29ubmVjdGlvbi5zaWduZXIuYWRkcmVzc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLnRvU3RyaW5nKClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgIH0sIFtjdXJyZW50Q29ubmVjdGlvbiwgdHhCZWluZ1NlbnRdKVxuXG4gIGNvbnN0IF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIVwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCEoYXdhaXQgX2NoZWNrTmV0d29yaygpKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcblxuICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKHNlbGVjdGVkQWNjb3VudCkpO1xuICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXG4gICAgICBcImFjY291bnRDaGFuZ2VkXCIsXG4gICAgICBhc3luYyhbbmV3QWNjb3VudF06IFtuZXdBY2NvdW50OiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmKG5ld0FjY291bnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcmV0dXJuIF9yZXNldFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhuZXdBY2NvdW50KSk7XG4gICAgICB9XG4gICAgKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChbX25ldHdvcmtJZF06IGFueSkgPT4ge1xuICAgICAgX3Jlc2V0U3RhdGUoKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBfaW5pdGlhbGl6ZSA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoc2VsZWN0ZWRBY2NvdW50KTtcblxuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIC4uLmN1cnJlbnRDb25uZWN0aW9uLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICBzaWduZXIsXG4gICAgICBzaG9wOiBNdXNpY1Nob3BfX2ZhY3RvcnkuY29ubmVjdChNVVNJQ19TSE9QX0FERFJFU1MsIHNpZ25lcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX3Jlc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0VHhCZWluZ1NlbnQodW5kZWZpbmVkKTtcbiAgICBzZXRDdXJyZW50QmFsYW5jZSh1bmRlZmluZWQpO1xuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIHByb3ZpZGVyOiB1bmRlZmluZWQsXG4gICAgICBzaWduZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNob3A6IHVuZGVmaW5lZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yID0gKCkgPT4ge1xuICAgIHNldFRyYW5zYWN0aW9uRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgY29uc3QgX2dldFJwY0Vycm9yTWVzc2FnZSA9IChlcnJvcjogYW55KTogc3RyaW5nID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICBpZihlcnJvci5kYXRhKXtcbiAgICAgIHJldHVybiBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHt0eEJlaW5nU2VudCAmJiA8V2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSB0eEhhc2g9e3R4QmVpbmdTZW50fSAvPn1cblxuICAgICAgey8qIHtcbiAgICAgICAgdHJhbnNjYXRpb25FcnJvciAmJiAoXG4gICAgICAgICAgPFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIFxuICAgICAgICAgICAgbWVzc2FnZT17X2dldFJwY0Vycm9yTUVzc2FnZSh0cmFuc2FjdGlvbkVycm9yKX1cbiAgICAgICAgICAgIGRpc21pc3M9e19kaXNtaXNzVHJhbnNhY3Rpb25FcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9ICovfVxuXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRCYWxhbmNlICYmIChcbiAgICAgICAgICA8cD5Zb3UgYmFsYW5jZToge2V0aGVycy5mb3JtYXRFdGhlcihjdXJyZW50QmFsYW5jZSl9IEVUSDwvcD5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJNdXNpY1Nob3BfX2ZhY3RvcnkiLCJDb25uZWN0V2FsbGV0IiwiV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJ0eEJlaW5nU2VudCIsInNldFR4QmVpbmdTZW50IiwidHJhbnNhY3Rpb25FcnJvciIsInNldFRyYW5zYWN0aW9uRXJyb3IiLCJjdXJyZW50QmFsYW5jZSIsInNldEN1cnJlbnRCYWxhbmNlIiwiaXNPd25lciIsInNldElzT3duZXIiLCJhbGJ1bXMiLCJzZXRBbGJ1bXMiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRCYWxhbmNlIiwiYWRkcmVzcyIsInRvU3RyaW5nIiwiX2Nvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIl9jaGVja05ldHdvcmsiLCJzZWxlY3RlZEFjY291bnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiX2luaXRpYWxpemUiLCJnZXRBZGRyZXNzIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwiQnJvd3NlclByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwic2hvcCIsImNvbm5lY3QiLCJjaG9zZW5DaGFpbklkIiwiX2Rpc21pc3NOZXR3b3JrRXJyb3IiLCJfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3IiLCJfZ2V0UnBjRXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJtYWluIiwiY29ubmVjdFdhbGxldCIsImRpc21pc3MiLCJwIiwidHhIYXNoIiwiZm9ybWF0RXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});