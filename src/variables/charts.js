const KAP = "#f3ce8e";
const DLM = "#a1b5f5";
const PLTW = "#61dceb";
const ISMART = "#f58477";

const dashboardNASDAQChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    datasets: [
      {
        label: 'KAP',
        data: [7010, 7219, 5515, 2520, 3650, 5440, 6040, 5250, 6895],
        fill: false,
        borderColor: KAP,
        backgroundColor: "transparent",
        pointBorderColor: KAP,
        pointRadius: 2,
        pointHoverRadius: 3,
        pointBorderWidth: 4,
      },
      {
        label: 'DLM',
        data: [6010, 5219, 3515, 2220, 2650, 4440, 5040, 4150, 5895],
        fill: false,
        borderColor: DLM,
        backgroundColor: "transparent",
        pointBorderColor: DLM,
        pointRadius: 2,
        pointHoverRadius: 3,
        pointBorderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};
const dashboardNASDAQChart2 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    datasets: [
      {
        label: 'I-SMART',
        data: [300, 280, 150, 50, 150, 190,220,280,145],
        fill: false,
        borderColor: ISMART,
        backgroundColor: "transparent",
        pointBorderColor: ISMART,
        pointRadius: 2,
        pointHoverRadius: 3,
        pointBorderWidth: 4,
      },
      {
        label: 'PLTW',
        data: [280, 260, 130, 50, 140, 175,200,265,120],
        fill: false,
        borderColor: PLTW,
        backgroundColor: "transparent",
        pointBorderColor: PLTW,
        pointRadius: 2,
        pointHoverRadius: 3,
        pointBorderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};
const DonutData = {
  labels: ['KAP', 'DLM', 'PLT W', 'I-SMART'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: [
        KAP,
        DLM,
        PLTW,
        ISMART
      ],
      hoverBackgroundColor: [
        '#803300',
        '#997a00',
        '#739900',
        '#004d99'
      ],
      data: [15221,14564,9685,5673]
    }
  ]
}


const horizontalData2020 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep'],
  datasets: [
    {
      label: 'KAP',
      backgroundColor: KAP,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#803300',
      hoverBorderColor: '#000000',
      data: [300, 280, 150, 50, 150, 190,220,280,145]
    },
    {
      label: 'DLM',
      backgroundColor: DLM,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#004d99',
      hoverBorderColor: '#000000',
      data: [280, 260, 130, 50, 140, 175,200,265,120]
    },
    {
      label: 'PLTW',
      backgroundColor: PLTW,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#cc5200',
      hoverBorderColor: '#000000',
      data: [140, 125, 75, 30, 70, 88,98,100,60]
    },
    {
      label: 'I-SMART',
      backgroundColor: ISMART,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#336600',
      hoverBorderColor: '#000000',
      data: [100, 95, 65, 25, 50, 68,75,80,45]
    }
  ]
}

const horizontalData2019 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'KAP',
      backgroundColor: KAP,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#803300',
      hoverBorderColor: '#000000',
      data: [300, 280, 250, 290, 270, 220,260,270,285,282,274,283]
    },
    {
      label: 'DLM',
      backgroundColor: DLM,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#004d99',
      hoverBorderColor: '#000000',
      data: [280, 260, 260, 250, 280, 200,250,240,225,242,254,273]
    },
    {
      label: 'PLTW',
      backgroundColor: PLTW,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#cc5200',
      hoverBorderColor: '#000000',
      data: [140, 125, 75, 30, 70, 88,98,100,60,80,82,90]
    },
    {
      label: 'I-SMART',
      backgroundColor: ISMART,
      borderColor: '#000000',
      borderWidth: 1,
      hoverBackgroundColor: '#336600',
      hoverBorderColor: '#000000',
      data: [100, 95, 65, 25, 50, 68,75,80,45,80,82,90],
      
    }
  ]
}


const LineData = {
  labels: ['Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul','Aug','Sep'],
  datasets: [
    {
      label: 'Users',
      fill: true,
      lineTension: 0.5,
      backgroundColor: '#bdf0cc',
      borderColor: '#000000',
      borderWidth: 2,
      data: [165, 159, 90, 51, 66, 77, 85,95,105],
    }
  ],
}

module.exports = {
  dashboardNASDAQChart,
  dashboardNASDAQChart2,
  DonutData,
  LineData,
  horizontalData2020,
  horizontalData2019 ,
};
