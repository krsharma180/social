import React,{forwardRef} from "react";
import '../css/posts.css';
import { Avatar,Image } from 'antd';
import InputOptions from "./InputOptions";
import {LikeOutlined,CommentOutlined,ShareAltOutlined,SendOutlined} from '@ant-design/icons';


const Post=forwardRef(({name, description, message, photoUrl},ref)=>{
    return(
        <div ref={ref} className='post'>
            <div className="post_header">
            <Avatar 
                src={<img width="50px" className='sidebar_avatar' height="50px" src={photoUrl}>
                </img>}
            />
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
                 
            </div>
            </div>

            <div className="post_body">
                <p>{message}</p>

            </div>

            <div className="post_buttons">
                <InputOptions Icon={LikeOutlined} title='Like'></InputOptions>
                <InputOptions Icon={CommentOutlined} title='Comment'></InputOptions>
                <InputOptions Icon={ShareAltOutlined} title='Share'></InputOptions>
                <InputOptions Icon={SendOutlined} title='Send'></InputOptions>
            </div>
        </div>
    )
})

export default Post;