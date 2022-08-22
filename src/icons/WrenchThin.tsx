import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWrenchThin = ({
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
			d="M218.9 71a63.9 63.9 0 0 1-89.8 81h0L73 217a24 24 0 0 1-34-34l65-56.1h0a63.9 63.9 0 0 1 81-89.8L143 79l5.7 28.3L177 113Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
	</svg>
)

export default SvgWrenchThin
