import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p
                style={{ 'textAlign': 'center', 'fontWeight': 'initial', 'fontSize': '24px' }}>
                Page doesn't exist
            </p>
            <Link
                style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', color: 'blue' }}
                to="/">Back to main page</Link>
        </div>
    )
}

export default Page404