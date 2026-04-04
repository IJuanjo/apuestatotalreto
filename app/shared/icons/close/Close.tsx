import { SVGProps } from "react"

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#99A1AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M15 5 5 15M5 5l10 10"
    />
  </svg>
)
export default Close
