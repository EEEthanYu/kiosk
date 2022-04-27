let target; // 검색할 객체
let visited = [];

const initialize = (object) => {
    target = object;
    visited = [];
}

// 재귀적으로 탐색
const search = (key) => {
}

const searchKey = function(object, key) {
    initialize(object);
    return search(key);
}

export default searchKey;