import React from "react";

export default function LearningLevelTable(){
    return(
        <div className = "container is-fluid">
            <h5 className = "title is-5">Instruction Level Guideline</h5>
            <div>*The level at which the learning outcome is addressed in this course:</div>
            <table className = "table is-fullwidth">
                <tbody>
                    <tr>
                        <td>I (Introduced)</td>
                        <td>Introductory Level</td>
                    </tr>
                    <tr>
                        <td>D (Developed)</td>
                        <td>Intermediate development level</td>
                    </tr>
                    <tr>
                        <td>A (Applied)</td>
                        <td>Advanced application level</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}