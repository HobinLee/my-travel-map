import {useState} from 'react';
import styled from 'styled-components';

const DragScrollWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 100px;
`

const DragScroll = ({children}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [scrollTop, setScrollTop] = useState(null);
  const [clientX, setClientX] = useState(null);
  const [clientY, setClientY] = useState(null);

  const onMouseMove = (event) => {
    //const {clientX, scrollLeft, scrollTop, clientY} = this.state;
    //this._scroller.scrollLeft = scrollLeft - clientX + event.clientX;
    //this._scroller.scrollTop = scrollTop - clientY + event.clientY;
  };

  const onMouseUp =  () => {
    setIsScrolling(false);
    setScrollLeft(0);
    setScrollTop(0);
    setClientX(0);
    setClientY(0);
  };

  const onMouseDown = (event) => {
    //const {scrollLeft, scrollTop} = this._scroller;
    
    setIsScrolling(true);
    //setScrollLeft(scrollLeft);
    //setScrollTop(scrollTop);
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  /*

  componentWillUpdate = (nextProps, nextState) =>{
     if(this.state.isScrolling !== nextState.isScrolling ) {
       this.toggleScrolling(nextState.isScrolling);
      }
  };

  toggleScrolling = (isEnable) => {
    if (isEnable) {
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    } else {
      window.removeEventListener('mousemove', this.onMouseMove);
    }
  };

  onScroll = (event) => {
  };

  

  attachScroller = (scroller) => {
    this._scroller = React.findDOMNode(scroller);
  };
*/
  return <DragScrollWrapper>
    <div className="scroller"
      onMouseDown={onMouseDown}
      onScroll={onMouseMove}
    >
        {children}
      </div>
  </DragScrollWrapper>;
}

export default DragScroll;
