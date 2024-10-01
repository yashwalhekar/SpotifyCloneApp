import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const ListAlbums = () => {
  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.message);
      }
    } catch (error) {
      toast.error("error occured");
    }
  };
  
  const removeAlbum = async(id)=>{
    try {
      const response = await axios.post(`${url}/api/album/remove`,{id})
      if(response.data.success){
        toast.success("data remove successfully")
        fetchAlbums()
      }
    } catch (error) {
      toast.error("Error occured")
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div>
      <p>All Albums</p>
      <br />
      <div>
        <div className="sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center text-sm gap-2.5 p-3 mr-5 border border-gray-300 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>ALbum color</b>
          <b>Action</b>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] item-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 "
            >
              <img className="w-12" src={item.image} />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColor} />
              <p className="cursor-pointer text-red-500" onClick={()=>removeAlbum(item._id)}>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListAlbums;
