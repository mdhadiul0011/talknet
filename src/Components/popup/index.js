import React, { createRef, useRef, useState } from 'react'
import './style.scss'
import { GrGallery } from 'react-icons/gr';
import Imgcrper from './imgcrper';
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../features/slice/UserSlice';

const PopUp = ({setPopup}) => {
  const users = useSelector((user)=> user.loginSlice.login);
  const choosefile = useRef(null)
  const [image, setImage] = useState()
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
  const storage = getStorage();
  const storageRef = ref(storage, `profile-picture/ ${users.uid}`);
  const auth = getAuth();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const handleUploadChange = (e)=> {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  }

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
          setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
          const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
          uploadString(storageRef, message4, 'data_url').then((snapshot) => {
            getDownloadURL(storageRef).then((downloadURL) => {
              updateProfile(auth.currentUser, {
                photoURL: downloadURL,
              })
              .then(()=> {
                setLoader(false)
                setPopup(false)
                dispatch(LoginUser({...users, photoURL: downloadURL,}))
                localStorage.setItem('users', JSON.stringify({...users, photoURL: downloadURL,}))
              })
            });
      });
    }

  };
  
  return (
    <div>
        <div className='uploade-page' onClick={()=> choosefile.current.click()}>
        <input type='file' hidden ref={choosefile} onChange={handleUploadChange}/>
          <div className='upload'>
            <div className='upload-icons'>
                <div className='icons'>
                  <GrGallery/>
                </div>
                <p>upload photo</p>
            </div>
          </div>
          
      </div>
      {image && <Imgcrper image={image} cropperRef={cropperRef} cropData={cropData} getCropData={getCropData} setImage={setImage} loader={loader}/>}
    </div>
  )
}

export default PopUp;
