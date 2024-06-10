import { JSDOM } from "jsdom";
import jquery from "jquery";
import fs from "fs";
import axios from "axios";
import mime from "mime";

// export async function parse(htmlOrUrlOrPath, runScript = false) {
//   let htmlPageContent = "";
//   if (fs.existsSync(html)) {
//     return await parseFile(html);
//   } else if (/^(?:[a-z]+:)?\/\//.test(html)) {
//     return await parseUrl(html);
//   } else return parseCode(htmlPageContent, runScript);
// }
// export async function parseFile(file, runScript = false) {
//   let pageContent = "";
//   let headers = {};
//   if (fs.existsSync(html)) {
//     htmlPageContent = fs.readFileSync(html, "utf-8");
//     headers["content-type"] = mime.getType(filePath);
//   }
//   return parseCode(pageContent, headers);
// }
// export async function parseUrl(url, httpMethod = "GET", headers = {}, requestBody = null, runScript = false) {
//   let pageContent = "";
//   let headers = {};
//   if (/^(?:[a-z]+:)?\/\//.test(url)) {
//     try {
//       const response = await axios[httpMethod.toLowerCase()](url, { headers: headers, data: requestBody });
//       const pageContent = response.data;
//       const headers = response.headers;
//       return parseCode(pageContent, runScript, headers);
//     } catch (error) {
//       console.error("Error fetching webpage:", error);
//       throw error;
//     }
//   }
//   return null;
// }

// export function parseCode(code, runScript = false, headers = {}) {
//   const { window } = new JSDOM(code, {
//     runScripts: runScript ? "dangerously" : "outside-only",
//   });
//   setupWindow(window);
//   const $res = {
//     body: code,
//     window: window,
//     $: jquery(window),
//     headers: headers,
//   };

//   if (window.document.doctype && window.document.doctype.name === "HTML") {
//     const metaTags = window.document.querySelectorAll("head > meta");
//     for (const metaTag of metaTags) {
//       const name = metaTag.getAttribute("name");
//       const content = metaTag.getAttribute("content");

//       if (name && content) {
//         headers[name] = content;
//       }
//     }
//   } else {
//     const contentType = window.document.contentType;
//     const charset = window.document.characterSet;

//     if (contentType) {
//       headers["Content-Type"] = contentType;
//     }

//     if (charset) {
//       headers["charset"] = charset;
//     }
//   }

//   return $res;
// }

export function parseCode(
  code,
  headers = {},
  payload = {},
  onload = null,
  options = {
    url: "about:blank",
    referrer: "",
    contentType: "text/html",
    parsingMode: "html",
    parseOptions: {
      sourceCodeLocationInfo: false,
      scriptingEnabled: false,
    },
    runScripts: undefined,
    encoding,
    pretendToBeVisual: false,
    storageQuota: 5000000,
    resourceLoader: undefined,
    virtualConsole: undefined,
    cookieJar: undefined,
  }
) {
  const newJSDOM = JSDOM.fragment(code, options);
  newJSDOM.window.aReS.request = { payload: payload, headers: headers };
  return newJSDOM;
}

export function parseUrl(
  url,
  method = "GET",
  headers = {},
  payload = {},
  onload = null,
  options = {
    url: "about:blank",
    referrer: "",
    contentType: "text/html",
    parsingMode: "html",
    parseOptions: {
      sourceCodeLocationInfo: false,
      scriptingEnabled: false,
    },
    runScripts: undefined,
    encoding,
    pretendToBeVisual: false,
    storageQuota: 5000000,
    resourceLoader: undefined,
    virtualConsole: undefined,
    cookieJar: undefined,
  }
) {
  let newJSDOM = null;
  method = method.toLowerCase();
  if (method === "get") {
    url = url + (url.includes("?") ? "&" : "?") + $.param(payload);
    newJSDOM = JSDOM.fromURL(url, options);
  } else {
    axios[method](url, { headers: headers, data: payload }).then(function (
      response
    ) {
      newJSDOM = JSDOM.fragment(response.data, options);
    });
  }
  setTimeout(() => {
    /* cheat for async loading in axios case */
    setupWindow(newJSDOM.window);
  }, 0);
  return newJSDOM;
}

export function parseFile(filePath) {
  const jsdom =  JSDOM.fromFile(filePath);
  setupWindow(jsdom.window);
  return jsdom;
}

export function setupWindow(window, caller = null) {
  window.aReS = {
    callerWindow: caller,
    calledWindows: [],
    fromRequest: {
      url: url,
      method: method,
      payload: payload,
      headers: headers,
    },
    $ : jquery(window),
  };
  const oldOpen = newJSDOM.window.open;
  window.open = (url, target, features) => {
    const newWindow = oldOpen(url, target, features);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(newWindow, window);
    newWindow.aReS.type = "window.open";
    return newWindow;
  };

  const oldFetch = newJSDOM.window.fetch;
  window.fetch = (url, options) => {
    const newWindow = oldFetch(url, options);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(newWindow, window);
    newWindow.aReS.type = "fetch";
    return newWindow;
  };

  const oldXMLHttpRequest = newJSDOM.window.XMLHttpRequest;
  window.XMLHttpRequest = (url, options) => {
    const newWindow = oldXMLHttpRequest(url, options);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(newWindow, window);
    newWindow.aReS.type = "XMLHttpRequest";
    return newWindow;
  };
}

export function trigger(
  element,
  event,
  conditionCheck = null,
  callback = null
) {
  const $ = element.window.aReS.$;
  $(element).trigger(event);
  if (callback && typeof callback === "function") {
    setTimeout(() => {
      while (conditionCheck && conditionCheck($, element) === null) {}
      callback($, element);
    }, 0);
  }
}
