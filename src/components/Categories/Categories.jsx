
const Categories = ({value, onClickCategory}) => {
    const categories = ["Всі","М'ясні","Вегитаріанські","Гриль","Гострі","Закриті"]

    // const onClickCategory = (index) => {
    //     setActiveIndex(index)
    // }
  return (
    <div className="categories">
          <ul>
              {categories.map((categoryName, i) => (<li key={i} onClick={() => onClickCategory(i)} className={value===i?'active':""}>{categoryName}</li>))}
                {/* <li className="active">Всі</li>
                <li>М'ясні</li>
                <li>Вегетаріанскі</li>
                <li>Гриль</li>
                <li>Гострі</li>
                <li>Закриті</li> */}
              </ul>
            </div>
  )
}
export default Categories;