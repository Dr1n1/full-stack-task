import Image from 'next/image'; 
import Mainicon from './icon.png';

interface CardProps {
    date: string;
    startTime: string;
    endTime: string;
    doctorName: string;
    service: string;
}

const Card: React.FC<CardProps> = ({ date, startTime, endTime, doctorName, service }) => {

  const formattedDate = new Date(date).toISOString().split('T')[0];

    return (
        <div className="flex flex-col rounded-2xl w-100 bg-grey-300 shadow-xl">
            <figure className="flex justify-center items-center rounded-2xl">
                <Image
                    src={Mainicon} 
                    alt="Card Preview"
                    className="rounded-t-2xl"
                    width={400} 
                    height={200}
                    objectFit="cover" 
                />
            </figure>
            <div className="flex flex-col p-8">
            <div className="text-lg text-[#374151]"> 
                A Booking on {formattedDate} starting at {startTime}
                </div>
            </div>
        </div>
    );
};

export default Card;
