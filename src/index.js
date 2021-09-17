import React, { lazy } from "react"
import ReactDOM from "react-dom"

const Componenta = lazy(() => import('./app'));


const App = () => {
    return (
        <>
            <React.Suspense fallback={<p>Loading...</p>}>
                <Componenta />
            </React.Suspense>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))