import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import { css } from "@emotion/react"
import {
  faChevronUp,
  faChevronDown,
  faMapMarkerAlt,
  faGlobe
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Places = ({ place }) => {
  const [active, setActive] = useState(false)
  return (
    <Card style={{ width: `19rem`, margin: `20px 10px 20px 10px` }}>
      <Card.Img
        variant="top"
        src={place.picture.fluid.src}
        alt={place.title}
        style={{ margin: 0 }}
      />
      <Card.Body>
        <Card.Title>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`
            }}
          >
            <div>
              <span>{place.title}</span>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Website</Tooltip>}
              >
                <a href={place.url} style={{ color: `#8c7ae6`, border: 0 }}>
                  <FontAwesomeIcon icon={faGlobe} style={{ marginLeft: 5 }} />
                </a>
              </OverlayTrigger>
            </div>
            {!active ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => setActive(!active)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                onClick={() => setActive(!active)}
              />
            )}
          </div>
        </Card.Title>
        <Card.Link
          href={place.googleMapsUrl}
          css={css`
            color: #8c7ae6;
            text-decoration: underline;
            border: 0;
            &:hover {
              color: #fbc531;
            }
          `}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />
          {place.address}
        </Card.Link>
        <Card.Text style={{ marginTop: 10 }}>
          {active ? place.longDescript.longDescript : null}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Places
