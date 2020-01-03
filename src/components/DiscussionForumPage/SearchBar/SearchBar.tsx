import React from "react";
import {get, post, Response} from 'superagent';

export default class SearchBar extends React.Component{
    handleSubmit = () => {

    };

    render() {
        return <div>
            <form >
                <label>keyword: </label>
                <input name='asdsad'/>
                <button>SUBMIT</button>
            </form>
        </div>;
    }
}