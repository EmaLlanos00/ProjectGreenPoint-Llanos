/* This example requires Tailwind CSS v2.0+ */
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../utilities/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";
import Breadcrum from "./Breadcrum";

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {//Obteniendo los datos de Firestore. La promesa ha sido ajustada para funcionar junto a los links de react-router-dom.

    async function fetchData() {

      if (category == undefined) {

        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({

          id: item.id,
          ...item.data()

        }));

        setListProducts(dataFromFirestore);

      } else {

        const q = query(collection(db, "products"), where(`categories.${category}`, "==", true)); //Filtro para las categorías.
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item => ({

          id: item.id,
          ...item.data()

        }));

        setListProducts(dataFromFirestore);

      }
    } fetchData();

  }, [category]);

  return (
    <>
      <Breadcrum />
      <div className="flex flex-row flex-wrap gap-4 justify-evenly">
        <ItemList products={listProducts} />
      </div>
    </>
  )
}
export default ItemListContainer