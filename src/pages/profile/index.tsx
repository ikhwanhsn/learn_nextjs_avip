import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const {data}: any = useSession();
    return ( 
        <main>
            <h1>Profile Page</h1>
            <h2>{data && data.user.fullname}</h2>
        </main>
     );
}
 
export default ProfilePage;