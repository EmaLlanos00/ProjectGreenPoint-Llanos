import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../utilities/firebaseConfig"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [singleProd, setSingleProd] = useState({})
  const { id } = useParams()
  console.log(id)
  useEffect(() => {

    async function fetchData() {

      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const itemFromFirestore = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setSingleProd(itemFromFirestore);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    fetchData();

  }, [id])

  return (
    <div className="w-8/12 flex justify-center m-auto">
      <ItemDetail data={singleProd} />
    </div>
  )
}
export default ItemDetailContainer;