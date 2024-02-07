import Image from 'next/image';
import { IoMdPerson } from 'react-icons/io';
import { FaUserGear } from 'react-icons/fa6';
import { PiCertificateFill } from 'react-icons/pi';
import { RiUserStarFill } from 'react-icons/ri';
import { FaFileSignature } from 'react-icons/fa';
import { MdAssignmentAdd } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';

const HeaderTitle = ({ title }: { title: string }) => (
  <div className="flex items-center my-5 cursor-pointer">
    {title == 'Personal details' && <IoMdPerson size="1.5rem" />}
    {title == 'Skills and Expertise' && <FaUserGear size="1.5rem" />}
    {title == 'Education' && <PiCertificateFill size="1.5rem" />}
    {title == 'Experience' && <RiUserStarFill size="1.5rem" />}
    {title == 'Volunteering' && <MdAssignmentAdd size="1.5rem" />}
    {title == 'Activities' && <FaFileSignature size="1.5rem" />}
    {title == 'Awards' && <FaTrophy size="1.5rem" />}
    <p className="text-xl ml-5">{title}</p>

    <div className="ml-auto pl-4 flex items-center">
      <Image src="/icons/right-arrow.svg" alt="right-arrow" height="16" width="16" />
    </div>
  </div>
);

export default HeaderTitle;
