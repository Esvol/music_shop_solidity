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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/address/address.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/../node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var _typechain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/typechain */ \"(app-pages-browser)/./src/typechain/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HARDHAT_NETWORK_ID = \"0x539\";\nconst MUSIC_SHOP_ADDRESS = \"0x5fbdb2315678afecb367f032d93f642f64180aa3\";\nfunction Home() {\n    _s();\n    const [networkError, setNetworkError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [currentConnection, setCurrentConnection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const _connectWallet = async ()=>{\n        if (window.ethereum === undefined) {\n            setNetworkError(\"Please install Metamask!\");\n            return;\n        }\n        if (!await _checkNetwork()) {\n            return;\n        }\n        const [selectedAccount] = await window.ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        await _initialize(ethers__WEBPACK_IMPORTED_MODULE_3__.getAddress(selectedAccount));\n        window.ethereum.on(\"accountChanged\", async (param)=>{\n            let [newAccount] = param;\n            if (newAccount === undefined) {\n                return _resetState();\n            }\n            await _initialize(ethers__WEBPACK_IMPORTED_MODULE_3__.getAddress(newAccount));\n        });\n        window.ethereum.on(\"chainChanged\", (param)=>{\n            let [_networkId] = param;\n            _resetState();\n        });\n    };\n    const _initialize = async (selectedAccount)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner(selectedAccount);\n        setCurrentConnection({\n            ...currentConnection,\n            provider,\n            signer,\n            shop: _typechain__WEBPACK_IMPORTED_MODULE_1__.MusicShop__factory.connect()\n        });\n    };\n    const _checkNetwork = async ()=>{\n        const chosenChainId = await window.ethereum.request({\n            method: \"eth_chainId\"\n        });\n        if (chosenChainId === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        setNetworkError(\"Please connect to Hardhat network (localhost:8545)!\");\n        return false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n        fileName: \"D:\\\\Web3_Projects\\\\Stock_Dapp\\\\front\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"R+V0wCkO+fANluU2q+TrYRKfU6I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSzhCO0FBQ21CO0FBT2hCO0FBRWpDLE1BQU1HLHFCQUFxQjtBQUMzQixNQUFNQyxxQkFBcUI7QUFtQlosU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQTtJQUNoRCxNQUFNLENBQUNNLG1CQUFtQkMscUJBQXFCLEdBQUdQLCtDQUFRQTtJQUUxRCxNQUFNUSxpQkFBaUI7UUFDckIsSUFBR0MsT0FBT0MsUUFBUSxLQUFLQyxXQUFVO1lBQy9CTixnQkFBZ0I7WUFFaEI7UUFDRjtRQUVBLElBQUcsQ0FBRSxNQUFNTyxpQkFBaUI7WUFDMUI7UUFDRjtRQUVBLE1BQU0sQ0FBQ0MsZ0JBQWdCLEdBQUcsTUFBTUosT0FBT0MsUUFBUSxDQUFDSSxPQUFPLENBQUM7WUFDdERDLFFBQVE7UUFDVjtRQUVBLE1BQU1DLFlBQVlsQiw4Q0FBaUIsQ0FBQ2U7UUFFcENKLE9BQU9DLFFBQVEsQ0FBQ1EsRUFBRSxDQUNoQixrQkFDQTtnQkFBTSxDQUFDQyxXQUFpQztZQUN0QyxJQUFHQSxlQUFlUixXQUFVO2dCQUMxQixPQUFPUztZQUNUO1lBRUEsTUFBTUosWUFBWWxCLDhDQUFpQixDQUFDcUI7UUFDdEM7UUFHRlYsT0FBT0MsUUFBUSxDQUFDUSxFQUFFLENBQUMsZ0JBQWdCO2dCQUFDLENBQUNHLFdBQWdCO1lBQ25ERDtRQUNGO0lBRUY7SUFFQSxNQUFNSixjQUFjLE9BQU9IO1FBQ3pCLE1BQU1TLFdBQVcsSUFBSXhCLG1EQUFzQixDQUFDVyxPQUFPQyxRQUFRO1FBQzNELE1BQU1jLFNBQVMsTUFBTUYsU0FBU0csU0FBUyxDQUFDWjtRQUV4Q04scUJBQXFCO1lBQ25CLEdBQUdELGlCQUFpQjtZQUNwQmdCO1lBQ0FFO1lBQ0FFLE1BQU0zQiwwREFBa0JBLENBQUM0QixPQUFPO1FBQ2xDO0lBQ0Y7SUFFQSxNQUFNZixnQkFBZ0I7UUFDcEIsTUFBTWdCLGdCQUFnQixNQUFNbkIsT0FBT0MsUUFBUSxDQUFDSSxPQUFPLENBQUM7WUFDbERDLFFBQVE7UUFDVjtRQUVBLElBQUdhLGtCQUFrQjNCLG9CQUFtQjtZQUN0QyxPQUFPO1FBQ1Q7UUFFQUksZ0JBQWdCO1FBQ2hCLE9BQU87SUFDVDtJQUVBLHFCQUNFLDhEQUFDd0I7Ozs7O0FBSUw7R0FwRXdCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgTXVzaWNTaG9wX19mYWN0b3J5IH0gZnJvbSBcIkAvdHlwZWNoYWluXCI7XG5pbXBvcnQgdHlwZSB7TXVzaWNTaG9wfSBmcm9tICdAL3R5cGVjaGFpbidcbmltcG9ydCB0eXBlIHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tIFwiQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXRcIjtcbmltcG9ydCBXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZVwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhBUkRIQVRfTkVUV09SS19JRCA9IFwiMHg1MzlcIjtcbmNvbnN0IE1VU0lDX1NIT1BfQUREUkVTUyA9IFwiMHg1ZmJkYjIzMTU2NzhhZmVjYjM2N2YwMzJkOTNmNjQyZjY0MTgwYWEzXCI7XG5cbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG50eXBlIEN1cnJlbnRDb25uZWN0aW9uUHJvcHMgPSB7XG4gIHByb3ZpZGVyOiBCcm93c2VyUHJvdmlkZXIgfCB1bmRlZmluZWQ7XG4gIHNob3A6IE11c2ljU2hvcCB8IHVuZGVmaW5lZDtcbiAgc2lnbmVyOiBldGhlcnMuSnNvblJwY1NpZ25lciB8IHVuZGVmaW5lZDtcbn07XG5cbnR5cGUgQWxidW1Qcm9wcyA9IHtcbiAgaW5kZXg6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG4gIHVpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZTogZXRoZXJzLkJpZ051bWJlcmlzaDtcbiAgcXVhbnRpdHk6IGV0aGVycy5CaWdOdW1iZXJpc2g7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZXR3b3JrRXJyb3IsIHNldE5ldHdvcmtFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtjdXJyZW50Q29ubmVjdGlvbiwgc2V0Q3VycmVudENvbm5lY3Rpb25dID0gdXNlU3RhdGU8Q3VycmVudENvbm5lY3Rpb25Qcm9wcz4oKVxuICBcbiAgY29uc3QgX2Nvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpe1xuICAgICAgc2V0TmV0d29ya0Vycm9yKFwiUGxlYXNlIGluc3RhbGwgTWV0YW1hc2shXCIpO1xuICAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIShhd2FpdCBfY2hlY2tOZXR3b3JrKCkpKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRBY2NvdW50XSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCJcbiAgICB9KVxuXG4gICAgYXdhaXQgX2luaXRpYWxpemUoZXRoZXJzLmdldEFkZHJlc3Moc2VsZWN0ZWRBY2NvdW50KSk7XG4gIFxuICAgIHdpbmRvdy5ldGhlcmV1bS5vbihcbiAgICAgIFwiYWNjb3VudENoYW5nZWRcIixcbiAgICAgIGFzeW5jKFtuZXdBY2NvdW50XTogW25ld0FjY291bnQ6IHN0cmluZ10pID0+IHtcbiAgICAgICAgaWYobmV3QWNjb3VudCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICByZXR1cm4gX3Jlc2V0U3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IF9pbml0aWFsaXplKGV0aGVycy5nZXRBZGRyZXNzKG5ld0FjY291bnQpKTtcbiAgICAgIH1cbiAgICApXG5cbiAgICB3aW5kb3cuZXRoZXJldW0ub24oXCJjaGFpbkNoYW5nZWRcIiwgKFtfbmV0d29ya0lkXTogYW55KSA9PiB7XG4gICAgICBfcmVzZXRTdGF0ZSgpO1xuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0IF9pbml0aWFsaXplID0gYXN5bmMgKHNlbGVjdGVkQWNjb3VudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcihzZWxlY3RlZEFjY291bnQpO1xuXG4gICAgc2V0Q3VycmVudENvbm5lY3Rpb24oe1xuICAgICAgLi4uY3VycmVudENvbm5lY3Rpb24sXG4gICAgICBwcm92aWRlcixcbiAgICAgIHNpZ25lcixcbiAgICAgIHNob3A6IE11c2ljU2hvcF9fZmFjdG9yeS5jb25uZWN0KClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgX2NoZWNrTmV0d29yayA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCBjaG9zZW5DaGFpbklkID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIsXG4gICAgfSlcbiAgXG4gICAgaWYoY2hvc2VuQ2hhaW5JZCA9PT0gSEFSREhBVF9ORVRXT1JLX0lEKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtFcnJvcihcIlBsZWFzZSBjb25uZWN0IHRvIEhhcmRoYXQgbmV0d29yayAobG9jYWxob3N0Ojg1NDUpIVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgIFxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJNdXNpY1Nob3BfX2ZhY3RvcnkiLCJ1c2VTdGF0ZSIsIkhBUkRIQVRfTkVUV09SS19JRCIsIk1VU0lDX1NIT1BfQUREUkVTUyIsIkhvbWUiLCJuZXR3b3JrRXJyb3IiLCJzZXROZXR3b3JrRXJyb3IiLCJjdXJyZW50Q29ubmVjdGlvbiIsInNldEN1cnJlbnRDb25uZWN0aW9uIiwiX2Nvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIl9jaGVja05ldHdvcmsiLCJzZWxlY3RlZEFjY291bnQiLCJyZXF1ZXN0IiwibWV0aG9kIiwiX2luaXRpYWxpemUiLCJnZXRBZGRyZXNzIiwib24iLCJuZXdBY2NvdW50IiwiX3Jlc2V0U3RhdGUiLCJfbmV0d29ya0lkIiwicHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJzaG9wIiwiY29ubmVjdCIsImNob3NlbkNoYWluSWQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});