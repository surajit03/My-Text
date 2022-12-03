import React from 'react'

export default function Alerts(props) {
  return (
     props.alerts && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.Alerts.type}</strong> : {props.Alerts.mgs}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}
