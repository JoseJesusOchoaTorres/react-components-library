import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string;
	titleId?: string;
}

const SvgYoutubeLogoThin = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		width="1em"
		height="1em"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="none" d="M0 0h256v256H0z" />
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
			d="m160 128-48-32v64l48-32z"
		/>
		<path
			d="M24 128c0 29.8 3.1 47.2 5.4 56.2a16.1 16.1 0 0 0 9.6 10.9c33.5 12.8 89 12.5 89 12.5s55.5.3 89-12.5a16.1 16.1 0 0 0 9.6-10.9c2.3-9 5.4-26.4 5.4-56.2s-3.1-47.2-5.4-56.2a16.1 16.1 0 0 0-9.6-10.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89 12.5a16.1 16.1 0 0 0-9.6 10.9c-2.3 9-5.4 26.4-5.4 56.2Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
	</svg>
)

export default SvgYoutubeLogoThin
