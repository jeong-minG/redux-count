import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer)
// reducer는 스토어를 바꿔줄 함수


export default store