import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const LabelWrapper = styled.div`
  position: absolute;
  background-color: var(--modalColor);
  color: var(--textColor);
  padding: 10px;
  border-radius: 10px;
  left: ${props => props.mouse?.x + 20}px;
  top: ${props => props.mouse?.y}px;
  z-index: 1000;
`

const Label = () => {
  const [mouse, setMouse] = useState(null);
  const { hoverCountry } = useSelector(state => state.map);
  useEffect(() => {
    if (mouse === null) {
      document.addEventListener('mousemove', (e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY
        });
      } );
    }
  }, []);

  return hoverCountry === 'Sea' ?
  <></>
  :
  <LabelWrapper mouse = {mouse}>
    { hoverCountry }
  </LabelWrapper>
};

export default Label;