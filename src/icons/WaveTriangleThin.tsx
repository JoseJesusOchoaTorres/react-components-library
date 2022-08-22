import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWaveTriangleThin = ({
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
			d="m24 128 52-72 104 144 52-72"
		/>
	</svg>
)

export default SvgWaveTriangleThin
