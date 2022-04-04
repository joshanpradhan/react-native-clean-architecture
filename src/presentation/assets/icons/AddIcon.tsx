import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25 0C11.214 0 0 11.214 0 25s11.214 25 25 25 25-11.214 25-25S38.786 0 25 0z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M36.484 27.187h-9.297v9.297a2.188 2.188 0 01-4.374 0v-9.297h-9.297a2.188 2.188 0 010-4.374h9.297v-9.297a2.188 2.188 0 014.374 0v9.297h9.297a2.188 2.188 0 010 4.374z"
        fill="#FAFAFA"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={25}
          y1={0}
          x2={25}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#2074b9" />
          <Stop offset={1} stopColor="#2074b9" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
