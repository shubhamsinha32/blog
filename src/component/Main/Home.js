import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Home() {

    const options1 = {
        title: {
            text: 'Line chart'
        },
        series: [{
            type: 'bar',
            data: [81, 10, 200, 321, 111, 200, 30]
        }]
    }

    const options3 = {
        title: {
            text: 'Line chart'
        },
        series: [{
            type: 'column',
            data: [81, 10, 200, 321, 111, 200, 30]
        }]
    }

    const options = {
        title: {
            text: 'Area chart'
        },
        series: [{
            type: 'area',
            data: [1, 2, 3, 6, 2, 4, 10]
        }]
    }

    const options2 = {
        title: {
            text: 'Pie chart'
        },
        plotOptions: {
            pie: {
                cursor: 'pointer',
                allowPointSelect: true
            }
        },
        series: [{
            type: 'pie',
            data: [
                {
                    name: 'A',
                    y: 10,
                    selected: true
                },
                {
                    name: 'B',
                    y: 7,
                    selected: true
                },
                {
                    name: 'C',
                    y: 7,
                    selected: true
                },
                {
                    name: 'D',
                    y: 7,
                    selected: true
                },
                {
                    name: 'E',
                    y: 7,
                    selected: true
                },
            ]
        }]
    }

    return (
        <>
            <h4 className='mt-3'>Welcome to Dashboard</h4>
            <div className='row'>
                <div className='col-md-4'>
                    <Link to="/Viewblog" className='kpibox'>
                        <p className='kpihead'>Total Blog</p>
                        <p className='kpi'>10</p>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <Link to="/viewcategory" className='kpibox'>
                        <p className='kpihead'>Total Category</p>
                        <p className='kpi'>10</p>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <Link to="/Viewblog" className='kpibox'>
                        <p className='kpihead'>Total Comments</p>
                        <p className='kpi'>10</p>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='chart-height'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='chart-height'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options2}
                        />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='chart-height'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options2}
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='chart-height'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options3}
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='chart-height'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;