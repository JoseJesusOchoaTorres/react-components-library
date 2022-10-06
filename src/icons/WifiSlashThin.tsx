import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWifiSlashThin = ({
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
			d="m48 40 160 176M107.1 57.5A143.8 143.8 0 0 1 128 56a145.6 145.6 0 0 1 102.9 42.2M25.1 98.2a145.7 145.7 0 0 1 47.3-31.3M152.1 107a97.5 97.5 0 0 1 44.9 25.1M59 132.1a98.3 98.3 0 0 1 49-26.1M92.9 166.1a50.9 50.9 0 0 1 67.6-2.4"
		/>
		<circle cx={128} cy={200} r={8} />
	</svg>
)

export default SvgWifiSlashThin
