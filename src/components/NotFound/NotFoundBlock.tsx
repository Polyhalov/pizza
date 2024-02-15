import style from './NotFoundBlock.module.scss'
const NotFoundBlock:React.FC = () => {
    return (<div>
        <h1 className={style.root}>Нічого не знайдено!</h1>
    </div>)
}
export default NotFoundBlock;