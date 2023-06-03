import axios from 'axios';

const uploadImage = async (image: any) => {
    const imgbbApiKey = 'f3cd51b835b35062c8a6deb689214ee8'

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, image, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    console.log(res)
    return res

};

export default uploadImage;