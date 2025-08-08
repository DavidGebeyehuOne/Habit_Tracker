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
exports.id = "app/api/auth/send-otp/route";
exports.ids = ["app/api/auth/send-otp/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-otp%2Froute&page=%2Fapi%2Fauth%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-otp%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-otp%2Froute&page=%2Fapi%2Fauth%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-otp%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_auth_send_otp_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/send-otp/route.ts */ \"(rsc)/./src/app/api/auth/send-otp/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/send-otp/route\",\n        pathname: \"/api/auth/send-otp\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/send-otp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dawit\\\\OneDrive\\\\Desktop\\\\Habit Tracker\\\\src\\\\app\\\\api\\\\auth\\\\send-otp\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dawit_OneDrive_Desktop_Habit_Tracker_src_app_api_auth_send_otp_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/send-otp/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2VuZC1vdHAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzZW5kLW90cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZzZW5kLW90cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkYXdpdCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0hhYml0JTIwVHJhY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZGF3aXQlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNIYWJpdCUyMFRyYWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXQtdHJhY2tlci8/NDcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxkYXdpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEhhYml0IFRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxzZW5kLW90cFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9zZW5kLW90cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2VuZC1vdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvc2VuZC1vdHAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkYXdpdFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEhhYml0IFRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxzZW5kLW90cFxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9zZW5kLW90cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-otp%2Froute&page=%2Fapi%2Fauth%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-otp%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/send-otp/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/auth/send-otp/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const { email } = await request.json();\n        if (!email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Email is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if email is Gmail\n        if (!email.toLowerCase().includes(\"@gmail.com\")) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Only Gmail addresses are supported\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if user already exists\n        const existingUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (existingUser && existingUser.isEmailVerified) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"User with this email already exists\"\n            }, {\n                status: 400\n            });\n        }\n        // Generate 6-digit OTP\n        const otp = crypto__WEBPACK_IMPORTED_MODULE_2___default().randomInt(100000, 999999).toString();\n        const otpExpires = new Date(Date.now() + 2 * 60 * 1000) // 2 minutes\n        ;\n        // If user exists but not verified, update OTP\n        if (existingUser) {\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.update({\n                where: {\n                    email\n                },\n                data: {\n                    otp,\n                    otpExpires\n                }\n            });\n        } else {\n            // Create temporary user with OTP\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.create({\n                data: {\n                    email,\n                    otp,\n                    otpExpires,\n                    isEmailVerified: false\n                }\n            });\n        }\n        // Send OTP via email\n        try {\n            // Check if Gmail credentials are configured\n            if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {\n                console.log(`🔑 OTP generated for ${email}: ${otp}`);\n                console.log(\"⚠️  Gmail credentials not configured. Please set up GMAIL_USER and GMAIL_APP_PASSWORD in .env.local\");\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: \"OTP generated successfully (Gmail not configured)\",\n                    otp,\n                    note: \"Check console for OTP. Set up Gmail credentials in .env.local for email delivery.\"\n                }, {\n                    status: 200\n                });\n            }\n            const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3__.createTransport({\n                service: \"gmail\",\n                auth: {\n                    user: process.env.GMAIL_USER,\n                    pass: process.env.GMAIL_APP_PASSWORD\n                }\n            });\n            const mailOptions = {\n                from: process.env.GMAIL_USER,\n                to: email,\n                subject: \"Your HabitTracker Verification Code\",\n                html: `\r\n          <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;\">\r\n            <div style=\"text-align: center; margin-bottom: 30px;\">\r\n              <h1 style=\"color: #333; margin-bottom: 10px;\">HabitTracker</h1>\r\n              <p style=\"color: #666; font-size: 16px;\">Your verification code is ready</p>\r\n            </div>\r\n            \r\n            <div style=\"background-color: white; padding: 30px; border-radius: 8px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);\">\r\n              <h2 style=\"color: #333; margin-bottom: 20px;\">Verification Code</h2>\r\n              <div style=\"background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;\">\r\n                <span style=\"font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 8px;\">${otp}</span>\r\n              </div>\r\n              <p style=\"color: #666; margin-bottom: 20px;\">Enter this code to verify your email address</p>\r\n              <p style=\"color: #999; font-size: 14px;\">This code will expire in 2 minutes</p>\r\n            </div>\r\n            \r\n            <div style=\"text-align: center; margin-top: 30px; color: #999; font-size: 12px;\">\r\n              <p>If you didn't request this code, please ignore this email.</p>\r\n              <p>© 2024 HabitTracker. All rights reserved.</p>\r\n            </div>\r\n          </div>\r\n        `\n            };\n            await transporter.sendMail(mailOptions);\n            console.log(`📧 OTP email sent to ${email}`);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"OTP sent to your Gmail address successfully\",\n                note: \"Please check your email for the verification code\"\n            }, {\n                status: 200\n            });\n        } catch (emailError) {\n            console.error(\"Email sending error:\", emailError);\n            // Fallback: return OTP in response if email fails\n            console.log(`🔑 OTP generated for ${email}: ${otp}`);\n            console.log(\"⚠️  Email sending failed. Returning OTP in response for testing.\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"OTP generated (email failed)\",\n                otp,\n                note: \"Check console for OTP. Email delivery failed - check Gmail credentials.\"\n            }, {\n                status: 200\n            });\n        }\n    } catch (error) {\n        console.error(\"Send OTP error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3NlbmQtb3RwL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNsQjtBQUNWO0FBQ1E7QUFFNUIsZUFBZUksS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtRQUVwQyxJQUFJLENBQUNELE9BQU87WUFDVixPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsU0FBUztZQUFvQixHQUMvQjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsMEJBQTBCO1FBQzFCLElBQUksQ0FBQ0gsTUFBTUksV0FBVyxHQUFHQyxRQUFRLENBQUMsZUFBZTtZQUMvQyxPQUFPWCxxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsU0FBUztZQUFxQyxHQUNoRDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1HLGVBQWUsTUFBTVgsK0NBQU1BLENBQUNZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ2hEQyxPQUFPO2dCQUFFVDtZQUFNO1FBQ2pCO1FBRUEsSUFBSU0sZ0JBQWdCQSxhQUFhSSxlQUFlLEVBQUU7WUFDaEQsT0FBT2hCLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQXNDLEdBQ2pEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTVEsTUFBTWYsdURBQWdCLENBQUMsUUFBUSxRQUFRaUIsUUFBUTtRQUNyRCxNQUFNQyxhQUFhLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUssTUFBTSxZQUFZOztRQUVwRSw4Q0FBOEM7UUFDOUMsSUFBSVYsY0FBYztZQUNoQixNQUFNWCwrQ0FBTUEsQ0FBQ1ksSUFBSSxDQUFDVSxNQUFNLENBQUM7Z0JBQ3ZCUixPQUFPO29CQUFFVDtnQkFBTTtnQkFDZmtCLE1BQU07b0JBQ0pQO29CQUNBRztnQkFDRjtZQUNGO1FBQ0YsT0FBTztZQUNMLGlDQUFpQztZQUNqQyxNQUFNbkIsK0NBQU1BLENBQUNZLElBQUksQ0FBQ1ksTUFBTSxDQUFDO2dCQUN2QkQsTUFBTTtvQkFDSmxCO29CQUNBVztvQkFDQUc7b0JBQ0FKLGlCQUFpQjtnQkFDbkI7WUFDRjtRQUNGO1FBRUEscUJBQXFCO1FBQ3JCLElBQUk7WUFDRiw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDVSxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSSxDQUFDRixRQUFRQyxHQUFHLENBQUNFLGtCQUFrQixFQUFFO2dCQUM5REMsUUFBUUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUV6QixNQUFNLEVBQUUsRUFBRVcsSUFBSSxDQUFDO2dCQUNuRGEsUUFBUUMsR0FBRyxDQUFDO2dCQUVaLE9BQU8vQixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtvQkFDRUMsU0FBUztvQkFDVFM7b0JBQ0FlLE1BQU07Z0JBQ1IsR0FDQTtvQkFBRXZCLFFBQVE7Z0JBQUk7WUFFbEI7WUFFQSxNQUFNd0IsY0FBYzlCLHVEQUEwQixDQUFDO2dCQUM3Q2dDLFNBQVM7Z0JBQ1RDLE1BQU07b0JBQ0p2QixNQUFNYSxRQUFRQyxHQUFHLENBQUNDLFVBQVU7b0JBQzVCUyxNQUFNWCxRQUFRQyxHQUFHLENBQUNFLGtCQUFrQjtnQkFDdEM7WUFDRjtZQUVBLE1BQU1TLGNBQWM7Z0JBQ2xCQyxNQUFNYixRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCWSxJQUFJbEM7Z0JBQ0ptQyxTQUFTO2dCQUNUQyxNQUFNLENBQUM7Ozs7Ozs7Ozs7dUdBVXdGLEVBQUV6QixJQUFJOzs7Ozs7Ozs7OztRQVdyRyxDQUFDO1lBQ0g7WUFFQSxNQUFNZ0IsWUFBWVUsUUFBUSxDQUFDTDtZQUMzQlIsUUFBUUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUV6QixNQUFNLENBQUM7WUFFM0MsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQ0VDLFNBQVM7Z0JBQ1R3QixNQUFNO1lBQ1IsR0FDQTtnQkFBRXZCLFFBQVE7WUFBSTtRQUVsQixFQUFFLE9BQU9tQyxZQUFZO1lBQ25CZCxRQUFRZSxLQUFLLENBQUMsd0JBQXdCRDtZQUV0QyxrREFBa0Q7WUFDbERkLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixFQUFFekIsTUFBTSxFQUFFLEVBQUVXLElBQUksQ0FBQztZQUNuRGEsUUFBUUMsR0FBRyxDQUFDO1lBRVosT0FBTy9CLHFEQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUNFQyxTQUFTO2dCQUNUUztnQkFDQWUsTUFBTTtZQUNSLEdBQ0E7Z0JBQUV2QixRQUFRO1lBQUk7UUFFbEI7SUFDRixFQUFFLE9BQU9vQyxPQUFPO1FBQ2RmLFFBQVFlLEtBQUssQ0FBQyxtQkFBbUJBO1FBQ2pDLE9BQU83QyxxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1FBQXdCLEdBQ25DO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXQtdHJhY2tlci8uL3NyYy9hcHAvYXBpL2F1dGgvc2VuZC1vdHAvcm91dGUudHM/ZmU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nXHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICAgIGlmICghZW1haWwpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgbWVzc2FnZTogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgZW1haWwgaXMgR21haWxcclxuICAgIGlmICghZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnQGdtYWlsLmNvbScpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IG1lc3NhZ2U6ICdPbmx5IEdtYWlsIGFkZHJlc3NlcyBhcmUgc3VwcG9ydGVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgZXhpc3RpbmdVc2VyLmlzRW1haWxWZXJpZmllZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBtZXNzYWdlOiAnVXNlciB3aXRoIHRoaXMgZW1haWwgYWxyZWFkeSBleGlzdHMnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSA2LWRpZ2l0IE9UUFxyXG4gICAgY29uc3Qgb3RwID0gY3J5cHRvLnJhbmRvbUludCgxMDAwMDAsIDk5OTk5OSkudG9TdHJpbmcoKVxyXG4gICAgY29uc3Qgb3RwRXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAyICogNjAgKiAxMDAwKSAvLyAyIG1pbnV0ZXNcclxuXHJcbiAgICAvLyBJZiB1c2VyIGV4aXN0cyBidXQgbm90IHZlcmlmaWVkLCB1cGRhdGUgT1RQXHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBvdHAsXHJcbiAgICAgICAgICBvdHBFeHBpcmVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBDcmVhdGUgdGVtcG9yYXJ5IHVzZXIgd2l0aCBPVFBcclxuICAgICAgYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIG90cCxcclxuICAgICAgICAgIG90cEV4cGlyZXMsXHJcbiAgICAgICAgICBpc0VtYWlsVmVyaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCBPVFAgdmlhIGVtYWlsXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBDaGVjayBpZiBHbWFpbCBjcmVkZW50aWFscyBhcmUgY29uZmlndXJlZFxyXG4gICAgICBpZiAoIXByb2Nlc3MuZW52LkdNQUlMX1VTRVIgfHwgIXByb2Nlc3MuZW52LkdNQUlMX0FQUF9QQVNTV09SRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGDwn5SRIE9UUCBnZW5lcmF0ZWQgZm9yICR7ZW1haWx9OiAke290cH1gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfimqDvuI8gIEdtYWlsIGNyZWRlbnRpYWxzIG5vdCBjb25maWd1cmVkLiBQbGVhc2Ugc2V0IHVwIEdNQUlMX1VTRVIgYW5kIEdNQUlMX0FQUF9QQVNTV09SRCBpbiAuZW52LmxvY2FsJylcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICB7IFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnT1RQIGdlbmVyYXRlZCBzdWNjZXNzZnVsbHkgKEdtYWlsIG5vdCBjb25maWd1cmVkKScsXHJcbiAgICAgICAgICAgIG90cCxcclxuICAgICAgICAgICAgbm90ZTogJ0NoZWNrIGNvbnNvbGUgZm9yIE9UUC4gU2V0IHVwIEdtYWlsIGNyZWRlbnRpYWxzIGluIC5lbnYubG9jYWwgZm9yIGVtYWlsIGRlbGl2ZXJ5LidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXHJcbiAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuR01BSUxfVVNFUixcclxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkdNQUlMX0FQUF9QQVNTV09SRCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuR01BSUxfVVNFUixcclxuICAgICAgICB0bzogZW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogJ1lvdXIgSGFiaXRUcmFja2VyIFZlcmlmaWNhdGlvbiBDb2RlJyxcclxuICAgICAgICBodG1sOiBgXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMjBweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgYm9yZGVyLXJhZGl1czogMTBweDtcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweDtcIj5cclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9XCJjb2xvcjogIzMzMzsgbWFyZ2luLWJvdHRvbTogMTBweDtcIj5IYWJpdFRyYWNrZXI8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMTZweDtcIj5Zb3VyIHZlcmlmaWNhdGlvbiBjb2RlIGlzIHJlYWR5PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMzBweDsgYm9yZGVyLXJhZGl1czogOHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMzMzOyBtYXJnaW4tYm90dG9tOiAyMHB4O1wiPlZlcmlmaWNhdGlvbiBDb2RlPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBtYXJnaW46IDIwcHggMDtcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMwMDdiZmY7IGxldHRlci1zcGFjaW5nOiA4cHg7XCI+JHtvdHB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM2NjY7IG1hcmdpbi1ib3R0b206IDIwcHg7XCI+RW50ZXIgdGhpcyBjb2RlIHRvIHZlcmlmeSB5b3VyIGVtYWlsIGFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzk5OTsgZm9udC1zaXplOiAxNHB4O1wiPlRoaXMgY29kZSB3aWxsIGV4cGlyZSBpbiAyIG1pbnV0ZXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogMzBweDsgY29sb3I6ICM5OTk7IGZvbnQtc2l6ZTogMTJweDtcIj5cclxuICAgICAgICAgICAgICA8cD5JZiB5b3UgZGlkbid0IHJlcXVlc3QgdGhpcyBjb2RlLCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwuPC9wPlxyXG4gICAgICAgICAgICAgIDxwPsKpIDIwMjQgSGFiaXRUcmFja2VyLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgLFxyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucylcclxuICAgICAgY29uc29sZS5sb2coYPCfk6cgT1RQIGVtYWlsIHNlbnQgdG8gJHtlbWFpbH1gKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBtZXNzYWdlOiAnT1RQIHNlbnQgdG8geW91ciBHbWFpbCBhZGRyZXNzIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICBub3RlOiAnUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSB2ZXJpZmljYXRpb24gY29kZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgICApXHJcbiAgICB9IGNhdGNoIChlbWFpbEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VtYWlsIHNlbmRpbmcgZXJyb3I6JywgZW1haWxFcnJvcilcclxuICAgICAgXHJcbiAgICAgIC8vIEZhbGxiYWNrOiByZXR1cm4gT1RQIGluIHJlc3BvbnNlIGlmIGVtYWlsIGZhaWxzXHJcbiAgICAgIGNvbnNvbGUubG9nKGDwn5SRIE9UUCBnZW5lcmF0ZWQgZm9yICR7ZW1haWx9OiAke290cH1gKVxyXG4gICAgICBjb25zb2xlLmxvZygn4pqg77iPICBFbWFpbCBzZW5kaW5nIGZhaWxlZC4gUmV0dXJuaW5nIE9UUCBpbiByZXNwb25zZSBmb3IgdGVzdGluZy4nKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBtZXNzYWdlOiAnT1RQIGdlbmVyYXRlZCAoZW1haWwgZmFpbGVkKScsXHJcbiAgICAgICAgICBvdHAsXHJcbiAgICAgICAgICBub3RlOiAnQ2hlY2sgY29uc29sZSBmb3IgT1RQLiBFbWFpbCBkZWxpdmVyeSBmYWlsZWQgLSBjaGVjayBHbWFpbCBjcmVkZW50aWFscy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdTZW5kIE9UUCBlcnJvcjonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImNyeXB0byIsIm5vZGVtYWlsZXIiLCJQT1NUIiwicmVxdWVzdCIsImVtYWlsIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZXhpc3RpbmdVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzRW1haWxWZXJpZmllZCIsIm90cCIsInJhbmRvbUludCIsInRvU3RyaW5nIiwib3RwRXhwaXJlcyIsIkRhdGUiLCJub3ciLCJ1cGRhdGUiLCJkYXRhIiwiY3JlYXRlIiwicHJvY2VzcyIsImVudiIsIkdNQUlMX1VTRVIiLCJHTUFJTF9BUFBfUEFTU1dPUkQiLCJjb25zb2xlIiwibG9nIiwibm90ZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJwYXNzIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInNlbmRNYWlsIiwiZW1haWxFcnJvciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/send-otp/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fsend-otp%2Froute&page=%2Fapi%2Fauth%2Fsend-otp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend-otp%2Froute.ts&appDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdawit%5COneDrive%5CDesktop%5CHabit%20Tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();