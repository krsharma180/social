import React from "react";
import { Avatar,Image } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import '../css/sidebar.css'

const recentItems=(item)=>{
    return(
    <div className="sidebar_recentItems">
        {/* <span className="sidebar_hash">#</span> */}
        <p>{item}</p>
    </div>
    )
}

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img className='backgroungImg'
                src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                {/* <UserOutlined size={100}></UserOutlined> */}
                <Avatar 
      src={<img width="100px" className='sidebar_avatar' height="100px" src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}>
      </img>}
    />
                <h2>Test User</h2>
                <h4>Test.user@mymail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Followers</p>
                    <p className='sidebar_stat_number'>1,200</p>
                </div>
                <div className="sidebar_stat">
                    <p>Following</p>
                    <p className='sidebar_stat_number'>2,856</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent Activity</p>
                {recentItems('You liked the comment')}
                {recentItems('John Doe commented on your post')}
                {recentItems('Johnson started following you')}
                {recentItems('You joined club react dev today')}
                {recentItems('You created group nodeJS 2 days ago')}

            </div>
        </div>
    )
}

export default Sidebar