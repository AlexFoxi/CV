import * as React from 'react'
import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  color?: string
  width?: number | string
  height?: number | string
}

const LinkIco: React.FC<Props> = ({
  color,
  width = 15,
  height = 15,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 0.45 0.45'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill={color ? color : 'currentColor'}
      d='M.188.329.155.361A.046.046 0 0 1 .089.295L.174.21A.046.046 0 0 1 .238.208L.24.21A.019.019 0 0 0 .266.183L.263.179a.084.084 0 0 0-.114.004L.063.268a.084.084 0 0 0 .119.119L.213.356A.019.019 0 0 0 .188.329m.2-.267a.084.084 0 0 0-.119 0L.237.094a.019.019 0 0 0 .026.027L.295.089a.046.046 0 0 1 .066.066L.276.24a.046.046 0 0 1-.064.002L.21.24a.019.019 0 0 0-.026.027l.004.004A.084.084 0 0 0 .302.267L.387.182A.084.084 0 0 0 .388.063'
    />
  </svg>
)

export default LinkIco
