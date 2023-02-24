import { motion } from 'framer-motion';
import { FadeAnimation, LineAnimation } from './Animations';

const Footer = () => {
  return (
    <motion.footer {...FadeAnimation} className="fixed right-0 -bottom-20 z-40 flex w-full justify-end pb-28 md:bottom-0">
      <div className="flex w-1/2 items-baseline justify-end">
        <div className="flex w-full flex-col items-end md:w-2/3">
          <motion.div {...LineAnimation} animate={{ width: '40%' }} className="line-footer h-1" />
          <motion.div {...LineAnimation} animate={{ width: '100%' }} className="line-footer mt-1 h-1" />
          <motion.div {...LineAnimation} animate={{ width: '67%' }} className="line-footer mt-1 h-1" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
