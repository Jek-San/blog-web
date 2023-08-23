import express from "express"
import cors from "cors"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express()
const corsOptions = {
  origin: 'http://localhost:5173', // Update this with your client's origin
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

const upload = multer({ dest: 'uploads/'})

app.post('/upload', upload.single('file'), function (req, res) {
  res.status(200).json("Image has been uploaded.")
} )

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(8000, () => {
  console.log("Connected")
}
)
