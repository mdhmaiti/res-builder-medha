// import { useCounter } from 'src/stores/useCounter';
// import LinearProgress from '@mui/material/LinearProgress';

// const ProgressbarCount: React.FC = () => {
//   const { counter } = useCounter(); // Get the counter state from the useCounter hook
//   const totalFields = 6; // Total number of fields

//   // Calculate the percentage completion
//   const progress = (counter / totalFields) * 100;

//   return (
//     <div className="relative ">
//       <span className="text-slate-100 pl-2  font-medium absolute inset-0 z-10">progress</span>
//       <LinearProgress
//         className="p-3 rounded-md bg-cyan-500 "
//         variant="determinate"
//         value={progress}
//       />
//     </div>
//   );
// };

// export default ProgressbarCount;

import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { IoMdPerson } from 'react-icons/io';
import { FaUserGear } from 'react-icons/fa6';
import { PiCertificateFill } from 'react-icons/pi';
import { RiUserStarFill } from 'react-icons/ri';
import { MdAssignmentAdd } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { useCounter } from 'src/stores/useCounter';

const ProgressbarCount: React.FC = () => {
  const { counter } = useCounter(); // Get the counter state from the useCounter hook
  const totalFields = 6; // Total number of fields

  // Calculate the percentage completion
  const progress = (counter / totalFields) * 100;

  // Icon component corresponding to each stage
  const icons = [
    <IoMdPerson key="person" size="1.5rem" />,
    <FaUserGear key="userGear" size="1.5rem" />,
    <PiCertificateFill key="certificate" size="1.5rem" />,
    <RiUserStarFill key="userStar" size="1.5rem" />,
    <FaTrophy key="trophy" size="1.5rem" />,
    <MdAssignmentAdd key="assignment" size="1.5rem" />,

    <FaCheckCircle key="checkCircle" size="1.5rem" />,
  ];

  // Calculate the index of the current icon based on progress
  const currentIconIndex = Math.floor((progress * icons.length) / 100);

  // Ensure the index is within the bounds of the icons array
  const validIconIndex = Math.min(currentIconIndex, icons.length - 1);

  // Get the icon corresponding to the current progress
  const currentIcon = icons[validIconIndex];

  return (
    <div className="relative">
      <span className="pl-10 absolute inset-0 flex justify-center z-10">
        <span className="text-slate-100 text-lg font-medium">{progress.toFixed(0)}%</span>
      </span>
      <div className="flex gap-1 items-center">
        <span>{currentIcon}</span>
        <LinearProgress
          className="p-4 rounded-full w-full max-w-4xl"
          color="warning"
          variant="determinate"
          value={progress}
        />
      </div>
    </div>
  );
};

export default ProgressbarCount;
