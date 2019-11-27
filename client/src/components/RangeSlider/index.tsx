import React from 'react';
import Draggable from 'react-draggable';

interface SliderProps {
    title: string;
    className: string;
    min: number;
    max: number;
    minVal: number;
    maxVal: number;
    step: number;
    mul: number;
    onChange: (check: any) => void;
}

interface SliderStates {
    min: number;
    max: number;
    minPosition : {
        x: number;
        y: number;
    },
    maxPosition : {
        x: number;
        y: number;
    }
}

class RangeSlider extends React.Component<SliderProps, SliderStates> {
    constructor(props: SliderProps) {
        super(props);
        this.state = {
            min: props.minVal,
            max: props.maxVal,
            minPosition:{
                x:0, y:0
            },
            maxPosition:{
                x:0, y:0
            }
        };
    }

    componentWillReceiveProps(props: SliderProps) {
        this.setState({
            min: props.minVal,
            max: props.maxVal
        });
    }

    handleDragForMin = (e:any, ui:any) => {
        const {x, y} = this.state.minPosition;

        console.log(ui.x)

        this.setState({
            minPosition:{
                x: ui.x,
                y: y + ui.deltaY
            },
        }, () => {
            const val = this.props.min + (ui.x/this.props.step) * this.props.mul;
            console.log('minPosition', this.state.minPosition);
            this.setState({
                ...this.state,
                min:val
            })
          
            // console.log('val', val);
            // console.log('zzz',(val-this.props.min)/(this.props.max-this.props.min)*100 )
        })
    }
    
     handleDragForMax = (e:any, ui:any) =>   {
        const {x, y} = this.state.maxPosition;

        const {deltaX,deltaY} = ui
        console.log(deltaX, deltaY);

        const { max, step } = this.props;
        console.log('sss', max,step)

        console.log(x +ui.x)

        //ui.x 43.5 씩 증가

         this.setState({
            ...this.state,
            maxPosition:{
                x: ui.x,
                y: ui.y,
            },
            max:this.props.max + (ui.x/this.props.step) * this.props.mul,
        }, () => {
            console.log('maxPosition', this.state.maxPosition);
            console.log('val', this.state.max);
        })
    }

    render(){

        console.log('asdwd',  (this.state.min-this.props.min)/(this.props.max-this.props.min)*100)
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
                    {console.log('min값',  )}
                    <Draggable axis="x" onDrag={this.handleDragForMin} scale={1} grid={[this.props.step, this.props.step]}
                    bounds={{left: this.state.maxPosition.x, right: 435, top:100, bottom:100}} >
                        <div className="slider-handle min-slider-handle round" role="slider" 
                            tabIndex={0}
                        />
                    </Draggable>

                    <Draggable axis="x" onDrag={this.handleDragForMax} scale={1} grid={[this.props.step, this.props.step]}
                    bounds={{left: -435, right: this.state.minPosition.x, top:100, bottom:100}} >
                        <div className="slider-handle max-slider-handle round" role="slider" aria-valuemin={this.props.min} aria-valuemax={this.props.max} 
                            style={{left: 100+'%'}} 
                            aria-valuenow={this.state.max} tabIndex={0} 
                        />
                    </Draggable>

                </div>
                <input className="input-slider-item" id={this.props.className} type="text" aria-describedby={this.props.className+"Help"} style={{display: 'block'}} 
                onChange = {(el) => {
                    this.setState({min: (Number)((String)(el.target.value).split(',')[0]), max: (Number)((String)(el.target.value).split(',')[1])},
                    () => this.props.onChange(this.state))
                }}
                value={this.state.min+','+this.state.max} />
                <small id={this.props.className+"Help"} className="text-muted">{this.state.min}부터 {this.state.max}까지</small>
            </div>
        );
    }
}

export default RangeSlider;