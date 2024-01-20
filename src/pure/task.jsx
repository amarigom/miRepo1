import React from 'react';
import PropTypes from 'prop-types';
import {Task} from '../models/Task';


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2> Nombre: {task.Name}</h2>
            <h2> Descripcion: {task.Description}</h2>
            <h2> Completed: {task.Completed}</h2>
            <h2> Level: {task.Level}</h2>
            
        </div>
    );
};


Task.propTypes = {task:PropTypes.instanceOf(Task)

};


export default TaskComponent;
