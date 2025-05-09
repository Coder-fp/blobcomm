module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/pages/Register.module.css [ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "Register-module__jj1o8G__container",
  "logoutButton": "Register-module__jj1o8G__logoutButton",
  "selected": "Register-module__jj1o8G__selected",
  "statusButton": "Register-module__jj1o8G__statusButton",
  "statusContainer": "Register-module__jj1o8G__statusContainer",
  "submitButton": "Register-module__jj1o8G__submitButton",
  "title": "Register-module__jj1o8G__title",
  "userStatus": "Register-module__jj1o8G__userStatus",
});
}}),
"[project]/pages/register.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Updated Register.js with new users and styled layout
__turbopack_context__.s({
    "default": (()=>Register)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/pages/Register.module.css [ssr] (css module)");
;
;
;
;
const users = [
    {
        name: "Lucas",
        status: ""
    },
    {
        name: "Freddie",
        status: ""
    },
    {
        name: "Billy",
        status: ""
    },
    {
        name: "George",
        status: ""
    },
    {
        name: "Cameron",
        status: ""
    },
    {
        name: "Gabriel",
        status: ""
    },
    {
        name: "Aleks",
        status: ""
    },
    {
        name: "Ruben",
        status: ""
    }
];
function Register() {
    const [statuses, setStatuses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const setStatus = (name, status)=>{
        setStatuses((prev)=>({
                ...prev,
                [name]: status
            }));
    };
    const handleSubmit = async ()=>{
        const formatted = users.map((user)=>({
                name: user.name,
                status: statuses[user.name] || "Absent"
            }));
        const res = await fetch("/api/sendWebhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userStatus: formatted
            })
        });
        if (res.ok) {
            alert("Sent to Discord ✅");
        } else {
            alert("Failed 😩");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Mark Attendance"
                    }, void 0, false, {
                        fileName: "[project]/pages/register.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logout,
                        onClick: ()=>router.push("/"),
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/pages/register.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/register.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].row,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            children: user.name
                        }, void 0, false, {
                            fileName: "[project]/pages/register.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].buttons,
                            children: [
                                "Present",
                                "Late",
                                "Absent"
                            ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: statuses[user.name] === status ? __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].selected : __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statusBtn,
                                    onClick: ()=>setStatus(user.name, status),
                                    children: status
                                }, status, false, {
                                    fileName: "[project]/pages/register.js",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pages/register.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, user.name, true, {
                    fileName: "[project]/pages/register.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$Register$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].submit,
                onClick: handleSubmit,
                children: "Submit to Discord"
            }, void 0, false, {
                fileName: "[project]/pages/register.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/register.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7330e02a._.js.map