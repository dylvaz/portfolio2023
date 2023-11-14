import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuButton from './menuButton/MenuButton';
import SidebarItems from './sidebarItems/SidebarItems';

import './sidebar.scss';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 275,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <SidebarItems />
      </motion.div>
      <MenuButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
