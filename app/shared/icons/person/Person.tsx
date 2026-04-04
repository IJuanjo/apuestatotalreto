import { SVGProps } from "react"

const Person = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#364153"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M12.667 14v-1.333A2.667 2.667 0 0 0 10 10H6a2.667 2.667 0 0 0-2.667 2.667V14M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333Z"
    />
  </svg>
)
export default Person
