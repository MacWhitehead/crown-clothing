import CategoryItem from '../category-item/category-item.component';
import directory from './directory';
import './directory.styles.scss'

const Directory = () => {
    return (
        <div className='directory-container'>
            {directory.map((category) => (
            <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory;