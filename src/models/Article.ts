import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;
const articleSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide title name"],
        },
        subtitle: {
            type: String,
            required: [true, "Please provide subtitle "],
            default: "Unknown",
        },
        topic: {
            type: String,
            default: "Unknown",
        },
        contents: {
            type: [{
                type: String
            }],
        },
        createdAt: {
            type: Date,
            default: Date.now
        },

    },
    { timestamps: true }
);

export const Article = model("articles", articleSchema);
