import React, { Component } from 'react';
import "./ShowHideComponentCSS.css";

export default class Content extends Component {

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

  render() {
    return (
      <>
      <p id = "showHideContentp" > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Velit, omnis.Modi officiis magni odio eveniet explicabo iusto reiciendis natus ipsa, atque expedita excepturi necessitatibus sit dolore ipsam, amet suscipit nesciunt maiores similique porro, quisquam earum harum sequi sint ? Obcaecati sed et unde, aspernatur aliquid eligendi accusantium expedita pariatur hic atque velit sunt aperiam eius asperiores laudantium ? Libero, nam dolor!Quia quidem expedita hic deleniti rem ? Officiis cumque iure nisi eaque officia.Ad eum libero illum in commodi fuga vitae exercitationem, obcaecati facere temporibus animi sequi illo reprehenderit consequuntur debitis ? Enim tempora quia magni, rerum cum nostrum aut eos iste unde. </p> 
      </>
    );
  }
}
