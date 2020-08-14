import Mock from 'mockjs';

let userList = [
    {
        name: 'pxp',
        age: Mock.Random.float(1, 100, 0, 2)
    },
    {
        name: 'pxp2',
        age: Mock.Random.float(1, 100, 0, 2)
    },
    {
        name: 'pxp3',
        age: Mock.Random.float(1, 100, 0, 2)
    },
    {
        name: 'pxp4',
        age: Mock.Random.float(1, 100, 0, 2)
    }];

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: userList
        }
    },

    addHomeData: (props) => {
        let body = JSON.parse(props.body);//string=>json
        userList.unshift({ name: body.name, age: body.age });
        return {
            code: 20000,
            data: { message: body }

        }
    },
    delHomeData: (props) => {
        let body = JSON.parse(props.body);//string=>json
        userList = userList.filter(function (item) {
            return item.name != body.name;
        });
        return {
            code: 20000,
            data: { message: body }

        }
    },
    editHomeData: (props) => {
        let body = JSON.parse(props.body);//string=>json
        userList.forEach(function (item) {
            if (item.name == body.name){
                item.name = body.name;
                item.age = body.age;
            }
        });
        return {
            code: 20000,
            data: { message: body }
        }
    },
    searchHomeData: (props) => {
        let body = JSON.parse(props.body);//string=>json
        let item = userList.filter(function(item){
            return body.name == item.name;
        });
        if(item.length == 0){
            item = userList;
        }
        return {
            code: 20000,
            data: item
        }
    }
}