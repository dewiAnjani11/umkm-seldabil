import { useEffect, useState } from "react";
import Layouts from "../Layouts";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function CreateProdukPage() {
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        try {
            const baseURL = 'http://localhost:1337/api/kategoris';
            const response = await axios.get(baseURL);
            setCategories(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const [namaProduk, setNamaProduk] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState(0);
    const [brand, setBrand] = useState('');
    const [terjual, setTerjual] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [minimalPembelian, setMinimalPembelian] = useState(0);
    const [namaToko, setNamaToko] = useState('');
    const [kategori, setKategori] = useState('minuman');
    // const [promo, setPromo] = useState(0);
    const [berat, setBerat] = useState(0);

    const { register, handleSubmit } = useForm();
    const onSubmit = async () => {
        try {
            console.log('proses post...');
            const dataToSend = {
                "data" :
                {
                    "nama" : namaProduk,
                    "deskripsi" : deskripsi,
                    "harga" : harga,
                    "brand" : brand,
                    "terjual" : terjual,
                    "rating" : rating,
                    "stock" : stock,
                    "minPembelian" : minimalPembelian,
                    "nama_Toko" : namaToko,
                    "kategori" : {
                        "data" : {
                            "nama" : kategori
                        }
                    },
                    "berat" : berat,
                }
            }

            const baseURL = 'http://localhost:1337/api/produks';
            const response = await axios.post(baseURL, dataToSend);
            console.log(response.data);
        } catch (error) {
            if (error.response) {
                // Respon dari server dengan status selain 2xx
                console.error('Error response from server:', error.response.data);
                console.error('Status Code:', error.response.status);
            } else if (error.request) {
                // Tidak ada respons dari server
                console.error('No response received:', error.request);
            } else {
                // Kesalahan lain yang terjadi
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    useEffect(() => {
        fetchCategories()
    }, []);

    return (
        <Layouts>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div>
                    <label className="form-label">Nama</label>
                    <input {...register("nama")} type="text" className="form-control" />
                </div> */}
                <div>
                    <label className="form-label">Nama Produk</label>
                    <input {...register("nama",{required:true})} type="text" className="form-control"
                    onChange={(e)=>setNamaProduk(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea {...register("deskripsi",{required:true})} className="form-control"
                    onChange={(e)=>setDeskripsi(e.target.value)}
                    ></textarea>
                </div>
                <div className="mt-3">
                    <label className="form-label">Harga</label>
                    <input {...register("harga",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setHarga(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Brand</label>
                    <input {...register("brand",{required:true})} type="text" className="form-control" 
                    onChange={(e)=>setBrand(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Terjual</label>
                    <input {...register("terjual",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setTerjual(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Rating</label>
                    <input {...register("rating",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setRating(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Stock</label>
                    <input {...register("stock",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setStock(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">minimal pembelian</label>
                    <input {...register("minPembelian",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setMinimalPembelian(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Nama Toko</label>
                    <input {...register("nama_toko",{required:true})} type="text" className="form-control" 
                    onChange={(e)=>setNamaToko(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Kategori</label>
                    <select className="form-control"{...register("kategori",{required:true})}
                    onChange={(e)=>setKategori(e.target.value)}
                    >
                        {categories.map((item, index) => (
                            <option value={item.attributes.nama} key={index}>{item.attributes.nama}</option>
                        ))}
                    </select>
                </div>
                {/* <div className="mt-3">
                    <label className="form-label">Promo presentasi</label>
                    <input {...register("promoPercentage",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setPromo(e.target.value)}
                    />
                </div> */}
                <div className="mt-3">
                    <label className="form-label">Berat</label>
                    <input {...register("berat",{required:true})} type="number" className="form-control" 
                    onChange={(e)=>setBerat(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary my-4">Tambah</button>
            </form>
        </Layouts>
    )
}
