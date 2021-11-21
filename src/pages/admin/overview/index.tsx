import { Card, Row, Col, Typography, Statistic, Divider } from 'antd'
import { ArrowUpOutlined, } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { getAllArticles } from '../../../api/blog';
import { getAllCategories } from '../../../api/category';
import { getAllFriendLinks } from '../../../api/friend-link';
import { getAllUsers } from '../../../api/user';
import { ArticleTrend } from '../../../components/charts/ArticleTrend';
import { CategoryPie } from '../../../components/charts/CategoryPie';

export function AdminOverview() {

    const [articles, setArticles] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [links, setLinks] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        getAllArticles().then(res => {
            setArticles(res.data)
        });

        getAllCategories().then(res => {
            setCategories(res.data);
        })

        getAllFriendLinks().then(res => {
            setLinks(res.data)
        })

        getAllUsers().then(res => {
            setUsers(res.data)
        })
    }, [])

    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="文章数量"
                            value={articles.length}
                            valueStyle={{ color: '#108ee9' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="篇"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="分类数量"
                            value={categories.length}
                            valueStyle={{ color: '#87d068' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="类"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="友链数量"
                            value={links.length}
                            valueStyle={{ color: '#2db7f5' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="个"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card>
                        <Statistic
                            title="用户数量"
                            value={users.length}
                            valueStyle={{ color: '#f50' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="位"
                        />
                    </Card>
                </Col>
            </Row>
            <Divider />
            <Row gutter={[24, 24]}>
                <Col span={12}>
                    <Card title="文章趋势">
                        <ArticleTrend />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="分类情况">
                        <CategoryPie articles={articles} categories={categories} />
                    </Card>
                </Col>
                <Col span={12}></Col>
                <Col span={12}></Col>
            </Row>
        </>
    )
}