import React from 'react'
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { RxCross2 } from 'react-icons/rx';
import Button from '@mui/material/Button';
import BeatLoader from "react-spinners/BeatLoader";


const Imgcrper = ({image, cropperRef, getCropData, setImage, loader}) => {
    

  return (
    <div className='profile-pic-upload'>
        <div className='header-custom'>
            <div className='header-tag'>
                <h4>Upload Profile Picture</h4>
            </div>
            <div className='cross-icon' onClick={()=> setImage()}>
                <RxCross2/>
            </div>
        </div>
        <div className='preview-img'>
            <div
                className="img-preview"
                style={{ width: "100%", float: "left", height: "300px" }}
            />
        </div>
        <div className='upload-img'>
            <Cropper
            ref={cropperRef}
            style={{ height: 300, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
            />
        </div>
        <div className='upload-btn' onClick={getCropData}>
            { loader ? <Button className='btn' variant="contained"><BeatLoader color='#fff' size={20}/></Button> : <Button className='btn' variant="contained">upload</Button>}
        </div>
    </div>
  )
}

export default Imgcrper;
