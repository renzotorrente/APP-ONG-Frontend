import clientAxios from "../configs/clientAxios"


export const getOrganization = async (id:number) => {
    const res = await clientAxios.get(`/api/organizations/${id}/public`);
    return res.data;
}