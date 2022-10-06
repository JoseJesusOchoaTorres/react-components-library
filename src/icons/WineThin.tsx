import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWineThin = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		width="1em"
		height="1em"
		role="img"
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
			d="M128 176v56M88 232h80M80 24h96l26.1 88.3a24.1 24.1 0 0 1-1.2 16.7 80 80 0 0 1-145.8 0 24.1 24.1 0 0 1-1.2-16.7Z"
		/>
		<path
			d="M57.5 100.3c10.6-5.7 35.2-13.9 70.5 3.7 37.6 18.8 63.1 8.2 72.4 2.7"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
	</svg>
)

export default SvgWineThin
