const waitForElToDissapear = (elId) => {
	let el = document.getElementById(elId);
	return new Promise(resolve => {
		let searchForEl = setInterval(() => {
			el = document.getElementById(elId');
			if (!el) {
				clearInterval(searchForEl);
				console.log('done');
				resolve();
			}
		}, 500);
	});
};

export default waitForElToDissapear;
