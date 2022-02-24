import { WithSpinner } from "components/common";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectTodoFetchingStatus } from "redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import TodoPage from "./todo.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectTodoFetchingStatus,
});

export const TodoPageContainer = compose(connect(mapStateToProps), WithSpinner)(TodoPage);
