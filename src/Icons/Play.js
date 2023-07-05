import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Play = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        {...props}
    >
        <Path
        fill={props.fill}
        d="M1.266.212C2.043-.116 2.978-.06 3.69.357L20.023 9.94c.613.36.977.941.977 1.56 0 .619-.364 1.2-.977 1.56L3.69 22.643c-.712.417-1.647.473-2.424.145C.488 22.459 0 21.8 0 21.083V1.917C0 1.199.488.54 1.266.212Z"
        />
    </Svg>
)

export default Play