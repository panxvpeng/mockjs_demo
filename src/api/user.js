import axios from './http'
function get(){
    return axios.get('/home/getData')
}
function add(params){
    return axios.post('/home/addData',params)
}
function del(params){
    return axios.post('/home/delData',params)
}
function edit(params){
    return axios.post('/home/editData',params)
}
function search(params){
    return axios.post('/home/searchData',params)
}
export default{
    edit,
    add,
    del,
    get,
    search
}