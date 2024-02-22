import { BsGlobe, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { SiHackerearth } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { ProfileContact } from '../atoms/ProfileContact';
import { ProfileImage } from 'src/helpers/common/components/ProfileImage';
import { ProfileName } from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { Tooltip } from '@mui/material';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  city,
  image,
  linkedin,
  twitter,
  github,
  hackerrank,
  hackerearth,
  codechef,
  leetcode,
}: {
  name: string;
  label: string;
  url: string;
  email: string;
  phone: string;
  city: string;
  image: string;
  linkedin: string;
  twitter: string;
  github: string;
  hackerrank?: string;
  hackerearth?: string;
  codechef?: string;
  leetcode?: string;
}) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <ProfileName name={name} />
        <SectionSubtitle label={label} />
        <div className="flex gap-3">
          <ProfileContact text={phone} />
          <ProfileContact text={email} />
          <ProfileContact text={city} />
          {url && (
            <div className="flex gap-1 ml-1 items-center">
              <BsGlobe />
              <ProfileContact text={url} />
            </div>
          )}
          {linkedin && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="LinkedIn">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="LinkedIn" className="hidden" />
                  <BsLinkedin />
                </a>
              </Tooltip>
            </div>
          )}
          {twitter && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Twitter">
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Twitter" className="hidden" />
                  <BsTwitter />
                </a>
              </Tooltip>
            </div>
          )}
          {github && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Github">
                <a href={github} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Github" className="hidden" />
                  <BsGithub />
                </a>
              </Tooltip>
            </div>
          )}
          {hackerrank && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Hackerrank">
                <a href={hackerrank} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Hackerrank" className="hidden" />
                  <FaHackerrank />
                </a>
              </Tooltip>
            </div>
          )}
          {hackerearth && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Hackerearth">
                <a href={hackerearth} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Hackerearth" className="hidden" />
                  <SiHackerearth />
                </a>
              </Tooltip>
            </div>
          )}
          {codechef && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Codechef">
                <a href={codechef} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Codechef" className="hidden" />
                  <SiCodechef />
                </a>
              </Tooltip>
            </div>
          )}
          {leetcode && (
            <div className="flex gap-1 ml-1 items-center">
              <Tooltip title="Leetcode">
                <a href={leetcode} target="_blank" rel="noopener noreferrer" className="ml-1">
                  <img src="" alt="Leetcode" className="hidden" />
                  <SiLeetcode />
                </a>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
      {/* <ProfileImage src={image} height="100px" width="100px" /> */}
    </div>
  );
};
