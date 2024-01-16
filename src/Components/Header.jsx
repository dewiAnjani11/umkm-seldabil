import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ maxWidth: 769 })
  const headerRef = useRef(null)
  const headerRef1 = useRef(null)
  const iconMobileRef = useRef(null)
  const loginBtnRef = useRef(null)
  const registerBtnRef = useRef(null)
  const iconCloseRef = useRef(null)

  const barsMenuClick = () => {
    headerRef.current.className = "d-flex w-75 position-absolute py-5 flex-column bg-white shadow container"
    headerRef1.current.className = "w-100 ps-2 d-flex flex-column justify-content-center align-items-center"
    loginBtnRef.current.className = "btn w-100 my-1 fw-bolder"
    registerBtnRef.current.className = "btn w-100 my-1 fw-bolder"
    iconMobileRef.current.className = "d-none"
    iconCloseRef.current.className = "fa-solid fa-rectangle-xmark d-block fs-1 position-absolute"
    iconCloseRef.current.style.top = "1%"
    iconCloseRef.current.style.right = "3%"
  }

  const closeBarsMenu = () => {
    headerRef.current.className = "d-flex d-none w-100"
    headerRef1.current.className = "w-25 ps-2 d-flex justify-content-between align-items-center"
    loginBtnRef.current.className = "btn w-50 mx-1 fw-bolder"
    registerBtnRef.current.className = "btn w-50 mx-1 fw-bolder"
    iconMobileRef.current.className = "fa-solid fa-bars fs-1 mb-0"
    iconCloseRef.current.className = "fa-solid fa-rectangle-xmark d-none fs-1"
  }

  const [searchKeywoard, setSearchKeywoard] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchKeywoard.toLowerCase() === "makanan") {
      window.location.href = "/category/makanan";
    } else if (searchKeywoard.toLowerCase() === "minuman") {
      window.location.href = "/category/minuman";
    } else if (searchKeywoard.toLowerCase() === "kerajinan") {
      window.location.href = "/category/kerajinan";
    }
  }

  return (
    <div className='position-fixed top-0 w-100 shadow container-fluid z-3 bg-white'>
      <div className='d-flex justify-content-beetwen align-items-center py-3 w-100 container-fluid'>
        <Link to={'/'} className='d-flex justify-content-start align-items-center w-25'>
          {isMobile ? (
            <img src="/LOGOUMKM.png" alt="" className='w-50' />
          ) : (
            <img src="/LOGOUMKM.png" alt="" className='w-25' />
          )}
        </Link>

        {isMobile || isTablet ? (
          <div className='w-100 d-flex'>
            <div className='d-flex d-none w-100' ref={headerRef}>
              <div className='w-100'>
                <div className='w-100 rounded-5 opacity-75 px-2' style={{
                  border: '0.5px solid black'
                }}>
                  <form onSubmit={handleSearch} className='w-100 d-flex justify-content-between'>
                    <input onChange={(event) => setSearchKeywoard(event.target.value)}  type="text" className='w-100 border-0 rounded-5 py-2 px-3' style={{
                      outline: "none"
                    }} placeholder='cari makanan, minuman, atau kerajinan' />
                    <button className='btn' type='submit'>
                      <i className="fa-solid fa-magnifying-glass fs-4"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className='w-25 ps-2 d-flex justify-content-between align-items-center' ref={headerRef1}>
                <Link to={'/login'} className='btn w-50 mx-1 fw-bolder' ref={loginBtnRef} style={{
                  backgroundColor: "#FFC700",
                  color: "#FFFFFF"
                }} onMouseOver={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#FFC700';
                  e.target.style.border = '1px solid #FFC700'
                }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#FFC700';
                    e.target.style.color = '#FFFFFF';
                  }}>Masuk</Link>
                <i className="fa-solid fa-rectangle-xmark d-none fs-1" ref={iconCloseRef} onClick={() => {
                  closeBarsMenu()
                }}></i>
              </div>
            </div>
            <div className='d-flex w-100 justify-content-end align-items-center' onClick={() => {
              barsMenuClick()
            }}>
              <i className="fa-solid fa-bars fs-1 mb-0" ref={iconMobileRef}></i>
            </div>

          </div>
        ) : (
          <div className='w-100 d-flex'>
            <div className='d-flex w-100'>
              <div className='w-100'>
                <div className='w-100 rounded-5 opacity-75 px-2' style={{
                  border: '0.5px solid black'
                }}>
                  <form onSubmit={handleSearch} className='w-100 d-flex justify-content-between'>
                    <input onChange={(event) => setSearchKeywoard(event.target.value)} type="text" className='w-100 border-0 rounded-5 py-2 px-3' style={{
                      outline: "none"
                    }} placeholder='cari makanan, minuman, atau kerajinan' />
                    <button className='btn' type='submit'>
                      <i className="fa-solid fa-magnifying-glass fs-4"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className='w-25 d-flex  justify-content-center align-items-center'>
                <Link to={'/login'} className='btn w-90 h-100 mx-1 fw-bolder' style={{
                  backgroundColor: "#FFC700",
                  color: "#FFFFFF"
                }} onMouseOver={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#FFC700';
                  e.target.style.border = '1px solid #FFC700'
                }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#FFC700';
                    e.target.style.color = '#FFFFFF';
                  }}>Login Mitra</Link>
              </div>
            </div>
            <div className='d-flex w-100 justify-content-end align-items-center d-none'>
              <i className="fa-solid fa-bars fs-1 mb-0"></i>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Header;