import React, { createRef, useRef, useState } from 'react'
import './style.scss'
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../features/slice/UserSlice';
import CoverPhotoImg from './coverimg';

const CoverImgUpload = () => {
  const users = useSelector((user)=> user.loginSlice.login);
  const uploadfile = useRef(null)
  const [image, setImage] = useState()
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();
  const storage = getStorage();
  const storageRef = ref(storage, `cover-picture/ ${users.uid}`);
  const auth = getAuth();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

    const handleUploadImg = (e) => {
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
              getDownloadURL(storageRef).then((url) => {
                updateProfile(auth.currentUser, {
                  uploadPhotoURL: url,
                })
                .then(()=> {
                  setImage(false)
                  dispatch(LoginUser({...users, uploadPhotoURL: url,}))
                  localStorage.setItem('users', JSON.stringify({...users, uploadPhotoURL: url,}))
                })
              });
        });
      }
  
    };

  return (
    <div>
      <div className='upload-cover-img' onClick={()=>uploadfile.current.click()}>
          <input type='file' hidden ref={uploadfile} onChange={handleUploadImg}/>
        <div className='input-text' onClick={getCropData}>
          <p>upload photo</p>
        </div>
      </div>
      <div>{image &&<CoverPhotoImg image={image} cropperRef={cropperRef} cropData={cropData} getCropData={getCropData} setImage={setImage} loader={loader}/>}</div>
    </div>
  )
}

export default CoverImgUpload;
