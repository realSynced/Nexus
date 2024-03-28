'use client'

import React, { useState } from 'react';

const ImageUploader = () => {
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    // Check if file size exceeds the limit
    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit');
      return;
    }

    reader.onload = () => {
      // setImage(reader.result);

      {/* Implement lazy load */}
      
      // Here you can store the image in localStorage, database, or wherever you need
      // For this example, let's just log the image data
      console.log(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
       {error && <p style={{ color: 'red' }}>{error}</p>}
      {/*
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )} */}
    </div>
  );
};

export default ImageUploader;
