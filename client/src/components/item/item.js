import React,{useEffect, useRef} from 'react'
import './item.css';
import Arrow from '../arrow/arrow';

const Item =({data})=> {

  const prevDataRef = useRef();

  useEffect(() => {
    prevDataRef.current = data
  })

  const prevData = prevDataRef.current

  let dir = null
  let posRate = ''

  if (!!prevData && prevData.price > data.price) {
    dir='desc'
    posRate = '-'
  }
  if (!!prevData && prevData.price < data.price) {
    dir='asc'
    posRate = '+'
  }

  return (
    <div className="itemBlock">
      <div className="itemTitleBlock">
          <div className="itemTitle">{data.ticker}</div>
          <div className="itemPrice">{data.price}</div>
      </div>
      <div className="itemContent">
        <div className="itemCP">{`${posRate}${data.change_percent}%`}</div>
        <div className="itemChange">{data.change}</div>
        <Arrow dir={dir} />
      </div>
    </div>
  );
}

export default Item;