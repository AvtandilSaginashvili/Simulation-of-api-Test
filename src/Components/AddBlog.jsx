import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from './Navbar';

function AddBlog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const postBlog = () => {
    axios
      .post('https://apitest.reachstar.io/blog/add', {
        title: title,
        description: description,
      })
      .then(function (response) {

        console.log(response);
        navigate("/Dashboard");
      })
      .catch(function (error) {

        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <div className="w-100 editorContainer">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="w-100 h-100 d-flex justify-content-center">
                <div className="w-75 pt-3">
                  <input
                    type="text"
                    id="headInput"
                    className='titleInput'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <hr style={{ opacity: 0.3 }} />

                  <ReactQuill
                    theme="snow"
                    className='editor'
                    value={description}
                    onChange={(value) => setDescription(value)}
                  />

                  <button type="button" onClick={postBlog} className="addBlogBtn2 w-100">ADD BLOG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddBlog;
