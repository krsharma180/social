import React from "react";
import '../css/widgets.css'
import {InfoCircleOutlined
  } from '@ant-design/icons';

const newsArticles=(heading, title)=>{
    return (<div className="widgets_article">
        <div className="widgets_articleleft">

        </div>

        <div className="widgets_articleright">
            <h4>{heading}</h4>
            <p>{title}</p>
        </div>
    </div>)
}

function Widgets(){
    return(
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Latest News</h2>
                <InfoCircleOutlined />
            </div>
        {newsArticles('New React released',' - version 17.0.1')}
        {newsArticles('The climate is changing',' see the effects on us')}
        {newsArticles('iPhone 12 launched',' again at unaffordable price !!')}
        {newsArticles('Tips on how to stay healthy',' Follow this link')}
        {/* {newsArticles('Tips on how to lose fat',' Follow this link')} */}

        </div>
    )
}

export default Widgets;