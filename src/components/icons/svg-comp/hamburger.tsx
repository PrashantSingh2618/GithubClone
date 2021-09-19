import * as React from "react";

function SvgHamburger(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        className="block" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        width="24"
        height="24"
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
	);
}

export default SvgHamburger;
