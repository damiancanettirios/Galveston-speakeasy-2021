import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Stars = ({ count }) => {
  let review = []
  for (let i = 0; i < count; i++) {
    review.push(
      <FontAwesomeIcon icon={faStar} key={i} style={{ color: `#fd5c63` }} />
    )
  }
  return review
}

export default Stars
