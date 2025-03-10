chrome.runtime.onInstalled.addListener(() =>
  chrome.contentSettings.javascript.get({ primaryUrl: "https://ahonoora.com" }, details =>
    details.setting == "allow" && chrome.contentSettings.javascript.set({
      primaryPattern: "https://ahonoora.com/*",
      setting: "block"
    })
  )
);