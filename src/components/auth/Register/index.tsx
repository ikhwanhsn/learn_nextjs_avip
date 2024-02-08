import { useRouter } from "next/router";
import { useState } from "react";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const {push} = useRouter()
    const handleSubmit = async(event: any) => {
        event.preventDefault();
        setError("")
        setIsLoading(true)
        const data = {
            email: event.target.email.value,
            fullname: event.target.fullname.value,
            password: event.target.password.value
        }
        const result = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if(result.status === 200) {
            event.target.reset()
            setIsLoading(false)
            push("/auth/login")
        } else {
            setIsLoading(false)
            setError(result.status === 400 ? "Email already registered" : "")
        }
    }
    return ( 
        <main>
            <h1>Form Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="border-2 rounded-md"/><br />
                <label htmlFor="fullname">Fullname</label>
                <input type="text" id="fullname" className="border-2 rounded-md"/><br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border-2 rounded-md"/><br />
                <button className="py-2 px-3 rounded-md bg-green-500" disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
            </form>
        </main>
     );
}
 
export default Register;