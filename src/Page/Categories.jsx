import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Link, useParams } from 'react-router-dom';
import Colors from '../Components/Colors';
import Footer from '../Components/Footer';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const Categories = () => {
  const { nameCategory, id } = useParams()
  console.log(nameCategory)
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })
  const [data, setData] = useState([])
  const [meta, setMeta] = useState(0)

  const getData = async () => {
    try {
      const resp = await axios.get(`http://localhost:1337/api/produks?populate=*&filters[kategori][nama][$eq]=${nameCategory}`)
      if (resp.status === 200) {
        setTimeout(() => {
          setData(resp.data.data);
          setMeta(resp.data.meta.pagination)
        }, 500);
      } else {
        alert('failed to fetch')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Header />
      <div className='container' style={{
        marginTop: isMobile ? "25%" : isTablet ? "15%" : "10%"
      }}>
        {isMobile || isTablet ? (
          <div className='w-100'>
            <div className='d-flex justify-content-between w-50'>
              <Link to={'/'} className='text-decoration-none text-black-50'>Beranda</Link>
              <p className='mb-0 text-black-50'>{">"}</p>
              <Link to={'/'} className='text-decoration-none text-black-50'>Kategori</Link>
              <p className='mb-0 text-black-50'>{">"}</p>
              <Link to={`/category/${nameCategory}`} className='text-decoration-none text-black-50 text-capitalize'>{nameCategory}</Link>
            </div>

            <div className='row py-3 mb-1'>

              {data && data.map(item => {
                const datas = item.attributes
                let i = 0
                const elements = []
                for (i; i < datas.rating; i++) {
                  elements.push(<i className="fa-solid fa-star" style={{ color: Colors.yellow }}></i>)
                }
                const foto = datas.foto.data
                return (
                  <div className='col col-6 p-1'>
                    <Link to={`/details/data/${datas.kategori.data.attributes.nama}/${item.id}`} className='card w-100 shadow border-0 bg-body-tertiary text-decoration-none'>
                      {foto ? (
                        <img src={`http://localhost:1337${foto.attributes.formats.small.url}`} className="card-img-top w-100" />
                      ) : (
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmShM7-kNHf5kT6L2xWZDEJkXZ456TfFWyO49MJePmA&s`} className="card-img-top" />
                      )}
                      <div className="card-body px-2">
                        <h5 className="card-title mb-0 text-capitalize">{datas.nama}</h5>
                        <p className="card-text mb-0 text-capitalize pb-2 mt-2" style={{
                          maxHeight: "5vh",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          backdropFilter: "blur(5px)"
                        }}>{datas.deskripsi}</p>
                        <p className='mb-1 fw-bold'>Rp. {datas.harga}</p>
                        <div className='d-flex justify-content-start align-items-center w-100'>
                          <i className="fa-solid fa-shop me-1" style={{ fontSize: "13px" }}></i>
                          <p className='mb-0 fw-bold text-capitalize' style={{ fontSize: "13px" }}>{datas.nama_toko}</p>
                          <p className='mb-0 card-text text-capitalize' style={{ fontSize: "13px" }}>| {datas.toko.data.attributes.alamat}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-25 mt-2'>
                          {elements}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className='w-100'>
            <div className='d-flex justify-content-between w-25'>
              <Link to={'/'} className='text-decoration-none text-black-50'>Beranda</Link>
              <p className='mb-0 text-black-50'>{">"}</p>
              <Link to={'/'} className='text-decoration-none text-black-50'>Kategori</Link>
              <p className='mb-0 text-black-50'>{">"}</p>
              <Link to={`/category/${nameCategory}`} className='text-decoration-none text-black-50 text-capitalize'>{nameCategory}</Link>
            </div>

            <div className='row py-3 mb-1'>
              {data && data.map(item => {
                const datas = item.attributes
                let i = 0
                const elements = []
                for (i; i < datas.rating; i++) {
                  elements.push(<i className="fa-solid fa-star" style={{ color: Colors.yellow }}></i>)
                }
                const foto = datas.foto.data
                return (
                  <div className='col col-2 p-1'>
                    <Link to={`/category/${nameCategory}/detail/${item.id}`} className='card w-100 shadow border-0 bg-body-tertiary text-decoration-none'>
                      {foto ? (
                        <img src={`http://localhost:1337${foto.attributes.url}`} className="card-img-top w-100 " />
                      ) : (
                        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmShM7-kNHf5kT6L2xWZDEJkXZ456TfFWyO49MJePmA&s`} className="card-img-top" />
                      )}
                      <div className="card-body px-2">
                        <h5 className="card-title mb-0 text-capitalize">{datas.nama}</h5>
                        <p className="card-text mb-0 text-capitalize pb-2 mt-2" style={{
                          maxHeight: "5vh",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          backdropFilter: "blur(5px)"
                        }}>{datas.deskripsi}</p>
                        <p className='mb-1 fw-bold'>Rp. {datas.harga}</p>
                        <div className='d-flex justify-content-start align-items-center w-100'>
                          <i className="fa-solid fa-shop me-1" style={{ fontSize: "13px" }}></i>
                          <p className='mb-0 fw-bold text-capitalize' style={{ fontSize: "13px" }}>{datas.nama_toko}</p>
                          <p className='mb-0 card-text text-capitalize' style={{ fontSize: "13px" }}>| {datas.alamat_toko}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center w-25 mt-2'>
                          {elements}
                        </div>
                        <p>Stock: {datas.stok}</p>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <nav aria-label="page navigation example" className='w-100 d-flex justify-content-center' style={{
          background: "transparent"
        }}>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link text-black fs-5" href="#" style={{
                border: "none"
              }}>
                <i className="fa-solid fa-chevron-left"></i>
              </a>
            </li>
            <li className="page-item"><a className="page-link fs-5 text-black" href="#" style={{
              border: "none"
            }}>1</a></li>
            <li className="page-item"><a className="page-link fs-5 text-black" href="#" style={{
              border: "none"
            }}>2</a></li>
            <li className="page-item"><a className="page-link fs-5 text-black" href="#" style={{
              border: "none"
            }}>3</a></li>
            <li className="page-item">
              <a className="page-link fs-5 text-black" href="#" style={{
                border: "none"
              }}>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <Footer />
    </div>
  );
};

export default Categories;