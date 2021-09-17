import * as React from "react";

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        xmlns="http://www.w3.org/2000/svg"
    display="none inline"
    className="svg code-svg"
    width="16"
    height="16"
    version="1.1"
    aria-hidden="true"
>
    <path
    fillRule="evenodd"
    d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
    ></path>
    
        </svg>
	);
}

export default SvgCode;
