/* eslint-disable no-useless-concat */
/* eslint-disable no-useless-constructor */
import React from 'react';
import data from '../data.json';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sortProducts: '',
      products: [],
      sizes: [],
      filteredProducts: [],
    };

    this.handleClick = () => {
      console.log('hello');
    };
    this.handleSort = (size) => {
      this.setState({
        sizes: [...this.state.sizes, size],
      });
    };
    this.handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        sortProducts: event.target.value,
      });
    };
  }
  render() {
    // console.log(this.state.sizes);
    let filteredArray = [];
    if (this.state.sizes.length >= 1) {
      for (let i = 0; i < this.state.sizes.length; i++) {
        data.products.filter((product) => {
          if (product.availableSizes.includes(this.state.sizes[i])) {
            filteredArray.indexOf(product) === -1
              ? filteredArray.push(product)
              : console.log('');
          }
        });
      }
    }
    if (filteredArray.length === 0) {
      var productsArray = data.products;
    } else {
      var productsArray = filteredArray;
    }
    if (this.state.sortProducts === 'Highest to Lowest') {
      productsArray = productsArray.sort((a, b) => b.price - a.price);
    }
    if (this.state.sortProducts === 'Lowest to Highest') {
      productsArray = productsArray.sort((a, b) => a.price - b.price);
    }
    return (
      <>
        <section>
          <button onClick={() => this.handleSort('X')}>X</button>
          <button onClick={() => this.handleSort('L')}>L</button>
          <button onClick={() => this.handleSort('XL')}>XL</button>
          <button onClick={() => this.handleSort('XXL')}>XXL</button>
          <button onClick={() => this.handleSort('M')}>M</button>
          <button onClick={() => this.handleSort('XS')}>XS</button>
          <button onClick={() => this.handleSort('S')}>S</button>
        </section>
        <section>
          <form>
            <select onChange={this.handleSubmit} name='sort' id='sort'>
              <option>Sort the products</option>
              <option value='Highest to Lowest'>Price - High to Low</option>
              <option value='Lowest to Highest'>Price - Low to High</option>
            </select>
          </form>
        </section>
        <section className='flex'>
          {productsArray.map((eachProduct) => (
            <article className='article'>
              <img
                src={`/static/products/` + `${eachProduct.sku}` + `_1.jpg`}
                alt={eachProduct.title}
              />
              <p>{eachProduct.title}</p>
              <p>{eachProduct.style}</p>
              <p>{eachProduct.availableSizes}</p>
              <p>{eachProduct.currencyFormat}</p>
              <p>{eachProduct.description}</p>
              <p>{eachProduct.price}</p>
            </article>
          ))}
        </section>
        <section className='cart'>
          <p onClick={this.handleClick}>click</p>
          <article></article>
        </section>
      </>
    );
  }
}
export default App;
