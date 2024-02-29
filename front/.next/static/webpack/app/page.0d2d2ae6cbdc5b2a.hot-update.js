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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TransactionErrorMessage */ \"(app-pages-browser)/./src/components/TransactionErrorMessage.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_5__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 116,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this),\n            transcationError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                message: _getRpcErrorMEssage(transactionError)\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 130,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"R+V0wCkO+fANluU2q+TrYRKfU6I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLOEI7QUFDbUI7QUFJTTtBQUVvQjtBQUMxQztBQUVqQyxNQUFNSyxxQkFBcUI7QUFDM0IsTUFBTUMscUJBQXFCO0FBbUJaLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUE7SUFDaEQsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUE7SUFFMUQsTUFBTVEsaUJBQWlCO1FBQ3JCLElBQUdDLE9BQU9DLFFBQVEsS0FBS0MsV0FBVTtZQUMvQk4sZ0JBQWdCO1lBRWhCO1FBQ0Y7UUFFQSxJQUFHLENBQUUsTUFBTU8saUJBQWlCO1lBQzFCO1FBQ0Y7UUFFQSxNQUFNLENBQUNDLGdCQUFnQixHQUFHLE1BQU1KLE9BQU9DLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO1lBQ3REQyxRQUFRO1FBQ1Y7UUFFQSxNQUFNQyxZQUFZcEIsOENBQWlCLENBQUNpQjtRQUVwQ0osT0FBT0MsUUFBUSxDQUFDUSxFQUFFLENBQ2hCLGtCQUNBO2dCQUFNLENBQUNDLFdBQWlDO1lBQ3RDLElBQUdBLGVBQWVSLFdBQVU7Z0JBQzFCLE9BQU9TO1lBQ1Q7WUFFQSxNQUFNSixZQUFZcEIsOENBQWlCLENBQUN1QjtRQUN0QztRQUdGVixPQUFPQyxRQUFRLENBQUNRLEVBQUUsQ0FBQyxnQkFBZ0I7Z0JBQUMsQ0FBQ0csV0FBZ0I7WUFDbkREO1FBQ0Y7SUFFRjtJQUVBLE1BQU1KLGNBQWMsT0FBT0g7UUFDekIsTUFBTVMsV0FBVyxJQUFJMUIsbURBQXNCLENBQUNhLE9BQU9DLFFBQVE7UUFDM0QsTUFBTWMsU0FBUyxNQUFNRixTQUFTRyxTQUFTLENBQUNaO1FBRXhDTixxQkFBcUI7WUFDbkIsR0FBR0QsaUJBQWlCO1lBQ3BCZ0I7WUFDQUU7WUFDQUUsTUFBTTdCLDBEQUFrQkEsQ0FBQzhCLE9BQU8sQ0FBQ3pCLG9CQUFvQnNCO1FBQ3ZEO0lBQ0Y7SUFFQSxNQUFNSixjQUFjO1FBQ2xCZixnQkFBZ0JNO1FBQ2hCSixxQkFBcUI7WUFDbkJlLFVBQVVYO1lBQ1ZhLFFBQVFiO1lBQ1JlLE1BQU1mO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQixNQUFNZ0IsZ0JBQWdCLE1BQU1uQixPQUFPQyxRQUFRLENBQUNJLE9BQU8sQ0FBQztZQUNsREMsUUFBUTtRQUNWO1FBRUEsSUFBR2Esa0JBQWtCM0Isb0JBQW1CO1lBQ3RDLE9BQU87UUFDVDtRQUVBSSxnQkFBZ0I7UUFDaEIsT0FBTztJQUNUO0lBRUEsTUFBTXdCLHVCQUF1QjtRQUMzQnhCLGdCQUFnQk07SUFDbEI7SUFFQSxxQkFDRSw4REFBQ21COztZQUVHLEVBQUN4Qiw4QkFBQUEsd0NBQUFBLGtCQUFtQmtCLE1BQU0sbUJBQ3hCLDhEQUFDMUIsaUVBQWFBO2dCQUNaaUMsZUFBZXZCO2dCQUNmSixjQUFjQTtnQkFDZDRCLFNBQVNIOzs7Ozs7WUFLZHZCLENBQUFBLDhCQUFBQSx3Q0FBQUEsa0JBQW1Ca0IsTUFBTSxtQkFDeEIsOERBQUNTOztvQkFBRTtvQkFBZTNCLGtCQUFrQmtCLE1BQU0sQ0FBQ1UsT0FBTzs7Ozs7OztZQUlsREMsa0NBQ0UsOERBQUNwQywyRUFBdUJBO2dCQUN4QnFDLFNBQVNDLG9CQUFvQkM7Ozs7Ozs7Ozs7OztBQU92QztHQXRHd0JuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHtldGhlcnN9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBNdXNpY1Nob3BfX2ZhY3RvcnkgfSBmcm9tIFwiQC90eXBlY2hhaW5cIjtcbmltcG9ydCB0eXBlIHtNdXNpY1Nob3B9IGZyb20gJ0AvdHlwZWNoYWluJ1xuaW1wb3J0IHR5cGUgeyBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9XYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSEFSREhBVF9ORVRXT1JLX0lEID0gXCIweDUzOVwiO1xuY29uc3QgTVVTSUNfU0hPUF9BRERSRVNTID0gXCIweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTNcIjtcblxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbnR5cGUgQ3VycmVudENvbm5lY3Rpb25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IEJyb3dzZXJQcm92aWRlciB8IHVuZGVmaW5lZDtcbiAgc2hvcDogTXVzaWNTaG9wIHwgdW5kZWZpbmVkO1xuICBzaWduZXI6IGV0aGVycy5Kc29uUnBjU2lnbmVyIHwgdW5kZWZpbmVkO1xufTtcblxudHlwZSBBbGJ1bVByb3BzID0ge1xuICBpbmRleDogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgdWlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICBxdWFudGl0eTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ldHdvcmtFcnJvciwgc2V0TmV0d29ya0Vycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2N1cnJlbnRDb25uZWN0aW9uLCBzZXRDdXJyZW50Q29ubmVjdGlvbl0gPSB1c2VTdGF0ZTxDdXJyZW50Q29ubmVjdGlvblByb3BzPigpXG4gIFxuICBjb25zdCBfY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICBpZih3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCl7XG4gICAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzayFcIik7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighKGF3YWl0IF9jaGVja05ldHdvcmsoKSkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFtzZWxlY3RlZEFjY291bnRdID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIlxuICAgIH0pXG5cbiAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhzZWxlY3RlZEFjY291bnQpKTtcbiAgXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFxuICAgICAgXCJhY2NvdW50Q2hhbmdlZFwiLFxuICAgICAgYXN5bmMoW25ld0FjY291bnRdOiBbbmV3QWNjb3VudDogc3RyaW5nXSkgPT4ge1xuICAgICAgICBpZihuZXdBY2NvdW50ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgIHJldHVybiBfcmVzZXRTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgX2luaXRpYWxpemUoZXRoZXJzLmdldEFkZHJlc3MobmV3QWNjb3VudCkpO1xuICAgICAgfVxuICAgIClcblxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcImNoYWluQ2hhbmdlZFwiLCAoW19uZXR3b3JrSWRdOiBhbnkpID0+IHtcbiAgICAgIF9yZXNldFN0YXRlKCk7XG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgX2luaXRpYWxpemUgPSBhc3luYyAoc2VsZWN0ZWRBY2NvdW50OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKHNlbGVjdGVkQWNjb3VudCk7XG5cbiAgICBzZXRDdXJyZW50Q29ubmVjdGlvbih7XG4gICAgICAuLi5jdXJyZW50Q29ubmVjdGlvbixcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgc2lnbmVyLFxuICAgICAgc2hvcDogTXVzaWNTaG9wX19mYWN0b3J5LmNvbm5lY3QoTVVTSUNfU0hPUF9BRERSRVNTLCBzaWduZXIpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IF9yZXNldFN0YXRlID0gKCkgPT4ge1xuICAgIHNldE5ldHdvcmtFcnJvcih1bmRlZmluZWQpO1xuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIHByb3ZpZGVyOiB1bmRlZmluZWQsXG4gICAgICBzaWduZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNob3A6IHVuZGVmaW5lZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcbiAgICBzZXROZXR3b3JrRXJyb3IodW5kZWZpbmVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIHtcbiAgICAgICAgIWN1cnJlbnRDb25uZWN0aW9uPy5zaWduZXIgJiYgKFxuICAgICAgICAgIDxDb25uZWN0V2FsbGV0IFxuICAgICAgICAgICAgY29ubmVjdFdhbGxldD17X2Nvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I9e25ldHdvcmtFcnJvcn1cbiAgICAgICAgICAgIGRpc21pc3M9e19kaXNtaXNzTmV0d29ya0Vycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAge2N1cnJlbnRDb25uZWN0aW9uPy5zaWduZXIgJiYgKFxuICAgICAgICA8cD5Zb3VyIGFkZHJlc3M6IHtjdXJyZW50Q29ubmVjdGlvbi5zaWduZXIuYWRkcmVzc308L3A+XG4gICAgICApfVxuXG4gICAgICB7XG4gICAgICAgIHRyYW5zY2F0aW9uRXJyb3IgJiYgKFxuICAgICAgICAgIDxUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSBcbiAgICAgICAgICBtZXNzYWdlPXtfZ2V0UnBjRXJyb3JNRXNzYWdlKHRyYW5zYWN0aW9uRXJyb3IpfS8+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIk11c2ljU2hvcF9fZmFjdG9yeSIsIkNvbm5lY3RXYWxsZXQiLCJUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSIsInVzZVN0YXRlIiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiTVVTSUNfU0hPUF9BRERSRVNTIiwiSG9tZSIsIm5ldHdvcmtFcnJvciIsInNldE5ldHdvcmtFcnJvciIsImN1cnJlbnRDb25uZWN0aW9uIiwic2V0Q3VycmVudENvbm5lY3Rpb24iLCJfY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiX2NoZWNrTmV0d29yayIsInNlbGVjdGVkQWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJfaW5pdGlhbGl6ZSIsImdldEFkZHJlc3MiLCJvbiIsIm5ld0FjY291bnQiLCJfcmVzZXRTdGF0ZSIsIl9uZXR3b3JrSWQiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsInNob3AiLCJjb25uZWN0IiwiY2hvc2VuQ2hhaW5JZCIsIl9kaXNtaXNzTmV0d29ya0Vycm9yIiwibWFpbiIsImNvbm5lY3RXYWxsZXQiLCJkaXNtaXNzIiwicCIsImFkZHJlc3MiLCJ0cmFuc2NhdGlvbkVycm9yIiwibWVzc2FnZSIsIl9nZXRScGNFcnJvck1Fc3NhZ2UiLCJ0cmFuc2FjdGlvbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});