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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"TqMhJ2HR839fx/+DBHEhh1KLt9o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBYWlDO0FBRWpDLE1BQU1DLHFCQUFxQjtBQUMzQixNQUFNQyxxQkFBcUI7QUFtQlosU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQTtJQUVoRCxNQUFNTSxpQkFBaUI7UUFDckIsSUFBR0MsT0FBT0MsUUFBUSxLQUFLQyxXQUFVO1lBQy9CSixnQkFBZ0I7WUFFaEI7UUFDRjtRQUVBLElBQUcsQ0FBRSxNQUFNSyxpQkFBaUI7WUFDMUI7UUFDRjtJQUNGO0lBRUEsTUFBTUEsZ0JBQWdCO1FBQ3BCLE1BQU1DLGdCQUFnQixNQUFNSixPQUFPQyxRQUFRLENBQUNJLE9BQU8sQ0FBQztZQUNsREMsUUFBUTtRQUNWO1FBRUEsSUFBR0Ysa0JBQWtCVixvQkFBbUI7WUFDdEMsT0FBTztRQUNUO1FBRUFJLGdCQUFnQjtRQUNoQixPQUFPO1FBRVAsTUFBTSxDQUFDUyxnQkFBZ0IsR0FBRyxNQUFNUCxPQUFPQyxRQUFRLENBQUNJLE9BQU8sQ0FBQztZQUN0REMsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7Ozs7O0FBSUw7R0FyQ3dCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHtldGhlcnN9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBNdXNpY1Nob3BfX2ZhY3RvcnkgfSBmcm9tIFwiQC90eXBlY2hhaW5cIjtcbmltcG9ydCB0eXBlIHtNdXNpY1Nob3B9IGZyb20gJ0AvdHlwZWNoYWluJ1xuaW1wb3J0IHR5cGUgeyBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBDb25uZWN0V2FsbGV0IGZyb20gXCJAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldFwiO1xuaW1wb3J0IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9XYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSEFSREhBVF9ORVRXT1JLX0lEID0gXCIweDUzOVwiO1xuY29uc3QgTVVTSUNfU0hPUF9BRERSRVNTID0gXCIweDVmYmRiMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M2Y2NDJmNjQxODBhYTNcIjtcblxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbnR5cGUgQ3VycmVudENvbm5lY3Rpb25Qcm9wcyA9IHtcbiAgcHJvdmlkZXI6IEJyb3dzZXJQcm92aWRlciB8IHVuZGVmaW5lZDtcbiAgc2hvcDogTXVzaWNTaG9wIHwgdW5kZWZpbmVkO1xuICBzaWduZXI6IGV0aGVycy5Kc29uUnBjU2lnbmVyIHwgdW5kZWZpbmVkO1xufTtcblxudHlwZSBBbGJ1bVByb3BzID0ge1xuICBpbmRleDogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgdWlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBldGhlcnMuQmlnTnVtYmVyaXNoO1xuICBxdWFudGl0eTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25ldHdvcmtFcnJvciwgc2V0TmV0d29ya0Vycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICBjb25zdCBfY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICBpZih3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCl7XG4gICAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgaW5zdGFsbCBNZXRhbWFzayFcIik7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZighKGF3YWl0IF9jaGVja05ldHdvcmsoKSkpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IF9jaGVja05ldHdvcmsgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgY2hvc2VuQ2hhaW5JZCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfY2hhaW5JZFwiLFxuICAgIH0pXG4gIFxuICAgIGlmKGNob3NlbkNoYWluSWQgPT09IEhBUkRIQVRfTkVUV09SS19JRCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXROZXR3b3JrRXJyb3IoXCJQbGVhc2UgY29ubmVjdCB0byBIYXJkaGF0IG5ldHdvcmsgKGxvY2FsaG9zdDo4NTQ1KSFcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkQWNjb3VudF0gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgXG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiTVVTSUNfU0hPUF9BRERSRVNTIiwiSG9tZSIsIm5ldHdvcmtFcnJvciIsInNldE5ldHdvcmtFcnJvciIsIl9jb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJ1bmRlZmluZWQiLCJfY2hlY2tOZXR3b3JrIiwiY2hvc2VuQ2hhaW5JZCIsInJlcXVlc3QiLCJtZXRob2QiLCJzZWxlY3RlZEFjY291bnQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});