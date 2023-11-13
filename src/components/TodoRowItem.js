function TodoRowItem({ rowNumber, rowDescription, rowAssigned, deleteTodo }) {
    return (
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
            <td>
                <button
                onClick={() => deleteTodo(rowNumber)}
                    className="btn btn-danger"
                >
                    X
                </button>
            </td>
        </tr>
    )
}

export default TodoRowItem;