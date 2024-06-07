import { JSDOM } from "jsdom";
import jquery from "jquery";
import fs from "fs";
import axios from "axios";
import mime from "mime";

export async function parse(htmlOrUrlOrPath) {
  let htmlPageContent = "";
  if (fs.existsSync(html)) {
    return await parseFile(html);
  } else if (/^(?:[a-z]+:)?\/\//.test(html)) {
    return await parseUrl(html);
  } else return parseCode(htmlPageContent);
}
export async function parseFile(file) {
  let pageContent = "";
  let headers = {};
  if (fs.existsSync(html)) {
    htmlPageContent = fs.readFileSync(html, "utf-8");
    headers["content-type"] = mime.getType(filePath);
  }
  return parseCode(pageContent, headers);
}
export async function parseUrl(url) {
  let pageContent = "";
  let headers = {};
  if (/^(?:[a-z]+:)?\/\//.test(html)) {
    try {
      response = await axios.get(url);
      pageContent = response.data;
      headers = response.headers;
    } catch (error) {
      console.error("Error fetching webpage:", error);
      throw error;
    }
  }
  return parseCode(pageContent, headers);
}

export function parseCode(code, headers = {}) {
  const { window } = new JSDOM(code);

  if (window.document.doctype && window.document.doctype.name === "HTML") {
    const metaTags = window.document.querySelectorAll("head > meta");
    for (const metaTag of metaTags) {
      const name = metaTag.getAttribute("name");
      const content = metaTag.getAttribute("content");

      if (name && content) {
        headers[name] = content;
      }
    }
  } else {
    const contentType = window.document.contentType;
    const charset = window.document.characterSet;

    if (contentType) {
      headers["Content-Type"] = contentType;
    }

    if (charset) {
      headers["charset"] = charset;
    }
  }

  const $res = { window: window, $: jquery(window), headers: headers };
}
