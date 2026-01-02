import {useAuth} from "../../context/AuthContext.tsx";

function ProfilePage() {
    const {session, signOut} = useAuth()

    // @ts-ignore
    const email = session?.user.user_metadata.email

    const userSignOut = async () => {
        //@ts-ignore
        signOut()
    }

    return (
        <div>
            <p className="pb-3">Profile Page</p>
            <p className="pb-3">{email}</p>
            <button onClick={userSignOut}>Sign Out</button>
        </div>
    )
}
export default ProfilePage;