
import axios from 'axios';

axios.get('/assets/js/chunk-vendors.js')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err)
});
console.log(123);