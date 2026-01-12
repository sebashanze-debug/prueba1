import { Router } from 'express'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { PostsBusiness } from '../business/postsBusiness'
import { PostsController } from '../controller/postsController'
import { UsersDataBase } from '../database/UsersDataBase'
import { PostsDataBase } from '../database/postsDataBase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { UploadImage } from '../services/firebase'

export const postsRouter = Router()

const uploadsDir = path.join(process.cwd(), "uploads")
fs.mkdirSync(uploadsDir, { recursive: true })

const Multer = multer({
    storage: multer.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, uploadsDir)
        },
        filename: (_req, file, cb) => {
            const ext = path.extname(file.originalname)
            const safeName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
            cb(null, safeName)
        },
    })
})

const postsController = new PostsController(
    new PostsBusiness(
        new PostsDataBase(),
        new Authenticator(),
        new IdGenerator(),
        new UsersDataBase(),
    )
)
postsRouter.get("/", postsController.getPostsController)
postsRouter.post("/", Multer.single("img"), UploadImage , postsController.postPostsController)
