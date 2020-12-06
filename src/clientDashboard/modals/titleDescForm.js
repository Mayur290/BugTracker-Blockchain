import React, { useEffect, useState } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import qs from 'qs';

function TitleDescForm() {

    useEffect(() => {

    })

    const createProject = (e) => {
        e.preventDefault();
        const data = {
            "name" : e.target.first_name.value,
            "description" : e.target.description.value 
        };
        console.log(data);
        const options = {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "Authorization": "Token " + localStorage.getItem("token"),
            },
          };
        axios
        .post(
          "https://bug-tracker01.herokuapp.com/api/user/project",
          qs.stringify(data),
          options
        )
        .then(
          (response) => {
            console.log("Response " + JSON.stringify(response));
          },
          (error) => {
            console.log(error);
          }
        );
    }

    return (
        <>
            <div class="row">
                <form class="col s12" onSubmit={(event) => {createProject(event)}}>
                    <div class="row">
                        <div class="input-field col s12">
                            <input placeholder="Title" id="first_name" type="text" class="validate" />
                            <label for="first_name">Title</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="last_name" id="description" type="text" class="validate" />
                            <label for="last_name">Description</label>
                        </div>
                        <div class="modal-close ">
                        <input type="Submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TitleDescForm;