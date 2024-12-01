export const changeTheme = (theme: string) => {
	document.querySelector('html')?.setAttribute('data-theme', theme);
};
