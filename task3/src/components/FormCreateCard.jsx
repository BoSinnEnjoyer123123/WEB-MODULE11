import { useForm } from 'react-hook-form';
import './FormCreateSet.css';

function FormCreateCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { front: '', back: '' },
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Создать карточку</h3>

      <div className="form-group">
        <label>Лицевая сторона</label>
        <input
          {...register('front', { required: 'Поле обязательно' })}
          placeholder="Слово / термин"
        />
        {errors.front && <span className="error-msg">{errors.front.message}</span>}
      </div>

      <div className="form-group">
        <label>Обратная сторона</label>
        <input
          {...register('back', { required: 'Поле обязательно' })}
          placeholder="Перевод / значение"
        />
        {errors.back && <span className="error-msg">{errors.back.message}</span>}
      </div>

      <button type="submit">Создать карточку</button>
    </form>
  );
}

export default FormCreateCard;
