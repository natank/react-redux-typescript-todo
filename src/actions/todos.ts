import jsonPlaceHolder from '../api/jsonPlaceholder';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await jsonPlaceHolder.get<Todo[]>('/todos');
		dispatch<FetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
