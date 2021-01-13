import React from "react";

export default function LearningGraduateTable(){
    return(
        <div className = "container is-fluid">
            <h5 className = "title is-5">CEAB Graduate Attributes</h5>
            <table className = "table is-fullwidth">
                <tbody>
                    <tr>
                        <td>A1. A knowledge base for engineering</td>
                        <td>A7. Communication skills</td>
                    </tr>
                    <tr>
                        <td>A2. Problem analysis</td>
                        <td>A8. Professionalism</td>
                    </tr>
                    <tr>
                        <td>A3. Investigation</td>
                        <td>A9. Impact of engineering on society/environment</td>
                    </tr>
                    <tr>
                        <td>A4. Design</td>
                        <td>A10. Ethics and equity</td>
                    </tr>
                    <tr>
                        <td>A5. Use of engineering tools</td>
                        <td>A11. Economics and project management</td>
                    </tr>
                    <tr>
                        <td>A6. Individual and team work</td>
                        <td>A12. Life-long learning</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    );
}