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
exports.id = "app/api/habits/route";
exports.ids = ["app/api/habits/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_habits_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/habits/route.ts */ \"(rsc)/./src/app/api/habits/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/habits/route\",\n        pathname: \"/api/habits\",\n        filename: \"route\",\n        bundlePath: \"app/api/habits/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dawit\\\\OneDrive\\\\Desktop\\\\Habit Tracker\\\\src\\\\app\\\\api\\\\habits\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_habits_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/habits/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZoYWJpdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmhhYml0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmhhYml0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkYXdpdCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0hhYml0JTIwVHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZGF3aXQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNIYWJpdCUyMFRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXQtdHJhY2tlci8/MjExNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkYXdpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEhhYml0IFRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaGFiaXRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9oYWJpdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9oYWJpdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2hhYml0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGRhd2l0XFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcSGFiaXQgVHJhY2tlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxoYWJpdHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2hhYml0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/habits/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/habits/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const habits = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.findMany({\n            where: {\n                userId: session.user.id,\n                isActive: true\n            },\n            include: {\n                completions: true,\n                streaks: true\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(habits);\n    } catch (error) {\n        console.error(\"Error fetching habits:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        console.log(\"API: POST /api/habits called\");\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            console.log(\"API: Unauthorized - no session or user ID\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        console.log(\"API: User ID from session:\", session.user.id);\n        const { name, description, frequency, color, icon } = await request.json();\n        console.log(\"API: Received habit data:\", {\n            name,\n            description,\n            frequency,\n            color,\n            icon\n        });\n        if (!name) {\n            console.log(\"API: Validation failed - no name provided\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Name is required\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"API: Creating habit in database...\");\n        const habit = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.habit.create({\n            data: {\n                name,\n                description,\n                frequency: frequency || \"daily\",\n                color: color || \"#3b82f6\",\n                icon: icon || \"\\uD83C\\uDFAF\",\n                userId: session.user.id\n            },\n            include: {\n                completions: true,\n                streaks: true\n            }\n        });\n        console.log(\"API: Habit created successfully:\", habit.id);\n        // Create initial streak record\n        console.log(\"API: Creating streak record...\");\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.streak.create({\n            data: {\n                habitId: habit.id,\n                currentCount: 0,\n                longestCount: 0\n            }\n        });\n        console.log(\"API: Streak record created successfully\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(habit, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"API: Error creating habit:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\",\n            details: error instanceof Error ? error.message : \"Unknown error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4QkE7UUFDNUMsT0FBT3RCLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLFNBQVM7WUFBeUI2QixTQUFTaEIsaUJBQWlCaUIsUUFBUWpCLE1BQU1iLE9BQU8sR0FBRztRQUFnQixHQUN0RztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhYml0LXRyYWNrZXIvLi9zcmMvYXBwL2FwaS9oYWJpdHMvcm91dGUudHM/NjU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhYml0cyA9IGF3YWl0IHByaXNtYS5oYWJpdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjb21wbGV0aW9uczogdHJ1ZSxcclxuICAgICAgICBzdHJlYWtzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgY3JlYXRlZEF0OiAnZGVzYycsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihoYWJpdHMpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGhhYml0czonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCdBUEk6IFBPU1QgL2FwaS9oYWJpdHMgY2FsbGVkJylcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxyXG4gICAgXHJcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBUEk6IFVuYXV0aG9yaXplZCAtIG5vIHNlc3Npb24gb3IgdXNlciBJRCcpXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQVBJOiBVc2VyIElEIGZyb20gc2Vzc2lvbjonLCBzZXNzaW9uLnVzZXIuaWQpXHJcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBmcmVxdWVuY3ksIGNvbG9yLCBpY29uIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coJ0FQSTogUmVjZWl2ZWQgaGFiaXQgZGF0YTonLCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBmcmVxdWVuY3ksIGNvbG9yLCBpY29uIH0pXHJcblxyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBUEk6IFZhbGlkYXRpb24gZmFpbGVkIC0gbm8gbmFtZSBwcm92aWRlZCcpXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IG1lc3NhZ2U6ICdOYW1lIGlzIHJlcXVpcmVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0FQSTogQ3JlYXRpbmcgaGFiaXQgaW4gZGF0YWJhc2UuLi4nKVxyXG4gICAgY29uc3QgaGFiaXQgPSBhd2FpdCBwcmlzbWEuaGFiaXQuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfHwgJ2RhaWx5JyxcclxuICAgICAgICBjb2xvcjogY29sb3IgfHwgJyMzYjgyZjYnLFxyXG4gICAgICAgIGljb246IGljb24gfHwgJ/Cfjq8nLFxyXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgY29tcGxldGlvbnM6IHRydWUsXHJcbiAgICAgICAgc3RyZWFrczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0FQSTogSGFiaXQgY3JlYXRlZCBzdWNjZXNzZnVsbHk6JywgaGFiaXQuaWQpXHJcblxyXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgc3RyZWFrIHJlY29yZFxyXG4gICAgY29uc29sZS5sb2coJ0FQSTogQ3JlYXRpbmcgc3RyZWFrIHJlY29yZC4uLicpXHJcbiAgICBhd2FpdCBwcmlzbWEuc3RyZWFrLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBoYWJpdElkOiBoYWJpdC5pZCxcclxuICAgICAgICBjdXJyZW50Q291bnQ6IDAsXHJcbiAgICAgICAgbG9uZ2VzdENvdW50OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQVBJOiBTdHJlYWsgcmVjb3JkIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JylcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihoYWJpdCwgeyBzdGF0dXM6IDIwMSB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdBUEk6IEVycm9yIGNyZWF0aW5nIGhhYml0OicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLCBkZXRhaWxzOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImhhYml0cyIsImhhYml0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZCIsImlzQWN0aXZlIiwiaW5jbHVkZSIsImNvbXBsZXRpb25zIiwic3RyZWFrcyIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJlcnJvciIsImNvbnNvbGUiLCJQT1NUIiwicmVxdWVzdCIsImxvZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZyZXF1ZW5jeSIsImNvbG9yIiwiaWNvbiIsImNyZWF0ZSIsImRhdGEiLCJzdHJlYWsiLCJoYWJpdElkIiwiY3VycmVudENvdW50IiwibG9uZ2VzdENvdW50IiwiZGV0YWlscyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/habits/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();