import Link from "next/link";
import Card from "./components/Card";

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div>
      <h1>Current booking count: {bookings.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-3">
        {bookings.map((booking: any) => (
          <Link 
            href={{
              pathname: `/booking/${booking.id}`,
              query: {
                date: booking.date,
                start_time: booking.start_time,
                end_time: booking.end_time,
                doctor_name: booking.doctor_name,
                service: booking.service,
              }
            }} 
            key={booking.id}
          >
            <Card
              date={booking.date}
              startTime={booking.start_time}
              endTime={booking.end_time}
              doctorName={booking.doctor_name}
              service={booking.service}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
