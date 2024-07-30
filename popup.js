document.getElementById("portalButton").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://nac.nitk.ac.in:8090/httpclient.html" });
  });
  