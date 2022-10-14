import CartWidget from "./componentsSecondary/CartWidget";
const Navbar = () => {

    return (
        <div className="container-fluid bg-danger">
        <div className="container ">
            <div className="row fw-bold pt-3 pb-3">
                <div className="col-7 ">
                    <h4 className="fw-bold">FUTRANSFER</h4>
            </div>
                <div className="col-1">INICIO</div>
                <div className="col-1">Liga Italiana</div>
                <div className="col-1">Liga Española</div>
                <div className="col-1">Liga Inglesa</div>
                <div className="col-1"><CartWidget/></div>

            </div>
        </div>
        </div>
    );
}

export default Navbar