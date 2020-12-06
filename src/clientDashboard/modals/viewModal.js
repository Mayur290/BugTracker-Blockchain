import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import TitleDescForm from './titleDescForm';
import axios from 'axios';
import DeleteTicket from './deleteTicket';

class createNewProject extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.getTicketInfo = this.getTicketInfo.bind(this);
        this.state = {
            ticketData: '',
            id: props.projectId
        }
    }

    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log(this.props.data);
                this.getTicketInfo();
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

    getTicketInfo = () => {        
            // Replace the Authorization Token here and put the project id dynamic
            const options = {
                headers: {
                    "Authorization": "Token " + localStorage.getItem("token"),
                },
            };
            console.log(this.props.projectId);
            const url = "https://bug-tracker01.herokuapp.com/api/user/project/"+ this.props.projectId +"/ticket/"
            axios
              .get(url, options)
              .then(
                (response) => {
                  console.log(response.data);
                  this.setState({ticketData: response.data});
                },
                (error) => {
                  console.log(error);
                }
              );
    }

    render() {

        return (
            <>

                <a
                    className="waves-effect waves-light btn modal-trigger"
                    data-target={this.state.id}
                >
                    View
                </a>

                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id={this.state.id}
                    className="modal"
                >

                    <div className="modal-content">


                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>

                            <tbody>
                              {this.state.ticketData &&
                                    this.state.ticketData.map((item, index) => {
                                        return   <tr>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.status}</td>
                                        <td> <DeleteTicket projectId={this.props.projectId } ticketId={item.id} /></td>
                                    </tr>
                                    })
                              }
                            </tbody>
                        </table>
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
