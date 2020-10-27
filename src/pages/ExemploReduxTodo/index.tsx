import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, deleteTodo } from '../../actions';
// import { StoreState } from '../../reducers';

const ExemploTodo: React.FC = () => {
	// const todos = useSelector((state: StoreState) => state.todos);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchTodos());
	// }, []);

	// console.log({ todos });

	// const handleClick = (id: number) => {
	// 	dispatch(deleteTodo(id));
	// };

	return (
		<div>
			<ul>
				{/* {todos.map(todo => {
					return <div onClick={() => handleClick(todo.id)}>{todo.title}</div>;
				})} */}
			</ul>
		</div>
	);
};

export default ExemploTodo;
