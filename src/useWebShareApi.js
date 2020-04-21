const useWebShareApi = ({
	text,
	title,
	url = window.location.href,
	onShareSuccess,
	onShareError,
}) => {
	const isSupported = !!navigator.share;

	// TODO: Change to async/await
	const share = isSupported && navigator.share({
		title,
		text,
		url,
	}).then((response) => {
		if (onShareSuccess) {
			onShareSuccess(response);
		}
	}).catch(err => {
		if (onShareError) {
			onShareError(err);
		}
	});

	return [isSupported, share];
}

export default useWebShareApi;
