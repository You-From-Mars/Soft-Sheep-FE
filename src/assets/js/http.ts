import axios from 'axios';
import { Message } from 'element-ui';
import routerInstance from '../../router';
import Bus from '../../bus';

export default {
    install() {
        const fetch = axios.create();
        fetch.interceptors.response.use((response) => {
            const code = response.data.code * 1;
            if (code !== 200) {
                const message = response.data.msg;
                const err = new Error(message);
                Message.error(message);
                if (code === 401) {
                    Bus.$emit('isSignin', {
                        email: '',
                        userName: '',
                    });
                    routerInstance.push('/signin');
                }
                return Promise.reject(err);
            } else {
                return response.data.data;
            }
        });
        (<any> Window).$http = fetch;
    },
};
