import React, { useState, useEffect } from "react";
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import './style.css';

export default function Home(){
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        function loadApi(){
            api.get('trips')
            .then((response) => {
                console.log(response.data);
                setTrips(response.data);
            });
        }

        loadApi();
    }, []);

    return(
        <div>
            <div className="box">
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
                        <button type="button" onClick={() => {}}>
                            <div>
                                <MdFlightTakeoff size={16} color="#FFF"/>
                            </div>
                            <span>SOLICITAR RESERVA</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
}