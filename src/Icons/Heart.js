import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Heart = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        fill="none"
        {...props}
    >
        <Path
        fill={props.fill}
        d="M21 7.214 19.119 5.28C14.697.735 6.599 2.304 3.676 8.014c-1.375 2.685-1.684 6.561.824 11.51 2.416 4.765 7.438 10.47 16.5 16.687 9.062-6.217 14.084-11.921 16.5-16.687 2.508-4.949 2.2-8.825.824-11.51C35.4 2.304 27.303.735 22.882 5.28L21 7.214Zm0 32.161C-19.25 12.78 8.607-7.982 20.539 3.001c.156.144.31.293.461.448.15-.155.305-.304.461-.448C33.393-7.982 61.25 12.78 21 39.375Z"
        />
    </Svg>
)
export default Heart
