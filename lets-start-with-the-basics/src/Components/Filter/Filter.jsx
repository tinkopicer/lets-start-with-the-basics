import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Product-Reducer';
import style from './Filter.module.css';
import { PriceFilterForm } from './PriceFilterForm';

const Filter = (props) => {
    const [color, setColor] = useState('withoutFilter')
    let colorArray = ['red', 'white', 'black']
    const dispatch = useDispatch()
    let setFilterHandler = () => {
        dispatch(actions.setColorFilter(color))
    }
    let filterCleaner = () => {
        dispatch(actions.setColorFilter('withoutFilter'))
    }

    return (
        <Nav className={style.NavContainer}>
            <Card >
                <Card.Body>
                    Selected:{color}
                    <br />
                    <PriceFilterForm/>
                    max:{props.maxPrice}
                    <br />
                    mix:{props.minPrice}
                    <Nav>{colorArray.map((i) => <SelectButton key={i} setColor={setColor} color={i} />)}</Nav>
                    <Button variant='dark' onClick={setFilterHandler}>Фильтр</Button>
                    <Button variant='dark' onClick={filterCleaner}>Очистить фильтр</Button>
                </Card.Body>
            </Card>
        </Nav>
    );
}

export default Filter;

export const SelectButton = (props) => {
    return (
        <button className={style.button} style={{ backgroundColor: props.color }} onClick={() => { props.setColor(props.color) }}></button>
    )
}