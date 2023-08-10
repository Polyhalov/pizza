import { useState } from "react";

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ["Всі","М'ясні","Вегитаріанські","Гриль","Гострі","Закриті"]

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
  return (
    <div className="categories">
          <ul>
              {categories.map((value, i) => (<li key={i} onClick={() => onClickCategory(i)} className={activeIndex===i?'active':""}>{value}</li>))}
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