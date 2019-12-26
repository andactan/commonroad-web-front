import React from 'react';

function ScenarioCard(){
    return (
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            C-DEU_B471-1_1_T-1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">

        <div class="row">
            <div class="col-md-8">
                <img 
                    src={require("./static_img_scenario_legend.png")}
                    style={{"max-width": "100%", "max-height": "28px"}}
                ></img>
            </div>
            <div class="col-md-2">
                <div><a href="#" class="btn btn-primary btn-block" download>Download</a></div>
            </div>
            <div class="col-md-2">
                <div><a href="#" class="btn btn-primary btn-block">Ranking</a></div>
            </div>
        </div>

        <div class="row" style={{"margin-top": "1%"}}>
            <div class="col-md-8">
                <img src={require("./placeholder.jpg")}></img>
            </div>

            <div class="col-md-4">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Version</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Time Horizon (s)</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Initial Velocity (m/s)</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Static Obstacles</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td>Dynamic Obstacles</td>
                        <td>44</td>
                    </tr>
                </tbody>
            </table>
        </div>


            </div>

      </div>
    </div>
  </div>
</div>
    )
}

export default ScenarioCard;
