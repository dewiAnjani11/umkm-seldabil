import { useEffect, useState } from "react";
import Layouts from "../Layouts";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FaTrash, FaPenToSquare } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

export default function Dashboard() {

    const [produk, setProduk] = useState([]);

    const fetchProduk = async () => {
        try {
            const baseURL = 'http://localhost:1337/api/produks?populate=*';
            const response = await axios.get(baseURL);
            setProduk(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const deleteProduct = async (productId) => {
        try {
            const baseURL = `http://localhost:1337/api/produks/${productId}`;
            const response = await axios.delete(baseURL);
            console.log(response.data);
            fetchProduk();
        } catch {
            console.error('Error deleting data:', error);
        }
    }

    useEffect(() => {
        fetchProduk()
    }, []);

    return (
        <Layouts>
            <Link to={"/produk/create"} className="btn btn-primary mb-3">Tambah Produk</Link>
            <table className="table table-striped">
                <thead>
                    <th>Nama</th>
                    <th>Brand</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Terjual</th>
                    <th>Kategori</th>
                    <th>Nama Toko</th>
                    <th>Aksi</th>
                </thead>
                <tbody>
                    {produk.data?.map((item, index) => (
                        <tr key={index} className="table-active">
                            <td>{item.attributes.nama}</td>
                            <td>{item.attributes.brand}</td>
                            <td>{item.attributes.harga}</td>
                            <td>{item.attributes.stock}</td>
                            <td>{item.attributes.terjual}</td>
                            <td>{item.attributes?.kategori?.data?.attributes?.nama}</td>
                            <td>{item.attributes.nama_toko}</td>
                            <td className="d-flex gap-2">
                                <Link to={`/produk/${item.id}/update`} className="text-success">
                                    <FaPenToSquare />
                                </Link>
                                <button onClick={() => deleteProduct(item.id)} className="text-danger">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <ReactPaginate /> */}
        </Layouts>
    )
}
