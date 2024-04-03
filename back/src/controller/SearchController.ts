import 'reflect-metadata';
import { JsonController, Param, Body, Get, Post, Put, Delete, Req, UseBefore, Patch } from 'routing-controllers';
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

@JsonController()
export class SearchController {
    @Post("/search")
    public async searchproduct(@Body() body: any) {
        //On créé la requete a l'ia
        let content = "Répond moi en un seul mot, donne-moi une marque de produit équivalent en France : " + body.product

        //on definie le model et le message à l'ia
        const data = {
            model: process.env.IA_MODEL,
            messages: [{ role: "user", content: content }],
            temperature: 0,
        };

        //On prépare la configuration avec la clef d'api openia et le type
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.API_KEY}`,
            },
        };

        // Requete axios a l'api open ai
        const response = await axios.post(process.env.IA_URL, data, config)

        // Récupérer la réponse de l'API de ChatGPT
        const chatGPTResponse = response.data.choices[0].message.content;

        return { "[IA] GPT : ": chatGPTResponse };
    }
}