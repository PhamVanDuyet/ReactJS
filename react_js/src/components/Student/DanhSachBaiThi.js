import React from "react";
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Tên Người Tạo',
    dataIndex: 'Ten',
    key: 'Ten',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Tên Lớp',
    dataIndex: 'TenLop',
    key: 'TenLop',
  },
  {
    title: 'Tên Môn',
    dataIndex: 'TenMon',
    key: 'TenMon',
  },
  {
    title: 'Số Câu Hỏi',
    dataIndex: 'SoLuong',
    key: 'SoLuong',
  },
  {
    title: 'Điểm',
    dataIndex: 'Diem',
    key: 'Diem',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Hành Động',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
    // tags: ['nice', 'developer'],
  },
  {
    key: '2',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
  },
  {
    key: '3',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
  },
  {
    key: '4',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
  },
  {
    key: '5',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
  },
  {
    key: '6',
    Ten: 'Giáo Viên 1',
    TenLop: 'Lớp 1',
    TenMon: 'Toán',
    SoLuong: '30',
    Diem: '7'
  },
];
export default function DanhSachBaiThi() {
  return (
    <Table columns={columns} dataSource={data} />
  );
};