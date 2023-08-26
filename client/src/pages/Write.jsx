import axios from "axios"
import moment from "moment"
import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useLocation, useNavigate } from "react-router-dom"

const Write = () => {
  const state = useLocation().state
  const navigate = useNavigate()
  const [value, setValue] = useState(state?.title || "")
  const [title, setTitle] = useState(state?.desc || "")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || "")

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await axios.post(
        `http://localhost:8000/api/upload`,
        formData,
        {
          withCredentials: true,
        }
      )

      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()

    let imgUrl = "" // Initialize imgUrl

    if (file) {
      // If a new file is selected, upload it
      const fileName = await upload()
      imgUrl = fileName
    } else if (state && state.img) {
      // If editing an existing post and no new file, keep the existing image
      imgUrl = state.img
    }
    try {
      console.log("state", state)
      if (state) {
        //Put Call
        await axios.put(
          `http://localhost:8000/api/posts/${state.id}`,
          {
            title: title,
            desc: value,
            cat: cat,
            img: imgUrl,
          },
          {
            withCredentials: true,
          }
        )
        navigate("/")
      } else {
        //Post Call
        await axios.post(
          `http://localhost:8000/api/posts/`,
          {
            title: title,
            desc: value,
            cat: cat,
            img: imgUrl,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            withCredentials: true,
          }
        )
        navigate("/")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status</b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology"
              id="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
            />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="design"
              id="design"
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="category">
            <input
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
