import './FormCreate.css';

export function FormCreateCard() {
  return (
    <form className="form">
      <h3>Создать карточку</h3>
      <div className="form-group">
        <label>Лицевая сторона</label>
        <input type="text" name="front" placeholder="Введите слово или фразу" />
      </div>
      <div className="form-group">
        <label>Обратная сторона</label>
        <input type="text" name="back" placeholder="Введите перевод или определение" />
      </div>
      <button type="submit">Создать карточку</button>
    </form>
  );
}
