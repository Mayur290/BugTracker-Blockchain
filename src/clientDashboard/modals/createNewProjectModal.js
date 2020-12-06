import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TitleDescForm from './titleDescForm';

class createNewProject extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log(this.props.data);
            },
            onOpenEnd: () => {
                // console.log("Open End");
            },
            onCloseStart: () => {
                // console.log("Close Start");
            },
            onCloseEnd: () => {
                // console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,   
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {

        return (
            <>

                <a
                    className="waves-effect waves-light btn modal-trigger"
                    data-target="modal3"
                >
                    Create Project
                </a>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal3"
                    className="modal"
                >

                    <div className="modal-content">
                       <TitleDescForm />
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="modal-close waves-effect waves-green btn-flat">
                            Cancel
                    </a>
                    </div>
                </div>
            </>
        );
    }
}

export default createNewProject;
