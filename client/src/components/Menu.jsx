import axios from "axios"
import React, { useEffect, useState } from "react"

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts/?cat=${cat}`,
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
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt=" " />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
