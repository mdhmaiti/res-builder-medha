import { ColorBox, ColorBoxWrapper } from '../atoms';

import { IThemeColor } from 'src/helpers/constants/index.interface';
import Image from 'next/image';
import { SYSTEM_COLORS } from 'src/helpers/constants/index';
import { useThemes } from 'src/stores/themes';

export const ThemeSelect = () => {
  const activeTheme = useThemes((state) => state.selectedTheme);

  const handleActiveTheme = (themeObject: IThemeColor) => {
    useThemes.getState().chooseTheme(themeObject);
  };

  return (
    <div className={`h-[auto] w-[475px]  flex flex-col px-9 py-7 `}>
      {/* <span className="text-resume-800 font-bold text-lg mb-2">Choose a resume colour scheme</span> */}
      <div className="w-full flex flex-row justify-evenly">
        {SYSTEM_COLORS.map((themeObject) => {
          const isActive = themeObject.id === activeTheme.id;
          return (
            // <div></div>
            <div
              key={themeObject.id}
              className={`w-6 h-6 flex  justify-evenly items-center py-[14px] px-4 hover:cursor-pointer`}
              onClick={() => handleActiveTheme(themeObject)}
            >
              <ColorBoxWrapper>
                {/* <ColorBox bgColor={themeObject.backgroundColor} /> */}
                {/* <ColorBox bgColor={themeObject.fontColor} /> */}
                <ColorBox bgColor={themeObject.titleColor} />
                {/* <ColorBox bgColor={themeObject.highlighterColor} /> */}
              </ColorBoxWrapper>
              {isActive && (
                <Image src={'/icons/selected-tick.svg'} alt="logo" width="28" height="20" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
