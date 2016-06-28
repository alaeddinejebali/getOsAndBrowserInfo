function getOsAndBrowserInfo() {
	// Check OS
	var osName = "unknownOS";
	if (navigator.appVersion.indexOf("Win") != -1) {
		osName = "windows";
	} else if (navigator.appVersion.indexOf("Mac") != -1) {
		osName = "macOS";
	} else if (navigator.appVersion.indexOf("X11") != -1) {
		osName = "unix";
	} else if (navigator.appVersion.indexOf("Linux") != -1) {
		osName = "linux";
	}

	// Check navigator
	var userAgent = navigator.userAgent, 
		tem, 
		userAgentMatch = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)|| [];
	if (/trident/i.test(userAgentMatch[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
		return {
			name : 'IE ',
			version : (tem[1] || '')
		};
	}
	if (userAgentMatch[1] === 'Chrome') {
		tem = userAgent.match(/\bOPR\/(\d+)/)
		if (tem != null) {
			return {
				name : 'Opera',
				version : tem[1]
			};
		}
	}
	userAgentMatch = userAgentMatch[2] ? [ userAgentMatch[1], userAgentMatch[2] ] : [ navigator.appName, navigator.appVersion, '-?' ];
	if ((tem = userAgent.match(/version\/(\d+)/i)) != null) {
		userAgentMatch.splice(1, 1, tem[1]);
	}

	// Return OS and navigator name and version
	return {
		os : osName,
		browser : {
			name : userAgentMatch[0],
			version : userAgentMatch[1]
		}
	};
}

var osAndBrowser = getOsAndBrowserInfo();
console.log("You are running: ", osAndBrowser);
