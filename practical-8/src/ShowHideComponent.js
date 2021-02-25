import React, { Component } from 'react';
import "./ShowHideComponentCSS.css";

export default class ShowHideComponent extends Component {

    constructor() {
        super();
        console.log("Constructor called");
        this.b1Update = () => {
            document.getElementById("b2").style.display = "block";
            document.getElementById("showHideContentp").style.display = "block";
            document.getElementById("b1").style.display = "none";
            console.log("componentDidUpdateb1() called");
        };
        this.b2Update = () => {
            document.getElementById("b1").style.display = "block";
            document.getElementById("showHideContentp").style.display = "none";
            document.getElementById("b2").style.display = "none";

            console.log("componentDidUpdateb2() called");
        };
    }

    componentDidMount() {
        document.getElementById("b2").style.display = "none";
        document.getElementById("showHideContentp").style.display = "none";
        document.getElementById("b1").style.display = "block";

        console.log("componentDidMount() called");
    }

    componentWillUnmount() {
        document.getElementById("b2").style.display = "none";
        document.getElementById("showHideContentp").style.display = "none";
        document.getElementById("b1").style.display = "block";

        console.log("componentWillUnmount() called");
    }

    render() {
        return ( <
            >
            <
            h1 id = "showHideh1" > Ques - 2 < /h1> <
            hr / >
            <
            p className = "showHidep" > Welcome Here! < /p> <
            p className = "showHidep" > Click on button to see MORE | LESS < /p> <
            p id = "showHideContentp" > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Velit, omnis.Modi officiis magni odio eveniet explicabo iusto reiciendis natus ipsa, atque expedita excepturi necessitatibus sit dolore ipsam, amet suscipit nesciunt maiores similique porro, quisquam earum harum sequi sint ? Obcaecati sed et unde, aspernatur aliquid eligendi accusantium expedita pariatur hic atque velit sunt aperiam eius asperiores laudantium ? Libero, nam dolor!Quia quidem expedita hic deleniti rem ? Officiis cumque iure nisi eaque officia.Ad eum libero illum in commodi fuga vitae exercitationem, obcaecati facere temporibus animi sequi illo reprehenderit consequuntur debitis ? Enim tempora quia magni, rerum cum nostrum aut eos iste unde. < /p> <
            div id = "showHideDiv" >
            <
            button id = "b1"
            onClick = { this.b1Update } > SHOW MORE < /button> <
            button id = "b2"
            onClick = { this.b2Update } > SHOW LESS < /button> < /
            div > <
            />
        );
    }
}