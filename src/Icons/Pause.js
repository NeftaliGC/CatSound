import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        {...props}
    >
        <Path
        fill={props.fill}
        d="M4.5 0C6.985 0 9 1.79 9 4v16c0 2.21-2.015 4-4.5 4S0 22.21 0 20V4c0-2.21 2.015-4 4.5-4ZM19.5 0C21.985 0 24 1.79 24 4v16c0 2.21-2.015 4-4.5 4S15 22.21 15 20V4c0-2.21 2.015-4 4.5-4Z"
        />
    </Svg>
)
export default SvgComponent
