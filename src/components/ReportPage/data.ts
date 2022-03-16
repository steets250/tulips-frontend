import { ChartData } from "chart.js";

enum Colors {
  BRIGHT_GREEN = '#39C86A',
  PINK = '#E289F2',
  ORANGE = '#FF8A65', 
  LIGHT_BLUE = '#2DB6F5',
  DARK_BLUE = '#2E86DE',
  DARK_GREEN = '#10AC84',
  RED = '#EE5253',
  PURPLE = '#341F97',
  YELLOW = '#FECA57'
}

export const genderBreakdownData: ChartData<"pie"> = {
    labels: ['Non-Binary', 'Female', 'Male'],
    datasets: [
      {
        label: '% of Participants',
        data: [1.7, 45, 53.3],
        backgroundColor: [
          Colors.LIGHT_BLUE,
          Colors.ORANGE,
          Colors.BRIGHT_GREEN,
        ],
        borderWidth: 1,
      },
    ],
  };

export const racesBreakdownData: ChartData<"bar"> = {
    labels: ['Alaska Native / Native American', 'Asian', 'Black / African American', 'Native Hawaiian / Pacific Islander', 'White'],
    datasets: [
      {
        label: '# of Participants',
        data: [0, 48, 1, 2, 9],
        backgroundColor: [
          Colors.DARK_GREEN,
          Colors.BRIGHT_GREEN,
          Colors.PINK,
          Colors.LIGHT_BLUE,
          Colors.ORANGE,
        ],
        borderWidth: 1,
      },
    ],
  };

export const hispanicOrLatinoBreakdownData: ChartData<"pie"> = {
  labels: ['Yes', 'No', 'Prefer not to Disclose'],
  datasets: [
    {
      label: '% of Participants',
      data: [6.7, 91.7, 1.7],
      backgroundColor: [
        Colors.LIGHT_BLUE,
        Colors.RED,
        Colors.ORANGE,
      ],
      borderWidth: 1,
    },
  ],
};

export const departmentBreakdownData: ChartData<"doughnut"> = {
  labels: ['CSE', 'MATH', 'MAE', 'ECE', 'COGS', 'DSC'],
  datasets: [
    {
      label: '% of Participants',
      data: [61.7, 5, 8.3, 15, 8.3, 1.7],
      backgroundColor: [
        Colors.DARK_GREEN,
        Colors.PURPLE,
        Colors.PINK,
        Colors.RED,
        Colors.DARK_BLUE,
        Colors.ORANGE
      ],
      borderWidth: 2,
    },
  ],
};


// Following 'general statistics' data extends off of this ratingData
const setRatingData = (dataValues: number[]): ChartData<"doughnut"> => {
  return {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        backgroundColor: [
          Colors.PURPLE,
          Colors.YELLOW,
          Colors.BRIGHT_GREEN,
          Colors.DARK_BLUE,
          Colors.RED,
          Colors.PINK
        ],
        borderWidth: 2,
        data: dataValues,
        
      }
    ]
  }
};

// Statement: People often talk over or shrug off my ideas in group settings.
export const groupSettingsRating = setRatingData([10, 26.7, 36.7, 11.7, 11.7, 3.3])

// Statement: UCSD students are fully supportive of my identity. 
export const ucsdStudentsSupportRating = setRatingData([0, 3.3, 13.3, 36.7, 36.7, 10])

// Statement: If I go to office hours or tutoring by the university, I’d feel judged because of my identity. 
export const officeHoursJudgementRating = setRatingData([36.7, 28.3, 18.3, 11.7, 3.3, 1.7])

// Statement: When I attend class, I feel judged by other students because of who I am. 
export const classJudgementRating = setRatingData([20, 31.7, 25, 15, 5, 3.3])

// Statement: On UCSD campus, my thoughts and opinions don’t matter because of my identity.
export const thoughtsMatterRating = setRatingData([25, 36.7, 21.7, 15, 1.7, 0])


export const majorSocialBiasBreakdown: ChartData<"bar"> = {
  labels: ['COGS', 'CSE', 'DSC', 'ECE', 'MAE', 'MATH'],
  datasets: [
    {
      label: '% of Participants',
      data: [80, 41, 100, 88, 100, 33],
      backgroundColor: [
        Colors.DARK_GREEN,
        Colors.PURPLE,
        Colors.PINK,
        Colors.RED,
        Colors.DARK_BLUE,
        Colors.ORANGE
      ],
      borderWidth: 2,
    },
  ],
};