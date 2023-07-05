import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Repeat = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        {...props}
    >
        <Path
        fill={props.fill}
        d="M17.3 10.5h5.9c.317 0 .491.37.287.615l-2.949 3.54a.375.375 0 0 1-.576 0l-2.95-3.54a.375.375 0 0 1 .289-.615ZM.8 13.5h5.9c.317 0 .491-.37.287-.615l-2.949-3.54a.375.375 0 0 0-.576 0l-2.95 3.54a.375.375 0 0 0 .289.615Z"
        />
        <Path
        fill={props.fill}
        fillRule="evenodd"
        d="M12 4.5a7.483 7.483 0 0 0-5.786 2.728.75.75 0 1 1-1.157-.956A8.983 8.983 0 0 1 12 3c4.413 0 8.082 3.175 8.852 7.364l.023.136H19.35a7.503 7.503 0 0 0-7.35-6Zm-7.35 9a7.503 7.503 0 0 0 13.136 3.272.75.75 0 1 1 1.156.956A8.983 8.983 0 0 1 12 21c-4.413 0-8.082-3.175-8.852-7.364a8.958 8.958 0 0 1-.023-.136H4.65Z"
        clipRule="evenodd"
        />
        <Path
        fill={props.fillNumber}
        d="M12.972 8.273V17h-1.057V9.38h-.051l-2.131 1.415V9.723l2.182-1.45h1.057Z"
        />
    </Svg>
)
export default Repeat
