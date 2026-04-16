import './FormCreate.css';

export function FormCreateSet() {
  return (
    <form className="form">
      <h3>Создать сет</h3>
      <div className="form-group">
        <label>Название сета</label>
        <input type="text" name="name" placeholder="Введите название" />
      </div>
      <div className="form-group">
        <label>Описание</label>
        <textarea name="description" placeholder="Введите описание" rows={4} />
      </div>
      <button type="submit">Создать сет</button>
    </form>
  );
}
