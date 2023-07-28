import {useReducer} from 'react';
import BookingForm from "./BookingForm";
import { fetchAPI } from "../API/Api";
import '../App.css'

export default function ReserveTable() {
    const updateTimes = (availableTimes, dispatchDate) => {
        const response = fetchAPI(new Date(dispatchDate));
        return response.length !== 0 ? response : availableTimes;
    };

    const [availableTimes, dispatchDate] = useReducer(updateTimes, fetchAPI(new Date()));

    return (
        <div className='reservation'>
            <h1>Reserve a table</h1>
            <BookingForm availableTimes={availableTimes} dispatchDate={dispatchDate}/>
        </div>
    )
}