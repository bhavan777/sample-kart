import React from 'react';
import AddToCart from '../components/AddToCart';
const Home = (props) => {
  const homeClickHandler = (id, action) => {
    props.addToCart(id, action);
  };

  return (
    <div className='product'>
      <ul className='product__list'>
        {
          props.data.map((item) => (
            <li className='product__product' key={item.id}>
              <div className='product__dp' style={{backgroundImage: `url('${item.img}')`}} />
              <div className='product__detail'>
                <h5>{item.title}</h5>
                <AddToCart clickHandler={homeClickHandler} id={item.id} />
                <p className='product__price'>{item.price}</p>
              </div>
            </li>)
          )
        }
      </ul>
    </div>
  );
}

export default Home;
