export const scrollIntoView = async (node: HTMLAnchorElement, urlElementId: string) => {
	if (node && urlElementId) {
		setTimeout(() => {
			if (urlElementId === node.id) {
				node.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}, 200);
	}
};
