import * as React from "react";

function SvgInsights(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        xmlns="http://www.w3.org/2000/svg"
    display="none inline"
    className="svg insights-svg"
    width="16"
    height="16"
    version="1.1"
    aria-hidden="true"
>
    <path
    fillRule="evenodd"
    d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
    ></path>
    
        </svg>
	);
}

export default SvgInsights;
