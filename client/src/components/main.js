import React,{useEffect, useState} from 'react'
import './main.css';
import socket from './socket';
import Item from './item/item';

const Main =()=> {
  const [data, setData] = useState([])

  useEffect(() => {
    socket.emit('start')
    socket.on('ticker', e => setData(e));
  }, [socket])

  function getItems(data){
    if(data.length > 0){
        let tmp = data.filter( i => {return i.exchange === 'NASDAQ'}).map( e => <Item data={e} /> )
        return tmp
    }
    return 'no connection'
  }
   
  return (
    <div className="main">
        <div className="title">NASDAQ</div>
        <div className="content">{getItems(data)}</div>
    </div>
  );
}

export default Main;