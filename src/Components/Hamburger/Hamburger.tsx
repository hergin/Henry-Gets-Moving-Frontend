import './Hamburger.scss'

// @ts-ignore
export default function Hamburger({isOpen}) {
    return (
        <div className='menu-hamburger'>
            <div className='hamburger'>
                <div className={isOpen ? 'rotate45 burger burger1': 'burger burger1'}/>
                <div className={isOpen ? 'translate burger burger2': 'burger burger2'}/>
                <div className={isOpen ? 'rotate-45 burger burger3': 'burger burger3'}/>
            </div>
        </div>
    )
}