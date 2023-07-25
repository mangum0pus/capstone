import {useReducer} from 'react';
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API/Api";

export default function ReserveTable() {
    const updateTimes = (availableTimes, dispatchDate) => {
        const response = fetchAPI(new Date(dispatchDate));
        return response.length !== 0 ? response : availableTimes;
    };
/*     const initializeTimes = () => {
        return fetchAPI(new Date())
    }; */
    const [availableTimes, dispatchDate] = useReducer(updateTimes, fetchAPI(new Date()));

    return (
        <>
            <h1>Reserve a table</h1>
            <BookingForm availableTimes={availableTimes} dispatchDate={dispatchDate}/>
        </>
    )
}

//ew Date().toJSON().slice(0,10)