import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const chart1 = {
    labels: ['Branch1', 'Branch2', 'Branch3',
        'Branch4', 'Branch5'],
    datasets: [
        {
            label: 'Transaction',
            backgroundColor: '#0077ff',
            
            data: [65, 59, 80, 81, 56]
        }
    ]
}
const chart2 = {
    labels: ['Branch1', 'Branch2', 'Branch3',
        'Branch4', 'Branch5'],
    datasets: [
        {
            label: 'Profit / Loss',
            backgroundColor: '#0077ff',
            
            data: [75, 59, 80, 81, 65]
        }
    ]
}
class Chart extends Component {
    render() {
        return (
            <React.Fragment>
                    <Bar
                        data={chart1}
                        options={{
                            title: {
                                display: true,
                                text: 'Branchwise Transaction in Currency',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
               
                    <Bar
                        data={chart2}
                        options={{
                            title: {
                                display: true,
                                text: 'Branchwise Profit and Loss',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
            </React.Fragment>
        );
    }
}

export default Chart;