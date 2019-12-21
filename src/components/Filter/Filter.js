import React, { useState, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import styles from './Filter.scss';
import { connect } from 'react-redux';
import { getActiveFilters } from '../../redux-files/actions/get_active_filters';
import { getAllTasks } from '../../redux-files/actions/get_all_tasks';
import { getFilterTasks } from '../../redux-files/actions/get_filter_tasks';
import { getRoutes } from '../../redux-files/actions/get_routes';
import  Select  from '../Select/Select';
// import { Button } from '../Button/Button';

const mapStateToProps = ({ activeFilters, officesList, typeTasks, statusTasks, priorityTasks, assignedTasks }) => {
    return { activeFilters, officesList, typeTasks, statusTasks,priorityTasks, assignedTasks };
};

const cnFilter = cn('Filter');

// const cols = [
//     { value: 'request', content: 'Заявка' },
//     { value: 'type', content: 'Тип заявки' },
//     { value: 'author', content: 'Автор тикета' },
//     { value: 'employee', content: 'Сотрудник' },
//     { value: 'status', content: 'Статус' }
// ];

const Filter = (props) => {
    const [typesValue, setTypesValue] = useState('');
    const [bcsValue, setBcsValue] = useState(1);
    const [floorsValue, setFloorsValue] = useState(2);
    const [employeeValue, setEmployeeValue] = useState('');
    const [statusValue, setStatusValue] = useState('');
    const [priorityValue, setPriorityValue] = useState('');

    const [typesContent, setTypesContent] = useState('Все');
    const [bcsContent, setBcsContent] = useState(props.officesList[0].content);
    const [employeeContent, setEmployeeContent] = useState('Все');
    const [statusContent, setStatusContent] = useState('Все');
    const [priorityContent, setPriorityContent] = useState('Все');

    useEffect(() => {
        setBcsContent(props.officesList[0].content);
        setBcsValue(props.officesList[0].value);

    }, [props.officesList[0].content, props.officesList[0].value]);

    useEffect(() => {
        props.getRoutes(bcsValue, floorsValue);
        props.getFilterTasks(
            {
                status: statusValue,
                components: typesValue,
                floor: floorsValue,
                assignee: employeeValue,
                fixVersions: bcsValue,
                priority: priorityValue
            });

        props.getActiveFilters({
            floor: {
                value: floorsValue
            },
            status: {
                value: statusValue
            },
            type: {
                value: typesValue
            },
            employee: {
                value: employeeValue
            },
            priority: {
                valye: priorityValue
            },
            bcs: {
                value: bcsValue
            }
        });
    }, [floorsValue, bcsValue, typesValue, employeeValue, statusValue, priorityValue]);


    const placeholderFormatter = (name, value) => <span>
        <b>{name}: </b>{value}
    </span>;


    return (
        <div className={cnFilter()}>
            <div className={cnFilter('Select')}>
                <Select
                    value={typesValue}
                    options={[{ value: '', content: 'Все' }, ...props.typeTasks]}
                    onChange={setTypesValue}
                    placeholder={placeholderFormatter('Тип', typesContent)}
                    changeContent={setTypesContent}
                    showAlwaysPlaceholder
                    typeFilter = "types"
                />
            </div>
            <div className={cnFilter('Select')}>
                <Select
                    key={!!bcsContent}
                    value={bcsValue}
                    onChange={setBcsValue}
                    options={props.officesList}
                    placeholder={bcsContent}
                    changeContent={setBcsContent}
                    showAlwaysPlaceholder
                    typeFilter = "bcs"
                /> 
            </div>
            <div className={cnFilter('Select')}>
                <Select
                    value={floorsValue}
                    onChange={setFloorsValue}
                    options={props.officesList[0].floors}
                    placeholder={placeholderFormatter('Этаж', floorsValue)}
                    changeContent={setTypesContent}
                    showAlwaysPlaceholder
                    typeFilter = "floor"
                />
            </div>
            <div className={cnFilter('Select')}>
                <Select
                    value={employeeValue}
                    onChange={setEmployeeValue}
                    options={[{ value: '', content: 'Все' }, ...props.assignedTasks]}
                    placeholder={placeholderFormatter('Исполнитель', employeeContent)}
                    changeContent={setEmployeeContent}
                    showAlwaysPlaceholder
                    typeFilter = "employee"
                />
            </div>
            <div className={cnFilter('Select')}>
                <Select
                    value={statusValue}
                    onChange={setStatusValue}
                    options={[{ value: '', content: 'Все' }, ...props.statusTasks]}
                    placeholder={placeholderFormatter('Статус', statusContent)}
                    changeContent={setStatusContent}
                    showAlwaysPlaceholder
                    typeFilter = "status"
                />
            </div>
            <div className={cnFilter('Select')}>
                <Select
                    value={statusValue}
                    onChange={setPriorityValue}
                    options={[{ value: '', content: 'Все' }, ...props.priorityTasks]}
                    placeholder={placeholderFormatter('Приоритет', priorityContent)}
                    changeContent={setPriorityContent}
                    showAlwaysPlaceholder
                    typeFilter = "priority"
                />
            </div>
            {/* <div className={cnFilter('Button')}>
                <Button />
            </div> */}
            {
            //     <div className={cnFilter('Select')}>
            //     <Select
            //         value={['']}
            //         onChange={''}
            //         options={cols}
            //         placeholder='Колонки'
            //         changeContent={setTypesContent}
            //         showAlwaysPlaceholder
            //     />
            // </div>
            }
        </div>
    );
};

export default connect(mapStateToProps, { getActiveFilters, getAllTasks, getFilterTasks, getRoutes })(Filter);