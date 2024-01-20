import React from 'react';
import PropTypes from 'prop-types';
import {Task} from '../models/Task';


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2> nombre: {task.Name}</h2>
            <h2> descripcion: {task.Description}</h2>
            <h2> completed: {task.Completed}</h2>
            <h2> level: {task.Level}</h2>
            
        </div>
    );
};


Task.propTypes = {task:PropTypes.instanceOf(Task)

};


export default TaskComponent;
