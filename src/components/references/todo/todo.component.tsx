import { Todo } from "models/todo";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchListTodo } from "redux/todo/todo.actions";
import { selectListTodo, selectTodoErrorMessage } from "redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";

interface TodoProps {
  fetchTodo: () => void;
  todoList: Todo[];
  error: string;
}

const TodoPage = ({ fetchTodo, todoList, error }: TodoProps): JSX.Element => {
  const renderListTodo = (): JSX.Element[] => {
    return todoList.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={fetchTodo}>Fetch list todo</button>
      {error ? <div>{error}</div> : null}
      {renderListTodo()}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  todoList: selectListTodo,
  error: selectTodoErrorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodo: () => dispatch(fetchListTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
