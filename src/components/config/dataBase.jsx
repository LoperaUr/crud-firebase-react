import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAvvlMSmVcuQk8zisRjWalpdAclk_oY-Vo",
  authDomain: "crud-react-ca4da.firebaseapp.com",
  projectId: "crud-react-ca4da",
  storageBucket: "crud-react-ca4da.appspot.com",
  messagingSenderId: "730701978738",
  appId: "1:730701978738:web:ddc0588caec06d6a2c76eb",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const storage = getStorage(app);

export const subirImagen = async (file) => {
  const uploadImg = ref(storage, v4());
  await uploadBytes(uploadImg, file);
  const urlImg = await getDownloadURL(uploadImg);
  return urlImg;
};
