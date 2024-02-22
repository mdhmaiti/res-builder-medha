import React from 'react';
import Image from 'next/image';

const Tip = ({
  title,
  desc1,
  desc2,
  desc3,
}: {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}) => {
  //Tips To Enhance Resume
  //Opt for Gmail as email provider for better result .
  //Provide Mobile Number which is properly working.
  //Make sure links are properly working and redirect to idented page.
  return (
    <div className=" w-60  h-fit  text-center  print:hidden">
      <div className="w-full flex flex-col gap-2 rounded-lg p-4 shadow-lg shadow-slate-600 bg-orange-200">
        <div className="flex items-center ">
          {' '}
          <div className="flex-initial w-10 h-full">
            <Image src={'/light-bulb-cartoon.png'} alt="idea" width="50" height="50" />
          </div>{' '}
          <div className="flex-initial w-80 text-lg">{title}</div>
        </div>
        <div className="flex  ">
          {' '}
          <div className=" flex-initial ml-4 mb-2 px-1 py-3 bg-pink-600 rounded-full"></div>{' '}
          <div className="ml-2 text-base">{desc1}</div>
        </div>
        <div className="flex  ">
          {' '}
          <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 rounded-full"></div>{' '}
          <div className="ml-2 text-base">{desc2} </div>
        </div>
        <div className="flex ">
          {' '}
          <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 rounded-full"></div>{' '}
          <div className="ml-2 text-base">{desc3}</div>
        </div>
      </div>
    </div>
  );
};

export default Tip;
