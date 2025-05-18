// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../../assets/database/database'; // Sesuaikan path sesuai lokasi database.js
import Header from '../component/Header';

export default function ProductDetailPage() {
  const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const selectedProduct = productData[productName];
    if (selectedProduct) {
      setProductDetails(selectedProduct);
      setMainImage(selectedProduct.thumbnails[0] || "https://via.placeholder.com/300");
      setQuantity(selectedProduct.quantity || 1); // Set kuantitas dari data
      setProductDetails({ ...selectedProduct, description: selectedProduct.description.split("\n") });
    } else {
      setProductDetails({ name: "Produk Tidak Ditemukan" });
    }
  }, [productName]);

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const handleShopeeClick = () => {
    window.open(`${productDetails.link}`, "_blank");
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const productDetailsname = productDetails.name;
  return (
    <> 
        <Header isHomepage={false}/>
        <div className="font-serif text-[#333] bg-[#FFF8F0] p-6 mx-1 min-h-screen mt-10">
            <nav className="text-gray-600 mb-6 text-xl" style={{ fontFamily: 'Bright' }} onClick={() => window.location.href = "/"}>
                {/* Home {'>'} {productDetails.name} */}
                <a href="/" className='cursor-pointer hover:text-gray-900'>Home {'>'} </a>
                <a href={`/product/${productName}`} className='cursor-pointer hover:text-gray-900'>{capitalizeWords(productDetails.name)}</a>
            </nav>

            <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-y-6 gap-x-6 w-full ">
                {/* Product Images */}
                <div className="md:flex items-center">
                <div className="flex flex-row items-center justify-center
                    w-full mb-4 md:mb-0 md:flex-col md:items-start
                    md:mr-0 md:justify-center md:space-y-2 cursor-pointer md:w-25">
                    {productDetails.thumbnails && productDetails.thumbnails.map((thumb, index) => (
                    <img
                        key={index}
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-full border mr-2 md:mr-0 cursor-pointer"
                        onClick={() => handleThumbnailClick(thumb)} />
                    ))}
                </div>
                <div className="w-full h-full border rounded-2xl flex justify-center md:max-w-[300px] ">
                    <img
                    src={mainImage}
                    alt={productDetails.name}
                    className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                </div>
                {/* Product Info */}
                <div className="max-w-3xl">
                <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'BalooBhai' }}>{productDetails.name}</h1>
                <p className="text-xl font-semibold mb-1">{productDetails.price}</p>
                <p className="text-red-500 flex items-center gap-2">
                    {'★★★★★'} <span className="text-black" style={{ fontFamily: 'BalooBhai' }}>{productDetails.reviews}</span>
                </p>
                {productDetails.description && productDetails.description.map((desc, index) => (
                    <p key={index} className="mt-4 text-xl text-justify" style={{ fontFamily: 'Bright' }}>
                    {desc}
                    </p>
                ))}
                {/* {productDetails.details && (
                    <ul className="list-disc ml-5 mt-3 text-xl" style={{ fontFamily: 'Bright' }}>
                    {productDetails.details.map((detail, index) => (
                        <li key={index}><b>{detail.label}:</b> {detail.value}</li>
                    ))}
                    </ul>
                )} */}
                {/* Purchase Section */}
                <div className="flex items-center mt-6 text-xl" style={{ fontFamily: 'Bright' }}>
                    <button className="px-6 py-2 bg-[#D2EFFF] rounded-full border-1 font-bold cursor-pointer hover:bg-[#E47068] hover:border-[#E47068] hover:text-white" onClick={() => handleShopeeClick()}>Shopee</button>
                    <div className="ml-4 flex items-center gap-2 border px-3 py-1 rounded-full">
                    <p> Stock: {quantity}</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Product Details Section (moved and using dynamic data) */}
            <section className="mt-10 text-xl" style={{ fontFamily: 'Bright' }}>
                <h2 className="text-lg font-bold text-[#E47068]">Product Details</h2>
                <hr className='border-1 border-black-400 mb-4'/>
                {productDetails.details && (
                <ul className="list-disc ml-6 space-y-1">
                    {productDetails.details.map((detail, index) => (
                    <li key={index}><b>{detail.label}:</b> {detail.value}</li>
                    ))}
                </ul>
                )}
            </section>

            {/* Related Products */}
            <section className="mt-10 text-xl" style={{ fontFamily: 'Bright' }}>
                <h2 className="text-lg font-bold text-[#E47068]">Related Products</h2>
                <hr className='border-1 border-black-400 mb-4'/>
                <div className="flex gap-4 overflow-x-auto mb-5">
                {productDetails.relatedProducts && productDetails.relatedProducts.map((relatedProduct, index) => (
                    <img key={index} src={relatedProduct} alt={`Related product ${index + 1}`} className="w-16 h-16 rounded-full border" />
                ))}
                </div>
            </section>
        </div>
    </>
  );
}