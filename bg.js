chrome.runtime.onInstalled.addListener(() => {
  let primaryUrl = { primaryUrl: "https://ahonoora.com" };
  let value = { primaryPattern: "https://ahonoora.com/*", setting: "block" };
  let contentSettings = chrome.contentSettings;
  let javascript = contentSettings.javascript;
  javascript.get(primaryUrl, details => details.setting == "allow" && javascript.set(value));
  let images = contentSettings.images;
  images.get(primaryUrl, details => details.setting == "allow" && images.set(value));
});