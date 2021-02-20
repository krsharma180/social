import React, {useState,useEffect} from "react";
import '../css/feed.css'
import {PlusOutlined,PictureOutlined,VideoCameraOutlined,FileWordOutlined} from '@ant-design/icons';
import InputOptions from "./InputOptions";
import Post from "./Post";
import FlipMove from "react-flip-move";

function Feed(){

    const [posts,setPosts] = useState([{name:'John Doe', description:'sample description',
    message:'This is a test post to show that it works',
    photoUrl:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},
    {name:'Joe Johnson', description:'sample description',
    message:'Another sample post',
    photoUrl:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},
    {name:'Risk Taker', description:'sample description',
    message:'A very risky post',
    photoUrl:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}]);

    const [postText,setPostText]=useState('')

    const sendPost=(e)=>{
        e.preventDefault();
        setPosts(
            [...posts,{name:'kartik', description:'sample description',
        message:postText,
        photoUrl:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}]
        )
        setPostText('')
    }

    const onPostTxtChange=(e)=>{
        setPostText(e.target.value)
    }
  
    return(
        <div className='feed'>
            <div className="feed_inputcontainer">
                <div className="feed_input">
                <PlusOutlined />
                <form>
                    <input value={postText} 
                    onChange={onPostTxtChange} placeholder="Type something and hit enter" type="text"></input>
                    <button onClick={sendPost} type="submit">Post</button>
                </form>
                </div>
                <div className='feed_inputoptions'>
                    <InputOptions Icon={PictureOutlined} title='Photo' color='blue'></InputOptions>
                    <InputOptions Icon={VideoCameraOutlined} title='Video' color='orange'></InputOptions>
                    <InputOptions Icon={FileWordOutlined} title='Document' color='grey'></InputOptions>

                </div>
            </div>

            <div className="feed_posts">
                {/* <Post name='Kartik Sharma'
                description='This is sample description'
                message='This is working, Amazing!'
                photoUrl={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}></Post> */}
            <FlipMove>
                {posts.map((post)=>{
                     return( <Post key={post.message} name={post.name} description={post.description}
                      message={post.message} photoUrl={post.photoUrl}></Post>  )
                })}
            </FlipMove>
            </div>
        </div>
    )
}

export default Feed