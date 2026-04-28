const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    const { code, language } = req.body;  // ✅ get language too

    if(!code){
        return res.status(400).send("Code is required");
    }

    try {
        const response = await aiService(code, language);  // ✅ pass language
        res.send(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}