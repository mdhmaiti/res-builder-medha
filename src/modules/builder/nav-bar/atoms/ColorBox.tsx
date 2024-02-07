export const ColorBox = ({ bgColor }: { bgColor: string }) => {
  return (
    <div
      className={'w-6 h-6 rounded-full justify-evenly items-center py-[14px] px-4'}
      style={{ backgroundColor: bgColor }}
    />
  );
};
