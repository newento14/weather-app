import { useGeolocated } from "react-geolocated";
import {useEffect} from "react";

const App = () => {
    const { coords} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {

    }, [coords]);

    return (
        <>

        </>
    )
}

export default App
