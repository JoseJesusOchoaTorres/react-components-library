import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWatchThin = ({
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
		<circle
			cx={128}
			cy={128}
			r={72}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
			d="M128 88v40h40M88 68.1l6.8-37.5a8 8 0 0 1 7.9-6.6h50.6a8 8 0 0 1 7.9 6.6l6.8 37.5M88 187.9l6.8 37.5a8 8 0 0 0 7.9 6.6h50.6a8 8 0 0 0 7.9-6.6l6.8-37.5"
		/>
	</svg>
)

export default SvgWatchThin
