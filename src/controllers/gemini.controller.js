import main from "../geminiAI/geminiAI.js";

const getPropmt = async (req, res) => {
   const prompt = req.body.prompt;
   await main(prompt)
      .then((response) => {
         res.json(response);
      })
      .catch((error) => console.log(error));
};

export default { getPropmt };
