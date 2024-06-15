import { JSDOM , ResourceLoader} from "jsdom";
import jquery from "jquery";
import axios from "axios";

 

export function parseCode(
  code,
  headers = {},
  payload = {},
  onload = null,
  options = null
) {
  const newJSDOM = JSDOM.fragment(code, options);
  newJSDOM.window.aReS.request = { payload: payload, headers: headers };
  return newJSDOM;
}

export async function parseUrl(
  url,
  method = "GET",
  headers = {},
  payload = {},
  onload = null,
  options = null
) {
  const customLoader = new CustomUrlLoader(url, method, payload, headers);
  const newJSDOM = await new JSDOM( await customLoader.fetch());
  setupWindow(url, newJSDOM.window, onload, null, method, headers, payload);
  newJSDOM.window.aReS.response = { status: customLoader.response.status, headers: customLoader.response.headers };
  
  return newJSDOM;
}

export function parseFile(filePath) {
  const jsdom =  JSDOM.fromFile(filePath);
  setupWindow(filePath,jsdom.window);
  return jsdom;
}

export function setupWindow(url,window, onload = null, caller = null, method = "GET", headers = {}, payload = {}) {
  window.aReS = {
    callerWindow: caller,
    calledWindows: [],
    request: {
      url: url,
      method: method,
      payload: payload,
      headers: headers,
    },
    $ : jquery(window),
  };

  window.addEventListener('load', () => {
    if (onload) {
      onload();
    }
  });
  const oldOpen = window.open;
  window.open = (url, target, features) => {
    const newWindow = oldOpen(url, target, features);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(url, newWindow, null, window);
    newWindow.aReS.type = "window.open";
    return newWindow;
  };

  const oldFetch = window.fetch;
  window.fetch = (url, options) => {
    const newWindow = oldFetch(url, options);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(url, newWindow, null, window);
    newWindow.aReS.type = "fetch";
    return newWindow;
  };

  const oldXMLHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = (url, options) => {
    const newWindow = oldXMLHttpRequest(url, options);
    window.aReS.calledWindows.push(newWindow);
    setupWindow(url, newWindow, null, window);
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


class CustomUrlLoader {

  constructor(url, method, payload, headers) {
      this.url = url;
      this.method = method;
      this.method = this.method.toLowerCase();
  
      this.payload = payload;
      this.headers = headers;
  }
  async fetch(options={}) {
    options.headers = this.headers;
    if (this.method === "get") {
      this.url = this.url + (this.url.includes("?") ? "&" : "?") + new URLSearchParams(this.payload).toString();
    } 
    else {
      options.data = this.payload;
    }
    this.response  = await axios(this.url, options);
    const body = await this.response.data;

    return Buffer.from(body);
  }
}