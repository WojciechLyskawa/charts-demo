import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { VictoryPie } from 'victory';
import { RadialChart } from 'react-vis';
import X from './visx';

const Pie = () => {
  return (
    <Grid container>
      <Grid item>
        <a
          href="https://formidable.com/open-source/victory/gallery/"
          target="_blank"
          rel="noreferrer"
        >
          victory
        </a>
        <VictoryPie
          colorScale="cool"
          data={[
            { x: 'a', y: 100 },
            { x: 'b', y: 402 },
            { x: 'c', y: 525 },
          ]}
          innerRadius={100}
        />
      </Grid>
      <Grid item>
        <a
          href="https://uber.github.io/react-vis/examples/showcases/plots"
          target="_blank"
          rel="noreferrer"
        >
          react-vis
        </a>
        <RadialChart
          data={[{ angle: 1 }, { angle: 5 }, { angle: 2 }]}
          width={300}
          height={300}
          innerRadius={100}
          radius={130}
        />
      </Grid>
      <Grid item>
        <a
          href="https://airbnb.io/visx/gallery"
          target="_blank"
          rel="noreferrer"
        >
          visx
        </a>
        <X width={300} height={300} />
      </Grid>
    </Grid>
  );
};

export default Pie;
