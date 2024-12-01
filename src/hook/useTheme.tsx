import { useEffect, useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState<string>('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const dataTheme = document.documentElement.getAttribute('data-theme');
			setTheme(dataTheme || '');

			const observer = new MutationObserver(() => {
				const updatedTheme =
					document.documentElement.getAttribute('data-theme');
				if (updatedTheme !== theme) {
					setTheme(updatedTheme || '');
				}
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['data-theme'],
			});

			return () => {
				observer.disconnect();
			};
		}
	}, [theme]);

	const changeTheme = (newTheme: string) => {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('data-theme', newTheme);
			setTheme(newTheme);
		}
	};

	return { theme, changeTheme };
};

export default useTheme;
