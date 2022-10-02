const labels_line_chart = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

const labels_bar_chart = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
  ];

const data_line_chart = {
    labels: labels_line_chart,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      data: [30, 29, 28, 25, 22, 23],
    },{
      label: 'Umidade',
      backgroundColor: '#0000FF',
      borderColor: '#0000FF',
      data: [80, 82, 80, 85, 80, 83],
    }]
  };

const data_bar_chart = {
    labels: labels_bar_chart,
    datasets: [{
      label: 'Temperatura média',
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      data: [22, 24, 27, 23, 20, 18],
    },{
      label: 'Umidade média',
      backgroundColor: '#0000FF',
      borderColor: '#0000FF',
      data: [90, 89, 93, 87, 88, 82],
    }]
  };

const config_line_chart = {
    type: 'line',
    data: data_line_chart,
    options: {}
  };

const config_bar_chart = {
    type: 'bar',
    data: data_bar_chart,
    options: {}
  };

const line_chart = new Chart(
    document.getElementById('line_chart'),
    config_line_chart
  );

  const bar_chart = new Chart(
    document.getElementById('bar_chart'),
    config_bar_chart
  );