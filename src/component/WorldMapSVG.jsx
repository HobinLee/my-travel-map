import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RowLand from './RowLand';
import { MemoizedSea } from './RowSea';
import { useSelector } from 'react-redux';
import InputCount from './InputCount';

import { userListObjUpdate } from '../store/modules/map';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import Draggable from 'react-draggable';
import Map from '../rsc/images/world.svg';


const WorldMapGrid = ({setProgress}) => {
  const { darkMode } = useSelector(state => state.mode);

  useEffect(() => {
    setProgress(100);
  }, []);

  return <>
    <img src={Map}></img>
  </>
}

export default WorldMapGrid;