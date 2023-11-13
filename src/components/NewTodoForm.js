import { useState } from "react";

function NewTodoForm(props) {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    function handleChangeDescription(event) {
        setDescription(event.target.value)
    }

    function handleChangeAssigned(event) {
        setAssigned(event.target.value)
    }

    function submitTodo() {
        if (description !== '' && assigned !== '') {
            props.handleAddTodo(
                description,
                assigned
            )

            setAssigned('');
            setDescription('');
        }

        
    }

    return (
        <div className="mt-5">
            <form onSubmit={submitTodo}>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input value={assigned} type="text" className="form-control" required onChange={handleChangeAssigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea value={description} rows={3} type="text" className="form-control" required onChange={handleChangeDescription}></textarea>
                </div>
                <button onClick={submitTodo} type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>
        </div>
    )

}

export default NewTodoForm;