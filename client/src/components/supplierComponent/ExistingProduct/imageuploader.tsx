import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e: any) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return (<>
        <div className="image-uploader">
            {image ? (
                <div className="preview">
                    <img src={URL.createObjectURL(image)} alt="Preview" />
                </div>
            ) : (
                <>
                    <label htmlFor="upload-input" className="upload-label">
                        <div className="image-content">
                            <Icon icon="ion:camera-outline" style={{ color: "#555555" }} width={50} height={50} />
                        </div>
                        <button>Upload Image</button>
                    </label>
                    <input
                        type="file"
                        id="upload-input"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </>)}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="label">Product Name::</label>
            {/* <FormikField type="email" name="email" /> */}
            <input className="input" type="text" placeholder="Example " />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="label">Product Name:</label>
            <input className="input" type="text" placeholder="Example " />
        </div>
        <div className="mb-3 d-flex align-items-start">
            <label htmlFor="" className="label">Product Description:</label>
            <textarea className="input" placeholder=" Ipsum...le " />
        </div>
    </>
    );
};

export default ImageUploader;
