import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#2074b9">
      <Path d="M11 12.392C4.39 12.392.75 15.52.75 21.198c0 .443.36.802.803.802h18.895c.444 0 .803-.36.803-.802 0-5.678-3.64-8.806-10.25-8.806Zm-8.615 8.003c.316-4.246 3.21-6.397 8.616-6.397 5.405 0 8.3 2.151 8.615 6.397H2.386ZM11 0C7.964 0 5.674 2.336 5.674 5.433c0 3.188 2.39 5.78 5.326 5.78 2.937 0 5.326-2.592 5.326-5.78C16.326 2.336 14.036 0 11 0Zm0 9.608c-2.051 0-3.72-1.873-3.72-4.175 0-2.218 1.565-3.827 3.72-3.827 2.121 0 3.72 1.645 3.72 3.827 0 2.302-1.668 4.175-3.72 4.175Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent