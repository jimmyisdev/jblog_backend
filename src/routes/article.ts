import { Router } from 'express';
import { getAllArticles, getArticle, deleteArticle, updateArticle, createArticle } from '../controller/article';

export const router = Router();
router.route("/").get(getAllArticles).post(createArticle);
router
    .route("/:id")
    .get(getArticle)
    .delete(deleteArticle)
    .put(updateArticle);

