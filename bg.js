chrome.runtime.onInstalled.addListener(async () =>
  (await (chrome.contentSettings.javascript.get({ primaryUrl: "https://ahonoora.com" }))).setting == "allow" &&
    chrome.contentSettings.javascript.set({
      primaryPattern: "https://ahonoora.com/*",
      setting: "block"
    })
);