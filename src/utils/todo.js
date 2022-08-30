/**
 * 일정 추가
 * 내용 없이 일정을 추가할 수 없다.
 * @function addTodo
 * @param {string} content - 일정 내용
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function addTodo(content) {}

/**
 * 일정 조회
 * 모든 일정 및 id를 기반으로 특정 일정을 조회할 수 있다.
 * @function getTodo
 * @param {number} id - 일정 id
 */
function getTodo() {}

/**
 * 일정 수정
 * id 제외 모든 일정을 수정할 수 있다.
 * @function updateTodo
 * @param {string} [content] - 일정 내용
 * @param {boolean} [isCompleted] - 일정 완료 여부
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function updateTodo() {}

/**
 * 일정 삭제
 * id를 기반으로 특정 일정을 삭제할 수 있다.
 * 특정 태그를 삭제하거나 수정할 수 있다.
 * @function deleteTodo
 * @param {number} id - 일정 id
 */
function deleteTodo() {}
