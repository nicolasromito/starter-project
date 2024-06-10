import "./App.css";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-content">
                <div class="left-item">Logo</div>
                <div class="right-item">
                    <p className="clic">Home</p>
                    <p className="clic">About</p>
                    <p className="clic">Works</p>
                    <p className="clic">Contact</p>
                </div>   
            </div>
            <div class="line"></div>
        </div>
    );
};

export default Toolbar;
