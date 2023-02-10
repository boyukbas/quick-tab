document.getElementById("number").addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		chrome.storage.sync.get("tempUrl", ({ tempUrl }) => {
			if (tempUrl == undefined)
				alert("Template Url is not defined. Please go to extension options and define your Template Url.");
			else
				createTab();
		});
	}
});
document.getElementById("number").focus();

function createTab() {
	const number = document.getElementById("number").value;
	chrome.storage.sync.get("tempUrl", ({ tempUrl }) => {
		const url = tempUrl.replace("$0", number)
		chrome.tabs.create({ url: url });
	});
}