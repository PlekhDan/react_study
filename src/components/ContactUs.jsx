import React from "react";

export function ContactUs() {
    return(
        <div>
            <h4 className="mb-5">Обратная связь</h4>
            <div className = "container">
                <form action="">
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
}