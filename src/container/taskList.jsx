import React from 'react';
import PropTypes from 'prop-types';
import {Task}from './models/Task'


const TaskListComponent = ({task}) => {

    const  taskPrueba= new Task('tarea2','basica','false','normal');
    return (
        <div>
            <TaskComponent task={taskPrueba}></TaskComponent>
        </div>
    );
};


TaskList.propTypes = {task: PropTypes.instanceOf(Task)

};


export default TaskList;
