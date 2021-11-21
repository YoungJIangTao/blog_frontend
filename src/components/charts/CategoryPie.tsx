import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { getAllArticles, getBlogByCategory } from '../../api/blog';
import { getAllCategories } from '../../api/category';

const CategoryPie: React.FC<any> = () => {

    const [result, setResult] = useState<any>([]);

    useEffect(() => {
        const asyncF = async () => {
            const { data: articles } = await getAllArticles();
            const { data: categories } = await getAllCategories();

            let obj: any = [];
            let map = new Map();
            categories.forEach((d: any) => {
                map.set(d.name, 0)
            });
            articles.forEach((d: any) => {
                if (d.category && d.category.name) {
                    map.set(d.category.name, map.get(d.category.name) + 1);
                }
            })

            map.forEach((value, key) => {
                obj.push({
                    name: key,
                    value
                })
            })

            setResult(obj);
        }

        asyncF();


    }, [])


    var config = {
        height: 360,
        appendPadding: 10,
        data: result,
        angleField: 'value',
        colorField: 'name',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],

    };
    return <Pie {...config} />;
};

export { CategoryPie };