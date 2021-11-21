import React, { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import { getAllArticles } from '../../api/blog';

const ArticleTrend: React.FC = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        getAllArticles().then(res => {
            const map = new Map();
            res.data.forEach((d: any) => {
                const time = new Date(d.createAt).toLocaleDateString();
                if (map.has(time)) {
                    map.set(time, map.get(time) + 1)
                } else {
                    map.set(time, 1)
                }
            });
            let tempData: any = [];
            map.forEach((value, key) => {
                tempData.push({
                    time: key,
                    value: value
                })
            })
            setData(tempData.reverse());
        })
    },[])
    const config = {
        data,
        height: 360,
        xField: 'time',
        yField: 'value',

    };
    return <Line {...config} />;
};
export { ArticleTrend };