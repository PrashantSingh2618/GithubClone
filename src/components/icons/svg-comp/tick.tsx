import * as React from "react";

function SvgTick(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg 
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
        width="16"
        height="16"
        version="1.1"
        aria-hidden="true"
        >
    <path
        fillRule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    ></path>
        </svg>
	);
}

export default SvgTick;
