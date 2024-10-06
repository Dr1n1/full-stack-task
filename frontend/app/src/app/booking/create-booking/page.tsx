"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";  

const CreateBooking: React.FC = () => {
    const router = useRouter(); 
    const [service, setService] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const bookingData = {
            service,
            doctor_name: doctorName,
            start_time: startTime,
            end_time: endTime,
            date: new Date(date).toISOString().split('T')[0],
        };
    
        console.log("Booking Data:", bookingData);
    
        try {
            const response = await fetch("http://localhost:5000/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });
    
            if (response.status >= 200 && response.status < 300) {
                // Redirect to the homepage after successful creation
                router.push("/");
            } else {
                alert("Failed to create booking. Please try again.");
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("Failed to create booking: " + error.message);
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form onSubmit={handleSubmit} className="flex flex-col p-8  bg-gray-200 rounded-lg shadow-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-gray-700">Create a New Booking</h1>
                <input
                    type="text"
                    placeholder="Service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 text-black rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Doctor Name"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 text-black rounded"
                    required
                />
                <label className="text-gray-600"> Start at</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 text-black rounded"
                    required
                />
                <label className="text-gray-600"> Ends at</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 text-black rounded"
                    required
                />
                <label className="text-gray-600">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 text-black rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Create Booking
                </button>
            </form>
        </div>
    );
};

export default CreateBooking;
