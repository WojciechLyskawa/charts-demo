import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { makeStyles } from '@material-ui/core/styles';
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
} from 'react-vis';

const useStyles = makeStyles({
  a: {
    color: 'red',
  },
});

const Bar = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
          <VictoryBar
            barWidth={({ index }) => Number(index) * 2 + 8}
            style={{
              data: { fill: '#c43a31' },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
        </VictoryChart>
      </Grid>
      <Grid item>
        <XYPlot xType="ordinal" width={300} height={300}>
          <XAxis />

          <YAxis />
          <HorizontalGridLines />
          <VerticalBarSeries
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
            color="#08f"
            barWidth={0.7}
          />
        </XYPlot>
      </Grid>
    </Grid>
  );
};

export default Bar;
