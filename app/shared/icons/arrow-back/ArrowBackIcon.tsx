import { SVGProps } from "react"

const ArrowBackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#4A5565"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M8 12.667 3.333 8 8 3.333M12.666 8H3.333"
    />
  </svg>
)
export default ArrowBackIcon
