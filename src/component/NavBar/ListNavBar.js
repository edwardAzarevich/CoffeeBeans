import './NavBar.scss';

const ListNavBar = ({ params }) => {
    let id = 0;
    const nav = params.map(element => {
        id = id + 1;
        return (
            <div className="nav-item" key={id} ><i>{element}</i></div>
        )
    });

    return (
        <nav className="main-nav-bar">
            {nav}
        </nav>
    )
}

export default ListNavBar;