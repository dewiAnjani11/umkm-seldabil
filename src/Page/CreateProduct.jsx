import { useEffect, useState } from "react";
import Layouts from "../Layouts";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateProductPage() {
    const navigate = useNavigate();
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

    const { register, handleSubmit } = useForm();

    const onSubmit = async (input) => {
        try {
            const res = await axios.post('http://localhost:1337/api/produks?populate=*', {
                data: {
                    nama: input.nama,
                    deskripsi: input.deskripsi,
                    harga: input.harga,
                    brand: input.brand,
                    terjual: input.terjual,
                    rating: input.rating,
                    stock: input.stock,
                    minPembelian: input.minimalPembelian,
                    nama_toko: input.nama_toko,
                    kategori: input.kategori,
                    berat: input.berat,
                    promo: true,
                    bestSeller: true,
                }
            });

            if (res.status === 200) {
                console.log('Data berhasil di-post', res.data);
                navigate('/dashboard');
            } else {
                console.log('Gagal di-post. Status:', res.status, 'Data:', res.data);
            }
        } catch (err) {
            console.error('Gagal di-post:', err);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, []);

    return (
        <Layouts>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="form-label">Nama Produk</label>
                    <input {...register("nama", { required: true })} type="text" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea {...register("deskripsi", { required: true })} className="form-control"
                    ></textarea>
                </div>
                <div className="mt-3">
                    <label className="form-label">Harga</label>
                    <input {...register("harga", { required: true })} type="number" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Brand</label>
                    <input {...register("brand", { required: true })} type="text" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Terjual</label>
                    <input {...register("terjual", { required: true })} type="number" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Rating</label>
                    <input {...register("rating", { required: true })} type="number" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Stock</label>
                    <input {...register("stock", { required: true })} type="number" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">minimal pembelian</label>
                    <input {...register("minPembelian", { required: true })} type="number" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Nama Toko</label>
                    <input {...register("nama_toko", { required: true })} type="text" className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <label className="form-label">Kategori</label>
                    <select className="form-control"{...register("kategori", { required: true })}
                    >
                        {categories.map((item, index) => (
                            <option value={item.id} key={index}>{item.attributes.nama}</option>
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
                    <input {...register("berat", { required: true })} type="number" className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary my-4">Tambah</button>
            </form>
        </Layouts>
    )
}
