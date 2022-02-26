import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterItems=(category)=>{
       const updatedList = Menu.filter((curElem)=>{
            return curElem.category ===category;
    });
        setMenuData(updatedList);
    };
    
  return(
      <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={()=>filterItems('breakfast')}>Breakfast</button>
                <button className='btn-group__item' onClick={()=>filterItems('lunch')}>Lunch</button>
                <button className='btn-group__item' onClick={()=>filterItems('evening')}>Evening</button>
                <button className='btn-group__item' onClick={()=>filterItems('dinner')}>Dinner</button>
                <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
                

            </div>
        </nav>
        <MenuCard menuData={menuData}/>
      </>
  )
}

export default Restaurant