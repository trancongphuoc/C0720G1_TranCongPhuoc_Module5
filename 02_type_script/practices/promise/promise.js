var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-ignore
var wait5Secs = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(5);
    }, 5000);
});
wait5Secs.then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err); });
// promise chỉ resolve hoặc reject duy nhất 1 lần
// @ts-ignore
var promise = new Promise(function (resolve, reject) {
    resolve('done');
    reject(new Error('…')); // ignored
    setTimeout(function () { return resolve('…'); }); // ignored
});
promise.then(function (data) { return console.log(data); });
//
//
// function httpGet(url: string): Promise<any> {
//     // @ts-ignore
//     return new Promise(function(resolve, reject) {
//         const request = new XMLHttpRequest();
//         request.onload = function() {
//             if (this.status === 200) {
//                 // Success
//                 resolve(this.response);
//             } else {
//                 // Something went wrong (404 etc.)
//                 reject(new Error(this.statusText));
//             }
//         };
//         request.onerror = function() {
//             reject(new Error('XMLHttpRequest Error: ' + this.statusText));
//         };
//         request.open('GET', url);
//         request.send();
//     });
// }
// httpGet('https://api.github.com/search/repositories?q=angular').then(
//     function(value) {
//         console.log('Contents: ' + value);
//     },
//     function(reason) {
//         console.error('Something went wrong', reason);
//     }
// );
// // parseJSON
// function parseResponse(value: string) {
//     try {
//         return JSON.parse(value);
//     } catch (_) {
//         return value;
//     }
// }
// httpGet('https://api.github.com/search/repositories?q=angular')
//     .then(parseResponse)
//     .then(data => console.log(data))
//     .catch(function(reason) {
//         console.error('Something went wrong', reason);
//     });
//
//
//
//
//
//
//
// /**
//  * Async/Await
//  */
// async function f() {
//     return 1;
// }
//
// function fp() {
//     return Promise.resolve(1);
// }
//
// f().then(data => console.log('async fn', data));
//
// // @ts-ignore
// (async() => {
//     const data = await fp();
//     console.log('async/await', data);
// })();
//
//
//
//
// async function fns() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });
//     // wait till the promise resolves (*)
//     const result = await promise;
//     console.log(result); // "done!"
// }
//
// fns();
//
//
//
//
function getUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.github.com/search/users?q=" + username)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
getUser('bob')
    .then(function (res) { return console.log(res); })["catch"](function (err) { return console.warn(err); });
//
//
//
//
//
// // do not combine sync operations with async/await
// (() => {
//     let x = 0;
//     async function r5() {
//         x += 1;
//         console.log(x);
//         return 5;
//     }
//
//     (async () => {
//         x += await r5();
//         console.log(x);
//     })();
// })();
//
// // fixed version
// (() => {
//     let x = 0;
//     async function r5() {
//         x += 1;
//         console.log(x);
//         return 5;
//     }
//
//     (async () => {
//         const y = await r5();
//         x += y;
//         console.log(x);
//     })();
// })();
//
//
//
//
//
// // Too Sequential
// async function fetchAllBook() {
//     await new Promise(resolve => {
//         console.log('Waiting 2s...');
//         setTimeout(() => resolve(), 2000);
//     });
//     console.log('fetchAllBook');
//     return [
//         {
//             id: 'book-id-1',
//             authorId: 'author-id-1'
//         }, {
//             id: 'book-id-2',
//             authorId: 'author-id-2'
//         }, {
//             id: 'book-id-3',
//             authorId: 'author-id-3'
//         }
//     ];
// }
//
// async function fetchAuthorById(authorId: string) {
//     console.log('fetchAuthorById');
//     return {
//         authorId,
//     };
// }
// async function getBooksAndAuthor(authorId: string) {
//     const books = await fetchAllBook();
//     const author = await fetchAuthorById(authorId);
//     return {
//         author,
//         books: books.filter(book => book.authorId === authorId),
//     };
// }
//
// getBooksAndAuthor('author-id-2');
//
//
//
//
//
//
//
//
//
//
//
//
// async function fetchAllBook() {
//     await new Promise(resolve => {
//         console.log('Waiting 2s...');
//         setTimeout(() => resolve(), 2000);
//     });
//     console.log('fetchAllBook');
//     return [
//         {
//             id: 'book-id-1',
//             authorId: 'author-id-1'
//         }, {
//             id: 'book-id-2',
//             authorId: 'author-id-2'
//         }, {
//             id: 'book-id-3',
//             authorId: 'author-id-3'
//         }
//     ];
// }
//
// async function fetchAuthorById(authorId: string) {
//     console.log('fetchAuthorById');
//     return {
//         authorId,
//     };
// }
//
// // Too Sequential fixed
// async function getBooksAndAuthorFixed(authorId: string) {
//     const bookPromise = fetchAllBook();
//     const authorPromise = fetchAuthorById(authorId);
//     const books = await bookPromise;
//     const author = await authorPromise;
//     return {
//         author,
//         books: books.filter(book => book.authorId === authorId),
//     };
// }
//
// getBooksAndAuthorFixed('author-id-2');
