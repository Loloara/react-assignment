import React from 'react';

interface SliderProps {
    title: string;
    className: string;
    min: number;
    max: number;
    minVal: number;
    maxVal: number;
    onChange: (check: any) => void;
}

interface SliderStates {
    min: number;
    max: number;
}

class RangeSlider extends React.Component<SliderProps, SliderStates> {
    constructor(props: SliderProps) {
        super(props);
        this.state = {
            min: props.minVal,
            max: props.maxVal
        };
    }

    componentWillReceiveProps(props: SliderProps) {
        this.setState({
            min: props.minVal,
            max: props.maxVal
        });
    }

    render(){
        return(
            <div>
                <label className="" htmlFor={this.props.className}>{this.props.title}</label>
                <div className="slider slider-horizontal" id="">
                    <div className="slider-track">
                        <div className="slider-track-low" 
                            style={{left: '0px', width: (this.state.min-this.props.min)/(this.props.max-this.props.min)*100+'%'}} />
                        <div className="slider-selection" 
                            style={{left: (this.state.min-this.props.min)/(this.props.max-this.props.min)*100+'%', width: (1-(this.state.min-this.props.min+this.props.max-this.state.max)/(this.props.max-this.props.min))*100+'%'}} />
                        <div className="slider-track-high" 
                            style={{right: '0px', width: (this.props.max-this.state.max)/(this.props.max-this.props.min)*100+'%'}} />
                    </div>
                    <div className="tooltip tooltip-main top" role="presentation" style={{left: 1-(this.props.max-this.state.max)/(this.props.max-this.props.min)*100+'%'}}>
                        <div className="tooltip-arrow" />
                        <div className="tooltip-inner">{this.state.min} : {this.state.max}</div>
                    </div>
                    <div className="tooltip tooltip-min top" role="presentation" 
                        style={{left: (this.state.min-this.props.min)/(this.props.max-this.props.min)*100+'%', display: 'none'}}>
                        <div className="tooltip-arrow" />
                        <div className="tooltip-inner">{this.state.min}</div>
                    </div>
                    <div className="tooltip tooltip-max top" role="presentation" 
                        style={{right: (this.props.max-this.state.max)/(this.props.max-this.props.min)*100+'%', display: 'none'}}>
                        <div className="tooltip-arrow" />
                        <div className="tooltip-inner">{this.state.max}</div>
                    </div>
                    <div className="slider-handle min-slider-handle round" role="slider" aria-valuemin={this.props.min} aria-valuemax={this.props.max} 
                        style={{left: (this.state.min-this.props.min)/(this.props.max-this.props.min)*100+'%'}} 
                        aria-valuenow={this.state.min} tabIndex={0}
                        
                    />
                    <div className="slider-handle max-slider-handle round" role="slider" aria-valuemin={this.props.min} aria-valuemax={this.props.max} 
                        style={{left: (1-(this.props.max-this.state.max)/(this.props.max-this.props.min))*100+'%'}} 
                        aria-valuenow={this.state.max} tabIndex={0} 
                        
                    />
                </div>
                <input className="input-slider-item" id={this.props.className} type="text" aria-describedby={this.props.className+"Help"} style={{display: 'block'}} 
                onChange = {(el) => {
                    this.setState({min: (Number)((String)(el.target.value).split(',')[0]), max: (Number)((String)(el.target.value).split(',')[1])},
                    () => this.props.onChange(this.state))
                }}
                data-value={this.state.min+','+this.state.max} value={this.state.min+','+this.state.max} />
                <small id={this.props.className+"Help"} className="text-muted">{this.state.min}부터 {this.state.max}까지</small>
            </div>
        );
    }
}

export default RangeSlider;