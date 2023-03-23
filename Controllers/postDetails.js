import { uploadModel } from "../Schema/UploadSchema.js";


export const postData = (req, res) => {
    const cardId = req.query;
    const postDetailInfo = {};
    uploadModel.find({ cardId: cardId.cardId }, (err, cardData) => {
        if (cardData.length) {
            postDetailInfo.postInfo = cardData[0];
            uploadModel.find({ placeTag: cardData[0].placeTag }, (err, tagData) => {
                if (err) {
                    return res.send(err);
                } else {
                    if (tagData.length) {
                        postDetailInfo.suggestions = tagData;
                        return res.status(200).send(postDetailInfo);
                    }
                    else {
                        return res.status(400).send(err);
                    }
                }

            })

        }

    })

}

