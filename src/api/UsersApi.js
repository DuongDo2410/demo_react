import { axiosClient } from './axiosClient';

const useAPI = {
    getAll(){
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `//${id}`;
        return axiosClient.get(url);
    },
    add(user){
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    signin(user){
        const url = `/signin`;
        return axiosClient.post(url, user);
    },
    remove(id){
        const url = `//${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `//${id}`;
        return axiosClient.put(url,data);
    }
}
export default useAPI;