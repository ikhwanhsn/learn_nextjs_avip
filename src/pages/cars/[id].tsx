import { useRouter } from "next/router";

const Cars = () => {
    const router = useRouter();
    const {id} = router.query;

    return ( 
        <h1>Car {id}</h1>
     );
}
 
export default Cars;