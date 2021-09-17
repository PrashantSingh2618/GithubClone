import * as React from "react";

function SvgActions(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        xmlns="http://www.w3.org/2000/svg"
        display="none inline"
        className="svg actions-svg"
        width="16"
        height="16"
        version="1.1"
        aria-hidden="true"
    >
        <path
        fillRule="evenodd"
        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
        ></path>
        </svg>
	);
}

export default SvgActions;
