import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgWhatsappLogoThin = ({
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
			d="M45.4 177A95.9 95.9 0 1 1 79 210.6h0L45.8 220a7.9 7.9 0 0 1-9.8-9.8l9.4-33.2Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
		<path
			d="M152.1 184A79.9 79.9 0 0 1 72 103.9 28 28 0 0 1 100 76h0a6.8 6.8 0 0 1 6 3.5l11.7 20.4a8.1 8.1 0 0 1-.1 8.1l-9.4 15.7h0a48 48 0 0 0 24.1 24.1h0l15.7-9.4a8.1 8.1 0 0 1 8.1-.1l20.4 11.7a6.8 6.8 0 0 1 3.5 6h0a28.1 28.1 0 0 1-27.9 28Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={8}
		/>
	</svg>
)

export default SvgWhatsappLogoThin
