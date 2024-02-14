const mongoose = require("mongoose");
import { Article } from "../models/Article";
import { Request, Response, NextFunction } from 'express';




// const article = new Article(data)
// article.save()

export const getAllArticles = async (req: Request, res: Response) => {
    try {
        const result = await Article.find().select('title subtitle topic');
        res.status(201).json({ data: result });
    } catch (error) {
        res.status(400).json({ error: "get all failed" });
    }
}
export const createArticle = async (req: Request, res: Response) => {
    try {
        const newTask = await Article.create(req.body);
        res.status(201).json({ data: newTask });
    } catch (error: any) {
        res.status(400).json({ error: "create failed" });
    }
}
export const getArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(201).json({ data: article });
    } catch (error: any) {
        res.status(400).json({ error: "failed to get the article" });
    }
}
export const deleteArticle = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const task = await Article.findOneAndDelete({ _id: id });
        if (!task) {
            res.status(404).json({ error: "can't find the article" })
        } else {
            res.status(201).json({ data: {} });
        }
    } catch (error: any) {
        res.status(400).json({ error: "delete failed" });
    }
}
export const updateArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateArticle = await Article.findOneAndUpdate(
            { _id: id },
            {
                ...req.body,
            },
            { new: true }
        );
        res.status(201).json({ data: updateArticle });
    } catch (error: any) {
        res.status(400).json({ error: "update failed" });
    }
}


