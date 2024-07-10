import { useContext,useEffect } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Card } from "../../Components/Card"

function Home() {

  const {
    items,
    setSearchByTitle,
    filteredItems,
    setSearchByCategory
  } = useContext(ShoppingCartContext)

  //Fetch Category . On Path
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)



  useEffect(() => {
    if (index && index !== '') {
        setSearchByCategory(index);
    }
}, [index, setSearchByCategory]);





const renderView = () => {
  
  let itemsToRender = filteredItems ? filteredItems : items;
  

  if (!itemsToRender || itemsToRender.length === 0) {
      return <div>No Results Found</div>;
  }

  return itemsToRender.map(item => (
      <Card key={item.id} data={item} />
  ));
};



  return (
    <>

      <div className='flex justify-column items-center'>
        <h1 className='text-black p-2 font-bold text-lg  text-center'>Exclusive Products</h1>
      </div>

      <input
        type='text'
        placeholder='Search a Products'
        className='border border-black rounded-lg w-[350px] p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)} />
      <section className='grid gap-5 p-[15px] pr-[0px] mt-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full max-w-screen-lg '>

        {renderView()}


      </section>

    </>
  )
}

export default Home
