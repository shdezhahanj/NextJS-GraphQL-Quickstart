import type { FC } from 'react';

export const Loading: FC = () => {
	return (
		<div className="loading-balls">
			<div className="ball" />
			<div className="ball" />
			<div className="ball" />
			<div className="ball" />
			<div className="ball" />
		</div>
	);
};
