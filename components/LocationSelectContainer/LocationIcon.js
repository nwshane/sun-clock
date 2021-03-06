import React from 'react'

export default class LocationIcon extends React.PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
      >
        <switch>
          <foreignObject
            requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
            x="0"
            y="0"
            width="1"
            height="1"
          />
          <g>
            <path d="M45,84.6V95h10V84.6C70.3,82.4,82.4,70.3,84.6,55H95V45H84.6C82.4,29.7,70.3,17.6,55,15.4V5H45v10.4    C29.7,17.6,17.6,29.7,15.4,45H5v10h10.4C17.6,70.3,29.7,82.4,45,84.6z M50,25c13.8,0,25,11.2,25,25S63.8,75,50,75S25,63.8,25,50    S36.2,25,50,25z" />
            <path d="M50,65c8.3,0,15-6.7,15-15s-6.7-15-15-15s-15,6.7-15,15S41.7,65,50,65z" />
          </g>
        </switch>
        <style jsx>{`
          svg {
            width: 1.7em;
            margin-right: 5px;
          }
        `}</style>
      </svg>
    )
  }
}
