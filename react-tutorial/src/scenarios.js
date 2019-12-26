import React from 'react'
import RangeSlider from './range-slider';
import ScenarioCard from './scenario-card';


function Scenarios() {
    return (
        <div className="container">
                <div class="container">
                    <p>
                        Below, we visualize all our traffic scenarios, which range from simple scenarios with a few
                        obstacles to complex intersection scenarios with many road users.
                        The scenarios are either obtained from real traffic data (e.g., <a
                            href="https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm">NGSIM dataset</a>), simulation
                        or are hand-crafted, mostly based on real road
                        networks. The source of each scenario is also tagged in each scenario file. Please note that we continuously add more scenarios.
                    </p>
                    <p>
                        The data for each scenario is stored in separate XML files named by the unique scenario ID and can
                        be
                        downloaded from below or from the <a
                            href="https://gitlab.lrz.de/tum-cps/commonroad-scenarios">scenario repository</a>.
                        For details on the data in the XML files,
                        please have a look at the <a href="https://gitlab.lrz.de/tum-cps/commonroad-scenarios/blob/master/documentation/XML_commonRoad.pdf">XML format documentation</a>.
                    </p>

            </div>


            <div className="container">
                <form className="form-horizontal">
                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Version</label>
                        <div class="col-md-6">
                            <select id="version" name="version" class="form-control">
                                <option>....</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group row align-items-center">
                        <label class="col-md-3" for="prediction_type">Prediction Type</label>
                        <div class="col-md-6">
                            <select id="version" name="prediction_type" class="form-control">
                                <option>....</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row align-items-center">
                        <label class="col-md-3" for="version">Tags</label>
                        <div class="col-md-6">
                            <select id="version" name="version" class="form-control">
                                <option>....</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Time Horizon (s)</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    
                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Initial Velocity (m/s)</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    <div class="form-group row align-items-center">
                        <label class="col-md-3" for="version">Type of Obstacles</label>
                        <div class="col-md-6">
                            <select id="version" name="version" class="form-control">
                                <option>....</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Static Obstacles</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Dynamic Obstacles</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Ego Vehicles</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    <div className="form-group row align-items-center">
                        <label class="col-md-3" for="version">Max No. of Goal Regions per Planning Problem</label>
                        <div class="col-md-6">
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Apply</button>
                    <a class="btn btn-primary" href="#" role="button">Reset</a>
                </form>
            </div>

            <div className="container mt-4">        
                <ScenarioCard></ScenarioCard>
            </div>
        </div>
    )
}

export default Scenarios;