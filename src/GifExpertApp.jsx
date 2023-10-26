import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Hunter x Hunter",
  ]);
  
  const onAddCategory = (newCategory) => {
    //Esta función agrega una nueva categoria a nuestro useState categories
    // setCategories([...categories, 'Dragon Ball Z']);
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  

  return (
    <>
      <h1>GiftExpertApp</h1>
      {/* <AddCategory setCategories={setCategories}></AddCategory> */}
      <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>
      <ol>
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))}
      </ol>
    </>
  );
};
