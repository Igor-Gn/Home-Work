import React from "react";
import ReactDOM from "react-dom";
import currensy from "./currency";
import styles from './style.css';

const table = document.querySelector('#table');

function App() {
    return (
        <div>
            <h1>Курс валют</h1>
            <table>
                <thead>
                    <tr>
                        <td colSpan={2}>Назва валюти</td>
                        <td>Офіційний курс НБУ</td>
                    </tr>
                </thead>
                <tbody>
                    {currensy.map(element => {
                        return (
                            <tr>
                                <td className="abbreviation">{element.cc}</td>
                                <td className="name__currency">{element.txt}</td>
                                <td className="course">{element.rate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >
        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('table'));




