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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WaitingForTransactionMessage */ \"(app-pages-browser)/./src/components/WaitingForTransactionMessage.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txBeingSent, setTxBeingSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [transactionError, setTransactionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [currentBalance, setCurrentBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [albums, setAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.provider) && currentConnection.signer) {\n                setCurrentBalance((await currentConnection.provider.getBalance(currentConnection.signer.address)).toString());\n            }\n        })();\n    }, [\n        currentConnection,\n        txBeingSent\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async ()=>{\n            if ((currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.shop) && currentConnection.signer) {\n                setIsOwner(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress);\n            }\n        };\n    });\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_6__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_2__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setTxBeingSent(undefined);\n        setCurrentBalance(undefined);\n        setIsOwner(false);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    const _dismissTransactionError = ()=>{\n        setTransactionError(undefined);\n    };\n    const _getRpcErrorMessage = (error)=>{\n        console.log(error);\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 163,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 172,\n                columnNumber: 9\n            }, this),\n            txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitingForTransactionMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                txHash: txBeingSent\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 175,\n                columnNumber: 23\n            }, this),\n            transactionError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                message: _getRpcErrorMessage(transactionError),\n                dismiss: _dismissTransactionError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 179,\n                columnNumber: 11\n            }, this),\n            currentBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"You balance: \",\n                    ethers__WEBPACK_IMPORTED_MODULE_8__.formatEther(currentBalance),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 188,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OnD79TCfQdInUiTnZPM51nshNd4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87SUFDVDtJQUVBLE1BQU1xQyx1QkFBdUI7UUFDM0JyQyxnQkFBZ0J1QjtJQUNsQjtJQUVBLE1BQU1lLDJCQUEyQjtRQUMvQmxDLG9CQUFvQm1CO0lBQ3RCO0lBRUEsTUFBTWdCLHNCQUFzQixDQUFDQztRQUMzQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLElBQUdBLE1BQU1HLElBQUksRUFBQztZQUNaLE9BQU9ILE1BQU1HLElBQUksQ0FBQ0MsT0FBTztRQUMzQjtRQUVBLE9BQU9KLE1BQU1JLE9BQU87SUFDdEI7SUFFQSxxQkFDRSw4REFBQ0M7O1lBRUcsRUFBQ2xDLDhCQUFBQSx3Q0FBQUEsa0JBQW1CRyxNQUFNLG1CQUN4Qiw4REFBQ3JCLGlFQUFhQTtnQkFDWnFELGVBQWUxQjtnQkFDZnJCLGNBQWNBO2dCQUNkZ0QsU0FBU1Y7Ozs7OztZQUtkMUIsQ0FBQUEsOEJBQUFBLHdDQUFBQSxrQkFBbUJHLE1BQU0sbUJBQ3hCLDhEQUFDa0M7O29CQUFFO29CQUFlckMsa0JBQWtCRyxNQUFNLENBQUNFLE9BQU87Ozs7Ozs7WUFHbkRmLDZCQUFlLDhEQUFDUCxnRkFBNEJBO2dCQUFDdUQsUUFBUWhEOzs7Ozs7WUFHcERFLGtDQUNFLDhEQUFDUiwyRUFBdUJBO2dCQUN0QmlELFNBQVNMLG9CQUFvQnBDO2dCQUM3QjRDLFNBQVNUOzs7Ozs7WUFNYmpDLGdDQUNFLDhEQUFDMkM7O29CQUFFO29CQUFjekQsK0NBQWtCLENBQUNjO29CQUFnQjs7Ozs7Ozs7Ozs7OztBQU85RDtHQTlKd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgTXVzaWNTaG9wX19mYWN0b3J5IH0gZnJvbSBcIkAvdHlwZWNoYWluXCI7XG5pbXBvcnQgdHlwZSB7TXVzaWNTaG9wfSBmcm9tICdAL3R5cGVjaGFpbidcbmltcG9ydCB0eXBlIHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VcIjtcblxuY29uc3QgSEFSREhBVF9ORVRXT1JLX0lEID0gXCIweDUzOVwiO1xuY29uc3QgTVVTSUNfU0hPUF9BRERSRVNTID0gXCIweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTNcIjtcblxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbnR5cGUgQ3VycmVudENvbm5lY3Rpb25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IEJyb3dzZXJQcm92aWRlciB8IHVuZGVmaW5lZDtcbiAgc2hvcDogTXVzaWNTaG9wIHwgdW5kZWZpbmVkO1xuICBzaWduZXI6IGV0aGVycy5Kc29uUnBjU2lnbmVyIHwgdW5kZWZpbmVkO1xufTtcblxudHlwZSBBbGJ1bVByb3BzID0ge1xuICBpbmRleDogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgdWlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICBxdWFudGl0eTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ldHdvcmtFcnJvciwgc2V0TmV0d29ya0Vycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3R4QmVpbmdTZW50LCBzZXRUeEJlaW5nU2VudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbkVycm9yLCBzZXRUcmFuc2FjdGlvbkVycm9yXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2N1cnJlbnRCYWxhbmNlLCBzZXRDdXJyZW50QmFsYW5jZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2FsYnVtcywgc2V0QWxidW1zXSA9IHVzZVN0YXRlPEFsYnVtUHJvcHNbXT4oW10pO1xuICBjb25zdCBbY3VycmVudENvbm5lY3Rpb24sIHNldEN1cnJlbnRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPEN1cnJlbnRDb25uZWN0aW9uUHJvcHM+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYoY3VycmVudENvbm5lY3Rpb24/LnByb3ZpZGVyICYmIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lcil7XG4gICAgICAgIHNldEN1cnJlbnRCYWxhbmNlKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIGF3YWl0IGN1cnJlbnRDb25uZWN0aW9uLnByb3ZpZGVyLmdldEJhbGFuY2UoXG4gICAgICAgICAgICAgIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKS50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfSwgW2N1cnJlbnRDb25uZWN0aW9uLCB0eEJlaW5nU2VudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRDb25uZWN0aW9uPy5zaG9wICYmIGN1cnJlbnRDb25uZWN0aW9uLnNpZ25lcil7XG4gICAgICAgIHNldElzT3duZXIoXG4gICAgICAgICAgZXRoZXJzLmdldEFkZHJlc3NcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgX2Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpe1xuICAgICAgc2V0TmV0d29ya0Vycm9yKFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2shXCIpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIShhd2FpdCBfY2hlY2tOZXR3b3JrKCkpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRBY2NvdW50XSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJcbiAgICB9KVxuXG4gICAgYXdhaXQgX2luaXRpYWxpemUoZXRoZXJzLmdldEFkZHJlc3Moc2VsZWN0ZWRBY2NvdW50KSk7XG4gIFxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcbiAgICAgIFwiYWNjb3VudENoYW5nZWRcIixcbiAgICAgIGFzeW5jKFtuZXdBY2NvdW50XTogW25ld0FjY291bnQ6IHN0cmluZ10pID0+IHtcbiAgICAgICAgaWYobmV3QWNjb3VudCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICByZXR1cm4gX3Jlc2V0U3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKG5ld0FjY291bnQpKTtcbiAgICAgIH1cbiAgICApXG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJjaGFpbkNoYW5nZWRcIiwgKFtfbmV0d29ya0lkXTogYW55KSA9PiB7XG4gICAgICBfcmVzZXRTdGF0ZSgpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IF9pbml0aWFsaXplID0gYXN5bmMgKHNlbGVjdGVkQWNjb3VudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcihzZWxlY3RlZEFjY291bnQpO1xuXG4gICAgc2V0Q3VycmVudENvbm5lY3Rpb24oe1xuICAgICAgLi4uY3VycmVudENvbm5lY3Rpb24sXG4gICAgICBwcm92aWRlcixcbiAgICAgIHNpZ25lcixcbiAgICAgIHNob3A6IE11c2ljU2hvcF9fZmFjdG9yeS5jb25uZWN0KE1VU0lDX1NIT1BfQUREUkVTUywgc2lnbmVyKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBfcmVzZXRTdGF0ZSA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKTtcbiAgICBzZXRUeEJlaW5nU2VudCh1bmRlZmluZWQpO1xuICAgIHNldEN1cnJlbnRCYWxhbmNlKHVuZGVmaW5lZCk7XG4gICAgc2V0SXNPd25lcihmYWxzZSk7XG4gICAgc2V0Q3VycmVudENvbm5lY3Rpb24oe1xuICAgICAgcHJvdmlkZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNpZ25lcjogdW5kZWZpbmVkLFxuICAgICAgc2hvcDogdW5kZWZpbmVkLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBfY2hlY2tOZXR3b3JrID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IGNob3NlbkNoYWluSWQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX2NoYWluSWRcIixcbiAgICB9KVxuICBcbiAgICBpZihjaG9zZW5DaGFpbklkID09PSBIQVJESEFUX05FVFdPUktfSUQpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc2V0TmV0d29ya0Vycm9yKFwiUGxlYXNlIGNvbm5lY3QgdG8gSGFyZGhhdCBuZXR3b3JrIChsb2NhbGhvc3Q6ODU0NSkhXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IF9kaXNtaXNzTmV0d29ya0Vycm9yID0gKCkgPT4ge1xuICAgIHNldE5ldHdvcmtFcnJvcih1bmRlZmluZWQpXG4gIH1cblxuICBjb25zdCBfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3IgPSAoKSA9PiB7XG4gICAgc2V0VHJhbnNhY3Rpb25FcnJvcih1bmRlZmluZWQpXG4gIH1cblxuICBjb25zdCBfZ2V0UnBjRXJyb3JNZXNzYWdlID0gKGVycm9yOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgIGlmKGVycm9yLmRhdGEpe1xuICAgICAgcmV0dXJuIGVycm9yLmRhdGEubWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7XG4gICAgICAgICFjdXJyZW50Q29ubmVjdGlvbj8uc2lnbmVyICYmIChcbiAgICAgICAgICA8Q29ubmVjdFdhbGxldCBcbiAgICAgICAgICAgIGNvbm5lY3RXYWxsZXQ9e19jb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgbmV0d29ya0Vycm9yPXtuZXR3b3JrRXJyb3J9XG4gICAgICAgICAgICBkaXNtaXNzPXtfZGlzbWlzc05ldHdvcmtFcnJvcn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHtjdXJyZW50Q29ubmVjdGlvbj8uc2lnbmVyICYmIChcbiAgICAgICAgPHA+WW91ciBhZGRyZXNzOiB7Y3VycmVudENvbm5lY3Rpb24uc2lnbmVyLmFkZHJlc3N9PC9wPlxuICAgICAgKX1cblxuICAgICAge3R4QmVpbmdTZW50ICYmIDxXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIHR4SGFzaD17dHhCZWluZ1NlbnR9IC8+fVxuXG4gICAgICB7XG4gICAgICAgIHRyYW5zYWN0aW9uRXJyb3IgJiYgKFxuICAgICAgICAgIDxUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSBcbiAgICAgICAgICAgIG1lc3NhZ2U9e19nZXRScGNFcnJvck1lc3NhZ2UodHJhbnNhY3Rpb25FcnJvcil9XG4gICAgICAgICAgICBkaXNtaXNzPXtfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRCYWxhbmNlICYmIChcbiAgICAgICAgICA8cD5Zb3UgYmFsYW5jZToge2V0aGVycy5mb3JtYXRFdGhlcihjdXJyZW50QmFsYW5jZSl9IEVUSDwvcD5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJNdXNpY1Nob3BfX2ZhY3RvcnkiLCJDb25uZWN0V2FsbGV0IiwiV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSIsIlRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiTVVTSUNfU0hPUF9BRERSRVNTIiwiSG9tZSIsIm5ldHdvcmtFcnJvciIsInNldE5ldHdvcmtFcnJvciIsInR4QmVpbmdTZW50Iiwic2V0VHhCZWluZ1NlbnQiLCJ0cmFuc2FjdGlvbkVycm9yIiwic2V0VHJhbnNhY3Rpb25FcnJvciIsImN1cnJlbnRCYWxhbmNlIiwic2V0Q3VycmVudEJhbGFuY2UiLCJpc093bmVyIiwic2V0SXNPd25lciIsImFsYnVtcyIsInNldEFsYnVtcyIsImN1cnJlbnRDb25uZWN0aW9uIiwic2V0Q3VycmVudENvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImdldEJhbGFuY2UiLCJhZGRyZXNzIiwidG9TdHJpbmciLCJzaG9wIiwiZ2V0QWRkcmVzcyIsIl9jb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ1bmRlZmluZWQiLCJfY2hlY2tOZXR3b3JrIiwic2VsZWN0ZWRBY2NvdW50IiwicmVxdWVzdCIsIm1ldGhvZCIsIl9pbml0aWFsaXplIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwiQnJvd3NlclByb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsIl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvciIsIl9nZXRScGNFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsIm1haW4iLCJjb25uZWN0V2FsbGV0IiwiZGlzbWlzcyIsInAiLCJ0eEhhc2giLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});