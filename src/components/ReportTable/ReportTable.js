import React from 'react';
import { cn } from '@bem-react/classname';
import  Table  from '../Table/Table';
import styles from '../Table/Table.scss';
import { connect } from 'react-redux';
// import { Checkbox } from '../Checkbox/Checkbox';

const cnTable = cn('Table');

const mapStateToProps = ({ filterTasks, initMap, typeTasks, statusTasks, priorityTasks }) => {
    return { filterTasks, initMap, typeTasks, statusTasks, priorityTasks };
};

const ReportTable = (props) => {
    const linkFormatter = (name) => {
        return <a href='#' className='link'>{name}</a>;
    };

    //Функция для добавления чекбоксов в строки

    // const checkboxFormatter = (cell) => {
    //     return <span className={cnTable('Name')}>
    //         <Checkbox/>
    //         {cell}
    //     </span>;
    // };

    const authorFormatter = (author) => {
        return <span className='author'>{author !== undefined && author.display}</span>;
    };

    const checkActive = (arr, value) => {
        const activeSelect = arr.filter(item => item.value === value);
        return activeSelect.length ? activeSelect[0].content : '';
    };

    const employeeFormatter = (employee) => {
        if (employee === 'не назначен') {
            return <span>{employee}</span>;
        } else if (employee !== 'не назначен' && employee) {
            return <span className='author'>{employee.display}</span>;
        }
    };

    const typeFormatter = (type, color) => {
        const background = {
            backgroundColor: color
        };

        return <span>
            <span className={cnTable('Lamp')} style={background}/>
            {checkActive(props.typeTasks, type)}
        </span>;
    };

    const dataFormatter = (data) => {
        return data.map(({ task_name, location, type, color, login, executor,author, status, priority, ...fields }) => ({
            // task_name: checkboxFormatter(linkFormatter(task_name, location)),
            task_name: linkFormatter(task_name, location),
            type: typeFormatter(type, color),
            login: authorFormatter(login),
            executor: employeeFormatter(executor),
            author: authorFormatter(author),
            status: checkActive(props.statusTasks, status),
            priority: checkActive(props.priorityTasks, priority),
            ...fields
        }));
    };

    const getHeaders =  () => {
        return ['Заявка', 'Тип заявки', 'Автор тикета', 'Сотрудник', 'Статус', 'Приоритет'];
    };
    return <Table headers={getHeaders()} data={dataFormatter(props.filterTasks)} />;
};

export default connect(mapStateToProps)(ReportTable);
