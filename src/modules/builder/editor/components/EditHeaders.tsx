import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { headers } from 'src/helpers/constants/editor-data';
import HeaderTitle from '../atoms/HeaderTitle';

const animation = {
  initial: { x: -25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const EditHeaders = ({ onLinkClick }: { onLinkClick: (link: string) => void }) => {
  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      {Object.entries(headers).map(([link, { title }]) => (
        <div
          key={title}
          className="bg-orange-200 shadow-md shadow-slate-800 p-2 m-5 rounded-lg bg-opacity-50 text-slate-100"
        >
          <a onClick={() => onLinkClick(link)}>
            <HeaderTitle title={title} />
            {/* <Divider /> */}
          </a>
        </div>
      ))}
    </motion.div>
  );
};

export default EditHeaders;
