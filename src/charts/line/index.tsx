import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
} from 'react-vis';

const Lines = () => {
  return (
    <Grid container>
      <Grid item>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
        </VictoryChart>
      </Grid>
      <Grid item>
        <XYPlot xType="ordinal" width={300} height={300}>
          <XAxis />

          <YAxis />
          <HorizontalGridLines />
          <LineSeries
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
            color="#08f"
          />
        </XYPlot>
      </Grid>
    </Grid>
  );
};

export default Lines;
