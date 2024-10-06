import Link from "next/link";
import Image from 'next/image'; 
import Mainicon from '../components/icon.png';

const Header: React.FC = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full h-fi bg-white text-gray-700 border-gray-200 px-4 py-2.5 drop-shadow-xl text-[#e5e7eb] px-14 py-4">
               <div className="flex-auto">
               <div className="mx-auto w-full max-w-7xl lg:px-8 flex flex-row justify-between items-center">
          
            <div className="flex items-center gap-4">
            <Link href="/" className="flex flex-row items-center">
                <Image src={Mainicon} width={50} height={50} alt="Logo Preview" />
                <div className="text-2xl">Pabau</div>
            </Link>
            </div>
            <Link href="/booking/create-booking">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
                    Create
                </button>
            </Link>
        </div>
        </div>
        </div>

    );
};

export default Header;
