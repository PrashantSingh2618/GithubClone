import * as React from "react";

function SvgMilestone(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        xmlns="http://www.w3.org/2000/svg"
        className="svg milestones-svg"
        width="16"
        height="16"
        version="1.1"
        aria-hidden="true"
    >
        <path
        fillRule="evenodd"
        d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"
        ></path>
    
        </svg>
	);
}

export default SvgMilestone;
