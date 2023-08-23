import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = useState([])
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts${cat}`,
          null,
          {
            withCredentials: true,
          }
        )
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
    console.log(posts)
  }, [cat])
  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem vel deleniti necessitatibus tempora dolorem ipsa reiciendis tenetur quisquam consectetur voluptatibus, autem ipsam reprehenderit itaque sapiente iusto quia fugit quod totam harum! Nesciunt nostrum ullam facere repellat eum nobis. Sunt.",
  //     img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem vel deleniti necessitatibus tempora dolorem ipsa reiciendis tenetur quisquam consectetur voluptatibus, autem ipsam reprehenderit itaque sapiente iusto quia fugit quod totam harum! Nesciunt nostrum ullam facere repellat eum nobis. Sunt.",
  //     img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem vel deleniti necessitatibus tempora dolorem ipsa reiciendis tenetur quisquam consectetur voluptatibus, autem ipsam reprehenderit itaque sapiente iusto quia fugit quod totam harum! Nesciunt nostrum ullam facere repellat eum nobis. Sunt.",
  //     img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem vel deleniti necessitatibus tempora dolorem ipsa reiciendis tenetur quisquam consectetur voluptatibus, autem ipsam reprehenderit itaque sapiente iusto quia fugit quod totam harum! Nesciunt nostrum ullam facere repellat eum nobis. Sunt.",
  //     img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem vel deleniti necessitatibus tempora dolorem ipsa reiciendis tenetur quisquam consectetur voluptatibus, autem ipsam reprehenderit itaque sapiente iusto quia fugit quod totam harum! Nesciunt nostrum ullam facere repellat eum nobis. Sunt.",
  //     img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
  //   },
  // ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
              <div className="background-overlay"></div>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
