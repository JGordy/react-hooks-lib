const useWebShareApi = ({
	text,
	title,
	url = window.location.href,
	onShareSuccess,
	onShareError,
}) => {
	const isSupported = !!navigator.share;

	const share = isSupported && navigator.share({
		title,
		text,
		url,
	}).then((resposne) => {
		if (onShareSuccess) {
			onShareSuccess(resposne);
		}
	})
		.catch(err => {
			if (onShareError) {
				onShareError(err);
			}
		});

	return [isSupported, share];
}

export default useWebShareApi;
