"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/habits/[id]/route";
exports.ids = ["app/api/habits/[id]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&page=%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&page=%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_habits_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/habits/[id]/route.ts */ \"(rsc)/./src/app/api/habits/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/habits/[id]/route\",\n        pathname: \"/api/habits/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/habits/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dawit\\\\OneDrive\\\\Desktop\\\\Habit Tracker\\\\src\\\\app\\\\api\\\\habits\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_habits_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/habits/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZoYWJpdHMlMkYlNUJpZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaGFiaXRzJTJGJTVCaWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZoYWJpdHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkYXdpdCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0hhYml0JTIwVHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZGF3aXQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNIYWJpdCUyMFRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXQtdHJhY2tlci8/NTIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkYXdpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEhhYml0IFRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaGFiaXRzXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2hhYml0cy9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaGFiaXRzL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2hhYml0cy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZGF3aXRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxIYWJpdCBUcmFja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGhhYml0c1xcXFxbaWRdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9oYWJpdHMvW2lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&page=%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/habits/[id]/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/habits/[id]/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function PUT(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { name, description, frequency, color, icon, isActive, isArchived } = await request.json();\n        // Check if habit belongs to user\n        const existingHabit = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.findFirst({\n            where: {\n                id: params.id,\n                userId: session.user.id\n            }\n        });\n        if (!existingHabit) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Habit not found\"\n            }, {\n                status: 404\n            });\n        }\n        const updatedHabit = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.update({\n            where: {\n                id: params.id\n            },\n            data: {\n                name,\n                description,\n                frequency,\n                color,\n                icon,\n                isActive,\n                isArchived,\n                updatedAt: new Date()\n            },\n            include: {\n                completions: true,\n                streaks: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedHabit);\n    } catch (error) {\n        console.error(\"Error updating habit:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request, { params }) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Check if habit belongs to user\n        const existingHabit = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.findFirst({\n            where: {\n                id: params.id,\n                userId: session.user.id\n            }\n        });\n        if (!existingHabit) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Habit not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Delete the habit (this will cascade delete completions and streaks)\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.delete({\n            where: {\n                id: params.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Habit deleted successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error deleting habit:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9oYWJpdHMvW2lkXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVEO0FBQ1g7QUFDSjtBQUNIO0FBRTlCLGVBQWVJLElBQ3BCQyxPQUFvQixFQUNwQixFQUFFQyxNQUFNLEVBQThCO0lBRXRDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1OLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBRWxELElBQUksQ0FBQ0ssU0FBU0MsTUFBTUMsSUFBSTtZQUN0QixPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUUsR0FBRyxNQUFNZCxRQUFRSyxJQUFJO1FBRTlGLGlDQUFpQztRQUNqQyxNQUFNVSxnQkFBZ0IsTUFBTWpCLCtDQUFNQSxDQUFDa0IsS0FBSyxDQUFDQyxTQUFTLENBQUM7WUFDakRDLE9BQU87Z0JBQ0xkLElBQUlILE9BQU9HLEVBQUU7Z0JBQ2JlLFFBQVFqQixRQUFRQyxJQUFJLENBQUNDLEVBQUU7WUFDekI7UUFDRjtRQUVBLElBQUksQ0FBQ1csZUFBZTtZQUNsQixPQUFPcEIscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFrQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekU7UUFFQSxNQUFNYSxlQUFlLE1BQU10QiwrQ0FBTUEsQ0FBQ2tCLEtBQUssQ0FBQ0ssTUFBTSxDQUFDO1lBQzdDSCxPQUFPO2dCQUNMZCxJQUFJSCxPQUFPRyxFQUFFO1lBQ2Y7WUFDQWtCLE1BQU07Z0JBQ0pkO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBUyxXQUFXLElBQUlDO1lBQ2pCO1lBQ0FDLFNBQVM7Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFNBQVM7WUFDWDtRQUNGO1FBRUEsT0FBT2hDLHFEQUFZQSxDQUFDVSxJQUFJLENBQUNlO0lBQzNCLEVBQUUsT0FBT1EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPakMscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFBRUMsU0FBUztRQUF3QixHQUNuQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWV1QixPQUNwQjlCLE9BQW9CLEVBQ3BCLEVBQUVDLE1BQU0sRUFBOEI7SUFFdEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxrREFBV0E7UUFFbEQsSUFBSSxDQUFDSyxTQUFTQyxNQUFNQyxJQUFJO1lBQ3RCLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdEU7UUFFQSxpQ0FBaUM7UUFDakMsTUFBTVEsZ0JBQWdCLE1BQU1qQiwrQ0FBTUEsQ0FBQ2tCLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO1lBQ2pEQyxPQUFPO2dCQUNMZCxJQUFJSCxPQUFPRyxFQUFFO2dCQUNiZSxRQUFRakIsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1lBQ3pCO1FBQ0Y7UUFFQSxJQUFJLENBQUNXLGVBQWU7WUFDbEIsT0FBT3BCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBa0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pFO1FBRUEsc0VBQXNFO1FBQ3RFLE1BQU1ULCtDQUFNQSxDQUFDa0IsS0FBSyxDQUFDZSxNQUFNLENBQUM7WUFDeEJiLE9BQU87Z0JBQ0xkLElBQUlILE9BQU9HLEVBQUU7WUFDZjtRQUNGO1FBRUEsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO0lBQ25FLEVBQUUsT0FBT3NCLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT2pDLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQUVDLFNBQVM7UUFBd0IsR0FDbkM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdC10cmFja2VyLy4vc3JjL2FwcC9hcGkvaGFiaXRzL1tpZF0vcm91dGUudHM/MjA0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChcclxuICByZXF1ZXN0OiBOZXh0UmVxdWVzdCxcclxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfVxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGZyZXF1ZW5jeSwgY29sb3IsIGljb24sIGlzQWN0aXZlLCBpc0FyY2hpdmVkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGhhYml0IGJlbG9uZ3MgdG8gdXNlclxyXG4gICAgY29uc3QgZXhpc3RpbmdIYWJpdCA9IGF3YWl0IHByaXNtYS5oYWJpdC5maW5kRmlyc3Qoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBwYXJhbXMuaWQsXHJcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICghZXhpc3RpbmdIYWJpdCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnSGFiaXQgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZEhhYml0ID0gYXdhaXQgcHJpc21hLmhhYml0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IHBhcmFtcy5pZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZnJlcXVlbmN5LFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgaXNBcmNoaXZlZCxcclxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjb21wbGV0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdHJlYWtzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZEhhYml0KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBoYWJpdDonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUoXHJcbiAgcmVxdWVzdDogTmV4dFJlcXVlc3QsXHJcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH1cclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBoYWJpdCBiZWxvbmdzIHRvIHVzZXJcclxuICAgIGNvbnN0IGV4aXN0aW5nSGFiaXQgPSBhd2FpdCBwcmlzbWEuaGFiaXQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogcGFyYW1zLmlkLFxyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoIWV4aXN0aW5nSGFiaXQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0hhYml0IG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgaGFiaXQgKHRoaXMgd2lsbCBjYXNjYWRlIGRlbGV0ZSBjb21wbGV0aW9ucyBhbmQgc3RyZWFrcylcclxuICAgIGF3YWl0IHByaXNtYS5oYWJpdC5kZWxldGUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBwYXJhbXMuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdIYWJpdCBkZWxldGVkIHN1Y2Nlc3NmdWxseScgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaGFiaXQ6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJQVVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZnJlcXVlbmN5IiwiY29sb3IiLCJpY29uIiwiaXNBY3RpdmUiLCJpc0FyY2hpdmVkIiwiZXhpc3RpbmdIYWJpdCIsImhhYml0IiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ1c2VySWQiLCJ1cGRhdGVkSGFiaXQiLCJ1cGRhdGUiLCJkYXRhIiwidXBkYXRlZEF0IiwiRGF0ZSIsImluY2x1ZGUiLCJjb21wbGV0aW9ucyIsInN0cmVha3MiLCJlcnJvciIsImNvbnNvbGUiLCJERUxFVEUiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/habits/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    secret: process.env.NEXTAUTH_SECRET || \"fallback-secret-for-development\",\n    providers: [\n        // Only add Google provider if credentials are available\n        ...process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET ? [\n            (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                clientId: process.env.GOOGLE_CLIENT_ID,\n                clientSecret: process.env.GOOGLE_CLIENT_SECRET\n            })\n        ] : [],\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                console.log(\"Authorizing credentials for:\", credentials?.email);\n                if (!credentials?.email || !credentials?.password) {\n                    console.log(\"Missing credentials\");\n                    return null;\n                }\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) {\n                    console.log(\"User not found:\", credentials.email);\n                    return null;\n                }\n                console.log(\"User found:\", {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name\n                });\n                const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password || \"\");\n                if (!isPasswordValid) {\n                    console.log(\"Invalid password for user:\", credentials.email);\n                    return null;\n                }\n                console.log(\"Password valid, returning user:\", {\n                    id: user.id,\n                    email: user.email\n                });\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    image: user.image\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        signUp: \"/auth/signup\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            const dbUser = await _prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                if (user) {\n                    token.id = user?.id;\n                }\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pDZixPQUFPO29CQUNMVCxPQUFPb0IsTUFBTXBCLEtBQUs7Z0JBQ3BCO1lBQ0Y7WUFFQSxJQUFJLENBQUN1QixRQUFRO2dCQUNYLElBQUloQixNQUFNO29CQUNSYSxNQUFNVixFQUFFLEdBQUdILE1BQU1HO2dCQUNuQjtnQkFDQSxPQUFPVTtZQUNUO1lBRUEsT0FBTztnQkFDTFYsSUFBSWEsT0FBT2IsRUFBRTtnQkFDYlosTUFBTXlCLE9BQU96QixJQUFJO2dCQUNqQkUsT0FBT3VCLE9BQU92QixLQUFLO2dCQUNuQnFCLFNBQVNFLE9BQU9WLEtBQUs7WUFDdkI7UUFDRjtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhYml0LXRyYWNrZXIvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICcuL3ByaXNtYSdcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIHx8ICdmYWxsYmFjay1zZWNyZXQtZm9yLWRldmVsb3BtZW50JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gT25seSBhZGQgR29vZ2xlIHByb3ZpZGVyIGlmIGNyZWRlbnRpYWxzIGFyZSBhdmFpbGFibGVcbiAgICAuLi4ocHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCAmJiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/IFtcbiAgICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICB9KVxuICAgIF0gOiBbXSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9yaXppbmcgY3JlZGVudGlhbHMgZm9yOicsIGNyZWRlbnRpYWxzPy5lbWFpbClcbiAgICAgICAgXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWlzc2luZyBjcmVkZW50aWFscycpXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG5vdCBmb3VuZDonLCBjcmVkZW50aWFscy5lbWFpbClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZm91bmQ6JywgeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwsIG5hbWU6IHVzZXIubmFtZSB9KVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIucGFzc3dvcmQgfHwgJydcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcGFzc3dvcmQgZm9yIHVzZXI6JywgY3JlZGVudGlhbHMuZW1haWwpXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXNzd29yZCB2YWxpZCwgcmV0dXJuaW5nIHVzZXI6JywgeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2UsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICBzaWduVXA6ICcvYXV0aC9zaWdudXAnLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkXG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZVxuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbFxuICAgICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5waWN0dXJlXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwhLFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKCFkYlVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB0b2tlbi5pZCA9IHVzZXI/LmlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBkYlVzZXIuaWQsXG4gICAgICAgIG5hbWU6IGRiVXNlci5uYW1lLFxuICAgICAgICBlbWFpbDogZGJVc2VyLmVtYWlsLFxuICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2UsXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0gIl0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvdmlkZXJzIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJpbWFnZSIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwic2lnblVwIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJwaWN0dXJlIiwiand0IiwiZGJVc2VyIiwiZmluZEZpcnN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsR0FBRTtBQUVsRSxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdC10cmFja2VyLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYSAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&page=%2Fapi%2Fhabits%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();