import { FC } from 'react';
import Mainicon from '../../components/icon.png';
import Image from 'next/image'; 

async function fetchBookingDetails(id: string) {
  try {
    const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, {
      cache: 'no-store', 
      mode: 'no-cors'
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch booking details for ID: ${id}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error); 
    throw error; 
  }
}

const BookingDetail: FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;

  let bookingDetails;

  try {
    bookingDetails = await fetchBookingDetails(id);
  } catch (error) {
    console.error("Error fetching booking details:", error);
    return <p>Error: {error.message}</p>; 
  }

  if (!bookingDetails) {
    return <p>No booking details found.</p>; 
  }

  // Format the date to 'YYYY-MM-DD'
  const formattedDate = new Date(bookingDetails.date).toISOString().split('T')[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-2 text-left text-gray-500">Booking ID: {id}</h1>

      <div className="text-center mb-4">
        <Image
          src={Mainicon}
          alt="Card Preview"
          className="rounded-t-2xl"
          width={400}
          height={200}
          objectFit="cover"
        />
      </div>

      <p className="text-center text-3xl font-semibold mb-4 text-gray-500">{formattedDate}</p>

      <p className="text-center text-5xl font-bold mb-4 text-gray-800" >{bookingDetails.doctor_name}</p>

      <div className="flex justify-center items-center text-3xl mb-4 text-gray-800">
        <p className="mr-2 text-gray-500">{bookingDetails.start_time}</p>
        <p>/</p>
        <p className="ml-2 text-gray-500">{bookingDetails.end_time}</p>
      </div>

      <p className="text-center text-gray-500 text-2xl">{bookingDetails.service}</p>
    </div>
  );
};

export default BookingDetail;
