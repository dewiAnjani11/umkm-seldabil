import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Colors from '../Components/Colors'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
export default function Home() {
    const isMobile = useMediaQuery({maxWidth: 426})
    const isTablet = useMediaQuery({maxWidth : 769})
  return (
    <div className='' style={{   marginTop:isMobile? "25%" : isTablet? "15%" :"10%"
    }}>
        <Header/>
        {/* hero section */}
        <div className='container-fluid'>
            <div id="carouselExampleAutoplaying" className="carousel slide container-fluid z-0" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="banner.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="/banner.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="/banner.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        {/* kategori */}
        {isMobile || isTablet ? (
          <div className='py-5 d-flex justify-content-center align-items-center w-100 position-relative container-fluid'>
            <div className='container-fluid d-flex justify-content-center align-items-center flex-column position-relative w-100'>
              <div className='px-4 fs-6 fw-bolder py-2 rounded-3 position-absolute top-0 start-50 translate-middle-x shadow z-2' style={{
                backgroundColor: Colors.green,
                color: "white"
              }}>KATEGORI</div>
              <div className='w-100 d-flex justify-content-center align-items-center rounded-5 py-4 flex-column ' style={{
                height: "100vh"
              }}>
                <div className='w-100 h-100 rounded-top-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriMakanan.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                  <h1 style={{
                    fontSize: "4rem",
                    color: Colors.green
                  }} className='fst-italic fw-light'>Food &</h1>
                  <h1 style={{
                    fontSize: "4rem",
                    color: Colors.green
                  }} className='fst-italic fw-light'>Beverages</h1>
                  <Link to={'/category/makanan'}>
                    <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                      right: "0%",
                      backgroundColor: Colors.yellow,
                      color: Colors.green
                    }}>
                      Lihat Selengkapnya {'>>>'}
                    </button>
                  </Link>
                </div>
                <div className='w-100 h-100 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.5), rgba(235, 235, 235, 0.5)), url(/kategoriMinuman.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                  <h1 style={{
                    fontSize: "4rem",
                    color: Colors.green
                  }} className='fst-italic fw-light'>Drink's</h1>

                  <Link to={'/category/minuman'}>
                    <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                      right: "0%",
                      backgroundColor: Colors.yellow,
                      color: Colors.green
                    }}>
                      Lihat Selengkapnya {'>>>'}
                    </button>
                  </Link>
                </div>
                <div className='w-100 h-100 rounded-bottom-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriKerajinan.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
                  <h1 style={{
                    fontSize: "4rem",
                    color: Colors.green
                  }} className='fst-italic fw-light mb-0'>Art &</h1>
                  <h1 style={{
                    fontSize: "4rem",
                    color: Colors.green
                  }} className='fst-italic fw-light'>Craft</h1>

                  <Link to={'/category/kerajinan'}>
                    <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                      right: "0%",
                      backgroundColor: Colors.yellow,
                      color: Colors.green
                    }}>
                      Lihat Selengkapnya {'>>>'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      ): (
        <div className='py-5 d-flex justify-content-center align-items-center w-100 mt-5 position-relative container-fluid'>
          <div className='container-fluid d-flex justify-content-center align-items-center flex-column position-relative'>
            <div className='px-5 fs-5 fw-bolder py-2 rounded-3 position-absolute top-0 start-50 translate-middle-x shadow z-2' style={{
              backgroundColor: Colors.green,
              color: "white"
            }}>KATEGORI</div>
            <div className='w-100 d-flex justify-content-between align-items-center rounded-5 py-4' style={{
              height: "65vh"
            }}>
              <div className='w-50 h-100 rounded-start-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriMakanan.png)",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}>
                <h1 style={{
                  fontSize: "7rem",
                  color: Colors.green
                }} className='fst-italic fw-light'>Food &</h1>
                <h1 style={{
                  fontSize: "7rem",
                  color: Colors.green
                }} className='fst-italic fw-light'>Beverages</h1>
                <Link to={'/category/makanan'}>
                  <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                    right: "0%",
                    backgroundColor: Colors.yellow,
                    color: Colors.green
                  }}>
                    Lihat Selengkapnya {'>>>'}
                  </button>
                </Link>

              </div>
              <div className='w-50 h-100 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.5), rgba(235, 235, 235, 0.5)), url(/kategoriMinuman.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
                <h1 style={{
                  fontSize: "7rem",
                  color: Colors.green
                }} className='fst-italic fw-light'>Drink's</h1>

                <Link to={'/category/minuman'}>
                  <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                    right: "0%",
                    backgroundColor: Colors.yellow,
                    color: Colors.green
                  }}>
                    Lihat Selengkapnya {'>>>'}
                  </button>
                </Link>
              </div>
              <div className='w-50 h-100 rounded-end-4 d-flex justify-content-center align align-items-center flex-column px-3 position-relative' style={{
                backgroundImage: "linear-gradient(to bottom, rgba(235, 235, 235, 0.6), rgba(235, 235, 235, 0.6)), url(/kategoriKerajinan.png)",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}>
                <h1 style={{
                  fontSize: "7rem",
                  color: Colors.green
                }} className='fst-italic fw-light'>Art &</h1>
                <h1 style={{
                  fontSize: "7rem",
                  color: Colors.green
                }} className='fst-italic fw-light'>Craft</h1>

                <Link to={'/category/kerajinan'}>
                  <button className='position-absolute bottom-0 btn fw-bold py-1' style={{
                    right: "0%",
                    backgroundColor: Colors.yellow,
                    color: Colors.green
                  }}>
                    Lihat Selengkapnya {'>>>'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* promo*/}
      {isMobile || isTablet ? (
        <div className='container-fluid py-3'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Promo Produk : </h3>
            <div id="carouselExample" className="carousel slide mt-3">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='row d-flex gap-2'>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className='row d-flex gap-2'>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                          <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-12 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                          <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid py-3'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Promo Produk : </h3>
            <div id="carouselExample" className="carousel slide mt-3">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className='row d-flex'>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className='row d-flex'>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-3 d-flex">
                      <div className='card text-white w-100 shadow container py-2' style={{
                        backgroundColor: Colors.green
                      }}>
                        <img src="/kopi.png" className="card-img-top w-100" />
                        <div className="card-body px-0">
                          <h5 className="card-title mb-1">Kopi Jaran Goyang</h5>
                          <p className="card-text mb-1">Promo 50%</p>
                          <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                            <p className='mb-0'>Rp.25000</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center w-25'>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                            <i className="fa-solid fa-star" style={{
                              color: Colors.yellow
                            }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* produk best seller */}
      {isMobile || isTablet ? (
        <div className='container-fluid py-5 mt-5'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Produk Best Seller : </h3>
            <div className='mt-3 p-5 rounded-3' style={{
              backgroundColor: Colors.yellow
            }}>
              <div id="carouselExample1" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row d-flex gap-2'>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className='row d-flex gap-2'>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid py-5 mt-5'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Produk Best Seller : </h3>
            <div className='mt-3 p-5 rounded-3' style={{
              backgroundColor: Colors.yellow
            }}>
              <div id="carouselExample1" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row d-flex'>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className='row d-flex'>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/geprek.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Sambel Geprek</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.15000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* history */}
      {isMobile || isTablet ? (
        <div className='container-fluid py-3 my-5'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Riwayat Pencarian : </h3>
            <div className='mt-3 p-5 rounded-3' style={{
              backgroundColor: Colors.green
            }}>
              <div id="carouselExample2" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row d-flex gap-2'>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className='row d-flex gap-2'>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-12 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-50 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid py-3 my-5'>
          <div className='container-fluid'>
            <h3 className='fw-bolder'>Riwayat Pencarian : </h3>
            <div className='mt-3 p-5 rounded-3' style={{
              backgroundColor: Colors.green
            }}>
              <div id="carouselExample2" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row d-flex'>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className='row d-flex'>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col col-3 d-flex">
                        <div className='card text-black w-100 shadow rounded-top-5'>
                          <img src="/steak.png" className="card-img-top w-100" />
                          <div className="card-body">
                            <h5 className="card-title mb-1">Steak</h5>
                            <p className="card-text mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, consequuntur.</p>
                            <div className='bg-dark-subtle w-25 rounded-3 d-flex justify-content-center align-items-center text-black fw-bolder py-1 mb-2'>
                              <p className='mb-0'>Rp.25000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-25'>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                              <i className="fa-solid fa-star" style={{
                                color: Colors.yellow
                              }}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <button className="carousel-control-prev justify-content-start align-items-center w-auto" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next justify-content-end align-items-center w-auto" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div >
        </div >
      )}
      <Footer/>
    </div>
  )
}
