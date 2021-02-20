import React from 'react'
import '../css/headerOption.css'
import {UserOutlined} from '@ant-design/icons';
import { Avatar } from "antd";

function HeaderOptions({Icon, title, avatar}){
    return(
        <div className="headerOption">
            {Icon && <Icon className='headerOption_icon'></Icon>}
            {avatar && 
                 <Avatar size={64} icon={<UserOutlined />} />
            }
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions