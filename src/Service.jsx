import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className={'my-5'}>
                <h1 className={'text-center'}> Our Services </h1>
            </div>
            <div className={"container-fluid mb-5"}>
                <div className={'row'}>
                    <div className={'col-10 mx-auto'}>
                        <div className={'row gy-4'}>
                            {Sdata.map((val, index) => {
                                return (
                                    <Card
                                        title={val.title}
                                        imgsrc={val.imgsrc}
                                        defination={val.defination}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;