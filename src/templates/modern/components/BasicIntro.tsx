import { BsGlobe, BsTwitter, BsGithub} from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { SiHackerearth } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { ProfileContact } from '../atoms/ProfileContact';
import { ProfileImage } from 'src/helpers/common/components/ProfileImage';
import { ProfileName } from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';

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
  hackerrank: string;
  hackerearth: string;
  codechef: string;
  leetcode: string;
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
              <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><BsLinkedin /></a>
            </div>
          )}
          {twitter && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><BsTwitter /></a>
            </div>
          )}
          {github && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><BsGithub /></a>
            </div>
          )}
          {hackerrank && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><FaHackerrank /></a>
            </div>
          )}
          {hackerearth && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={hackerearth}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><SiHackerearth /></a>
            </div>
          )}
          {codechef && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><SiCodechef /></a>
            </div>
          )}
          {leetcode && (
            <div className="flex gap-1 ml-1 items-center">
              <a
              href={leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            ><SiLeetcode /></a>
            </div>
          )}
        </div>
      </div>
      <ProfileImage src={image} height="100px" width="100px" />
    </div>
  );
};
