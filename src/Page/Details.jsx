import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Colors from '../Components/Colors';
import Footer from '../Components/Footer';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })
  const { productId } = useParams()
  const [data, setData] = useState([])
  console.log(data)

  const getProductDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/kategoris/21?populate=*`)
      if (res.status === 200) {
        setData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <div>
      <Header />
      <div className='container' style={{
        marginTop: isMobile ? "20%" : isTablet ? "15%" : "10%"
      }}>
        {isMobile || isTablet ? (
          <>
            {data.map(item => {
              const datas = item.attributes
              let i = 0
              const elements = []
              for (i; i < datas.rating; i++) {
                elements.push(<i className="fa-solid fa-star" style={{ color: Colors.yellow }}></i>)
              }
              const foto = datas.foto.data
              return (
                <div className='w-100 d-flex justify-content-between align-items-start py-3 flex-column-reverse mt-5'>
                  <div className='w-100'>
                    <h2 className='my-3 text-capitalize'>{datas.nama}</h2>
                    <h2 className='my-3 fw-bolder'>Rp. {datas.harga}</h2>
                    <h5 className='text-black-50'>{datas.terjual} Terjual-
                      {elements}
                    </h5>
                    <hr />
                    <h2>Informasi Produk</h2>
                    <div className='my-3 w-100 mb-3'>
                      <table className='w-100'>
                        <tr>
                          <td><h5 className='text-black-50 mb-0'>Kategori</h5></td>
                          <td><h5 className='mb-0 text-capitalize'>{datas.kategori.data.attributes.nama}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Brand</h5></td>
                          <td><h5 className='mb-0 text-capitalize'>{datas.brand}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Min Pembelian</h5></td>
                          <td><h5 className='mb-0'>{datas.minPembelian}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Berat Satuan</h5></td>
                          <td><h5 className='mb-0'>{datas.berat} Gram</h5></td>
                        </tr>
                      </table>
                    </div>
                    <hr className='' />
                    <h2>Deskripsi Produk</h2>
                    <h5 className='text-black-50 w-100'>{datas.deskripsi}</h5>
                    <hr />
                    <div className='w-100 d-flex justify-content-between align-items-center shadow rounded-3 container' style={{
                      border: "0.1rem solid grey"
                    }}>
                      <div className='container d-flex w-50'>
                        <i className="fa-solid fa-shop fs-4"></i>
                        <h6 className='ms-2 mb-0 text-capitalize'>{datas.toko.data.attributes.nama}</h6>
                      </div>
                      <div className='d-flex justify-content-between  align-items-center pe-3 w-50'>

                        <div className='container w-50 d-flex justify-content-center' style={{
                          borderRight: "0.5px solid grey"
                        }}>
                          <div className='d-flex align-items-center flex-column justify-content-center w-100'>
                            <div className='w-100 d-flex align-items-center justify-content-center'>
                              <i className="fa-solid fa-star fs-4" style={{
                                color: Colors.yellow
                              }}></i>
                              <p className='mb-0 fs-4 text-black-50 ms-1'>{datas.rating}</p>
                            </div>
                            <p className='mb-0'>Rating</p>
                          </div>
                        </div>
                        <div className='container w-50 d-flex justify-content-center'>
                          <div className='d-flex align-items-center flex-column justify-content-center w-100'>
                            <div className='w-100 d-flex align-items-center justify-content-center'>
                              <i className="fa-solid fa-handshake fs-4" style={{
                                color: Colors.yellow
                              }}></i>
                              <p className='mb-0 fs-4 text-black-50 ms-1'>{datas.toko.data.attributes.totalPenjualan}</p>
                            </div>
                            <p className='mb-0'>Total Penjualan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='w-100 container d-flex  align-items-start flex-column mb-5'>
                    {foto ? (
                      <img src={`http://localhost:1337${foto.attributes.url}`} className="card-img-top w-100" />
                    ) : (
                      <img src={`https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`} className="card-img-top" />
                    )}
                    <div className='py-4 w-100 d-flex justify-content-between align-items-center shadow rounded-3 mt-5 container' style={{
                      border: "0.1rem solid grey"
                    }}>
                      <div className='w-100 d-flex justify-content-center align-items-center'>
                        <h5 className='mb-0'>Contact Me :</h5>
                      </div>
                      <div className='w-75 d-flex justify-content-start align-items-center'>
                        <i className="fa-brands fa-square-instagram fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-square-whatsapp fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-square-facebook fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-tiktok fs-2 mb-0 mx-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        ) : (
          <>
            {data.map(item => {
              const datas = item.attributes
              let i = 0
              const elements = []
              for (i; i < datas.rating; i++) {
                elements.push(<i className="fa-solid fa-star" style={{ color: Colors.yellow }}></i>)
              }
              const foto = datas.foto.data
              return (
                <div className='w-100 d-flex justify-content-between align-items-start py-3 mt-5'>
                  <div className='w-100'>
                    <h2 className='my-3 text-capitalize'>{datas.nama}</h2>
                    <h2 className='my-3 fw-bolder'>Rp. {datas.harga}</h2>
                    <h5 className='text-black-50'>{datas.terjual} Terjual-
                      {elements}
                    </h5>
                    <hr />
                    <h2>Informasi Produk</h2>
                    <div className='my-3 w-100 mb-3'>
                      <table className='w-100'>
                        <tr>
                          <td><h5 className='text-black-50 mb-0'>Kategori</h5></td>
                          <td><h5 className='mb-0 text-capitalize'>{datas.kategori.data.attributes.nama}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Brand</h5></td>
                          <td><h5 className='mb-0 text-capitalize'>{datas.brand}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Min Pembelian</h5></td>
                          <td><h5 className='mb-0'>{datas.minPembelian}</h5></td>
                        </tr>
                        <tr >
                          <td><h5 className='text-black-50 mb-0'>Berat Satuan</h5></td>
                          <td><h5 className='mb-0'>{datas.berat} Gram</h5></td>
                        </tr>
                      </table>
                    </div>
                    <hr className='' />
                    <h2>Deskripsi Produk</h2>
                    <h5 className='text-black-50 w-100'>{datas.deskripsi}</h5>
                    <hr />
                    <div className='w-100 py-1 d-flex justify-content-between align-items-center shadow rounded-3 container' style={{
                      border: "0.1rem solid grey"
                    }}>
                      <div className='container d-flex w-50'>
                        <i className="fa-solid fa-shop fs-4"></i>
                        <h6 className='ms-2 mb-0 text-capitalize'>{datas.toko.data.attributes.nama}</h6>
                      </div>
                      <div className='d-flex justify-content-between  align-items-center pe-3 w-50'>

                        <div className='container w-50 d-flex justify-content-center' style={{
                          borderRight: "0.5px solid grey"
                        }}>
                          <div className='d-flex align-items-center flex-column justify-content-center w-100'>
                            <div className='w-100 d-flex align-items-center justify-content-center'>
                              <i className="fa-solid fa-star fs-4" style={{
                                color: Colors.yellow
                              }}></i>
                              <p className='mb-0 fs-4 text-black-50 ms-1'>{datas.rating}</p>
                            </div>
                            <p className='mb-0'>Rating</p>
                          </div>
                        </div>
                        <div className='container w-50 d-flex justify-content-center'>
                          <div className='d-flex align-items-center flex-column justify-content-center w-100'>
                            <div className='w-100 d-flex align-items-center justify-content-center'>
                              <i className="fa-solid fa-handshake fs-4" style={{
                                color: Colors.yellow
                              }}></i>
                              <p className='mb-0 fs-4 text-black-50 ms-1'>{datas.toko.data.attributes.totalPenjualan}</p>
                            </div>
                            <p className='mb-0'>Total Penjualan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='w-100 container d-flex  align-items-start flex-column mb-5'>
                    {foto ? (
                      <img src={`http://localhost:1337${foto.attributes.url}`} className="card-img-top w-100" />
                    ) : (
                      <img src={`https://www.buwelldrillers.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`} className="card-img-top" />
                    )}
                    <div className='py-4 w-100 d-flex justify-content-between align-items-center shadow rounded-3 mt-5 container' style={{
                      border: "0.1rem solid grey"
                    }}>
                      <div className='w-25 d-flex justify-content-center align-items-center'>
                        <h5 className='mb-0'>Contact Me :</h5>
                      </div>
                      <div className='w-75 d-flex justify-content-start align-items-center'>
                        <i className="fa-brands fa-square-instagram fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-square-whatsapp fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-square-facebook fs-2 mb-0 mx-2"></i>
                        <i className="fa-brands fa-tiktok fs-2 mb-0 mx-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Details;