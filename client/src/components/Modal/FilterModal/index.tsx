import React from 'react';

const FilterModal = () => {
  return (
    <div className="modal-body">
        <div className="form-group filter-car-model-year">
            <label htmlFor="sliderCarModelYear">차량 연식 범위</label>
            <input className="input-slider-item" id="sliderCarModelYear" type="text" aria-describedby="sliderCarModelYearHelp" />
            <small id="sliderCarModelYearHelp" className="text-muted">2010년부터 2020년까지</small>
        </div>

        <div className="form-group filter-car-mileage">
            <label htmlFor="sliderCarMileage">차량 주행 거리</label>
            <input className="input-slider-item" id="sliderCarMileage" type="text" aria-describedby="sliderCarMileageHelp" />
            <small id="sliderCarMileageHelp" className="text-muted">0km부터 10000km까지</small>
        </div>

        <div className="form-group filter-car-smoking">
            <label>차량 판매자 흡연 여부</label>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="formRadiosSmoking" id="formRadiosSmoking_1" value="option1" />
                <label className="form-check-label" htmlFor="formRadiosSmoking_1">
                    흡연
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="formRadiosSmoking" id="formRadiosSmoking_2" value="option2" />
                <label className="form-check-label" htmlFor="formRadiosSmoking_2">
                    비흡연
                </label>
            </div>
        </div>
    </div>
  );
}

export default FilterModal;
