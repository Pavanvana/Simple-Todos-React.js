// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="each-todo">
      <p className="description">{title}</p>
      <button onClick={onDeleteTodo} className="button" type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
