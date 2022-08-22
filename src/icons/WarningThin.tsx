import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWarningThin = ({
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
			d="M128 104v40M114.2 40l-88 152A16 16 0 0 0 40 216h176a16 16 0 0 0 13.8-24l-88-152a15.9 15.9 0 0 0-27.6 0Z"
		/>
		<circle cx={128} cy={180} r={8} />
	</svg>
)

export default SvgWarningThin
