import React from "react"
import ContentLoader from "react-content-loader"

const ItemLoader = (props) => (
    <ContentLoader 
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    {...props}
  >
    <rect x="2" y="2" rx="0" ry="0" width="400" height="600" />
  </ContentLoader>
 

)

export default ItemLoader