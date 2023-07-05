import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SkipBackward = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        {...props}
    >
        <Path
        fill={props.fill}
        d="M.712.175c.437-.27.963-.225 1.363.12l7.113 6.128v-4.84c0-.593.274-1.136.711-1.408.438-.27.964-.225 1.364.12l7.112 6.128v-4.84C18.375.71 18.963 0 19.688 0 20.412 0 21 .709 21 1.583v15.834C21 18.29 20.412 19 19.687 19c-.724 0-1.312-.709-1.312-1.583v-4.84l-7.112 6.128c-.4.345-.926.39-1.364.12-.437-.272-.711-.815-.711-1.408v-4.84l-7.113 6.128c-.4.345-.926.39-1.363.12C.275 18.553 0 18.01 0 17.416V1.583C0 .99.275.447.712.175Z"
        />
    </Svg>
)
export default SkipBackward
