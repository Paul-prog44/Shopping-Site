import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <h1>This route does not exists !</h1>
            <Link to='/'>Back to homepage</Link>

        </>
    )
}

export default ErrorPage