import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';

class DeleteTicket extends Component {

  constructor(props){
      super(props);
      console.log(props);
      this.getTicketData = this.getTicketData.bind(this);
      this.state = {
          ticketInfo : ''
      }
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
    this.getTicketData();
  }

  getTicketData = () => {
    // Replace the Authorization Token here and put the project id dynamic
    const options = {
        headers: {
            "Authorization": "Token " + localStorage.getItem("token"),
        },
    };
    console.log(this.props.projectId);
    const url = "https://bug-tracker01.herokuapp.com/api/user/project/" + this.props.projectId +"/ticket/" + this.props.ticketId +"/"
    axios
      .get(url, options)
      .then(
        (response) => {
          console.log(response.data);
          this.setState({ticketInfo: response.data});
        //   this.setState({ticketData: response.data});
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const item = this.props.data;
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal4"
        >
          Info
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal4"
          className="modal"
        >

          <div className="modal-content">
            <button>Delete</button>
            { this.state.ticketInfo &&
            <table>
                        <thead>

                        </thead>

                        <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{this.state.ticketInfo.id}</td>

                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>{this.state.ticketInfo.title}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{this.state.ticketInfo.description}</td>
                            </tr>
                            <tr>
                                <td>Priority</td>
                                <td>{this.state.ticketInfo.priority}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{this.state.ticketInfo.status}</td>
                            </tr>
                            <tr>
                                <td>CreatedDate</td>
                                <td>{this.state.ticketInfo.CreatedDate}</td>
                            </tr>
                            <tr>
                                <td>Project</td>
                                <td>{this.state.ticketInfo.project}</td>
                            </tr>
                            <tr>
                                <td>Users</td>
                                <td>{this.state.ticketInfo.users}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                }
          </div>
          <div class="modal-footer">
           <a href="#" class="modal-close waves-effect waves-green btn-flat">
              Okay
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default DeleteTicket;