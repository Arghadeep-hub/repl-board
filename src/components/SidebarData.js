import React from 'react';
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Home',
    path: '#',
    icon: <FiIcons.FiHome color="#283046" />,
    iconClosed: <RiIcons.RiArrowDownSFill color="#283046" />,
    iconOpened: <RiIcons.RiArrowUpSFill color="#283046" />,

    subNav: [
      {
        title: 'Profile',
        path: '/',
        icon: <FiIcons.FiUser color="#283046" />
      },
      {
        title: 'Update',
        path: '/update',
        icon: <FiIcons.FiTool color="#283046" />
      }
    ]
  },
  {
    title: 'Reports',
    path: '#',
    icon: <FiIcons.FiAward color="#283046" />,
    iconClosed: <RiIcons.RiArrowDownSFill color="#283046" />,
    iconOpened: <RiIcons.RiArrowUpSFill color="#283046" />,

    subNav: [  //child
      {
        title: 'Chart',
        path: '/chart',
        icon: <FiIcons.FiPieChart color="#283046" />,
        cName: 'sub-nav'
      },
      {
        title: 'Progress',
        path: '/progress',
        icon: <HiIcons.HiOutlineDocumentReport color="#283046" />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Docs',
    path: '#',
    icon: <FiIcons.FiFileText color="#283046" />,
    iconClosed: <RiIcons.RiArrowDownSFill color="#283046" />,
    iconOpened: <RiIcons.RiArrowUpSFill color="#283046" />,

    subNav: [  //child
      {
        title: 'Todos',
        path: '/todos',
        icon: <FiIcons.FiCheckCircle color="#283046" />,
        cName: 'sub-nav'
      },
      {
        title: 'Contact',
        path: '/contact',
        icon: <RiIcons.RiTeamLine color="#283046" />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Messages',
    path: '#',
    icon: <FiIcons.FiAtSign color="#283046" />,

    iconClosed: <RiIcons.RiArrowDownSFill color="#283046" />,
    iconOpened: <RiIcons.RiArrowUpSFill color="#283046" />,

    subNav: [
      {
        title: 'Chat',
        path: '/chat',
        icon: <FiIcons.FiMessageSquare color="#283046" />
      },
      {
        title: 'Email',
        path: '/email',
        icon: <FiIcons.FiMail color="#283046" />
      }
    ]
  },
];
