import {Link} from "react-router-dom";

function VerifyEmailPage() {
    return (
        <div className="flex flex-col justify-center m-10">
            <h2 className="font-bold pb-2">Verify Email</h2>
            <p>We’ve sent a verification link to your email. Please verify to continue.</p>
            <p className="pt-8">Already verified your email? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default VerifyEmailPage