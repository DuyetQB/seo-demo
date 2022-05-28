import React, { useState ,useEffect } from "react";
import "./index.less";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Campaign() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getArticlePost = async () => {
      try {
        const response = await axios.get(
          `https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/${id}`
        );

        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getArticlePost();
  }, [id]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="row">
            <img src={user.avatar} alt="" />
            <h3>{user.title}</h3>

            <p mt="20px">{user.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
