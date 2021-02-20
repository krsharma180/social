import React from "react";
import {SearchOutlined,HomeOutlined,
    CodepenOutlined,MessageOutlined,UsergroupAddOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import HeaderOptions from "./HeaderOptions";
import '../css/header.css'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

function Header(){
    return(
        <div className='header'>
            <div className="header_left">
                {/* <img></img> */}
                {/* <IconFont className='icon' type="icon-facebook" /> */}
                <div className="header_search">
                <SearchOutlined />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div className="header_right">
                <HeaderOptions Icon={HomeOutlined} title='Home'></HeaderOptions>
                <HeaderOptions Icon={UsergroupAddOutlined} title='My Network'></HeaderOptions>
                <HeaderOptions Icon={MessageOutlined} title='Messages'></HeaderOptions>
                <HeaderOptions Icon={NotificationOutlined} title='Notifications'></HeaderOptions>
                <HeaderOptions Icon={UserOutlined}
                title='My Profile'></HeaderOptions>

            </div>
        </div>
    )
}

export default Header;