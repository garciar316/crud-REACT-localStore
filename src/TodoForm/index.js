import React from 'react';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (data) => {
    addTodo(data.todo);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar la cebolla para el almuerzo"
        {...register('todo', {
          required: {
            value: true, message: 'Este campo es requerido'
          }
        })}
      />
      <span className="text-danger">
        {errors?.todo?.message}
      </span>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
