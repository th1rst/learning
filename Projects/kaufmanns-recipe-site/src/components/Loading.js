import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
    return (
        <div className="loading-container">
            <h3>Laden...</h3>
            <CircularProgress color="secondary" title="Loading......" />
        </div>
    )
}
