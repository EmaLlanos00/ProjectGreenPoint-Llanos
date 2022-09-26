import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../utilities/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {//Este componente obtiene los datos de un solo elemento desde FireStore. Se los enviará a ItemDetail para montar los detalles.

  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();


  useEffect(() => {

    async function fetchData() {

      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {

        const itemFromFirestore = {//Se crea un objeto con el id del documento y sus datos. Esto es necesario porque el key de React necesita el id.

          id: docSnap.id,
          ...docSnap.data()

        }

        setSingleProd(itemFromFirestore);

      } else {

        console.log("No such document!");

      }
    } fetchData();

  }, [id])

  return (
    <div className="w-8/12 flex justify-center m-auto">
      <ItemDetail data={singleProd} />
    </div>
  )
}
export default ItemDetailContainer;