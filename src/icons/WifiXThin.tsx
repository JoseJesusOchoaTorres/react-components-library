import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWifiXThin = ({
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
			d="M92.9 166.1a50.7 50.7 0 0 1 70.2 0M224 56l-48 48M224 104l-48-48M25.1 98.2A145.6 145.6 0 0 1 128 56a141.7 141.7 0 0 1 16 .9M59 132.1a97.8 97.8 0 0 1 69-28.1 93.4 93.4 0 0 1 16 1.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
		<circle cx={128} cy={200} r={8} />
	</svg>
)

export default SvgWifiXThin
