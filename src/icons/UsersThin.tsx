import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgUsersThin = ({
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
		<circle
			cx={88}
			cy={108}
			r={52}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
		<path
			d="M155.4 57.9a54.5 54.5 0 0 1 14.1-1.9 52 52 0 0 1 0 104M16 197.4a88 88 0 0 1 144 0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
		<path
			d="M169.5 160a87.9 87.9 0 0 1 72 37.4"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
	</svg>
)

export default SvgUsersThin
