import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
        className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 455"
    backgroundColor="#e4dcdc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="10" y="300" rx="20" ry="20" width="260" height="82" /> 
    <rect x="10" y="270" rx="10" ry="10" width="260" height="20" /> 
    <rect x="12" y="393" rx="13" ry="13" width="90" height="30" /> 
    <rect x="130" y="393" rx="20" ry="20" width="137" height="39" />
  </ContentLoader>
)

export default Skeleton;