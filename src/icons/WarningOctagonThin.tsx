import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWarningOctagonThin = ({
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
			d="M128 80v56M164.5 32h-73a7.9 7.9 0 0 0-5.6 2.3L34.3 85.9a7.9 7.9 0 0 0-2.3 5.6v73a7.9 7.9 0 0 0 2.3 5.6l51.6 51.6a7.9 7.9 0 0 0 5.6 2.3h73a7.9 7.9 0 0 0 5.6-2.3l51.6-51.6a7.9 7.9 0 0 0 2.3-5.6v-73a7.9 7.9 0 0 0-2.3-5.6l-51.6-51.6a7.9 7.9 0 0 0-5.6-2.3Z"
		/>
		<circle cx={128} cy={172} r={8} />
	</svg>
)

export default SvgWarningOctagonThin
