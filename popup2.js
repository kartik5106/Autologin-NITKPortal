document.getElementById("speedTest").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://www.speedtest.net/" });
  });