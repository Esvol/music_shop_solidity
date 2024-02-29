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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"(app-pages-browser)/./src/components/ConnectWallet.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_4__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_4__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect(MUSIC_SHOP_ADDRESS, signer)\n        });\n    };\n    const _resetState = ()=>{\n        setNetworkError(undefined);\n        setCurrentConnection({\n            provider: undefined,\n            signer: undefined,\n            shop: undefined\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    const _dismissNetworkError = ()=>{\n        setNetworkError(undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            !(currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                connectWallet: _connectWallet,\n                networkError: networkError,\n                dismiss: _dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 116,\n                columnNumber: 11\n            }, this),\n            (currentConnection === null || currentConnection === void 0 ? void 0 : currentConnection.signer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Your address: \",\n                    currentConnection.signer.address\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 125,\n                columnNumber: 9\n            }, this),\n            transca\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"R+V0wCkO+fANluU2q+TrYRKfU6I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUs4QjtBQUNtQjtBQUlNO0FBR3RCO0FBRWpDLE1BQU1JLHFCQUFxQjtBQUMzQixNQUFNQyxxQkFBcUI7QUFtQlosU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdQLCtDQUFRQTtJQUUxRCxNQUFNUSxpQkFBaUI7UUFDckIsSUFBR0MsT0FBT0MsUUFBUSxLQUFLQyxXQUFVO1lBQy9CTixnQkFBZ0I7WUFFaEI7UUFDRjtRQUVBLElBQUcsQ0FBRSxNQUFNTyxpQkFBaUI7WUFDMUI7UUFDRjtRQUVBLE1BQU0sQ0FBQ0MsZ0JBQWdCLEdBQUcsTUFBTUosT0FBT0MsUUFBUSxDQUFDSSxPQUFPLENBQUM7WUFDdERDLFFBQVE7UUFDVjtRQUVBLE1BQU1DLFlBQVluQiw4Q0FBaUIsQ0FBQ2dCO1FBRXBDSixPQUFPQyxRQUFRLENBQUNRLEVBQUUsQ0FDaEIsa0JBQ0E7Z0JBQU0sQ0FBQ0MsV0FBaUM7WUFDdEMsSUFBR0EsZUFBZVIsV0FBVTtnQkFDMUIsT0FBT1M7WUFDVDtZQUVBLE1BQU1KLFlBQVluQiw4Q0FBaUIsQ0FBQ3NCO1FBQ3RDO1FBR0ZWLE9BQU9DLFFBQVEsQ0FBQ1EsRUFBRSxDQUFDLGdCQUFnQjtnQkFBQyxDQUFDRyxXQUFnQjtZQUNuREQ7UUFDRjtJQUVGO0lBRUEsTUFBTUosY0FBYyxPQUFPSDtRQUN6QixNQUFNUyxXQUFXLElBQUl6QixtREFBc0IsQ0FBQ1ksT0FBT0MsUUFBUTtRQUMzRCxNQUFNYyxTQUFTLE1BQU1GLFNBQVNHLFNBQVMsQ0FBQ1o7UUFFeENOLHFCQUFxQjtZQUNuQixHQUFHRCxpQkFBaUI7WUFDcEJnQjtZQUNBRTtZQUNBRSxNQUFNNUIsMERBQWtCQSxDQUFDNkIsT0FBTyxDQUFDekIsb0JBQW9Cc0I7UUFDdkQ7SUFDRjtJQUVBLE1BQU1KLGNBQWM7UUFDbEJmLGdCQUFnQk07UUFDaEJKLHFCQUFxQjtZQUNuQmUsVUFBVVg7WUFDVmEsUUFBUWI7WUFDUmUsTUFBTWY7UUFDUjtJQUNGO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCLE1BQU1nQixnQkFBZ0IsTUFBTW5CLE9BQU9DLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO1lBQ2xEQyxRQUFRO1FBQ1Y7UUFFQSxJQUFHYSxrQkFBa0IzQixvQkFBbUI7WUFDdEMsT0FBTztRQUNUO1FBRUFJLGdCQUFnQjtRQUNoQixPQUFPO0lBQ1Q7SUFFQSxNQUFNd0IsdUJBQXVCO1FBQzNCeEIsZ0JBQWdCTTtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDbUI7O1lBRUcsRUFBQ3hCLDhCQUFBQSx3Q0FBQUEsa0JBQW1Ca0IsTUFBTSxtQkFDeEIsOERBQUN6QixpRUFBYUE7Z0JBQ1pnQyxlQUFldkI7Z0JBQ2ZKLGNBQWNBO2dCQUNkNEIsU0FBU0g7Ozs7OztZQUtkdkIsQ0FBQUEsOEJBQUFBLHdDQUFBQSxrQkFBbUJrQixNQUFNLG1CQUN4Qiw4REFBQ1M7O29CQUFFO29CQUFlM0Isa0JBQWtCa0IsTUFBTSxDQUFDVSxPQUFPOzs7Ozs7O1lBSWxEQzs7Ozs7OztBQU1SO0dBbkd3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQge2V0aGVyc30gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IE11c2ljU2hvcF9fZmFjdG9yeSB9IGZyb20gXCJAL3R5cGVjaGFpblwiO1xuaW1wb3J0IHR5cGUge011c2ljU2hvcH0gZnJvbSAnQC90eXBlY2hhaW4nXG5pbXBvcnQgdHlwZSB7IEJyb3dzZXJQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcblxuaW1wb3J0IENvbm5lY3RXYWxsZXQgZnJvbSBcIkAvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0XCI7XG5pbXBvcnQgV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSBmcm9tIFwiQC9jb21wb25lbnRzL1dhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2VcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSBmcm9tIFwiQC9jb21wb25lbnRzL1RyYW5zYWN0aW9uRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSBcIjB4NTM5XCI7XG5jb25zdCBNVVNJQ19TSE9QX0FERFJFU1MgPSBcIjB4NWZiZGIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzZjY0MmY2NDE4MGFhM1wiO1xuXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxudHlwZSBDdXJyZW50Q29ubmVjdGlvblByb3BzID0ge1xuICBwcm92aWRlcjogQnJvd3NlclByb3ZpZGVyIHwgdW5kZWZpbmVkO1xuICBzaG9wOiBNdXNpY1Nob3AgfCB1bmRlZmluZWQ7XG4gIHNpZ25lcjogZXRoZXJzLkpzb25ScGNTaWduZXIgfCB1bmRlZmluZWQ7XG59O1xuXG50eXBlIEFsYnVtUHJvcHMgPSB7XG4gIGluZGV4OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICB1aWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpY2U6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHF1YW50aXR5OiBldGhlcnMuQmlnTnVtYmVyaXNoO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmV0d29ya0Vycm9yLCBzZXROZXR3b3JrRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbY3VycmVudENvbm5lY3Rpb24sIHNldEN1cnJlbnRDb25uZWN0aW9uXSA9IHVzZVN0YXRlPEN1cnJlbnRDb25uZWN0aW9uUHJvcHM+KClcbiAgXG4gIGNvbnN0IF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIVwiKTtcbiAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCEoYXdhaXQgX2NoZWNrTmV0d29yaygpKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcblxuICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKHNlbGVjdGVkQWNjb3VudCkpO1xuICBcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXG4gICAgICBcImFjY291bnRDaGFuZ2VkXCIsXG4gICAgICBhc3luYyhbbmV3QWNjb3VudF06IFtuZXdBY2NvdW50OiBzdHJpbmddKSA9PiB7XG4gICAgICAgIGlmKG5ld0FjY291bnQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcmV0dXJuIF9yZXNldFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBfaW5pdGlhbGl6ZShldGhlcnMuZ2V0QWRkcmVzcyhuZXdBY2NvdW50KSk7XG4gICAgICB9XG4gICAgKVxuXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChbX25ldHdvcmtJZF06IGFueSkgPT4ge1xuICAgICAgX3Jlc2V0U3RhdGUoKTtcbiAgICB9KVxuXG4gIH1cblxuICBjb25zdCBfaW5pdGlhbGl6ZSA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoc2VsZWN0ZWRBY2NvdW50KTtcblxuICAgIHNldEN1cnJlbnRDb25uZWN0aW9uKHtcbiAgICAgIC4uLmN1cnJlbnRDb25uZWN0aW9uLFxuICAgICAgcHJvdmlkZXIsXG4gICAgICBzaWduZXIsXG4gICAgICBzaG9wOiBNdXNpY1Nob3BfX2ZhY3RvcnkuY29ubmVjdChNVVNJQ19TSE9QX0FERFJFU1MsIHNpZ25lcilcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX3Jlc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgc2V0TmV0d29ya0Vycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0Q3VycmVudENvbm5lY3Rpb24oe1xuICAgICAgcHJvdmlkZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNpZ25lcjogdW5kZWZpbmVkLFxuICAgICAgc2hvcDogdW5kZWZpbmVkLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBfY2hlY2tOZXR3b3JrID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IGNob3NlbkNoYWluSWQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX2NoYWluSWRcIixcbiAgICB9KVxuICBcbiAgICBpZihjaG9zZW5DaGFpbklkID09PSBIQVJESEFUX05FVFdPUktfSUQpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc2V0TmV0d29ya0Vycm9yKFwiUGxlYXNlIGNvbm5lY3QgdG8gSGFyZGhhdCBuZXR3b3JrIChsb2NhbGhvc3Q6ODU0NSkhXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IF9kaXNtaXNzTmV0d29ya0Vycm9yID0gKCkgPT4ge1xuICAgIHNldE5ldHdvcmtFcnJvcih1bmRlZmluZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAge1xuICAgICAgICAhY3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgICAgPENvbm5lY3RXYWxsZXQgXG4gICAgICAgICAgICBjb25uZWN0V2FsbGV0PXtfY29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcj17bmV0d29ya0Vycm9yfVxuICAgICAgICAgICAgZGlzbWlzcz17X2Rpc21pc3NOZXR3b3JrRXJyb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB7Y3VycmVudENvbm5lY3Rpb24/LnNpZ25lciAmJiAoXG4gICAgICAgIDxwPllvdXIgYWRkcmVzczoge2N1cnJlbnRDb25uZWN0aW9uLnNpZ25lci5hZGRyZXNzfTwvcD5cbiAgICAgICl9XG5cbiAgICAgIHtcbiAgICAgICAgdHJhbnNjYVxuICAgICAgfVxuXG4gICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiTXVzaWNTaG9wX19mYWN0b3J5IiwiQ29ubmVjdFdhbGxldCIsInVzZVN0YXRlIiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiTVVTSUNfU0hPUF9BRERSRVNTIiwiSG9tZSIsIm5ldHdvcmtFcnJvciIsInNldE5ldHdvcmtFcnJvciIsImN1cnJlbnRDb25uZWN0aW9uIiwic2V0Q3VycmVudENvbm5lY3Rpb24iLCJfY29ubmVjdFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiX2NoZWNrTmV0d29yayIsInNlbGVjdGVkQWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJfaW5pdGlhbGl6ZSIsImdldEFkZHJlc3MiLCJvbiIsIm5ld0FjY291bnQiLCJfcmVzZXRTdGF0ZSIsIl9uZXR3b3JrSWQiLCJwcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsInNob3AiLCJjb25uZWN0IiwiY2hvc2VuQ2hhaW5JZCIsIl9kaXNtaXNzTmV0d29ya0Vycm9yIiwibWFpbiIsImNvbm5lY3RXYWxsZXQiLCJkaXNtaXNzIiwicCIsImFkZHJlc3MiLCJ0cmFuc2NhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});