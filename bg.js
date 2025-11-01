chrome.runtime.onInstalled.addListener(() => {
  let { images, javascript } = chrome.contentSettings;
  let primaryUrl = { primaryUrl: "https://ahonoora.com" };
  let value = { primaryPattern: "https://ahonoora.com/*", setting: "block" };
  images.get(primaryUrl, details => details.setting == "allow" && images.set(value));
  javascript.get(primaryUrl, details => details.setting == "allow" && javascript.set(value));
});