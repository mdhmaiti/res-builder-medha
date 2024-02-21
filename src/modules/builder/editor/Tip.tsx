import React from 'react';
import Image from 'next/image';

const Tip = () => {
  return (
    <div className=" w-80  h-fit px-5 py-5  text-center">
      <div
        className="w-full border-t-[5px] border-purple-500 flex flex-col gap-2 rounded-lg p-5"
        style={{ backgroundColor: '#FFC5C5' }}
      >
        <div className="flex items-center ">
          {' '}
          <div className="flex-initial w-10 h-full">
            <Image src={'/light-bulb-cartoon.png'} alt="idea" width="50" height="50" />
          </div>{' '}
          <div className="flex-initial w-90 text-lg">Tips To Enhance Resume</div>
        </div>
        <div className="flex  ">
          {' '}
          <div className=" flex-initial ml-4 mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
          <div className="ml-2 text-base">
            {' '}
            Opt for Gmail as email provider for better result .{' '}
          </div>
        </div>
        <div className="flex  ">
          {' '}
          <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
          <div className="ml-2 text-base"> Provide Mobile Number which is properly working. </div>
        </div>
        <div className="flex ">
          {' '}
          <div className=" flex-initial ml-4  mb-2 px-1 py-3 bg-pink-600 w-1 rounded-full"></div>{' '}
          <div className="ml-2 text-base">
            {' '}
            Make sure links are properly working and redirect to idented page.{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tip;
