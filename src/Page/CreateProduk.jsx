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

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const baseURL = 'http://localhost:1337/api/produks';
            const response = await axios.post(baseURL, data);
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
                    <input {...register("nama",{required:true})} type="text" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Deskripsi</label>
                    <textarea {...register("deskripsi",{required:true})} className="form-control"></textarea>
                </div>
                <div className="mt-3">
                    <label className="form-label">Harga</label>
                    <input {...register("harga",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Brand</label>
                    <input {...register("brand",{required:true})} type="text" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Terjual</label>
                    <input {...register("terjual",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Rating</label>
                    <input {...register("rating",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Stock</label>
                    <input {...register("stock",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">minimal pembelian</label>
                    <input {...register("minPembelian",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Nama Toko</label>
                    <input {...register("nama_toko",{required:true})} type="text" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Kategori</label>
                    <select className="form-control"{...register("kategori",{required:true})}>
                        {categories.map((item, index) => (
                            <option value={item.id} key={index}>{item.id}</option>
                        ))}
                    </select>
                </div>
                <div className="mt-3">
                    <label className="form-label">Promo presentasi</label>
                    <input {...register("promoPercentage",{required:true})} type="number" className="form-control" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Berat</label>
                    <input {...register("berat",{required:true})} type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary my-4">Tambah</button>
            </form>
        </Layouts>
    )
}
