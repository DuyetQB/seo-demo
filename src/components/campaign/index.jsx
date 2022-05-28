import React, { useState, useEffect } from 'react';
import "./index.less";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Campaign() {
  const [dataArticle, setDataArticle] = useState([]);

  useEffect(() => {
    const getArticlePost = async () => {
      try {
        const response = await axios.get('https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/');

        setDataArticle(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getArticlePost();
  }, []);

  return (
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
              <div className="row">
                {dataArticle.map((item) => (
                  <div className="col-md-4" key={item.id}>
                      <Link to={`/campaign-detail/${item.id}`}>
                          <img src={item.avatar} alt="" />
                       
                      </Link>
                     
                        <h3 >
                          {item.title}
                        </h3>
                     
                        <p mt="20px" >
                          {item.details}
                        </p>
                  </div>
                ))}
              </div>

          </div>
        </div>
    </div>
  );
}