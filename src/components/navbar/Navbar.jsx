import { motion } from 'framer-motion';

import Sidebar from '../sidebar/Sidebar';

import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dylan Vazquez
        </motion.span>
        <div className="social">
          <a href="https://github.com/dylvaz" target="_blank">
            <img src="/github.png" alt="github icon"></img>
          </a>
          <a href="https://linkedin.com/in/dylvaz" target="_blank">
            <img src="/linkedin.png" alt="linkedin icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
