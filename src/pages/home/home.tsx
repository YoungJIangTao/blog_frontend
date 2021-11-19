import React, { useEffect, useState } from "react";
import { getAllFriendLinks } from "../../api/friend-link";
import { Carousel, Row, Col, Card, Divider, Typography, List, Tooltip, Space } from "antd";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";

import { getAllArticles } from "../../api/blog";
import { ArticleTrend } from "../../components/charts/ArticleTrend";
export function Home() {
  const urls = [
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ",

  ];

  const [links, setLinks] = useState<any>([]);
  const [articles, setArticles] = useState<any>([]);
  useEffect(() => {
    getAllFriendLinks().then(res => {
      setLinks(res.data)
    });

    getAllArticles().then(res => {
      console.log(res)
      setArticles(res.data.reverse().slice(0, 4))
    })
  }, [])

  return (
    <div
      style={{
        background: "#fff",
        width: "1140px",
        margin: "0 auto 24px auto",
        padding: "24px",
      }}
    >
      <Carousel autoplay>
        {urls.map((url) => (
          <div key={url}>
            <img style={{ width: "100%" }} src={url} alt="error" />
          </div>
        ))}
      </Carousel>

      <Divider />

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card title="最新文章">
            <List
              itemLayout="vertical"
              dataSource={articles}
              rowKey={(d: any) => d.id}
              size="large"
              renderItem={(item: any) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Tooltip
                      title={"上次更新于:" + new Date(item.updateAt).toLocaleString()}
                      placement="bottom"
                    >
                      <Space>
                        {React.createElement(CalendarOutlined)}
                        {new Date(item.createAt).toLocaleString()}
                      </Space>
                    </Tooltip>,
                    <Typography.Link href={`#/blog/detail/${item.id}`}>
                      <Space>
                        {React.createElement(ArrowRightOutlined)}
                        {"查看"}
                      </Space>
                    </Typography.Link>,
                  ]}
                // extra={
                //   <img
                //     width={272}
                //     alt="logo"
                //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                //   />
                // }
                >
                  <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
                    key={item.id}
                    title={<a href={`#/blog/detail/${item.id}`}>{item.title}</a>}
                    description={item.category ? item.category.name : ""}
                  />
                  <Typography.Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
                    {item.introduce}
                  </Typography.Paragraph>
                </List.Item>
              )}
            ></List>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="文章数量趋势">
            <ArticleTrend />
          </Card>
          <Divider />
          <Card title="友情链接">
            <Row>
              {links.map((d: any) => (
                <Col span={8} key={d.id}><Typography.Link href={d.url}>{d.name}</Typography.Link> </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>

      <Divider />
    </div >
  );
}
