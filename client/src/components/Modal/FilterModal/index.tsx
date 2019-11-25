import React, {useEffect, useState} from 'react';
import RangeSlider from '~components/RangeSlider';
import {FilterStates} from '~services/types';

interface FilterModal {
    resetTrigger?:boolean;
    submitTrigger?:boolean
    submitFnc: (check:FilterStates) => void;
}

const FilterModal = ({ resetTrigger, submitTrigger, submitFnc } : FilterModal) => {
    useEffect(() => {
        if(firstRender)
            submitFnc({ minYear, maxYear, minKM, maxKM, smoking })
    }
    , [submitTrigger]);
    
    useEffect(() => {
        setMinYear(2010);
        setMaxYear(2020);
        setMinKM(0);
        setMaxKM(10000);
        setSmoking(null);
        setFirstRender(true);
    }, [resetTrigger]);

    const [minYear, setMinYear] = useState(2010);
    const [maxYear, setMaxYear] = useState(2020);
    const [minKM, setMinKM] = useState(0);
    const [maxKM, setMaxKM] = useState(10000);
    const [smoking, setSmoking] = useState();
    const [firstRender, setFirstRender] = useState(false);

  return (
    <div className="modal-body">
        <div className="form-group filter-car-model-year">
            <RangeSlider 
                title={'차량 연식 범위'} 
                className={'sliderCarModelYear'}
                min={2010} max={2020}
                minVal={minYear} maxVal={maxYear}
                onChange = {(el) => {
                    setMinYear(el.min);
                    setMaxYear(el.max);
                }}
            />
        </div>

        <div className="form-group filter-car-mileage">
            <RangeSlider 
                title={'차량 주행 거리'} 
                className={'sliderCarMileage'}
                min={0} max={10000}
                minVal={minKM} maxVal={maxKM}
                onChange = {(el) => {
                    setMinKM(el.min);
                    setMaxKM(el.max);
                }}
            />
        </div>

        <div className="form-group filter-car-smoking">
            <label>차량 판매자 흡연 여부</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="formRadiosSmoking" id="formRadiosSmoking_1" checked={smoking==='option1'} value="option1" onChange={(e)=>setSmoking(e.target.value)} />
                <label className="form-check-label" htmlFor="formRadiosSmoking_1">
                    흡연
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="formRadiosSmoking" id="formRadiosSmoking_2" checked={smoking==='option2'} value="option2" onChange={(e)=>setSmoking(e.target.value)} />
                <label className="form-check-label" htmlFor="formRadiosSmoking_2">
                    비흡연
                </label>
            </div>
        </div>
    </div>
  );
}

export default FilterModal;
