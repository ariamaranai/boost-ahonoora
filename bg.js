chrome.contentSettings.javascript.get({ primaryUrl: "https://ahonoora.com" }, async e => (
  e.setting == "allow" && chrome.contentSettings.javascript.set({
    primaryPattern: "https://ahonoora.com/*",
    setting: "block"
  })
));