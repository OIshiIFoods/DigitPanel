import * as ECharts from 'echarts/core';
import chinaMapJson from '@/assets/ts/china'
import type { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes.js';

import {
    BarChart,
    LineChart,
    PieChart,
    LinesChart,
    EffectScatterChart
} from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    GeoComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
ECharts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent,
    PieChart,
    GeoComponent,
    LinesChart,
    EffectScatterChart
]);

// 注册地图
ECharts.registerMap('chinaMap', chinaMapJson as GeoJSONSourceInput)

export default ECharts