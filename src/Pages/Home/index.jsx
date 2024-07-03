import { useState, useEffect } from "react"
import { getAllProducts } from '../../api'
//import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"


function Home() {

  const [items, setItems] = useState(null)   

  useEffect(() => {
    async function fetchData() {
      try{
        const data = await getAllProducts()
        setItems(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    } 
    fetchData()
  }, [])

  return (
    <> 
      <p>HOME</p>
      <section className='grid gap-5 p-[35px] pr-[0px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full max-w-screen-lg '>   
        {
          items?.map(item => (
            <Card 
            key={item.id} 
            data={item}/>
          ))
        } 
      </section>
      <ProductDetail />       
    </>
  )
}

export default Home
  