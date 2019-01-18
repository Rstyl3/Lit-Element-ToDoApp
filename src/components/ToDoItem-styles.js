import {html} from "lit-element";

export const style = html`
 <style>
 .ToDoItem {
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .ToDoItem-Text {
     width: 90%;
     background-color: white;
     border: 1px solid lightgrey;
     padding: 12px;
     magin-right: 10px;
 }
 .ToDoItem-Delete {
    width: 35px;
    height: 35px;
    cursor: pointer;
    background: #ff7373;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #c70202;
    color: white;
    font-size: 18px;
    margin-right: 5px;
 }
 .ToDoItem-Delete:hover {
    box-shadow: none;
    margin-top: 1px;
    margin-left: 1px;
 }
 </style>
`;