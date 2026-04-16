import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './FormCreateSet.css';

function FormCreateSet() {
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', description: '' },
  });

  useEffect(() => {
    if (count > 0) {
      alert(`Форма отправлена ${count} раз`);
    }
  }, [count]);

  function onSubmit(data) {
    console.log(data);
    setCount(count + 1);
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Создать сет</h3>

      <div className="form-group">
        <label>Название сета</label>
        <input
          {...register('name', {
            required: 'Поле обязательно',
            minLength: { value: 4, message: 'Минимум 4 символа' },
          })}
          placeholder="Введите название"
        />
        {errors.name && <span className="error-msg">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label>Описание</label>
        <textarea
          {...register('description', { required: 'Поле обязательно' })}
          placeholder="Введите описание"
          rows={4}
        />
        {errors.description && <span className="error-msg">{errors.description.message}</span>}
      </div>

      <button type="submit">Создать сет</button>
    </form>
  );
}

export default FormCreateSet;
