
type CategoriesProps = {
  value: number;
  onClickCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
    const categories = ["Всі","М'ясні","Вегитаріанські","Гриль","Гострі","Закриті"]

  return (
    <div className="categories">
          <ul>
              {categories.map((categoryName, i) => (<li key={i} onClick={() => onClickCategory(i)} className={value===i?'active':""}>{categoryName}</li>))}
              </ul>
            </div>
  )
}
export default Categories;