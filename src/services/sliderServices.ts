import clientAxios from "../configs/clientAxios"



export const editSliderService = async (slider, id:number) => {
    const formData = new FormData();
    formData.append('text', slider.text)
    formData.append('imageFile', slider.image)

    const res = await clientAxios.put(`/api/sliders/${id}`, formData);
    return res.data;
}


export const getSliders = async () => {
    const res = await clientAxios.get('/api/sliders');
    return res.data;
}