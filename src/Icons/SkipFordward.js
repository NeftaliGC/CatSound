import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SkipFordward = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        {...props}
    >
        <Path
        fill={props.fill}
        d="M20.288.175c-.437-.27-.963-.225-1.363.12l-7.113 6.128v-4.84c0-.593-.274-1.136-.711-1.408-.438-.27-.964-.225-1.364.12L2.625 6.423v-4.84C2.625.71 2.037 0 1.312 0 .589 0 0 .709 0 1.583v15.834C0 18.29.588 19 1.313 19c.724 0 1.312-.709 1.312-1.583v-4.84l7.112 6.128c.4.345.926.39 1.364.12.437-.272.711-.815.711-1.408v-4.84l7.113 6.128c.4.345.926.39 1.363.12.437-.272.712-.815.712-1.408V1.583c0-.593-.275-1.136-.712-1.408Z"
        />
    </Svg>
)
export default SkipFordward
