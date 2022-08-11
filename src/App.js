import { useState, useEffect } from 'react';
import Routes from './Router';
import ProductApi from './api/ProductApi';
import CategoryApi from './api/CategoryApi';
import UserApi from './api/UsersApi';
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUser] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const {data : products} = await ProductApi.getAll();
        console.log(`products`, products)
        const {data : category} = await CategoryApi.getAll();
        console.log(`category`, category)
        const {data : users} = await UserApi.getAll();
        console.log(`users`, users)
        setUser(users)
        setCategories(category)
        setProducts(products)
      } catch (error) {  
        console.log(error)
      }
    }
    fetchData()
  },[])

  const removeProduct = async (id) => {
    try {
      await ProductApi.remove(id);
      const newProduct = products.filter(product => product._id != id)
      setProducts(newProduct); 
    } catch (error) {
      
    }
  }
  const addProduct = async (data) => {
    try {
      await ProductApi.add(data)
    } catch (error) {
      console.log(error);
    }
  }

  const updateProduct = async (item) => {
    try {
      await fetch(`http://localhost:4000/api/product/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const newProduct = products.map((pro) =>
        pro.id === item.id ? item : products
      );
      console.log("okeoke", item);
      setCategories(newProduct);
    } catch (error) {
      console.log(error)
    }
  }

  const removeCategory = async (id) => {
    try {
      await CategoryApi.remove(id)
      const newCategory = categories.filter(category => category._id != id)
      setCategories(newCategory);
    } catch (error) {
      console.log(error)
    }
  }

  const updateCategory = async (category) => {
    try {
      await fetch(`http://localhost:4000/api/category/${category.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });
      const newCategory = categories.map((cate) =>
        cate.id === category.id ? category : categories
      );
      console.log("okeoke", category);
      setCategories(newCategory);
    } catch (error) {
      console.log(error)
    }
  }

  const addCategory = async (item) => {
    console.log(item);
    try {
      await CategoryApi.add(item)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="App">
      <Routes 
        products={products}
        category={categories} 
        users={users} 
        addProduct={addProduct}
        removeProduct={removeProduct}
        removeCategory={removeCategory}  
        updateCategory={updateCategory}
        updateProduct={updateProduct}
        addCategory={addCategory}
      />
    </div>
  );
}

export default App;
